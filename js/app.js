document.querySelector('.formulario').addEventListener('submit', async(event)=>{

    //impede a ação padrão do formulario de recarregar a página
    event.preventDefault();

    let input = document.querySelector('#btn').value;

    if(input !== ''){
        clearInfo()
        showWarning('Carregando...')
        
        let results = await fetch(`viacep.com.br/ws/01001000/json/`)

        let json = await results.json();

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
            }else{
                clearInfo()
                showWarning('cep não encontrada')
            }
    //console.log(json)
        }else{
            clearInfo;
        }
});

function showInfo(json){
    //retirando a mensagem da tela antes de exibir os esutos
    showWarning('');

    document.querySelector('rua').value = `${json.name}`;
    document.querySelector('bairro').value = `${json.name}`;
    document.querySelector('cidade').value = `${json.name}`;
    document.querySelector('uf').value = `${json.name}`;

    //alterando o display do elemento .aviso p/ que ele seja exibido na tela
    document.querySelector('.resultado').style.display = 'block';
}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}










/*$("#btn").on("click", function(){
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json";

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success:function(dados){
            console.log(dados);
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
        }
    })

   
})*/