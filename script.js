document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("heronBtn").addEventListener("click", calculateHeron);
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