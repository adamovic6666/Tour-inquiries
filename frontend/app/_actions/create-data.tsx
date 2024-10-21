"use server";
import { revalidatePath } from "next/cache";
import { API, TEXT } from "../_constants";
import { ContentType, ActionState, GuideFormFields } from "../_types";
import { dataDatabaseAddition } from "../_utils/fetchers";
import { addGuideSchema } from "../_validation-schemas";

export async function createGuide(_: any, formData: FormData) {
  const { success, error } = addGuideSchema.safeParse(
    Object.fromEntries(formData)
  );
  let formState: ActionState = {
    success: false,
    toast: null,
    errors: null,
  };

  // no success and there is an error
  if (!success && !!error.errors.length) {
    // setting errors
    formState = {
      ...formState,
      errors: error.errors.map((err) => err.message),
    };
    return formState;
  }

  // success and no errors
  try {
    const toast = await dataDatabaseAddition(
      API.GUIDES,
      TEXT.GUIDE_IS_ADDED,
      ContentType.GUIDE,
      {
        data: {
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
        },
      }
    );
    revalidatePath("/guides");
    return {
      success: true,
      toast,
      errors: null,
    };
  } catch (error) {
    return {
      success: false,
      toast: null,
      errors: [(error as Error).message || TEXT.SOMETHING_WENT_WRONG],
    };
  }
}
