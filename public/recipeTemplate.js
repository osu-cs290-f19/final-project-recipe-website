(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['recipe'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-lg-6 mb-4 recipe\" data-budget=\""
    + alias4(((helper = (helper = helpers.budget || (depth0 != null ? depth0.budget : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"budget","hash":{},"data":data,"loc":{"start":{"line":1,"column":47},"end":{"line":1,"column":57}}}) : helper)))
    + "\" data-time=\""
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":1,"column":70},"end":{"line":1,"column":78}}}) : helper)))
    + "\" data-appliance=\""
    + alias4(((helper = (helper = helpers.appliance || (depth0 != null ? depth0.appliance : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"appliance","hash":{},"data":data,"loc":{"start":{"line":1,"column":96},"end":{"line":1,"column":109}}}) : helper)))
    + "\">\r\n    <div class=\"card h-100\">\r\n        <div class=\"img-holder\">\r\n            <div class=\"sub-img-holder\">\r\n                <img class=\"card-img-top cover\" src=\""
    + alias4(((helper = (helper = helpers.originalImageURL || (depth0 != null ? depth0.originalImageURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"originalImageURL","hash":{},"data":data,"loc":{"start":{"line":5,"column":53},"end":{"line":5,"column":73}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":5,"column":80},"end":{"line":5,"column":95}}}) : helper)))
    + "\">\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">\r\n            <a href=\"#\">"
    + alias4(((helper = (helper = helpers.recipeName || (depth0 != null ? depth0.recipeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipeName","hash":{},"data":data,"loc":{"start":{"line":10,"column":24},"end":{"line":10,"column":38}}}) : helper)))
    + "</a>\r\n          </h4>\r\n          <p class=\"card-text\">Cook Time: "
    + alias4(((helper = (helper = helpers.cookTime || (depth0 != null ? depth0.cookTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cookTime","hash":{},"data":data,"loc":{"start":{"line":12,"column":42},"end":{"line":12,"column":54}}}) : helper)))
    + "</p>\r\n          <p class=\"card-text\">Ingredients: "
    + alias4(((helper = (helper = helpers.ingredients || (depth0 != null ? depth0.ingredients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data,"loc":{"start":{"line":13,"column":44},"end":{"line":13,"column":59}}}) : helper)))
    + "</p>\r\n          <p class=\"card-text\">Steps: "
    + alias4(((helper = (helper = helpers.steps || (depth0 != null ? depth0.steps : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"steps","hash":{},"data":data,"loc":{"start":{"line":14,"column":38},"end":{"line":14,"column":47}}}) : helper)))
    + "</p>\r\n          <a class=\"btn btn-primary\" href=\"#\" role=\"button\">view live</a>\r\n          <a class=\"btn btn-success\" href=\"#\" role=\"button\">GitHub</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();