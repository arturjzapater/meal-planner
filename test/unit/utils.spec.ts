import assert from 'assert'
import {
  capitalise,
  equal,
  map,
  not,
  pipe,
  prop,
  sort,
  trim,
  uniq
} from '../../src/lib/utils'

describe('Function capitalise', () => {
  it('capitalises first letter', () => {
    assert.strictEqual(capitalise('hi'), 'Hi')
  })

  it('returns same string if word already capitalised', () => {
    assert.strictEqual(capitalise('Hi'), 'Hi')
  })

  it('returns same string if it starts with non-alphabetical charater', () => {
    assert.strictEqual(capitalise('$hi'), '$hi')
  })
})

describe('Function equal', () => {
  it('returns true if both arguments are equal', () => {
    assert.ok(equal(1)(1))
    assert.ok(equal(false)(false))
    assert.ok(equal('str')('str'))
  })

  it('returns false if both arguments are not strictly equal', () => {
    assert.ok(!equal(1)(3))
    assert.ok(!equal(1)('1'))
    assert.ok(!equal('vodka')('potato'))
  })
})

describe('Function map', () => {
  it('applies a function to all elements of an array', () => {
    assert.deepStrictEqual(map(x => x + 1)([1, 2, 3]), [2, 3, 4])
  })
})

describe('Function not', () => {
  it('returns false if both arguments are equal', () => {
    assert.ok(!not(1)(1))
    assert.ok(!not(false)(false))
    assert.ok(!not('str')('str'))
  })

  it('returns true if both arguments are not equal', () => {
    assert.ok(not(1)(3))
    assert.ok(not(1)('1'))
    assert.ok(not('vodka')('potato'))
  })
})

describe('Function pipe', () => {
  const testFn = pipe(trim, capitalise)

  it('returns a function', () => {
    assert.strictEqual(typeof testFn, 'function')
  })

  it('applies the functions to a value from left to right', () => {
    assert.strictEqual(testFn(' hi'), 'Hi')
  })
})

describe('Function prop', () => {
  const getHeight = prop('height')

  it('returns the object\'s specified property', () => {
    assert.strictEqual(getHeight({ a: 12, height: 13 }), 13)
  })

  it('returns undefined if the property does not exist', () => {
    assert.strictEqual(getHeight({ a: 12 }), undefined)
  })
})

describe('Function sort', () => {
  it('sorts an array from lesser to greater', () => {
    assert.deepStrictEqual(sort([3, 1, 2]), [1, 2, 3])
    assert.deepStrictEqual(sort(['hi', 'potato', 'avocado', 'onion']), ['avocado', 'hi', 'onion', 'potato'])
    assert.deepStrictEqual(sort([3, 1, 'a']), [1, 3, 'a'])
  })
})

describe('Function trim', () => {
  it('removes whitespace at the beginning of a string', () => {
    assert.strictEqual(trim('  hi'), 'hi')
    assert.strictEqual(trim('       hi'), 'hi')
  })

  it('removes whitespace at the end of a string', () => {
    assert.strictEqual(trim('hi     '), 'hi')
    assert.strictEqual(trim('hi           '), 'hi')
  })

  it('removes whitespace at both ends of a string', () => {
    assert.strictEqual(trim('  hi         '), 'hi')
    assert.strictEqual(trim('       hi          '), 'hi')
  })

  it('doesn\'t remove space in between words', () => {
    it('removes whitespace from the beginning of a string', () => {
      assert.strictEqual(trim('  hi there'), 'hi there')
      assert.strictEqual(trim('       hi   there  '), 'hi   there')
    })
  })
})

describe('Function uniq', () => {
  it('returns an array', () => {
    assert.ok(Array.isArray(uniq([1, 1, 1, 2])))
  })

  it('removes duplicates from an array', () => {
    assert.deepStrictEqual(uniq([1, 1, 1, 2, 3, 2]), [1, 2, 3])
    assert.deepStrictEqual(uniq([1, 1, '1', 2, 3, 2]), [1, '1', 2, 3])
    assert.deepStrictEqual(uniq(['a', 'b', 'c', 'a', 'b']), ['a', 'b', 'c'])
  })

  it('preserves insertion order', () => {
    assert.notDeepStrictEqual(uniq([3, 3, 3, 2, 2, 1]), [1, 2, 3])
    assert.deepStrictEqual(uniq([3, 3, 3, 2, 2, 1]), [3, 2, 1])
  })
})
