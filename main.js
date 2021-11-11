function consulta(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    console.log(cep);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#complemento").html(response.complemento);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#siafi").html(response.siafi);
            $("#ibge").html(response.ibge);
            $("#gia").html(response.gia);
            $("#ddd").html(response.ddd);
        }
    })
}