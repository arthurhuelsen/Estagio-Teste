// Recebe um número do usuário
const numero = parseInt(prompt("Digite um número:"));

// Inicia a sequência de Fibonacci com os valores 0 e 1
let fibonacci = [0, 1];

// Calcula a sequência de Fibonacci até que o último valor seja maior ou igual ao número informado pelo usuário
while (fibonacci[fibonacci.length - 1] < numero) {
  const proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(proximo);
}

// Verifica se o número informado pelo usuário pertence à sequência de Fibonacci
if (fibonacci.includes(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}