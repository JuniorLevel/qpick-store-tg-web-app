type TValidatePhone = (phone: string) => boolean;

export const validatePhone: TValidatePhone = phone => {
  const pattern = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
  return pattern.test(phone);
};
