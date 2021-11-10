function consulta(){
    $.ajax({
        url: "https://viacep.com.br/ws/14800390/json/",
        type: "GET",
        success: function(response){
            console.log(response);
        }
    })
}