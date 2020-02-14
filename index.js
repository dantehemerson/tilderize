const tilderize = (text) => {
  return text.replace(/[aeiouáéíóú]/gi, (v) => {
    switch (v) {
      case 'a':
      case 'A':
      case 'á':
      case 'Á':
        return '(a|á)'
      case 'e':
      case 'é':
      case 'E':
      case 'É':
        return '(e|é)'
      case 'i':
      case 'í':
      case 'I':
      case 'Í':
        return '(i|í)'
      case 'o':
      case 'ó':
      case 'O':
      case 'Ó':
        return '(o|ó)'
      case 'u':
      case 'ú':
      case 'U':
      case 'Ú':
        return '(u|ú)'
      default:
        return ''
    }
  })
}

module.exports = tilderize