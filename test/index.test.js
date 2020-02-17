const tilderize = require('../index')

describe('tilderize', () => {
  test('Should create regexed text', () => {
    expect(tilderize('aáóéÉÓ')).toBe('(a|á)(a|á)(o|ó)(e|é)(e|é)(o|ó)')
  })

  test('Should works for n and ñ', () => {
    expect(tilderize('nusta')).toBe('(n|ñ)(u|ú)st(a|á)')
  })
})