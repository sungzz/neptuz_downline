// openerp.neptuz_downline = function(instance){
//     var module   = instance.point_of_sale;
//     var round_pr = instance.web.round_precision
//     var QWeb     = instance.web.qweb;

//     console.log("POS JS Loaded aaaa",module)
    

// };

openerp.neptuz_downline = function (instance) {
    var _t = instance.web._t;
    var QWeb = instance.web.qweb;
    var module = instance.point_of_sale;

    module.PosDB.include({
        init: function(options){
            var self = this;
            this._super();
        },
        search_product_in_category: function(category_id, query){

            //You can add your custom code here
    
                try {
                    query = query.replace(/[\[\]\(\)\+\*\?\.\-\!\&\^\$\|\~\_\{\}\:\,\\\/]/g,'.');
                    query = query.replace(/ /g,'.+');
                    var re = RegExp("([0-9]+):.*?"+query,"gi");
                }catch(e){
                    return [];
                }
                var results = [];
                for(var i = 0; i < this.limit; i++){
                    r = re.exec(this.category_search_string[category_id]);
                    if(r){
                        var id = Number(r[1]);
                        results.push(this.get_product_by_id(id));
                    }else{
                        break;
                    }
                }
                return results;
            },
        });
    
        console.log("POS JS Loaded aaaa",module)
        console.log("POS JS Loaded bbb",this)
        console.log("POS JS Loaded cccc",results)
    };