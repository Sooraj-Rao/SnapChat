export const GenerateUsername = (email: string) => {
  let name = email?.split("@")[0];
  let userName = "";
  for (let i = 0; i < name?.length; i++) {
    if (isNaN(parseInt(name[i]))) {
      userName += name[i];
    }
  }
  userName += new Date().getTime();
  
  if (userName) {
    return userName;
  } else {
    GenerateUsername(email);
  }
};
