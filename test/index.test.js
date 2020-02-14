const tilderize = require('../index')

describe('tilderize', () => {
  test('Should create regexed text', () => {
    expect(tilderize('aáóéÉÓ')).toBe('(a|á)(a|á)(o|ó)(e|é)(e|é)(o|ó)')
  })
})