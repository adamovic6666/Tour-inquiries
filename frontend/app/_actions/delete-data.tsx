"use server";

import { revalidatePath } from "next/cache";
import { API } from "../_utils";

export const deleteGuideAction = async (id: string) => {
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}${API.DELETE_GUIDE(id)}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete guide");
  }

  revalidatePath("/guides");
};
