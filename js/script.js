document.querySelector('#cep').addEventListener('blur', async (event) => {
    let cep = document.querySelector("#cep").value;

    let call = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    //convertendo os resultados obtidos para JSON
    let result = await call.json();



    if (result.erro != true) {
        showInfo(result);
        

    } else if (result.erro === true) {
        alert("CEP inválido!");
        clearInfo();
    }

  

});

document.querySelector("#btn").addEventListener('click', async(event)=>{
    clearInfo();
});

function showInfo(json) {
    // coloca os dados no formulário
    document.querySelector('#uf').value = json.uf;
    document.querySelector('#bairro').value = json.bairro;
    document.querySelector('#cidade').value = json.localidade;
    document.querySelector('#logradouro').value = json.logradouro;

}


function clearInfo() {
    // Limpa os valores
    
    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}



