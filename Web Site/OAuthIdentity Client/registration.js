var encrypttext="";
var decryptedtext ="";
const encryptionKey = "secret";

function encrypt(str, key) {
  let encryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    encryptedStr += String.fromCharCode(charCode);
  }
  return encryptedStr;
}

function decrypt(encryptedStr, key) {
  let decryptedStr = '';
  for (let i = 0; i < encryptedStr.length; i++) {
    const charCode = encryptedStr.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    decryptedStr += String.fromCharCode(charCode);
  }
  return decryptedStr;
}



function handleRequestError(request) {
    if (request.readyState == 4 && request.status != 200) {
        const errorMessage = request.responseText;
        console.log(errorMessage)
        document.getElementById('statuslabel').innerHTML = errorMessage;
        document.getElementById('statuslabel').style.display = 'block';

        setTimeout(() => {
            document.getElementById('statuslabel').style.display = 'none';
        }, 2000);
    }
}



async function signIn(event) {
    event.preventDefault();
  
    const obj = {
      username: document.getElementById('username1').value,
      password: document.getElementById('password1').value
    };
  
    const p = JSON.stringify(obj);
    console.log(p);
    document.getElementById('pValue').textContent = p;
  
    try {
      const request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById('statuslabel').style.display = 'none';
  
          console.log(request.responseText);
  
          encrypttext= encrypt(request.responseText, encryptionKey);

          localStorage.setItem("key",encrypttext);
  
          setTimeout(() => {
            var itemValue = localStorage.getItem('key');
            if (itemValue === null) {
              window.location.href = "https://localhost:5001/";
            } else {
       
              window.history.replaceState({}, '', "/users.html");
              window.location.href = "/users.html";
            }
          }, 1000);
        } else {
          handleRequestError(request);
        }
      };
  
      request.open('POST', 'https://localhost:5001/api/Account/login', true);
      request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
  
      await new Promise((resolve, reject) => {
        request.onload = resolve;
        request.onerror = reject;
        request.send(p);
      });
    } catch (error) {
      console.log(error);
    }
  }
  

async function signUp(event) {
    event.preventDefault();

    const obj = {
        username: document.getElementById('username2').value,
        password: document.getElementById('password2').value,
        email: document.getElementById('email2').value
    };

    const p = JSON.stringify(obj);
    console.log(p);
    document.getElementById('pValue').textContent = p;

    try {
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('statuslabel').style.display = 'none';
                console.log(request.responseText);

                encrypttext= encrypt(request.responseText, encryptionKey);
                localStorage.setItem("key", encrypttext);
        
                setTimeout(() => {
                  var itemValue = localStorage.getItem('key');
                  if (itemValue === null) {
                    window.location.href = "index.html";
                  } else {
             
                    window.history.replaceState({}, '', "/index.html");
                    window.location.href = "index.html";
                  }
                }, 1000);;
            } else {
                handleRequestError(request);
            }
        };

        request.open('POST', 'https://localhost:5001/api/Account/register', true);
        request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

        await new Promise((resolve, reject) => {
            request.onload = resolve;
            request.onerror = reject;
            request.send(p);
        });
    } catch (error) {
        console.log(error);
    }
}





window.onload = function () {



  var interval = setInterval(() => {
   var itemValue = localStorage.getItem('key');
   if (itemValue !== null) {
    window.history.replaceState({}, '', "/users");
    window.location.href = "user.html";
   } 
 }, 100);
 

 clearInterval(interval);
 


};