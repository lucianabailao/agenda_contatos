const form = document.getElementById('form-nome');
let linhas = '';
const nome = [];
const telefone = [];


form.addEventListener('submit' , function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome-nome');
    const inputTelefone = document.getElementById('telefone-telefone');

    if(nome.includes(inputNome.value)){
        alert (`O Nome: ${inputNome.value} já foi inserido`);
    }else{
    nome.push(inputNome.value);
    telefone.push(parseInt(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
    }
    
    inputNome.value = '';
    inputTelefone.value = '';
}
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}