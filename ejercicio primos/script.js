function esPrimo(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1 && num !== 0;
  }
  
  function obtenerPrimos() {
    const num = parseInt(document.getElementById('numInput').value);
    const primosHastaN = [];
    const primerosNPrimos = [];
    let i = 2;
  
    while (i <= num) {
      if (esPrimo(i)) {
        primosHastaN.push(i);
      }
      i++;
    }
  
    i = 2;
    while (primerosNPrimos.length < num) {
      if (esPrimo(i)) {
        primerosNPrimos.push(i);
      }
      i++;
    }
  
    mostrarResultado(primosHastaN, primerosNPrimos);
  }
  
  function mostrarResultado(primosHastaN, primerosNPrimos) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
    <div>
      <h3>Números primos hasta ${primerosNPrimos.length}:</h3>
      <p>${primosHastaN.join(', ')}</p>
    </div>
    <div>
      <h3>Primeros ${primerosNPrimos.length} números primos:</h3>
      <p>${primerosNPrimos.join(', ')}</p>
    </div>
  `;
  }
  