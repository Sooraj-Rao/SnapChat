import axios from "axios";

export const useSignUp = async (input: object) => {
  const { email, password } = input;
  if (!email || !password) {
    return alert("All fields mandatory");
  }
  if (email?.length < 6 || password?.length < 6) {
    return alert("Email or password too short");
  }
  let isValidEmail =
    !email?.endsWith("@gmail.com") && !email?.endsWith("@outlook.com");
  if (isValidEmail) {
    return alert("Invalid Email");
  }
  try {
    const res = await axios.post("/api/auth/signup/", input);
    const { error, message } = res.data;
    if (error) return alert(message);
    alert(message);
  } catch (error) {
    console.log(error);
    alert("Error signUp");
  }
};
