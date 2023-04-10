import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nationaId =
  /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;

export const ArSchema = yup.object().shape({
  email: yup.string().email("برجاء ادخال ايميل صحيح").required("اجباري"),
  national_id: yup
    .string()
    .matches(nationaId, "رقم البطاقة غير صحيح")
    .required("اجباري"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "الرقم غير صحيح")
    .required("اجباري"),
  username: yup
    .string()
    .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
    .required("اجباري"),
  lastname: yup
    .string()
    .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
    .required("اجباري"),
  governorate: yup.string().required("اجباري"),
  products: yup.string().required("اجباري"),
  area: yup.string().required("اجباري"),
  // car_type: yup.string().required("اجباري"),
  // car_price: yup.number().positive().required("اجباري"),
});
