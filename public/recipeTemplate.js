(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['recipe'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":18,"column":25}}})) != null ? stack1 : "")
    + "              </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                  <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              <ol>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.steps : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":27,"column":25}}})) != null ? stack1 : "")
    + "              </ul>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-lg-6 mb-4 recipe\" data-budget=\""
    + alias4(((helper = (helper = helpers.budget || (depth0 != null ? depth0.budget : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"budget","hash":{},"data":data,"loc":{"start":{"line":1,"column":47},"end":{"line":1,"column":57}}}) : helper)))
    + "\" data-time=\""
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":1,"column":70},"end":{"line":1,"column":78}}}) : helper)))
    + "\" data-appliance=\""
    + alias4(((helper = (helper = helpers.appliance || (depth0 != null ? depth0.appliance : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"appliance","hash":{},"data":data,"loc":{"start":{"line":1,"column":96},"end":{"line":1,"column":109}}}) : helper)))
    + "\">\n    <div class=\"card h-100\">\n        <div class=\"img-holder\">\n            <div class=\"sub-img-holder\">\n                <img class=\"card-img-top cover\" src=\""
    + alias4(((helper = (helper = helpers.originalImageURL || (depth0 != null ? depth0.originalImageURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"originalImageURL","hash":{},"data":data,"loc":{"start":{"line":5,"column":53},"end":{"line":5,"column":73}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":5,"column":80},"end":{"line":5,"column":95}}}) : helper)))
    + "\">\n            </div>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">\n            <a href=\"#\">"
    + alias4(((helper = (helper = helpers.recipeName || (depth0 != null ? depth0.recipeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipeName","hash":{},"data":data,"loc":{"start":{"line":10,"column":24},"end":{"line":10,"column":38}}}) : helper)))
    + "</a>\n          </h4>\n          <p class=\"card-text\">Cook Time: "
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":12,"column":42},"end":{"line":12,"column":50}}}) : helper)))
    + " min.</p>\n          <p class=\"card-text\">Ingredients:\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":20,"column":19}}})) != null ? stack1 : "")
    + "          </p>\n          <p class=\"card-text\">Steps:\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.steps : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":29,"column":19}}})) != null ? stack1 : "")
    + "          </p>\n          <p class=\"recipe-credit\">\n            recipe and photo via: <a href=\""
    + alias4(((helper = (helper = helpers.creditURL || (depth0 != null ? depth0.creditURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"creditURL","hash":{},"data":data,"loc":{"start":{"line":32,"column":43},"end":{"line":32,"column":56}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.creditName || (depth0 != null ? depth0.creditName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"creditName","hash":{},"data":data,"loc":{"start":{"line":32,"column":58},"end":{"line":32,"column":72}}}) : helper)))
    + "</a>.\n          </p>\n          <a class=\"btn btn-primary\" href=\"#\" role=\"button\">view live</a>\n          <a class=\"btn btn-success\" href=\"#\" role=\"button\">GitHub</a>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
})();