import { ToastType } from "../_types";

const requestHandler = async (
  endpoint: string,
  method: string,
  message: string,
  dataType: string
) => {
  const response = await fetch(`${process.env.STRAPI_BASE_URL}${endpoint}`, {
    method,
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

export const dataDeletion = (
  endpoint: string,
  message: string,
  dataType: string
) => {
  return requestHandler(endpoint, "DELETE", message, dataType);
};

export const dataAddition = (
  endpoint: string,
  message: string,
  dataType: string
) => {
  return requestHandler(endpoint, "POST", message, dataType);
};
