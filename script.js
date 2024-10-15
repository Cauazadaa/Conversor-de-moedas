window.onload = function() {
const cotacao = ['5.41','5.72','6.6','0.015','4.05']; // array preco das moedas
function converter (){ // funcao de conversao dos valores
    // pega o valor do input
    const input = parseFloat(document.getElementById('valor').value);
// pega a moeda escolhida 
    const moedaIndex = document.getElementById('floatingSelect').value;
    // transforma a variavel na moeda dentro do array
    const cot = parseFloat(cotacao[moedaIndex]);
    //retorna o valor convertido
    return input * cot;
}
// funcao de exibição dos resultados
const showResult = () => {
    let sValor = converter();
    // exibe o resultado na tela
    document.querySelector('#result').innerText = sValor.toFixed(2);
}
// evento de clique no botao de converter
document.querySelector('#bt-conv').onclick = showResult;

}