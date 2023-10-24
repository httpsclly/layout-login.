function entrar() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  var mensagemErro = document.getElementById("mensagemErro");

  // Verificar credenciais (por exemplo, usuário é "admin" e senha é "123")
  if (usuario === "admin" && senha === "123") {
      // Redirecionar para outra página após o login bem-sucedido
      window.location.href = "pagina_inicial.html";
  } else {
      // Exibir mensagem de erro na página
      mensagemErro.textContent = "Usuário ou senha incorretos. Por favor, tente novamente.";
  }
}

//acessibilidade
function toggleAccessibility() {
  document.body.classList.toggle('high-contrast'); // Adicione ou remova a classe high-contrast do body
}