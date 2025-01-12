import * as Yup from "yup";

export const serveStepper = Yup.object().shape({
    description: Yup.string()
        .required("Tanıtım yazısı alanı zorunludur."),
});
