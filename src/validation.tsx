import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  waist: Yup.number()
    .min(100)
    .max(1000000)
    .required("Waist measurement is required."),
  height: Yup.number().min(55).max(275).required("Height is required."),
  hip: Yup.number()
    .min(100)
    .max(1000000)
    .required("Hip measurement is required."),
  neck: Yup.number()
    .min(100)
    .max(1000000)
    .required("Neck measurement is required."),
  weight: Yup.number()
    .min(1)
    .max(999)
    .required("Weight measurement is required."),
});
