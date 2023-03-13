const form = document.getElementById('form-contatos');
const nomes = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone =  document.getElementById('numero-contato');


    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    inputNomeContato.value = ' ';
    inputNumeroTelefone.value = ' ';


}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}
