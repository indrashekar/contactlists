'use strict';

var repository = require('../lib/employeeRepository');


module.exports = {
    get: function employees_get(req, res) {
        repository.all(req,res);
    }
};