import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ArSchema = yup.object().shape({
  username: yup.string().min(3, "برجاء ادخال ايميل صحيح").required("اجباري"),
  email: yup.string().email("الرقم غير صحيح").required("اجباري"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("اجباري"),
  subject: yup.string().required("اجباري"),
  message: yup.string().required("اجباري"),
});
