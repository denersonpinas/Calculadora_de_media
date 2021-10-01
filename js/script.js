function SelectForm(param) {
    /* Entrada de dados */
    var formMedia = document.getElementById("fnota");
    var formConvert = document.getElementById("fconvert");

    if(param == "calcMedia") {
        formMedia.style.display = "block"
        formConvert.style.display = "none"
    } else {
        formMedia.style.display = "none"
        formConvert.style.display = "block"
    }
}



function calcMedia() {
    /* Entrada de Dados */
    var notaDoPrimiroBimestre = parseFloat(document.FormularioMedia.tPrimeiro.value);
    var notaDoSegundoBimestre = parseFloat(document.FormularioMedia.tSegundo.value);
    var notaDoTerceiroBimestre = parseFloat(document.FormularioMedia.tTerceiro.value);
    var notaDoQuartoBimestre = parseFloat(document.FormularioMedia.tQuarto.value);

    /* Processamento de Dados */
    var somaNotas = notaDoPrimiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre

    var mediaNotas = (somaNotas / 4).toFixed(2)

    /* Saída de Dados */    
    if (mediaNotas >= 0) {
        document.FormularioMedia.tResultado.value = "Sua nota é " + mediaNotas;
    }    
}

function Convert(param) {
    /* Entrada de Dados */
    var valor = parseFloat(document.FormularioConversao.tValor.value);

    /* Processamento de Dados */
    if (param == "dolar") {
        var result = (valor / 5.21).toFixed(2)
    } else if (param == "fahrenhreit") {
        var result = ((valor * 1.8) + 32).toFixed(2)
    } else if(param == "km") {
        var result = (valor / 0.62137).toFixed(2)
    }
    
    

    /* Saida de Dados */
    document.FormularioConversao.tResultado.value = result
}