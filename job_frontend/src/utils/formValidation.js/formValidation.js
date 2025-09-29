
export const validateName = (name) => {
  if (name.length < 3) {
    return "Name must be at least 3 characters";
  }
  if (name.length > 15) {
    return "Name must be no more than 15 characters";
  }
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(name)) {
    return "Name must contain only letters";
  }
  return true; // ✅ valid
};
// for react form
export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email)||"Email  (e.g., name@gmail.com)";
};
// for manual uses in form to validate gmail
export const isValidGmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email);
};
export const validatePassword = (password) => {
  // Must start with capital, then lowercase, one special char, then numbers
  const passwordRegex = /^[A-Z][a-z]{2,9}[@#$%^&*!._-][0-9]{1,5}$/;
  return passwordRegex.test(password)||
    "Password must be like:Example@2000";
};
export const formatDate=(input)=>{
  const date=new Date(input);
  const day=String(date.getDate()).padStart(2,"0");
  const month=String(date.getMonth()+1).padStart(2,"0");
  const year=String(date.getFullYear());
  return `${day}-${month}-${year}`;
}
