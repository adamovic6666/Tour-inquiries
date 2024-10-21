import { z } from "zod";

export const addGuideSchema = z.object({
  firstName: z.string().min(1, {
    message: "Ime je obavezno",
  }),
  lastName: z.string().min(1, {
    message: "Prezime je obavezno",
  }),
});
