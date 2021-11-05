function bandeiras() {
  var select = document.getElementById('paises')
  var option = select.options[select.selectedIndex]
  var res = document.getElementById('nacionalidade')

  document.getElementById('bandeira').src = option.value
}
bandeiras()
