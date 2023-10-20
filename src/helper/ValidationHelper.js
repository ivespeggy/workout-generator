export default function validation(values) {
  const error = {};
  const namePattern = /^[A-Za-z0-9]+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  //   const confirmPasswordPattern = values.password;

  if (!namePattern.test(values.userName)) {
    error.userName = "Username should not contain any special characters";
  }
  if (!passwordPattern.test(values.password)) {
    error.password =
      "Your password must be 8-20 characters long, contain letters, numbers and special characters, and must not contain spaces or emoji.";
  }
  //   if(!confirmPasswordPattern.test(values.confirmpassword))
}
