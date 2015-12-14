'use strict'

let test = require('tape')

test('an invalid extension should throw errors', function(t) {

  let indexValidator = require('../../src/validate-index')

  let extensionStub = {}

  indexValidator(extensionStub, (errors, warnings) => {
    t.ok(errors.length > 0, 'there should be at least 1 error')
    t.end()
  })
})