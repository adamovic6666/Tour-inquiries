import { RequestBody, ToastType } from "../_types";

const requestHandler = async (
  endpoint: string,
  method: string,
  message: string,
  dataType: string,
  body?: RequestBody
) => {
  const response = await fetch(`${process.env.STRAPI_BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(
      `${dataType} nije ${
        method === "DELETE" ? " obrisan" : "dodat"
      }, probajte kasnije`
    );
  }

  return {
    message: message,
    type: ToastType.SUCCESS,
  };
};

export const dataDatabaseDeletion = (
  endpoint: string,
  message: string,
  dataType: string
) => {
  return requestHandler(endpoint, "DELETE", message, dataType);
};

export const dataDatabaseAddition = (
  endpoint: string,
  message: string,
  dataType: string,
  body: RequestBody
) => {
  return requestHandler(endpoint, "POST", message, dataType, body);
};
