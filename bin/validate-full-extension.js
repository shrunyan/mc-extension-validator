#!/usr/bin/env node
'use strict'

let colors = require('colors')
let extension = require(process.cwd() + '/index.js')
let validator = require('../index.js')

// Assume we haven't found any errors or warnings until we find out otherwise
let errorsOrWarningsFound = false

/**
 * Validate the index of the extension
 */
function validateIndex() {
  return new Promise(resolve => {

    validator.validateIndex(extension, (errors, warnings) => {

      // If there are no errors or warnings, output message and exit 0
      if (errors.length === 0 && warnings.length === 0) {
        console.log(colors.green('✓ Extension index looks valid.'))
        return
      }

      errorsOrWarningsFound = true

      if (warnings.length > 0) {
        console.log(colors.red(warnings.length + ' warnings found for the extension index!'))

        // TODO: loop through warnings and output messages

      }

      if (errors.length > 0) {
        console.log(colors.red(errors.length + ' errors found for the extension index!'))

        // TODO: loop through errors and output messages

      }

      resolve()

    })


  })
}

/**
 * validate stage types
 */
function validateStageTypes() {
  return  new Promise(resolve => {
    // TODO: implement
    resolve()
  })
}

/**
 * validate log types
 */
function validateLogTypes() {
  return new Promise(resolve => {
    // TODO: implement
    resolve()
  })
}

/**
 * Run the promises above sequentially and exit with code 1 if there were any errors or warnings found
 */
validateIndex()
  .then(validateStageTypes)
  .then(validateLogTypes)
  .then(() => {
    if (errorsOrWarningsFound) {
      process.exit(1)
    }
  })