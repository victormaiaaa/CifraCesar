var btnCrypt = document.querySelector("#btn-crypt");
var btnDecrypt = document.querySelector("#btn-decrypt");
var radiobtn = document.querySelector(".radio-button");
var codificar = document.querySelector("#codificar");
var decodificar = document.querySelector("#decodificar");

function crypt() {
  let msg = document.querySelector("#mensagem").value;
  let chave = parseInt(document.querySelector("#rangenumber").value);
  let saida = "";
  for (let i = 0; i < msg.length; i++) {
    if (msg[i] === msg[i].toUpperCase()) {
      saida += String.fromCharCode(
        ((msg.charCodeAt(i) + chave - 65) % 26) + 65
      );
    } else {
      saida += String.fromCharCode(
        ((msg.charCodeAt(i) + chave - 97) % 26) + 97
      );
    }
  }
  return saida;
}

function decrypt() {
  let msg = document.querySelector("#mensagem").value;
  let chave = parseInt(document.querySelector("#rangenumber").value);
  let saida = "";
  for (let i = 0; i < msg.length; i++) {
    if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
      saida += String.fromCharCode(
        ((msg.charCodeAt(i) - 97 - chave + 26) % 26) + 97
      );
    } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
      saida += String.fromCharCode(
        ((msg.charCodeAt(i) - 65 - chave + 26) % 26) + 65
      );
    } else {
      saida += String.fromCharCode(msg.charCodeAt(i));
    }
  }
  return saida;
}

btnCrypt.addEventListener("click", function (event) {
  event.preventDefault();
  resultado.innerText = crypt();
});

btnDecrypt.addEventListener("click", function (event) {
  event.preventDefault();
  resultado.innerText = decrypt();
});
