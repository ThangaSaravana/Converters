function convert(){
let cel = Number(document.getElementById("input").value)
let faren = cel*9/5+ 32
let result = document.getElementById("result")
result.innerHTML = faren.toFixed(1) + "Farenheit"
}