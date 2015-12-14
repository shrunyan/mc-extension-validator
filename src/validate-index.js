'use strict'

module.exports = (extension, callback) => {

  let errors = []
  let warnings = []

  if (typeof extension !== 'object') {
    errors.push('Extension index must export an object')

    // return early since other tests should not run if this fails
    callback(errors, warnings)
    return
  }

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
