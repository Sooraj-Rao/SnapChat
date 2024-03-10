export const useValidate = (reqBody) => {
  const { email, password } = reqBody;
  if (!email || !password) {
    return "All fields mandatory";
  }
  if (email?.length < 6 || password?.length < 6) {
    return "Email or password too short";
  }
  let isValidEmail =
    !email?.endsWith("@gmail.com") && !email?.endsWith("@outlook.com");
  if (isValidEmail) {
    return "Invalid Email";
  }
};
