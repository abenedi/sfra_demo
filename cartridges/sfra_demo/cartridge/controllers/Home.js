'use strict';

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');

server.extend(module.superModule);

/****** Demo for simple append *******/
//server.append('Show', function (req, res, next) {
//    viewData = {
//        demo1: 'sfra_demo cartridge append happening',
//        demo2: 'this is the value overridden by the append'
//    };
//    res.setViewData(viewData);
//    next();
//});


/***** Demo for extending a middleware script: see cache.js on this cartridge *******/
server.append('Show', cache.applyCustomCache, function (req, res, next) {
    var viewData = {
        demo1: 'this homepage is using custom cache middleware',
        demo2: res.cachePeriod + ' ' + res.cachePeriodUnit
    };
    res.setViewData(viewData);
    next();
});

module.exports = server.exports();
