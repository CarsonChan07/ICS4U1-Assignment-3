document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("heronBtn").addEventListener("click", calculateHeron);
  document.getElementById("ambiguousBtn").addEventListener("click", calculateAmbiguous);
  document.getElementById("newtonBtn").addEventListener("click", calculateNewton);
  document.getElementById("polyBtn").addEventListener("click", calculatePolynomial);
});

//Heron's Formula

function calculateHeron() {
  let a = parseFloat(document.getElementById("sideA").value);
  let b = parseFloat(document.getElementById("sideB").value);
  let c = parseFloat(document.getElementById("sideC").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    document.getElementById("heronResult").value = "Invalid input";
    return;
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    document.getElementById("heronResult").value = "Invalid triangle";
    return;
  } 

  let area = (1 / 4) * Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) - Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)), 2));
  
  document.getElementById("heronResult").value = isNaN(area) ? "Invalid triangle" : area.toFixed(2);
}

//Ambiguous Case

function calculateAmbiguous() {
  let A = parseFloat(document.getElementById("angleA").value);
  let a = parseFloat(document.getElementById("sideA").value);
  let b = parseFloat(document.getElementById("sideB").value);

  if (isNaN(A) || isNaN(a) || isNaN(b) || A <= 0 || a <= 0 || b <= 0) {
      document.getElementById("triangleResult").value = "Invalid input";
      return;
  }

  let h = b * Math.sin(A * (Math.PI / 180));

  let result = "No triangle";
  if (A < 90) {
      if (a < h) result = "No triangle";
      else if (a === h) result = "Right triangle";
      else if (a > b) result = "One triangle";
      else result = "Two triangles (Ambiguous case)";
  } else {
      if (a <= b) result = "No triangle";
      else result = "One triangle";
  }

  document.getElementById("triangleResult").value = result;
}

// Newton's Method Function
function calculateNewton() {
  let x0 = parseFloat(document.getElementById("rootGuess").value);

  if (isNaN(x0)) {
      document.getElementById("newtonResult").value = "Invalid input";
      return;
  }

  function f(x) {
      return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
  }

  function fPrime(x) {
      return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
  }

  let x1 = x0 - f(x0) / fPrime(x0);
  document.getElementById("newtonResult").value = x1.toFixed(5);
}

// Polynomial Function
function calculatePolynomial() {
  let coeffs = document.getElementById("coefficients").value.trim().split(/\s+/).map(Number);
  let exps = document.getElementById("exponents").value.trim().split(/\s+/).map(Number);
  let x = parseFloat(document.getElementById("xValue").value);

  if (coeffs.some(isNaN) || exps.some(isNaN) || isNaN(x) || coeffs.length !== exps.length) {
      document.getElementById("polyResult").value = "Invalid input";
      document.getElementById("polyEvalResult").value = "";
      return;
  }

  let terms = [];
  let result = 0;

  for (let i = 0; i < coeffs.length; i++) {
      let term = `${coeffs[i]}x^${exps[i]}`;
      terms.push(term);
      result += coeffs[i] * Math.pow(x, exps[i]);
  }

  document.getElementById("polyResult").value = terms.join(" + ");
  document.getElementById("polyEvalResult").value = result.toFixed(2);
}