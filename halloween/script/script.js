function result() {
    var doces = document.getElementById('Doces').checked;
    var travessuras = document.getElementById('Travessuras').checked;
    var historias = document.getElementById('Historias').checked;
    // var selectedOption = document.querySelector('input[name="fav_play"]:checked');
    var resultDiv = document.getElementById('res');

    if (doces) {
        resultDiv.innerHTML = 'Muito Bem! Agora você vai saber quais doces levar para a festa de hoje';
        window.open('https://www.receiteria.com.br/receitas-de-doces-de-halloween/', '_blanck');
    } else if (travessuras){
        resultDiv.innerHTML = 'Muito Bem!, Agora você vai conhecer umas das travessuras feitas no halloween';
        window.open("https://paisefilhos.uol.com.br/familia/12-brincadeiras-de-halloween-pra-fazer-dentro-de-casa/", '_blank');
    } else if (historias){
        resultDiv.innerHTML = 'Muito Bem!, Agora você vai conhecer um pouca da historia sobre halloween';
        window.open("https://canaltech.com.br/entretenimento/halloween-historias-assustadoras-que-voce-encontra-na-internet-153457/", '_blank');
    }else {
        resultDiv.innerHTML = "Por favor, selecione uma opção antes de enviar.";
    }
}