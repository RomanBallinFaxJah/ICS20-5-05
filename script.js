let sideLen = 0

document.getElementById('submit').addEventListener('click', square)

// squares the number
function square () {
  sideLen = parseInt(document.getElementById('len').value)
  sideLen = sideLen * sideLen
  alert(sideLen)
}