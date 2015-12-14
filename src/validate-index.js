'use strict'

function lowercaseAndUnderscores(string) {
  return !string.match(/[^a-z_]+/)
}

module.exports = (extension, callback) => {

  let errors = []
  let warnings = []

  if (typeof extension !== 'object') {
    errors.push('Extension index must export an object')

    // return early since other tests should not run if this fails
    callback(errors, warnings)
    return
  }

  if (typeof extension.vendor !== 'string') {
    errors.push('Extension index is missing the "vendor" property.')
  } else {
    if (extension.vendor === '') {
      errors.push('Extension index has an empty "vendor" property.')
    }
    if (!lowercaseAndUnderscores(extension.vendor)) {
      errors.push('Extension index "vendor" property can only be letters or underscores.')
    }

  }

  if (typeof extension.name !== 'string') {
    errors.push('Extension index is missing the "name" property.')
  } else {
    if (extension.name === '') {
      errors.push('Extension index has an empty "name" property.')
    }
    if (!lowercaseAndUnderscores(extension.name)) {
      errors.push('Extension index "name" property can only be letters or underscores.')
    }

  }

  if (typeof extension.description !== 'string') {
    errors.push('Extension index is missing the "description" property.')
  } else {
    if (extension.description === '') {
      errors.push('Extension index has an empty "description" property.')
    }
    if (extension.name === extension.description) {
      warnings.push('Extension index "description" should not be the same as "name". The "name" property should be something like "example_extension" (for reference use) and "description" property should be something proper like "Example Extension" (for display use).')
    }
  }

  let keyWhitelist = [
    'vendor',
    'name',
    'description',
    'stages',
    'logs'
    //'accounts',
    //'credentials'
  ]

  Object.getOwnPropertyNames(extension).forEach(function (key) {
    if (keyWhitelist.indexOf(key) === -1) {
      errors.push('Extension index has a property, "' + key + '", that is not allowed.')
    }
  })


  // Return errors and warnings via callback
  callback(errors, warnings)
}


//test('module exports should be an object', function(t) {
//  t.ok(typeof extension === 'object')
//  t.end()
//})
//
//test('extension should only have certain keys', function(t) {
//
//  let keyWhitelist = [
//    'vendor',
//    'name',
//    'description',
//    'stages',
//    'logs',
//    'accounts',
//    'credentials'
//  ]
//
//  Object.getOwnPropertyNames(extension).forEach(function(key) {
//    t.notEqual(keyWhitelist.indexOf(key), -1, 'key should be in whitelist')
//  })
//
//  t.end()
//})
//
//test('extension should have a vendor', function(t) {
//  t.ok(extension.hasOwnProperty('vendor'), 'extension should specify a vendor')
//  t.equal(typeof extension.vendor, 'string', 'extension.vendor should be a string')
//  t.notEqual(extension.vendor, '', 'vendor name should not be blank')
//  t.end()
//})
//
//test('extension should have a name', function(t) {
//  t.ok(extension.hasOwnProperty('name'), 'extension should specify a name')
//  t.equal(typeof extension.name, 'string', 'extension.name should be a string')
//  t.notEqual(extension.name, '', 'extension name should not be blank')
//  t.end()
//})
//
//test('extension should have a description', function(t) {
//  t.ok(extension.hasOwnProperty('description'), 'extension should provide a description')
//  t.equal(typeof extension.description, 'string', 'extension.description should be a string')
//  t.notEqual(extension.description, '', 'extension description should not be blank')
//  t.end()
//})
