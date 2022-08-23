function start() {
  //Quilos
  var buttonCalculateQuilos = document.querySelector(
    '#button-calculate-quilos'
  );
  buttonCalculateQuilos.addEventListener('click', handleButtonClick);

  //Litros
  var buttonCalculateLitros = document.querySelector(
    '#button-calculate-litros'
  );
  buttonCalculateLitros.addEventListener('click', handleButtonClick);

  //Metros
  var buttonCalculateMetros = document.querySelector(
    '#button-calculate-metros'
  );
  buttonCalculateMetros.addEventListener('click', handleButtonClick);

  handleButtonClick();
}

function getSelectedPeso() {
  var selectedPeso = document.getElementById('list-peso').value;
  //console.log(selectedPeso);
}

function getSelectedLitro() {
  var selectedLitro = document.getElementById('list-capac').value;
  //console.log(selectedLitro);
}

function getSelectedMetro() {
  var selectedMetro = document.getElementById('list-dist').value;
  //console.log(selectedMetro);
}

function handleButtonClick() {
  //quilos
  var selectedPeso = document.getElementById('list-peso');
  var quantidadePeso = document.querySelector('#input-valor-quilos');
  var resultadoPeso = document.querySelector('#quilos-result');

  var tipoPeso = Number(selectedPeso.value);
  var quantPeso = Number(quantidadePeso.value);

  var calcularPeso = tipoPeso * quantPeso;

  var formattedPeso = calcularPeso.toFixed(3).replace('.', ',');

  resultadoPeso.textContent = formattedPeso;

  //console.log(calcularPeso);

  //litros
  var selectedLitro = document.getElementById('list-capac');
  var quantidadeLitro = document.querySelector('#input-valor-litros');
  var resultadoLitro = document.querySelector('#litros-result');

  var tipoLitro = Number(selectedLitro.value);
  var quantLitro = Number(quantidadeLitro.value);

  var calcularLitro = tipoLitro * quantLitro;

  var formattedLitro = calcularLitro.toFixed(2).replace('.', ',');

  resultadoLitro.textContent = formattedLitro;

  //console.log(calcularLitro);

  //Metros
  var selectedMetro = document.getElementById('list-dist');
  var quantidadeMetro = document.querySelector('#input-valor-metros');
  var resultadoMetro = document.querySelector('#metros-result');

  var tipoMetro = Number(selectedMetro.value);
  var quantMetro = Number(quantidadeMetro.value);

  var calcularMetro = tipoMetro * quantMetro;

  var formattedMetro = calcularMetro.toFixed(2).replace('.', ',');

  resultadoMetro.textContent = formattedMetro;

  //console.log(calcularMetro);
}

start();
