'use strict'

const finance = require('../../src/finance/index.js')

test('finance exports following functions', () => {
  [ 'amount',
    'transactionType',
    'accountType',
    'accountNumber',
    'randomInt',
    'cardNumber' ].forEach(key => {
    expect(finance).toHaveProperty(key)
    expect(typeof finance[key]).toBe('function')
  })
})

test('return a random generate amount number with maximun number and precision', () => {
  const max = 999
  const precision = 10
  expect(finance.amount(max, precision)).not.toBeNaN()
  expect(finance.amount(max, precision)).toBeLessThanOrEqual(max)
})

test('return a random generate amount number with default maximun number and precision', () => {
  expect(finance.amount()).not.toBeNaN()
})

test('return a digit number with min and max range', () => {
  const min = 10
  const max = 100
  expect(finance.randomInt(min, max)).toBeLessThanOrEqual(max)
  expect(finance.randomInt(min, max)).toBeGreaterThanOrEqual(min)
})

test('return a card number with correct format', () => {
  const cardNumber = finance.cardNumber().split(' ')
  cardNumber.map(n => {
    expect(parseInt(n)).toBeGreaterThanOrEqual(1000)
    expect(parseInt(n)).toBeLessThanOrEqual(9999)
  })
})

test('type of account is not undefined', () => {
  expect(finance.accountType()).toBeDefined()
  expect(typeof finance.accountType()).toBe('string')
})

test('type of account contain Account', () => {
  expect(finance.accountType()).toContain('Account')
})

test('type of transaction is not undefined', () => {
  expect(finance.transactionType()).toBeDefined()
  expect(typeof finance.transactionType()).toBe('string')
})

test('return an account number with default size', () => {
  expect(finance.accountNumber()).toHaveLength(8)
})

test('return an account number with size', () => {
  const size = 10
  expect(finance.accountNumber(size)).toHaveLength(10)
})
