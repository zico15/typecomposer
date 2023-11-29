const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome do projeto: ", (projectName) => {
  console.log(`Você digitou: ${projectName}`);
  // Faça o que quiser com o nome do projeto
  rl.close();
});
