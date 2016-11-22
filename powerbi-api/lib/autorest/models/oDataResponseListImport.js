/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ODataResponseListImport class.
 * @constructor
 * Odata response wrapper for a Power BI Import collection
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The imports collection
 * 
 */
function ODataResponseListImport() {
}

/**
 * Defines the metadata of ODataResponseListImport
 *
 * @returns {object} metadata of ODataResponseListImport
 *
 */
ODataResponseListImport.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ODataResponse[List[Import]]',
    type: {
      name: 'Composite',
      className: 'ODataResponseListImport',
      modelProperties: {
        odatacontext: {
          required: false,
          serializedName: 'odata\\.context',
          type: {
            name: 'String'
          }
        },
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ImportModelElementType',
                type: {
                  name: 'Composite',
                  className: 'ImportModel'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ODataResponseListImport;
