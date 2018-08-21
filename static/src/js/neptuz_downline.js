// openerp.neptuz_downline = function(instance){
//     var module   = instance.point_of_sale;
//     var round_pr = instance.web.round_precision;
//     var QWeb     = instance.web.qweb;
 

    // console.log("POS JS Loaded aaaa",models)

    // models.TheWidgetThatContainsTheFunction.include({
    //     the_function_to_modify: function(){        //don't forget to include function vars!
    //          this.super();

    //          console.log("POS JS Loaded bbbbb",models)
    //          // ... do stuff here
    //          // return if necessary
    //     },
    // });
    

// };

odoo.define('point_of_sale.screens', function (require) {
    "use strict";


var PosBaseWidget = require('point_of_sale.BaseWidget');
var gui = require('point_of_sale.gui');
var models = require('point_of_sale.models');
var core = require('web.core');
var Model = require('web.DataModel');
var utils = require('web.utils');
var formats = require('web.formats');

var QWeb = core.qweb;
var _t = core._t;

var round_pr = utils.round_precision;


var ScreenWidget = PosBaseWidget.extend({

    init: function(parent,options){
        this._super(parent,options);
        this.hidden = false;
    },
    });   


var PaymentScreenWidget = ScreenWidget.extend({
    template:      'PaymentScreenWidget',
    back_screen:   'product',
    init: function(parent, options) {
        var self = this;
        this._super(parent, options);
    },
    });

    gui.define_screen({name:'payment', widget: PaymentScreenWidget});


console.log("POS JS Loaded aaaa",PaymentScreenWidget);


});