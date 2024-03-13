import axios from "axios";

export const useSignUp = async (input: object) => {
  try {
    const res = await axios.post("/api/auth/signup/", input);
    const { error, message } = res.data;
    if (error) return alert(message);
    window.location.href = "/login";
  } catch (error) {
    console.log(error);
    return alert("Error SignUp");
  }
};
 
export const Validate = (input) => {
  const { email, password } = input;
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
