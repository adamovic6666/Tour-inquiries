import { createToast } from "../_components/UI/Toast";
import { ToastType } from "../_types";

export const withErrorHandling = (asyncFn: (id: string) => Promise<void>) => {
  return async (id: string) => {
    try {
      await asyncFn(id);
    } catch (e) {
      createToast({
        message: (e as Error)?.message ?? "An error occurred",
        type: ToastType.ERROR,
      });
    }
  };
};
