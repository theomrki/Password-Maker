
const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //or toUpperCase() method
const dataNumbers = "0123456789";
const dataSymbols = "$£*µ,?;.:/!§&#|@+=-()éàèù%";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');
// const confirmedCopy = document.getElementById('password-output');


function generatePassword(){
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...dataLowercase)
    if (uppercase.checked) data.push(...dataUppercase)
    if (numbers.checked) data.push(...dataNumbers)
    if (symbols.checked) data.push(...dataSymbols)

    if (data.length === 0){
        alert ('Choose parameters')
        location.reload();
    }

    for (i=0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }

    passwordOutput.value = password;
}

function myCopy() {
    const copyText = document.querySelector("#password-output");
    copyText.select();
    document.execCommand("copy");
    // const copied = document.querySelector("#password-output");
    // copied.value="Copied !";

    // confirmedCopy.value = copied;

  }
  
  document.querySelector("#copy").addEventListener("click", myCopy);
  

generateButton.addEventListener('click', generatePassword);