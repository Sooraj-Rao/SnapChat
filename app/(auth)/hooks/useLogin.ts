import axios from "axios";

export const useLogin = async (input: object) => {
  try {
    const res = await axios.post("/api/auth/login/", input);
    const { error, message } = res.data;
    if (error) return alert(message);
    console.log(message);
    
    // window.location.href = "/";
  } catch (error) {
    console.log(error);
    return alert("Error SignUp");
  }
};
 