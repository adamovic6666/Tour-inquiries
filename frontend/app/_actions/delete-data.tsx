"use server";

import { revalidatePath } from "next/cache";
import { API, TEXT } from "../_constants";
import { dataDeletion } from "../_utils/fetchers";
import { ContentType } from "../_types";

export const deleteGuideAction = async (id: string) => {
  const data = dataDeletion(
    API.DELETE_GUIDE(id),
    TEXT.GUIDE_DELETED,
    ContentType.GUIDE
  );
  revalidatePath("/guides");
  return data;
};
