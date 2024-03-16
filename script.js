
function convert(){
    const inchval = Number(document.getElementById("inch").value)
    const cmval = inchval*2.54
    const result = document.getElementById("result")
    result.innerHTML = cmval.toFixed(3) + "centimeters"
  }
  