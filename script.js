document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("heronBtn").addEventListener("click", calculateHeron);
  document.getElementById("ambiguousBtn").addEventListener("click", calculateAmbiguous);
  document.getElementById("newtonBtn").addEventListener("click", calculateNewton);
  document.getElementById("polyBtn").addEventListener("click", calculatePolynomial);
});

function calculateHeron() {
  let a = parseFloat(document.getElementById("sideA").value);
  let b = parseFloat(document.getElementById("sideB").value);
  let c = parseFloat(document.getElementById("sideC").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    document.getElementById("heronResult").value = "Invalid input";
    return;
  }

  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  document.getElementById("heronResult").value = isNaN(area) ? "Invalid triangle" : area.toFixed(2);
}

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