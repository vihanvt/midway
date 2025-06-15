const button = document.getElementById("generate-btn");
button.addEventListener("click", function (e) {
  const length = document.getElementById("password-length").value;
  const val = document.getElementById("include-numbers").checked;
  console.log(length);
  console.log(val);
  const upperindex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerindex = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  let index;
  //checked case = jahan with numbers
  if (val === true) {
    index = upperindex + lowerindex + numbers;
  }
  //default case= only alphabets
  else {
    index = upperindex + lowerindex;
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomid = Math.floor(Math.random() * index.length);
    password += index[randomid];
    console.log(password);
  }
  const passwordfield = document.getElementById("password-column");
  passwordfield.value = password;
});
