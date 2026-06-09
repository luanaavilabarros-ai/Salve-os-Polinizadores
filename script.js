let score = 0;

function addPoints(points) {
  score += points;
  document.getElementById("score").textContent = score;

  const message = document.getElementById("message");

  if (score < 30) {
    message.textContent = "Bom começo! Continue protegendo os polinizadores.";
  } else if (score < 60) {
    message.textContent = "Muito bem! Seu jardim está ficando mais sustentável.";
  } else {
    message.textContent = "Excelente! Você criou um ambiente ideal para os polinizadores.";
  }
}

function checkAnswer(correct) {
  const result = document.getElementById("quizResult");

  if (correct) {
    result.textContent = "Resposta correta! Preservar habitats e plantar flores ajuda os polinizadores.";
    result.style.color = "green";
  } else {
    result.textContent = "Resposta incorreta. Essa prática prejudica o meio ambiente.";
    result.style.color = "red";
  }
}
