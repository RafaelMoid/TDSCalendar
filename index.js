function userInput()
{
var login = document.getElementById("login");
var senha = document.getElementById("senha");
alert("Seu login é:" + login+ " e sua senha é:" + senha);
}

document.getElementById("btn").addEventListener("click", userInput())