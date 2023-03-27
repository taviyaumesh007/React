import * as Yup from "yup";

export const formsSchema = Yup.object({
  Name: Yup.string().min(2).max(25).required("plz eneter Email"),
});
