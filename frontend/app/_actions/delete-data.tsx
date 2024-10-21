"use server";

import { revalidatePath } from "next/cache";
import { API, TEXT } from "../_constants";
import { dataDatabaseDeletion } from "../_utils/fetchers";
import { ContentType, ToastProps } from "../_types";

export const deleteGuideAction = async (id: string): Promise<ToastProps> => {
  const data = dataDatabaseDeletion(
    API.DELETE_GUIDE(id),
    TEXT.GUIDE_DELETED,
    ContentType.GUIDE
  );
  revalidatePath("/guides");
  return data;
};
