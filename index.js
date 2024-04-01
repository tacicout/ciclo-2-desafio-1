
const prompt = require('prompt-sync')();

let clientes = []; 
let mesa = 0
let quantidadeDePessoas = 0
let pedido = 0 
let valorAPagar = 0
let gorjeta = 0


function fazerPedido(){
    mesa = parseInt(prompt("Informe o número da mesa")); 
    quantidadeDePessoas = parseInt(prompt("Informe a quantidade de pessoas na mesa"));  
    pedido = parseFloat(prompt("Informe o valor total do pedido"));

    const novoPedido = {
      mesa: mesa,
      quantidadeDePessoas: quantidadeDePessoas,
      pedido: pedido,
  }; 

  clientes.push(novoPedido);
  console.log("Novo pedido registrado!");
  
} 
function metodosDePagamento() {
    for (let i = 0; i < quantidadeDePessoas; i++) {
    console.log("Escolha o método de pagamento:");
    console.log("1. Pix"); 
    console.log("2. Dinheiro");
    console.log("3. Cartão");
    let opcao = prompt("Digite o número correspondente ao método de pagamento desejado:");
    

  console.log(opcao)
   
    switch (opcao) {
    case "1":
    console.log("Você escolheu Pix.");
    valorAPagar = (pedido/quantidadeDePessoas) * 0.9
    console.log("Valor a ser pago com desconto de Pix:", valorAPagar);
    break;

    case "2":
    console.log("Você escolheu Dinheiro.");
    valorAPagar = (pedido/quantidadeDePessoas) * 0.9
    console.log ("Valor a ser pago com desconto em dinheiro:", valorAPagar);
    break;

    case "3":
    console.log("Você escolheu Cartão:");
    valorAPagar = (pedido/quantidadeDePessoas) 
    console.log("Valor a ser pago com cartão:", valorAPagar);
    break;

    default:
            console.log("Opção inválida.");
  }

  console.log("Pagamento Realizado com Sucesso!");
  
}
}



// Chamada da função para fazer o pedido
fazerPedido();
metodosDePagamento();  


