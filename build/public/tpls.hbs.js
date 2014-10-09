Ember.TEMPLATES['404'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push(" 404.hbs\nRoute Not found!");
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-messenger'] || (depth0 && depth0['we-messenger']),options={hash:{
    'store': ("store")
  },hashTypes:{'store': "ID"},hashContexts:{'store': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-messenger", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<div class=\"main-area\" id=\"main\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/navbar", options) : helperMissing.call(depth0, "partial", "partials/navbar", options))));
  data.buffer.push("\n  <div class=\"container\">\n    <div class=\"connection-manager\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "we-socket-io", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"breadcrumb-area\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "bread-crumbs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/footer", options) : helperMissing.call(depth0, "partial", "partials/footer", options))));
  data.buffer.push("\n  <hr>\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "App.currentUser.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/bread-crumbs'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "_view.contentIndex", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("crumb.isCurrent:current:")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['if'].call(depth0, "crumb.linkable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "crumb.path", options) : helperMissing.call(depth0, "link-to", "crumb.path", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "crumb.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "crumb.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":first crumb.isCurrent:current:")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['if'].call(depth0, "crumb.linkable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "crumb", "in", "breadCrumbs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/bs-modal'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.body", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    ");
  stack1 = helpers['if'].call(depth0, "body", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-connection-status'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("statusImageUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-editable-html'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <div class=\"form-group\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-wysiwyg-editor'] || (depth0 && depth0['we-wysiwyg-editor']),options={hash:{
    'name': ("name"),
    'value': ("value")
  },hashTypes:{'name': "ID",'value': "ID"},hashContexts:{'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wysiwyg-editor", options))));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-editable-text'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("name"),
    'value': ("value"),
    'type': ("text"),
    'required': ("true"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "ID",'value': "ID",'type': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-socket-io'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  Reconectando em ");
  stack1 = helpers._triageMustache.call(depth0, "timeToReconnectInSeconds", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" segundos - <a href=\"#socketIoConnect\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "connect", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"connect\">tentar agora</a>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "isDisconnected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <a href=\"#socketIoConnect\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "connect", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"connect\">");
  stack1 = helpers._triageMustache.call(depth0, "ClickToConnectText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n  ");
  return buffer;
  }

  stack1 = helpers._triageMustache.call(depth0, "msgText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isReconecting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['components/we-sys-messages'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <div class=\"alert alert-");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" alert-dismissable\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-timeline-loading'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Loading more", options) : helperMissing.call(depth0, "t", "Loading more", options))));
  data.buffer.push("... <img src=\"/core/images/loading.gif\">\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "haveMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <a href='#' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getMore", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Get More", options) : helperMissing.call(depth0, "t", "Get More", options))));
  data.buffer.push("</a>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "No more content", options) : helperMissing.call(depth0, "t", "No more content", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"loading-more-content text-center\">\n  ");
  stack1 = helpers['if'].call(depth0, "loadingMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['forbiden'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("FORBIDEN!");
  
});Ember.TEMPLATES['home'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post/sharebox", "postNew", options) : helperMissing.call(depth0, "render", "post/sharebox", "postNew", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\"><div class=\"col-md-12\">\n  <div class=\"sharebox-area masonry-brick  content-block\">\n    ");
  stack1 = helpers['if'].call(depth0, "App.currentUser.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "posts/list", "posts", options) : helperMissing.call(depth0, "render", "posts/list", "posts", options))));
  data.buffer.push("\n</div></div>");
  return buffer;
  
});Ember.TEMPLATES['layouts/default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("12345");
  
});Ember.TEMPLATES['layouts/twoColumns'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("222 <div class=\"row\">\n\n  <div class=\"col-md-12\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "highlighted", options) : helperMissing.call(depth0, "outlet", "highlighted", options))));
  data.buffer.push("\n    <div data-ui-view=\"highlighted\"></div>\n  </div>\n\n\n  <div class=\"col-sm-8\">\n    <div data-ui-view>\n      ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>");
  stack1 = helpers._triageMustache.call(depth0, "we-messenger", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <div class=\"col-sm-4\">\n\n     ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "mainLeft", options) : helperMissing.call(depth0, "outlet", "mainLeft", options))));
  data.buffer.push("\n    <we-news></we-news>\n  </div>\n\n</div>222");
  return buffer;
  
});Ember.TEMPLATES['partials/footer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<hr>\n<div class=\"container\" id=\"footer\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <a href=\"https://github.com/wejs\">Github</a> <small class=\"text-muted\">|</small> <a href=\"https://wejs.org\">Site</a>\n    </div>\n    <div class=\"col-sm-6\">\n      <p>\n      <span class=\"pull-right\">\n        <a href=\"#\" >WE License MIT 2013</a> | Theme\n        from <a href=\"http://bootply.com/96266\" target=\"ext\">@Bootply</a>\n      </span>\n      </p>\n    </div>\n  </div>\n</div>\n\n<hr>\n<h4 class=\"text-center\">\n<a href=\"https://github.com/wejs/we\" target=\"ext\">We.js</a> | <a href=\"http://sailsjs.org\">Sails.js</a> | <a href=\"http://emberjs.com/\">Ember.js</a>\n</h4>\n\n");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar-modal'] || (depth0 && depth0['we-avatar-modal']),options={hash:{
    'store': ("store")
  },hashTypes:{'store': "ID"},hashContexts:{'store': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar-modal", options))));
  return buffer;
  
});Ember.TEMPLATES['partials/home-about-site'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section role=\"section\" id=\"section-start\" class=\"section-start\">\n  <div>\n    <!-- welcome -->\n    <aside class=\"welcome\">\n      <h1 class=\"title\">We.js</h1>\n      <h3 class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Real time social network with node.js", options) : helperMissing.call(depth0, "t", "Real time social network with node.js", options))));
  data.buffer.push("</h3>\n      <p><a href=\"https://github.com/wejs/we\"><span class=\"glyphicon glyphicon-link\"></span> https://github.com/wejs/we</a></p>\n    </aside>\n  </div>\n</section>");
  return buffer;
  
});Ember.TEMPLATES['partials/home-not-authenticated'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"jumbotron\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/home-about-site", options) : helperMissing.call(depth0, "partial", "partials/home-about-site", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/navbar'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <img class=\"logo-img\" src=\"/core/images/we-logo-branco-small.png\" />\n      ");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n           <i class=\"glyphicon glyphicon-home\"></i> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Home", options) : helperMissing.call(depth0, "t", "Home", options))));
  data.buffer.push("\n         ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <i class=\"glyphicon glyphicon-user\"></i>\n             ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Users", options) : helperMissing.call(depth0, "t", "Users", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <i class=\"glyphicon glyphicon-globe\"></i>\n             ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Groups", options) : helperMissing.call(depth0, "t", "Groups", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications", options) : helperMissing.call(depth0, "link-to", "notifications", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n        ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers._triageMustache.call(depth0, "we-notifications-link", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <li><div>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-success navbar-login-buttom navbar-btn")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authLogin", options) : helperMissing.call(depth0, "link-to", "authLogin", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div></li>\n          <li><div>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-info navbar-login-buttom navbar-btn")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authRegister", options) : helperMissing.call(depth0, "link-to", "authRegister", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div></li>\n        ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <i class=\"glyphicon glyphicon-log-in\"></i>\n               ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Login", options) : helperMissing.call(depth0, "t", "Login", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <i class=\"glyphicon glyphicon-plus\"></i>\n              <i class=\"glyphicon glyphicon-user\"></i>\n               ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Register", options) : helperMissing.call(depth0, "t", "Register", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"navbar navbar-inverse\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"sr-only\">Toggle</span>\n        <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      </button>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("navbar-brand site-logo-link logo")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <nav class=\"collapse navbar-collapse\" role=\"navigation\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n         ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "groups", options) : helperMissing.call(depth0, "link-to", "groups", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        ");
  stack1 = helpers['if'].call(depth0, "App.currentUser.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'controller': ("UserMenu")
  },hashTypes:{'controller': "STRING"},hashContexts:{'controller': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user/usermenu", "App.currentUser", options) : helperMissing.call(depth0, "render", "user/usermenu", "App.currentUser", options))));
  data.buffer.push("\n        </li>\n        ");
  stack1 = helpers.unless.call(depth0, "App.currentUser.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </nav>\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['auth/ChangePassword'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <aside class=\"form-signup\">\n      <h2 class=\"form-signin-heading\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change password", options) : helperMissing.call(depth0, "t", "Change password", options))));
  data.buffer.push("\n        <br>\n      </h2>\n\n      ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n      <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" name=\"changePasswordForm\" class=\"user-signup-form\" method=\"POST\">\n        <!-- input: oldpassword -->\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <label for=\"oldpassword\" class=\"input-group-addon\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Current password", options) : helperMissing.call(depth0, "t", "Current password", options))));
  data.buffer.push("</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("oldpassword"),
    'value': ("user.oldpassword"),
    'type': ("password"),
    'placeholder': ("oldpasswordPlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n        </div>\n        <!-- /input: oldpassword -->\n\n        <!-- input: password -->\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <label for=\"password\" class=\"input-group-addon\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "New password", options) : helperMissing.call(depth0, "t", "New password", options))));
  data.buffer.push("</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("password"),
    'value': ("user.password"),
    'type': ("password"),
    'placeholder': ("passwordPlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n        </div>\n        <!-- /input: password -->\n\n        <!-- input: repeatpassword -->\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <label for=\"repeatpassword\" class=\"input-group-addon\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Repeat new password", options) : helperMissing.call(depth0, "t", "Repeat new password", options))));
  data.buffer.push("</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("repeatpassword"),
    'value': ("user.repeatpassword"),
    'type': ("password"),
    'placeholder': ("passwordPlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n        </div>\n        <!-- /input: repeatpassword -->\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <button class=\"btn btn-lg btn-success \" type=\"submit\">\n              ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change", options) : helperMissing.call(depth0, "t", "Change", options))));
  data.buffer.push("\n              <span class=\"glyphicon glyphicon-chevron-right\"> </span>\n            </button>\n          </div>\n        </div>\n\n      </form>\n\n    </aside>\n  </div>\n  <div class=\"panel-footer\">\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['auth/ForgotPassword'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n      verifique seu email ou sua caixa de spam\n\n    ");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n      <div class=\"input-group text-center\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("email"),
    'type': ("email"),
    'placeholder': ("emailPlaceholder"),
    'classNames': ("form-control input-lg"),
    'required': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING",'required': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <span class=\"input-group-btn\">\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "requestPasswordChange", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"btn btn-lg btn-primary\" type=\"button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send email", options) : helperMissing.call(depth0, "t", "Send email", options))));
  data.buffer.push("</button>\n        </span>\n      </div>\n\n    ");
  return buffer;
  }

  data.buffer.push("<h1>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Forgot Password form", options) : helperMissing.call(depth0, "t", "Forgot Password form", options))));
  data.buffer.push("</h1>\n<br>\n<div class=\"well\">\n  <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "requestPasswordChange", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" action=\"/auth/forgot-password\" method=\"post\" class=\"form\">\n    <h4>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Enter you e-mail address to request a password change.", options) : helperMissing.call(depth0, "t", "Enter you e-mail address to request a password change.", options))));
  data.buffer.push("</h4>\n    <br>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "requestSend", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  </form>\n\n</div>");
  return buffer;
  
});Ember.TEMPLATES['auth/RegisterForm'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/home-about-site", options) : helperMissing.call(depth0, "partial", "partials/home-about-site", options))));
  data.buffer.push("\n  </div>\n  <div class=\"panel-body\">\n\n<aside class=\"form-signup\">\n  <h2 class=\"form-signin-heading\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Create account", options) : helperMissing.call(depth0, "t", "Create account", options))));
  data.buffer.push("\n    <br>\n  </h2>\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n  <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" name=\"createAccountForm\" class=\"user-signup-form\" method=\"POST\">\n\n    <!-- input: username -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"displayName\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("displayName"),
    'value': ("user.displayName"),
    'type': ("text"),
    'placeholder': ("displayNamePlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <!-- /input: username -->\n\n    <!-- input: username -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"name\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("username"),
    'value': ("user.username"),
    'type': ("text"),
    'placeholder': ("usernamePlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <!-- /input: username -->\n\n    <!-- input: email -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"email\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-envelope\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("user.email"),
    'type': ("email"),
    'placeholder': ("emailPlaceholder"),
    'classNames': ("form-control input-lg"),
    'required': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING",'required': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n      <div class=\"message\" data-ng-repeat=\"message in user.email.messages\">\n        <div class=\"message.type\">");
  stack1 = helpers._triageMustache.call(depth0, "message.message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n      </div>\n    </div>\n    <!-- /input: email -->\n\n    <!-- input: password -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"password\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-lock\"> </span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("password"),
    'value': ("user.password"),
    'type': ("password"),
    'placeholder': ("passwordPlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n        <!-- input: confirm-password -->\n        <label for=\"confirm-password\" class=\"sr-only input-group-btn\">\n\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("confirmPassword"),
    'value': ("user.confirmPassword"),
    'type': ("password"),
    'placeholder': ("confirmPasswordPlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <!-- /input: confirm-password -->\n      </div>\n    </div>\n    <!-- /input: password -->\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"language\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-globe\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Language", options) : helperMissing.call(depth0, "t", "Language", options))));
  data.buffer.push("\n        </label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("language"),
    'value': ("user.language"),
    'content': ("defaultlanguages"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "STRING",'value': "ID",'content': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'content': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </div>\n    </div>\n\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <button class=\"btn btn-lg btn-success \" type=\"submit\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Sign up", options) : helperMissing.call(depth0, "t", "Sign up", options))));
  data.buffer.push("\n          <span class=\"glyphicon glyphicon-chevron-right\"> </span>\n        </button>\n      </div>\n    </div>\n\n\n    <div class=\"input-group\">\n      <div class=\"agree-terms\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "By clicking Sign Up, you agree to: We dont are responsible for anything that may happens to your data in this test system", options) : helperMissing.call(depth0, "t", "By clicking Sign Up, you agree to: We dont are responsible for anything that may happens to your data in this test system", options))));
  data.buffer.push("\n      </div>\n    </div>\n\n  </form>\n\n\n</aside>\n\n  </div>\n\n  <div class=\"panel-footer\">\n\n  </div>\n\n\n</div>\n\n");
  return buffer;
  }

  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "isVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['auth/ResetPasswordToken'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/home-about-site", options) : helperMissing.call(depth0, "partial", "partials/home-about-site", options))));
  data.buffer.push("\n  </div>\n  <div class=\"panel-body\">\n\n<aside class=\"form-signup\">\n  <h2 class=\"form-signin-heading\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Create account", options) : helperMissing.call(depth0, "t", "Create account", options))));
  data.buffer.push("\n    <br>\n  </h2>\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n  <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" name=\"createAccountForm\" class=\"user-signup-form\" method=\"POST\">\n    <!-- input: username \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"name\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("username"),
    'value': ("user.username"),
    'type': ("text"),
    'placeholder': ("usernamePlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <!-- /input: username \n\n    <!-- input: email \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"email\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-envelope\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("user.email"),
    'type': ("email"),
    'placeholder': ("emailPlaceholder"),
    'classNames': ("form-control input-lg"),
    'required': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING",'required': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n      <div class=\"message\" data-ng-repeat=\"message in user.email.messages\">\n        <div class=\"message.type\">");
  stack1 = helpers._triageMustache.call(depth0, "message.message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n      </div>\n    </div>\n    <!-- /input: email -->\n\n    <!-- input: password \n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"password\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-lock\"> </span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("password"),
    'value': ("user.password"),
    'type': ("password"),
    'placeholder': ("passwordPlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n        <!-- input: confirm-password \n        <label for=\"confirm-password\" class=\"sr-only input-group-btn\">\n\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("confirmPassword"),
    'value': ("user.confirmPassword"),
    'type': ("password"),
    'placeholder': ("confirmPasswordPlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <!-- /input: confirm-password \n      </div>\n    </div>\n    <!-- /input: password \n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"language\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-globe\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Language", options) : helperMissing.call(depth0, "t", "Language", options))));
  data.buffer.push("\n        </label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("language"),
    'value': ("user.language"),
    'content': ("defaultlanguages"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "STRING",'value': "ID",'content': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'content': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </div>\n    </div>\n\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <button class=\"btn btn-lg btn-success \" type=\"submit\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Sign up", options) : helperMissing.call(depth0, "t", "Sign up", options))));
  data.buffer.push("\n          <span class=\"glyphicon glyphicon-chevron-right\"> </span>\n        </button>\n      </div>\n    </div>\n\n\n    <div class=\"input-group\">\n      <div class=\"agree-terms\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "By clicking Sign Up, you agree to: We dont are responsible for anything that may happens to your data in this test system", options) : helperMissing.call(depth0, "t", "By clicking Sign Up, you agree to: We dont are responsible for anything that may happens to your data in this test system", options))));
  data.buffer.push("\n      </div>\n    </div>\n\n  </form>\n\n\n</aside>\n\n  </div>\n\n  <div class=\"panel-footer\">\n\n  </div>\n\n\n</div>\n\n");
  return buffer;
  }

  data.buffer.push("<h1>Oi! Teste Token.</h1>\n<!--\n");
  stack1 = helpers['if'].call(depth0, "isVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n--->");
  return buffer;
  
});Ember.TEMPLATES['components/we-auth-modal-login'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"btn btn-success navbar-login-buttom navbar-btn\">\n  <span class=\"glyphicon glyphicon-log-in\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Login", options) : helperMissing.call(depth0, "t", "Login", options))));
  data.buffer.push("\n</a>\n\n<!-- Modal -->\n<div class=\"modal\" id=\"AuthLoginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n<form class=\"form center-block\" role=\"form\" name=\"loginForm\" method=\"post\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" ng-click=\"closeModal()\">×</button>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Login Form", options) : helperMissing.call(depth0, "t", "Login Form", options))));
  data.buffer.push("\n</div>\n\n<div class=\"modal-body\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n  <!-- form-login -->\n  <div class=\"form-login\" data-ng-controller=\"LoginCtrl\" data-ng-hide=\"authorized\">\n      <div class=\"form-group\">\n        <label class=\"sr-only\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Email address", options) : helperMissing.call(depth0, "t", "Email address", options))));
  data.buffer.push("</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("controller.email"),
    'type': ("email"),
    'placeholder': ("controller.emailPlaceholder"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"sr-only\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Password", options) : helperMissing.call(depth0, "t", "Password", options))));
  data.buffer.push("</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("controller.password"),
    'type': ("password"),
    'placeholder': ("controller.passwordPlaceholder"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n\n    <p class=\"login-form-links\">\n      <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goToForgotPaswordPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"link\" href=\"/auth/forgot-password\">\n        <span class=\"glyphicon glyphicon-question-sign\"></span>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Forgot password?", options) : helperMissing.call(depth0, "t", "Forgot password?", options))));
  data.buffer.push("\n      </a>\n      |\n      <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goToRegisterPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"link\" href=\"/auth/reset-password\">\n        <span class=\"glyphicon glyphicon-log-in\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Register", options) : helperMissing.call(depth0, "t", "Register", options))));
  data.buffer.push("\n      </a>\n    </p>\n\n  </div>\n  <!-- /form-login -->\n\n</div>\n\n<div class=\"modal-footer\">\n\n<div class=\"row\">\n  <div class=\" col-sm-6\">\n    <button id=\"loginButton\" class=\"pull-left btn btn-primary\" type=\"submit\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Sign in", options) : helperMissing.call(depth0, "t", "Sign in", options))));
  data.buffer.push("</button>\n  </div>\n</div>\n\n</form>\n\n\n    </div>\n  </div>\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['avatar/image'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<img width=\"35\" height=\"35\" class=\"avatar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatarUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  return buffer;
  
});Ember.TEMPLATES['avatar/linkImage'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<a href=\"\">\n  <img width=\"35\" height=\"35\" class=\"avatar\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("avatarUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n</a>");
  return buffer;
  
});Ember.TEMPLATES['components/we-avatar-modal'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-image-crop'] || (depth0 && depth0['we-image-crop']),options={hash:{
    'src': ("salvedImage.urls.original"),
    'file': ("salvedImage"),
    'data': ("cropImageData")
  },hashTypes:{'src': "ID",'file': "ID",'data': "ID"},hashContexts:{'src': depth0,'file': depth0,'data': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image-crop", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"form-group\">\n        <br><br>\n          <div class=\"form-controll file-uploader\">\n            <div class=\"col-md-8\">\n              ");
  data.buffer.push(escapeExpression((helper = helpers['image-upload'] || (depth0 && depth0['image-upload']),options={hash:{
    'multiple': ("false"),
    'files': ("files")
  },hashTypes:{'multiple': "STRING",'files': "ID"},hashContexts:{'multiple': depth0,'files': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-upload", options))));
  data.buffer.push("\n            </div>\n          </div>\n        </div>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <button class=\"btn btn-primary\" type=\"buttom\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cropAndSave", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Salvar foto</button>\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <button class=\"btn btn-primary\" type=\"buttom\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Selecionar imagem</button>\n    ");
  return buffer;
  }

  data.buffer.push("<!-- Modal avatarChangeModal -->\n<div class=\"modal\" id=\"avatarChangeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n<form id=\"avatar-upload\" class=\"form-upload-avatar\" name=\"uploadAvatarForm\" >\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n    <h4 class=\"modal-title\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change avatar", options) : helperMissing.call(depth0, "t", "Change avatar", options))));
  data.buffer.push("</h4>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\"><div class=\" col-lg-offset-2 col-lg-8\">\n      ");
  stack1 = helpers['if'].call(depth0, "imageSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div></div>\n  </div>\n  <div class=\"modal-footer\">\n    ");
  stack1 = helpers['if'].call(depth0, "imageSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("</button>\n  </div>\n</form>\n    </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['comment/item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"comment-textarea form-group\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("body"),
    'classNames': ("form-control"),
    'rows': ("10")
  },hashTypes:{'value': "ID",'classNames': "STRING",'rows': "STRING"},hashContexts:{'value': depth0,'classNames': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n        </div>\n        <div class=\"actions\">\n          <div class=\"btn-group btn-group-xs\">\n            <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send", options) : helperMissing.call(depth0, "t", "Send", options))));
  data.buffer.push("</button>\n            <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComentTextarea", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("</button>\n          </div>\n        </div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers['simple-text'] || (depth0 && depth0['simple-text']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "body", options) : helperMissing.call(depth0, "simple-text", "body", options))));
  data.buffer.push("</div>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <div class=\"actions\">\n        ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "editComment", "model", options) : helperMissing.call(depth0, "can", "editComment", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "deleteComment", "model", options) : helperMissing.call(depth0, "can", "deleteComment", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <button type=\"button\" class=\"btn btn-xs btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <span class=\"glyphicon glyphicon-edit text-primary\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Edit", options) : helperMissing.call(depth0, "t", "Edit", options))));
  data.buffer.push("\n          </button>\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <button class=\"btn btn-xs btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteComment", "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n            <span class=\"glyphicon glyphicon-remove text-danger\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Delete", options) : helperMissing.call(depth0, "t", "Delete", options))));
  data.buffer.push("\n          </button>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"comment clearfix\">\n  <div class=\"user-avatar-area comment-left\">\n    <span class=\"creator-avatar\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'width': ("25px"),
    'userId': ("creator.id")
  },hashTypes:{'width': "STRING",'userId': "ID"},hashContexts:{'width': depth0,'userId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n  </div>\n  <div class=\"comment-right\">\n    <div class=\"comment-header\">\n        <span class=\"comment-username\">");
  stack1 = helpers._triageMustache.call(depth0, "creator.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <span class=\"createdAt comment-date\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "createdAt", options) : helperMissing.call(depth0, "format-date", "createdAt", options))));
  data.buffer.push("</span>\n    </div>\n    <div class=\"comment-body\">\n      ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    ");
  stack1 = helpers.unless.call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['comments/list'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment/item", "", options) : helperMissing.call(depth0, "render", "comment/item", "", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/list'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment/item", "", options) : helperMissing.call(depth0, "render", "comment/item", "", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-comment-form'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"comment-textarea form-group\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['focus-textarea'] || (depth0 && depth0['focus-textarea']),options={hash:{
    'value': ("body"),
    'classNames': ("form-control"),
    'rows': ("10")
  },hashTypes:{'value': "ID",'classNames': "STRING",'rows': "STRING"},hashContexts:{'value': depth0,'classNames': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "focus-textarea", options))));
  data.buffer.push("\n        </div>\n        <div class=\"actions\">\n          <div class=\"btn-group btn-group-xs\">\n            <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send", options) : helperMissing.call(depth0, "t", "Send", options))));
  data.buffer.push("</button>\n            <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComentTextarea", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("</button>\n          </div>\n        </div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openComentTextarea", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"comment-placeholder\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Add comment", options) : helperMissing.call(depth0, "t", "Add comment", options))));
  data.buffer.push("</div>\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"comment-form\">\n  <div class=\"user-avatar-area pull-left\">\n    <span class=\"creator-avatar avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("creatorId")
  },hashTypes:{'userId': "ID"},hashContexts:{'userId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n  </div>\n  <div class=\"comment-right\">\n   <div class=\"comment-body\">\n      ");
  stack1 = helpers['if'].call(depth0, "isOpenComentTextarea", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n   </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['image/UploadPreview'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<img class=\"image-preview\">\noi");
  
});Ember.TEMPLATES['image/crop'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"row\"><div class=\"col-md-12\">\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelCrop", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Cancel</button>\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveCrop", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Save</button>\n</div></div>\n<br>\n<div class=\"row\"><div class=\"col-md-12\">\n\n");
  data.buffer.push(escapeExpression((helper = helpers['we-image-crop'] || (depth0 && depth0['we-image-crop']),options={hash:{
    'src': ("image.urls.original"),
    'file': ("image"),
    'data': ("cropImageData")
  },hashTypes:{'src': "ID",'file': "ID",'data': "ID"},hashContexts:{'src': depth0,'file': depth0,'data': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image-crop", options))));
  data.buffer.push("\n\n</div></div>");
  return buffer;
  
});Ember.TEMPLATES['image/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"col-md-12\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "image.crop", "image.name", options) : helperMissing.call(depth0, "link-to", "image.crop", "image.name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n      Redimencionar\n    ");
  }

  data.buffer.push("<div class=\"row\">\n\n<div class=\"col-md-12\">\n");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send by", options) : helperMissing.call(depth0, "t", "Send by", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.UserNameView", {hash:{
    'user': ("creator")
  },hashTypes:{'user': "ID"},hashContexts:{'user': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<div class=\"col-md-12\">\n  <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.urls.large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "isCreator", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
  
});Ember.TEMPLATES['image/item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['group'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <h4>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "logo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <img width=\"100%\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("logo.urls.large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n            <img width=\"100%\" src=\"/core/images/logos/group2.jpg\">\n          ");
  }

  data.buffer.push("<div class=\"row\">\n<div class=\"col-md-3\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <div class=\"group-name\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group", "id", options) : helperMissing.call(depth0, "link-to", "group", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n\n      <div class=\"actions\">\n        <div class=\"btn-group btn-group-sm\">\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "unFollow", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default\">\n            <span class=\"glyphicon glyphicon-eye-open\"></span>\n            Sequindo\n          </button>\n\n          <div class=\"btn-group btn-group-sm\">\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownGroupActions\" data-toggle=\"dropdown\">\n              ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options))));
  data.buffer.push("\n              <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownGroupActions\">\n              <li role=\"presentation\">\n               <a href=\"#d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" role=\"menuitem\" tabindex=\"-1\" >\n                  <span class=\"text-primary glyphicon glyphicon-pencil\"></span>\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Edit", options) : helperMissing.call(depth0, "t", "Edit", options))));
  data.buffer.push("\n                </a>\n              <li role=\"presentation\" class=\"divider\"></li>\n              <li role=\"presentation\">\n                <a href=\"#d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" role=\"menuitem\" tabindex=\"-1\" >\n                  <span class=\"text-danger glyphicon glyphicon-remove\"></span>\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Delete", options) : helperMissing.call(depth0, "t", "Delete", options))));
  data.buffer.push("\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"group-logo\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group", "id", options) : helperMissing.call(depth0, "link-to", "group", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n\n    </div>\n  </div>\n</div>\n<div class=\"col-md-9\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n</div>");
  return buffer;
  
});Ember.TEMPLATES['group/create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers['we-image-crop'] || (depth0 && depth0['we-image-crop']),options={hash:{
    'src': ("salvedImage.urls.original"),
    'file': ("salvedImage"),
    'data': ("cropImageData")
  },hashTypes:{'src': "ID",'file': "ID",'data': "ID"},hashContexts:{'src': depth0,'file': depth0,'data': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image-crop", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"row\">\n        <div class=\"col-lg-9\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <label for=\"image\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Group image", options) : helperMissing.call(depth0, "t", "Group image", options))));
  data.buffer.push("</label>\n            </span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers['image-upload'] || (depth0 && depth0['image-upload']),options={hash:{
    'multiple': ("false"),
    'files': ("files"),
    'classNames': ("form-control")
  },hashTypes:{'multiple': "STRING",'files': "ID",'classNames': "STRING"},hashContexts:{'multiple': depth0,'files': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-upload", options))));
  data.buffer.push("\n          </div><!-- /input-group -->\n        </div><!-- /.col-lg-6 -->\n        <div class=\"col-lg-3\">\n          <div class=\"input-group\">\n            <button class=\"btn btn-primary\" type=\"buttom\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Selecionar imagem</button>\n          </div><!-- /input-group -->\n        </div><!-- /.col-lg-6 -->\n      </div><!-- /.row -->\n    ");
  return buffer;
  }

  data.buffer.push("<form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Create group", options) : helperMissing.call(depth0, "t", "Create group", options))));
  data.buffer.push("</h4>\n  </div>\n  <div class=\"panel-body\">\n\n    <div class=\"row\"><div class=\"col-lg-12\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <label for=\"name\" class=\"input-group-addon\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Group name", options) : helperMissing.call(depth0, "t", "Group name", options))));
  data.buffer.push("</label>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("name"),
    'name': ("name"),
    'value': ("group.name"),
    'type': ("text"),
    'placeholder': ("Enter group name"),
    'required': ("true"),
    'classNames': ("form-control")
  },hashTypes:{'id': "STRING",'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'id': depth0,'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <label for=\"privacity\" class=\"input-group-addon\">\n            <span class=\"glyphicon glyphicon-lock\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Privacity", options) : helperMissing.call(depth0, "t", "Privacity", options))));
  data.buffer.push("\n          </label>\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("Privacity"),
    'value': ("group.privacity"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.label"),
    'content': ("privacityList"),
    'classNames': ("form-control")
  },hashTypes:{'name': "STRING",'value': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'content': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'content': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n      </div>\n    </div><!-- /col-lg-12 --></div><!-- /row -->\n\n    ");
  stack1 = helpers['if'].call(depth0, "imageSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"panel-footer\">\n     <button class=\"btn btn-primary\" type=\"buttom\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cropAndSave", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Salvar grupo</button>\n  </div>\n</div>\n</form>");
  return buffer;
  
});Ember.TEMPLATES['group/feature'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['group/groupActionsBlock'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"actions\">\n  <div class=\"btn-group btn-group-sm\">\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "unFollow", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-default\">\n      <span class=\"glyphicon glyphicon-eye-open\"></span>\n      Sequindo\n    </button>\n\n    <div class=\"btn-group btn-group-sm\">\n      <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownGroupActions\" data-toggle=\"dropdown\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options))));
  data.buffer.push("\n        <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownGroupActions\">\n        <li role=\"presentation\">\n         <a href=\"#d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" role=\"menuitem\" tabindex=\"-1\" >\n            <span class=\"text-primary glyphicon glyphicon-pencil\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Edit", options) : helperMissing.call(depth0, "t", "Edit", options))));
  data.buffer.push("\n          </a>\n        <li role=\"presentation\" class=\"divider\"></li>\n        <li role=\"presentation\">\n          <a href=\"#d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" role=\"menuitem\" tabindex=\"-1\" >\n            <span class=\"text-danger glyphicon glyphicon-remove\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Delete", options) : helperMissing.call(depth0, "t", "Delete", options))));
  data.buffer.push("\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['group/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post/sharebox", "postNew", options) : helperMissing.call(depth0, "render", "post/sharebox", "postNew", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"sharebox-area\">\n  ");
  stack1 = helpers['if'].call(depth0, "App.auth.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Activity", options) : helperMissing.call(depth0, "t", "Activity", options))));
  data.buffer.push("</h3>\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "posts/list", "posts", options) : helperMissing.call(depth0, "render", "posts/list", "posts", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});Ember.TEMPLATES['group/teaser'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.substr || (depth0 && depth0.substr),options={hash:{
    'max': (15)
  },hashTypes:{'max': "INTEGER"},hashContexts:{'max': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "name", options) : helperMissing.call(depth0, "substr", "name", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers['if'].call(depth0, "logo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img width=\"100%\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("logo.urls.large")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n      ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n        <img width=\"100%\" src=\"/core/images/logos/group2.jpg\">\n      ");
  }

  data.buffer.push("<div class=\"col-md-3\">\n<div class=\"group group-teaser teaser panel panel-default text-center\">\n  <div class=\"header panel-heading\">\n    <h4>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group", "id", options) : helperMissing.call(depth0, "link-to", "group", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </h4>\n  </div>\n  <div class=\"content panel-body\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group", "id", options) : helperMissing.call(depth0, "link-to", "group", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"footer panel-footer\">\n    <span>10</span> <span>15</span>\n  </div>\n</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['groups/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "groups.create", options) : helperMissing.call(depth0, "link-to", "groups.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <hr>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Create group", options) : helperMissing.call(depth0, "t", "Create group", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group/teaser", "", options) : helperMissing.call(depth0, "render", "group/teaser", "", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div class=\"col-md-12\">\n      <p>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "No groups found", options) : helperMissing.call(depth0, "t", "No groups found", options))));
  data.buffer.push("</p>\n    </div>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"groups row\">\n  <div class=\"col-md-12\">\n    <h2>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Groups", options) : helperMissing.call(depth0, "t", "Groups", options))));
  data.buffer.push("\n      ");
  stack1 = helpers['if'].call(depth0, "App.currentUser.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </h2>\n  </div>\n  ");
  stack1 = helpers.each.call(depth0, "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-messenger-public-box'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'controller': ("MessengerMessages")
  },hashTypes:{'controller': "STRING"},hashContexts:{'controller': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/messages-public-room", "messages", options) : helperMissing.call(depth0, "render", "messenger/messages-public-room", "messages", options))));
  data.buffer.push("\n\n        <div class=\"footer\">\n          <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendMessage", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n            <div class=\"input-group\">\n\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("messageNew"),
    'value': ("messageNew"),
    'type': ("text"),
    'placeholder': ("messagePlaceholder"),
    'classNames': ("input-xs")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n              <span class=\"input-group-btn\">\n                <button  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-xs btn-primary\" type=\"submit\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send", options) : helperMissing.call(depth0, "t", "Send", options))));
  data.buffer.push("</button>\n              </span>\n            </div>\n          </form>\n        </div>\n\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"public-room-container\">\n<div class=\"messenger-column\">\n  <div class=\"messenger-chat-area\">\n    <div class=\"contact-chat\">\n      <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"header\">\n        <span class=\"contact-name\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Public", options) : helperMissing.call(depth0, "t", "Public", options))));
  data.buffer.push("</span>\n      </div>\n      <div class=\"actions\">\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"remove btn btn-danger btn-xs pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </div>\n\n      ");
  stack1 = helpers['if'].call(depth0, "isListOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-messenger'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"messenger\">\n          <div class=\"header\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Messenger", options) : helperMissing.call(depth0, "t", "Messenger", options))));
  data.buffer.push("\n          <button type=\"button\" class=\"remove btn btn-default btn-xs pull-right\">\n            <span class=\"glyphicon glyphicon-wrench\"></span>\n          </button>\n          </div>\n          <ul class=\"nav nav-list friendlist contact-list\">\n            ");
  stack1 = helpers.each.call(depth0, "contacts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </ul>\n          <ul class=\"nav nav-list rooms-list contact-list\">\n            <li class=\"global-room\">\n              <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openPublicBox", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Public room", options) : helperMissing.call(depth0, "t", "Public room", options))));
  data.buffer.push("\n              </a>\n            </li>\n          </ul>\n          <div class=\"search-area\">\n            <input type=\"search\" data-ng-model=\"searchFriend\" placeholder=\"Search ...\">\n          </div>\n        </div>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/contact", "", options) : helperMissing.call(depth0, "render", "messenger/contact", "", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"messenger-off\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          <span class=\"ui-icon ui-icon-person\"></span>\n          <span class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Messenger", options) : helperMissing.call(depth0, "t", "Messenger", options))));
  data.buffer.push("</span>\n          <button type=\"button\" class=\"remove btn btn-default btn-xs pull-right\">\n            <span class=\"glyphicon glyphicon-wrench\"></span>\n          </button>\n        </div>\n      ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/box", "", options) : helperMissing.call(depth0, "render", "messenger/box", "", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"messenger-area-wrapper\">\n  <div class=\"messenger-column\">\n    <div class=\"messenger-area\">\n      ");
  stack1 = helpers['if'].call(depth0, "isListOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n\n  ");
  stack1 = helpers.each.call(depth0, "openContacts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-messenger-public-box'] || (depth0 && depth0['we-messenger-public-box']),options={hash:{
    'store': ("store")
  },hashTypes:{'store': "ID"},hashContexts:{'store': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-messenger-public-box", options))));
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['messenger/box'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n          <span class=\"messenger-status\"><img width='17px' src=\"/core/images/connected.png\"></span>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n          <span class=\"messenger-status\"><img width='17px' src=\"/core/images/disconnected.png\"></span>\n        ");
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <div class=\"contact is-writing\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("contactUser.id"),
    'width': ("20px")
  },hashTypes:{'userId': "ID",'width': "STRING"},hashContexts:{'userId': depth0,'width': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("\n            <span class=\"small is-writing-text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "messenger.contact.writing", options) : helperMissing.call(depth0, "t", "messenger.contact.writing", options))));
  data.buffer.push("</span>\n          </div>\n        ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"messenger-column\">\n  <div class=\"messenger-chat-area\">\n    <div class=\"contact-chat\" tabindex=\"0\">\n      <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"header\">\n        ");
  stack1 = helpers['if'].call(depth0, "isOnline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <span class=\"contact-name\">");
  stack1 = helpers._triageMustache.call(depth0, "contactUser.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      </div>\n      <div class=\"actions\">\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"remove btn btn-danger btn-xs pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </div>\n\n      <div class=\"action-bar\">\n\n      </div>\n\n      <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isListOpen")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'id': ("boxId")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/messages", "messages", options) : helperMissing.call(depth0, "render", "messenger/messages", "messages", options))));
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "isWriting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"footer\">\n          <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendMessage", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" method=\"post\">\n            <div class=\"input-group\">\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("messageNew"),
    'value': ("messageNew"),
    'type': ("text"),
    'placeholder': ("messagePlaceholder"),
    'classNames': ("input-xs")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n              <span class=\"input-group-btn\">\n                <button  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-xs btn-primary\" type=\"submit\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send", options) : helperMissing.call(depth0, "t", "Send", options))));
  data.buffer.push("</button>\n              </span>\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['messenger/contact'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      <span class=\"contact-status\"><img src=\"/core/images/connected.png\"></span>\n    ");
  }

  data.buffer.push("<li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("contactClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "startTalk", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" >\n    <span class=\"avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("contactUser.id")
  },hashTypes:{'userId': "ID"},hashContexts:{'userId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n    ");
  stack1 = helpers['if'].call(depth0, "isOnline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "contactUser.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </a>\n</li>");
  return buffer;
  
});Ember.TEMPLATES['messenger/message-room'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("messageClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\n  <span class=\"avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("fromId.id")
  },hashTypes:{'userId': "ID"},hashContexts:{'userId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n  <span class=\"message\">");
  stack1 = helpers._triageMustache.call(depth0, "content.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n  <div class=\"message-footer\">\n    <span class=\"createdAt\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "createdAt", options) : helperMissing.call(depth0, "format-date", "createdAt", options))));
  data.buffer.push("\n    </span>\n  </div>\n</div>\n\n");
  return buffer;
  
});Ember.TEMPLATES['messenger/message'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <i title=\"read\" class=\"glyphicon glyphicon-ok-circle text-success\"> </i>\n      ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <i title=\"unread\" class=\"glyphicon glyphicon-question-sign\"> </i>\n      ");
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("messageClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\n  <span class=\"avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("fromId.id")
  },hashTypes:{'userId': "ID"},hashContexts:{'userId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n  <span class=\"message\">");
  stack1 = helpers._triageMustache.call(depth0, "content.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n  <div class=\"message-footer\">\n    <span class=\"createdAt\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "createdAt", options) : helperMissing.call(depth0, "format-date", "createdAt", options))));
  data.buffer.push("\n    </span>\n    <span class=\"small read-status\">\n      ");
  stack1 = helpers['if'].call(depth0, "read", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n  </div>\n</div>\n\n");
  return buffer;
  
});Ember.TEMPLATES['messenger/messages-public-room'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'controller': ("MessengerMessage")
  },hashTypes:{'controller': "STRING"},hashContexts:{'controller': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/message-room", "", options) : helperMissing.call(depth0, "render", "messenger/message-room", "", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div scrollto=\"bottom\" id=\"messengerBox-public\" class=\"messages\">\n  ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['messenger/messages-room'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/message-room", "", options) : helperMissing.call(depth0, "render", "messenger/message-room", "", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['messenger/messages'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/message", "", options) : helperMissing.call(depth0, "render", "messenger/message", "", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-notifications-count'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "count", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-notifications-link'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<i class=\"glyphicon glyphicon-bell\"></i> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Notifications", options) : helperMissing.call(depth0, "t", "Notifications", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers['we-notifications-count'] || (depth0 && depth0['we-notifications-count']),options={hash:{
    'count': ("notificationCount")
  },hashTypes:{'count': "ID"},hashContexts:{'count': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-notifications-count", options))));
  return buffer;
  
});Ember.TEMPLATES['notification/text'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n     - ver perfil\n  ");
  }

  data.buffer.push("<a href=\"#gotoLink\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "onClickInText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.text", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n  ");
  stack1 = helpers['if'].call(depth0, "contact_requested", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = helpers['if'].call(depth0, "contact_accepted", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</a>\n");
  return buffer;
  
});Ember.TEMPLATES['notifications'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<aside class=\"col-sm-3\" role=\"complementary\">\n  <div class=\"region region-sidebar-first well\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications/sidebar", options) : helperMissing.call(depth0, "partial", "notifications/sidebar", options))));
  data.buffer.push("\n  </div>\n</aside>\n\n<section id=\"main-content-area\" class=\"col-sm-9\">\n  <div id=\"main-content-inner\">\n  <a id=\"main-content\"></a>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</section>\n");
  return buffer;
  
});Ember.TEMPLATES['notifications/item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("itemClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <td ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("notificationType")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </td>\n  <td>\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.NotificationTextView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </td>\n  <td>\n    <a href=\"#changeRead\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeNotificedStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("itemClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >");
  stack1 = helpers._triageMustache.call(depth0, "linkStatusText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n  </td>\n</tr>");
  return buffer;
  
});Ember.TEMPLATES['notifications/lidas'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "notifications/item", "", options) : helperMissing.call(depth0, "render", "notifications/item", "", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n          <tr >\n            <td colspan=\"3\">\n              <div class=\"jumbotron text-center\">\n                Nenhuma notificação lida.\n              </div>\n            </td>\n          </tr>\n        ");
  }

  data.buffer.push("<h2 class=\"title\">Notificações lidas</h2>\n<div class=\"region region-content\">\n<section id=\"block-system-main\" class=\"block block-system clearfix\">\n  <div class=\"table-responsive clearfix\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Notificação</th>\n          <th>Ações</th>\n        </tr>\n      </thead>\n      <tbody>\n        ");
  stack1 = helpers.each.call(depth0, "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </tbody>\n    </table>\n  </div>\n</section>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['notifications/nao-lidas'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "notifications/item", "", options) : helperMissing.call(depth0, "render", "notifications/item", "", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <tr >\n          <td colspan=\"3\">\n            <div class=\"jumbotron text-center\">\n              Nenhuma notificação nova.\n            </div>\n          </td>\n        </tr>\n        ");
  }

  data.buffer.push("<h2 class=\"title\">Notificações novas</h2>\n<div class=\"region region-content\">\n<section id=\"block-system-main\" class=\"block block-system clearfix\">\n  <div class=\"notifications-actions\">\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markAllAsRead", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("isEmpty")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-default notificacao-marcar-tudo-lido pull-right \">Marcar todas como lidas</button>\n  </div>\n  <div class=\"table-responsive clearfix\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Notificação</th>\n          <th>Ações</th>\n        </tr>\n      </thead>\n      <tbody>\n        ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </tbody>\n    </table>\n  </div>\n</section>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['notifications/sidebar'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      Novas\n      ");
  data.buffer.push(escapeExpression((helper = helpers['we-notifications-count'] || (depth0 && depth0['we-notifications-count']),options={hash:{
    'count': ("App.WeNotification.notificationCount"),
    'pullRight': (true)
  },hashTypes:{'count': "ID",'pullRight': "BOOLEAN"},hashContexts:{'count': depth0,'pullRight': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-notifications-count", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      Lidas\n      ");
  data.buffer.push(escapeExpression((helper = helpers['we-notifications-count'] || (depth0 && depth0['we-notifications-count']),options={hash:{
    'count': ("App.WeNotification.readNotificationCount"),
    'highlight': (false),
    'pullRight': (true)
  },hashTypes:{'count': "ID",'highlight': "BOOLEAN",'pullRight': "BOOLEAN"},hashContexts:{'count': depth0,'highlight': depth0,'pullRight': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-notifications-count", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<ul class=\"nav nav-pills nav-stacked\">\n  <li>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications", options) : helperMissing.call(depth0, "link-to", "notifications", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </li>\n  <li>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.lidas", options) : helperMissing.call(depth0, "link-to", "notifications.lidas", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </li>\n</ul>");
  return buffer;
  
});Ember.TEMPLATES['components/we-sharebox'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.postEditFormView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openBox", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"post-placeholder form-control post-content\"> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "What is happening?", options) : helperMissing.call(depth0, "t", "What is happening?", options))));
  data.buffer.push("</div>\n      ");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("shareboxClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      ");
  stack1 = helpers['if'].call(depth0, "isOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-wembed'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"site-embed-editing\">\n    <div class=\"wembed-actions clearfix\">\n      <a class=\"btn btn-danger wembed-delete-link pull-right\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteWembed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <span class=\"glyphicon glyphicon-remove\"> </span>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "wembed.remove", options) : helperMissing.call(depth0, "t", "wembed.remove", options))));
  data.buffer.push("\n      </a>\n    </div>\n\n    <div class=\"site-embed\">\n\n      ");
  stack1 = helpers['if'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <h1 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n      <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </div>\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"site-embed-image\">\n          ");
  stack1 = helpers['if'].call(depth0, "showImageSelector", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = helpers['with'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("wembedImageActionClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n              ");
  stack1 = helpers.each.call(depth0, "wembed.images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n          ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <span class=\"text-center\">\n                <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeWembedImage", "_view.contentIndex", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "_view.contentIndex", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n              </span>\n              ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n          ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div class=\"site-embed\">\n  ");
  stack1 = helpers['if'].call(depth0, "isPlaying", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class='site-embed-video-area'>\n      <iframe width=\"560\" height=\"315\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("videoEmbedSrc")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("   frameborder=\"0\" autoplay=\"1\" allowfullscreen></iframe>\n    </div>\n    <h1 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n    <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n  ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <a class=\"embed-link\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "playVideo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("wembed.url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['with'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <h1 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n      <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </a>\n  ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div class=\"site-embed-image\">\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        </div>\n      ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div class=\"site-embed\">\n    <a class=\"embed-link\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("wembed.url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['with'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <h1 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n      <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </a>\n  </div>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isVideo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isPage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['post'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <span class=\"creator-avatar avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("post.creator.id")
  },hashTypes:{'userId': "ID"},hashContexts:{'userId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n        <span class=\"creator-name\">");
  stack1 = helpers._triageMustache.call(depth0, "post.creator.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"panel-body\">\n      ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.postEditFormView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"content\">\n          <div class=\"post-text\">");
  data.buffer.push(escapeExpression((helper = helpers['marked-text'] || (depth0 && depth0['marked-text']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "body", options) : helperMissing.call(depth0, "marked-text", "body", options))));
  data.buffer.push("</div>\n          ");
  stack1 = helpers['if'].call(depth0, "wembed.url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          <div class=\"videos\">\n            ");
  stack1 = helpers.each.call(depth0, "videos", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n          <div class=\"images row\">\n            ");
  stack1 = helpers.each.call(depth0, "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        </div>\n        <div class=\"footer\">\n          <div class=\"actions\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-flag'] || (depth0 && depth0['we-flag']),options={hash:{
    'flagType': ("like"),
    'model': ("post"),
    'modelId': ("id"),
    'flagText': ("<span class=\"glyphicon glyphicon-thumbs-up\"></span>")
  },hashTypes:{'flagType': "STRING",'model': "STRING",'modelId': "ID",'flagText': "STRING"},hashContexts:{'flagType': depth0,'model': depth0,'modelId': depth0,'flagText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-flag", options))));
  data.buffer.push("\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-follow'] || (depth0 && depth0['we-follow']),options={hash:{
    'model': ("post"),
    'modelId': ("id"),
    'flagText': ("Seguir")
  },hashTypes:{'model': "STRING",'modelId': "ID",'flagText': "STRING"},hashContexts:{'model': depth0,'modelId': depth0,'flagText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-follow", options))));
  data.buffer.push("\n\n            ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{
    'content': ("")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "editPost", options) : helperMissing.call(depth0, "can", "editPost", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{
    'content': ("")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "deletePost", options) : helperMissing.call(depth0, "can", "deletePost", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "App.auth.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        </div>\n      ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-wembed'] || (depth0 && depth0['we-wembed']),options={hash:{
    'url': ("wembed.url"),
    'imageIndex': ("wembed.imageIndex")
  },hashTypes:{'url': "ID",'imageIndex': "ID"},hashContexts:{'url': depth0,'imageIndex': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wembed", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers['we-video'] || (depth0 && depth0['we-video']),options={hash:{
    'url': ("")
  },hashTypes:{'url': "ID"},hashContexts:{'url': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-video", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <div class=\"col-md-3\">\n                ");
  stack1 = (helper = helpers['we-lightbox'] || (depth0 && depth0['we-lightbox']),options={hash:{
    'href': ("urls.original"),
    'ligthBoxName': ("inPost")
  },hashTypes:{'href': "ID",'ligthBoxName': "ID"},hashContexts:{'href': depth0,'ligthBoxName': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-lightbox", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </div>\n            ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['we-image'] || (depth0 && depth0['we-image']),options={hash:{
    'file': (""),
    'size': ("large")
  },hashTypes:{'file': "ID",'size': "STRING"},hashContexts:{'file': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <button type=\"button\" class=\"btn btn-xs btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                <span class=\"glyphicon glyphicon-edit text-primary\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Edit", options) : helperMissing.call(depth0, "t", "Edit", options))));
  data.buffer.push("\n              </button>\n            ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <button class=\"btn btn-xs btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                <span class=\"glyphicon glyphicon-remove text-danger\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Delete", options) : helperMissing.call(depth0, "t", "Delete", options))));
  data.buffer.push("\n              </button>\n            ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['query-params'] || (depth0 && depth0['query-params']),options={hash:{
    'anchor': ("add-comment")
  },hashTypes:{'anchor': "STRING"},hashContexts:{'anchor': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "query-params", options));
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-xs btn-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","sexpr"],data:data},helper ? helper.call(depth0, "post", "id", stack1, options) : helperMissing.call(depth0, "link-to", "post", "id", stack1, options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <span class=\"glyphicon glyphicon-comment\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Comment", options) : helperMissing.call(depth0, "t", "Comment", options))));
  data.buffer.push("\n              ");
  return buffer;
  }

  data.buffer.push("<div class=\"content-block post\">\n<div class=\"full-post panel panel-default\">\n\n  <div class=\"header panel-heading\">\n    <span class=\"creator\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "post.creator.id", options) : helperMissing.call(depth0, "link-to", "user", "post.creator.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showSharedWith", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\" class=\"shared-with text-mute\">\n      <span class=\"glyphicon glyphicon-globe\"></span>\n    </a>\n    <span class=\"createdAt post-created-at\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "post.createdAt", options) : helperMissing.call(depth0, "format-date", "post.createdAt", options))));
  data.buffer.push("</span>\n  </div>\n  ");
  stack1 = helpers['with'].call(depth0, "post", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <div class=\"panel-footer\">\n    <div class=\"comments-header\">\n      <span>Total de ");
  stack1 = helpers._triageMustache.call(depth0, "post.commentCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" comentarios.</span>\n    </div>\n    <hr>\n    <div class=\"comments\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comments/list", "commentsList", options) : helperMissing.call(depth0, "render", "comments/list", "commentsList", options))));
  data.buffer.push("\n    </div>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-comment-form'] || (depth0 && depth0['we-comment-form']),options={hash:{
    'creatorId': ("App.currentUser.id"),
    'commentNew': ("saveNewComment")
  },hashTypes:{'creatorId': "ID",'commentNew': "ID"},hashContexts:{'creatorId': depth0,'commentNew': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-comment-form", options))));
  data.buffer.push("\n  </div>\n</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['post/edit-form-content-view'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n<div class=\"form-group attach-options\">\n  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openShareImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-xs btn-default\">\n    <i class=\"glyphicon glyphicon-picture\"></i> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Image", options) : helperMissing.call(depth0, "t", "Image", options))));
  data.buffer.push("\n  </button>\n</div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-wembed'] || (depth0 && depth0['we-wembed']),options={hash:{
    'url': ("wembed.url"),
    'imageIndex': ("wembed.imageIndex"),
    'isEditing': ("true")
  },hashTypes:{'url': "ID",'imageIndex': "ID",'isEditing': "STRING"},hashContexts:{'url': depth0,'imageIndex': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wembed", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <div class=\"form-group\">\n    <div class=\"form-group row add-images\">\n      <label for=\"addImages\" class=\"col-sm-2 control-label\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Attach images", options) : helperMissing.call(depth0, "t", "Attach images", options))));
  data.buffer.push("</label>\n      <div class=\"col-sm-10\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['image-upload'] || (depth0 && depth0['image-upload']),options={hash:{
    'classNames': ("we-share-images-input"),
    'files': ("filesNew")
  },hashTypes:{'classNames': "STRING",'files': "ID"},hashContexts:{'classNames': depth0,'files': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-upload", options))));
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"col-xs-6 col-md-3\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-image-preview'] || (depth0 && depth0['we-image-preview']),options={hash:{
    'file': (""),
    'onRemove': ("onRemoveImage")
  },hashTypes:{'file': "ID",'onRemove': "STRING"},hashContexts:{'file': depth0,'onRemove': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image-preview", options))));
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"col-xs-6 col-md-3\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-image'] || (depth0 && depth0['we-image']),options={hash:{
    'file': (""),
    'onClick': ("onRemoveSalvedImage")
  },hashTypes:{'file': "ID",'onClick': "STRING"},hashContexts:{'file': depth0,'onClick': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image", options))));
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"form-group\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-wysiwyg-editor'] || (depth0 && depth0['we-wysiwyg-editor']),options={hash:{
    'name': ("body"),
    'linkedPage': ("newWembed"),
    'value': ("body"),
    'onChangeText': ("onChangeBodyText"),
    'onPasteText': ("onPasteBodyText")
  },hashTypes:{'name': "STRING",'linkedPage': "ID",'value': "ID",'onChangeText': "STRING",'onPasteText': "STRING"},hashContexts:{'name': depth0,'linkedPage': depth0,'value': depth0,'onChangeText': depth0,'onPasteText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wysiwyg-editor", options))));
  data.buffer.push("\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "selectingAttachOption", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"form-group\">\n  ");
  stack1 = helpers['if'].call(depth0, "wembed.url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "shareImages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"form-group images-preview\">\n  <div class=\"row\">\n    ");
  stack1 = helpers.each.call(depth0, "files", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers.each.call(depth0, "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n\n<div class=\"footer\">\n  <div class=\"actions\">\n    <button type=\"submit\" class=\"btn btn-primary\">\n      <span class=\"glyphicon glyphicon-ok\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Share", options) : helperMissing.call(depth0, "t", "Share", options))));
  data.buffer.push("\n    </button>\n    <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default cancel\"> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("</button>\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['post/sharebox'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.postEditFormView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openBox", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"post-placeholder form-control post-content\"> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "What is happening?", options) : helperMissing.call(depth0, "t", "What is happening?", options))));
  data.buffer.push("</div>\n      ");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("shareboxClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      ");
  stack1 = helpers['if'].call(depth0, "isOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['post/teaser'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <span class=\"creator-avatar avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("creator.id")
  },hashTypes:{'userId': "ID"},hashContexts:{'userId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n        <span class=\"creator-name\">");
  stack1 = helpers._triageMustache.call(depth0, "creator.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n       Link\n    ");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.postEditFormView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <div class=\"content\">\n        <div class=\"post-text\">");
  data.buffer.push(escapeExpression((helper = helpers['marked-text'] || (depth0 && depth0['marked-text']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "body", options) : helperMissing.call(depth0, "marked-text", "body", options))));
  data.buffer.push("</div>\n        ");
  stack1 = helpers['if'].call(depth0, "wembed.url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"videos\">\n          ");
  stack1 = helpers.each.call(depth0, "videos", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"images row\">\n          ");
  stack1 = helpers.each.call(depth0, "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div>\n      <div class=\"footer\">\n        <div class=\"actions\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-flag'] || (depth0 && depth0['we-flag']),options={hash:{
    'flagType': ("like"),
    'model': ("post"),
    'modelId': ("id"),
    'flagText': ("<span class=\"glyphicon glyphicon-thumbs-up\"></span>")
  },hashTypes:{'flagType': "STRING",'model': "STRING",'modelId': "ID",'flagText': "STRING"},hashContexts:{'flagType': depth0,'model': depth0,'modelId': depth0,'flagText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-flag", options))));
  data.buffer.push("\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-follow'] || (depth0 && depth0['we-follow']),options={hash:{
    'model': ("post"),
    'modelId': ("id"),
    'flagText': ("Seguir")
  },hashTypes:{'model': "STRING",'modelId': "ID",'flagText': "STRING"},hashContexts:{'model': depth0,'modelId': depth0,'flagText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-follow", options))));
  data.buffer.push("\n\n          ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "editPost", "model", options) : helperMissing.call(depth0, "can", "editPost", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "deletePost", "model", options) : helperMissing.call(depth0, "can", "deletePost", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-xs btn-default")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "id", options) : helperMissing.call(depth0, "link-to", "post", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = helpers['if'].call(depth0, "App.auth.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div>\n    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-wembed'] || (depth0 && depth0['we-wembed']),options={hash:{
    'url': ("wembed.url"),
    'imageIndex': ("wembed.imageIndex")
  },hashTypes:{'url': "ID",'imageIndex': "ID"},hashContexts:{'url': depth0,'imageIndex': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wembed", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-video'] || (depth0 && depth0['we-video']),options={hash:{
    'url': ("")
  },hashTypes:{'url': "ID"},hashContexts:{'url': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-video", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"col-md-3\">\n              ");
  stack1 = (helper = helpers['we-lightbox'] || (depth0 && depth0['we-lightbox']),options={hash:{
    'href': ("urls.original"),
    'ligthBoxName': ("inPost")
  },hashTypes:{'href': "ID",'ligthBoxName': "ID"},hashContexts:{'href': depth0,'ligthBoxName': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-lightbox", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n          ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers['we-image'] || (depth0 && depth0['we-image']),options={hash:{
    'file': (""),
    'size': ("large")
  },hashTypes:{'file': "ID",'size': "STRING"},hashContexts:{'file': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image", options))));
  data.buffer.push("\n              ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <button type=\"button\" class=\"btn btn-xs btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n              <span class=\"glyphicon glyphicon-edit text-primary\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Edit", options) : helperMissing.call(depth0, "t", "Edit", options))));
  data.buffer.push("\n            </button>\n          ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <button class=\"btn btn-xs btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n              <span class=\"glyphicon glyphicon-remove text-danger\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Delete", options) : helperMissing.call(depth0, "t", "Delete", options))));
  data.buffer.push("\n            </button>\n          ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <span class=\"glyphicon glyphicon-link text-success\"></span>  ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "post.link.show", options) : helperMissing.call(depth0, "t", "post.link.show", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['query-params'] || (depth0 && depth0['query-params']),options={hash:{
    'anchor': ("comments")
  },hashTypes:{'anchor': "STRING"},hashContexts:{'anchor': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "query-params", options));
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-xs btn-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","sexpr"],data:data},helper ? helper.call(depth0, "post", "id", stack1, options) : helperMissing.call(depth0, "link-to", "post", "id", stack1, options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <span class=\"glyphicon glyphicon-comment\"></span> ");
  stack1 = helpers._triageMustache.call(depth0, "model.commentCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Comment", options) : helperMissing.call(depth0, "t", "Comment", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"content-block post\">\n<div class=\"post-teaser teaser panel panel-default\">\n  <div class=\"header panel-heading\">\n    <span class=\"creator\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "creator.id", options) : helperMissing.call(depth0, "link-to", "user", "creator.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showSharedWith", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\" class=\"shared-with text-mute\">\n      <span class=\"glyphicon glyphicon-globe\"></span>\n    </a>\n    |\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("small")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "id", options) : helperMissing.call(depth0, "link-to", "post", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <span class=\"createdAt post-created-at\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "createdAt", options) : helperMissing.call(depth0, "format-date", "createdAt", options))));
  data.buffer.push("</span>\n  </div>\n\n  <div class=\"panel-body\">\n\n    ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['posts'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['posts/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n  <div class=\"col-md-3\">\n    TODO! add filters here\n  </div>\n\n  <div class=\"col-md-9\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "posts/list", "posts", options) : helperMissing.call(depth0, "render", "posts/list", "posts", options))));
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['posts/list'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <br>\n    <div class=\"alert alert-info text-center\" role=\"alert\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "posts.loading", options) : helperMissing.call(depth0, "t", "posts.loading", options))));
  data.buffer.push("... <img src=\"/core/images/loading.gif\">\n    </div>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post/teaser", "", options) : helperMissing.call(depth0, "render", "post/teaser", "", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers.unless.call(depth0, "App.postIsLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n      <br>\n      <div class=\"alert alert-warning text-center\" role=\"alert\">\n        Nenhum conteúdo encontrado\n      </div>\n    ");
  }

  data.buffer.push("<div class=\"context-search\">\n  <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filter", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"form-inline\" role=\"form\">\n    <div class=\"form-group\">\n      <label for=\"searchString\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "posts.search.string.label", options) : helperMissing.call(depth0, "t", "posts.search.string.label", options))));
  data.buffer.push("</label>\n    </div>\n    <div class=\"form-group\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("searchString"),
    'placeholderTranslation': ("posts.search.string.placeholder"),
    'classNames': ("form-control input-sm"),
    'value': ("searchString")
  },hashTypes:{'name': "STRING",'placeholderTranslation': "STRING",'classNames': "STRING",'value': "ID"},hashContexts:{'name': depth0,'placeholderTranslation': depth0,'classNames': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n\n    <div class=\"form-group\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("searchSort"),
    'classNames': ("form-control input-sm"),
    'content': ("querySortOptions"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.label"),
    'value': ("selectedSort")
  },hashTypes:{'name': "STRING",'classNames': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'name': depth0,'classNames': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n\n    <div class=\"form-group\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("searchOrder"),
    'classNames': ("form-control input-sm"),
    'content': ("queryOrderOptions"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.label"),
    'value': ("selectedOrder")
  },hashTypes:{'name': "STRING",'classNames': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'name': depth0,'classNames': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"form-control input-sm btn-info\" type=\"submit\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "posts.search.submit", options) : helperMissing.call(depth0, "t", "posts.search.submit", options))));
  data.buffer.push("</button>\n    </div>\n    <div class=\"form-group\">\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetSearch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"form-control input-sm\" type=\"button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "posts.search.reset", options) : helperMissing.call(depth0, "t", "posts.search.reset", options))));
  data.buffer.push("</button>\n    </div>\n  </form>\n</div>\n\n<div id=\"posts\" class=\"posts\">\n  ");
  stack1 = helpers['if'].call(depth0, "App.postIsLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  data.buffer.push(escapeExpression((helper = helpers['we-timeline-loading'] || (depth0 && depth0['we-timeline-loading']),options={hash:{
    'loadingMore': ("loadingMore"),
    'getMore': ("getMore")
  },hashTypes:{'loadingMore': "ID",'getMore': "ID"},hashContexts:{'loadingMore': depth0,'getMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-timeline-loading", options))));
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['views/post-wembed'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div class=\"site-embed\">\n    ");
  stack1 = helpers.each.call(depth0, "wembed.images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <h1 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n    <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <div class=\"site-embed-image\">\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      </div>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div class=\"site-embed\">\n    <a class=\"embed-link\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("wembed.url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers.each.call(depth0, "wembed.images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <h1 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n      <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </a>\n  </div>\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div class=\"site-embed-image\">\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        </div>\n      ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['user'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <div class=\"user-admin-actions-area well\">\n    <div class=\"actions\">\n      <span class=\"actions-title\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options))));
  data.buffer.push(": </span>\n\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-xs btn-success\">\n        <span class=\"glyphicon glyphicon-saved\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Save", options) : helperMissing.call(depth0, "t", "Save", options))));
  data.buffer.push("\n      </button>\n\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-xs btn-default\">\n        <span class=\"glyphicon glyphicon-unchecked\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("\n      </button>\n\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-xs btn-primary\">\n        <span class=\"glyphicon glyphicon-edit\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Edit", options) : helperMissing.call(depth0, "t", "Edit", options))));
  data.buffer.push("\n      </button>\n\n    </div>\n  </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div class=\"form-group\">\n              ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("language"),
    'value': ("user.language"),
    'content': ("defaultlanguages"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "STRING",'value': "ID",'content': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'content': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"language-area text-center\">");
  stack1 = helpers._triageMustache.call(depth0, "user.language", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <span class=\"social\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ContactButtomView", {hash:{
    'contactStatus': ("contactStatus")
  },hashTypes:{'contactStatus': "ID"},hashContexts:{'contactStatus': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers['we-follow'] || (depth0 && depth0['we-follow']),options={hash:{
    'model': ("user"),
    'modelId': ("user.id"),
    'flagText': ("Seguir")
  },hashTypes:{'model': "STRING",'modelId': "ID",'flagText': "STRING"},hashContexts:{'model': depth0,'modelId': depth0,'flagText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-follow", options))));
  data.buffer.push("\n              </span>\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Activity", options) : helperMissing.call(depth0, "t", "Activity", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Contacts", options) : helperMissing.call(depth0, "t", "Contacts", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Images", options) : helperMissing.call(depth0, "t", "Images", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("\n");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "editUser", "model.user", options) : helperMissing.call(depth0, "can", "editUser", "model.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"user-full\">\n  <div class=\"panel panel-default\">\n    <div class=\"header panel-body\">\n      <div class=\"user-area-data row\">\n        <div class=\"user-area-data-left col-md-2\" >\n          <span class=\"avatar-large\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("user.id"),
    'size': ("responsive")
  },hashTypes:{'userId': "ID",'size': "STRING"},hashContexts:{'userId': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n\n          ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n        <div class=\"user-area-data-rigth col-md-10\">\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-editable-text'] || (depth0 && depth0['we-editable-text']),options={hash:{
    'tagName': ("h1"),
    'name': ("displayName"),
    'value': ("user.displayName"),
    'isEditing': ("isEditing")
  },hashTypes:{'tagName': "STRING",'name': "STRING",'value': "ID",'isEditing': "ID"},hashContexts:{'tagName': depth0,'name': depth0,'value': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editable-text", options))));
  data.buffer.push("\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-editable-html'] || (depth0 && depth0['we-editable-html']),options={hash:{
    'name': ("biography"),
    'value': ("user.biography"),
    'isEditing': ("isEditing")
  },hashTypes:{'name': "STRING",'value': "ID",'isEditing': "ID"},hashContexts:{'name': depth0,'value': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editable-html", options))));
  data.buffer.push("\n\n          <div class=\"actions\">\n            ");
  stack1 = helpers['if'].call(depth0, "showSocialActions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"user-profile-menu-area text-center\">\n    <ul class=\"user-profile-menu nav nav-pills\">\n      <li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "user.id", options) : helperMissing.call(depth0, "link-to", "user", "user.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user.contacts", "user.id", options) : helperMissing.call(depth0, "link-to", "user.contacts", "user.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user.images", "user.id", options) : helperMissing.call(depth0, "link-to", "user.images", "user.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n    </ul>\n  </div>\n\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n  <div class=\"footer\">\n\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['user/contacts'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row pending\">\n  <div class=\"col-md-12\">\n      pending contacts here\n  </div>\n</div>\n<div class=\"row contacts\">\n  <div class=\"col-md-12\">\n     contacts\n  </div>\n</div>");
  
});Ember.TEMPLATES['user/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("edit.hbs");
  
});Ember.TEMPLATES['user/images'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"col-md-3\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "image", "name", options) : helperMissing.call(depth0, "link-to", "image", "name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("urls.thumbnail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n");
  stack1 = helpers.each.call(depth0, "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['user/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"user-activities\">\n  <h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Activity", options) : helperMissing.call(depth0, "t", "Activity", options))));
  data.buffer.push("</h3>\n ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "posts/list", "posts", options) : helperMissing.call(depth0, "render", "posts/list", "posts", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['user/teaser'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.substr || (depth0 && depth0.substr),options={hash:{
    'max': (15)
  },hashTypes:{'max': "INTEGER"},hashContexts:{'max': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "displayName", options) : helperMissing.call(depth0, "substr", "displayName", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <span class=\"avatar-large\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("id"),
    'size': ("medium")
  },hashTypes:{'userId': "ID",'size': "STRING"},hashContexts:{'userId': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-md-3\">\n<div class=\"user user-teaser teaser panel panel-default text-center\">\n  <div class=\"header panel-heading\">\n    <h3>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "id", options) : helperMissing.call(depth0, "link-to", "user", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </h3>\n  </div>\n  <div class=\"content panel-body\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "id", options) : helperMissing.call(depth0, "link-to", "user", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"footer panel-footer\">\n\n  </div>\n</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['user/usermenu'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<ul class=\"nav navbar-nav navbar-right\">\n  <li>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "we-connection-status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <a href=\"#\" class=\"dropdown-toggle user-menu-link\" data-toggle=\"dropdown\">\n      <span class=\"avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("App.currentUser.id")
  },hashTypes:{'userId': "ID"},hashContexts:{'userId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n      <span class=\"user-name \" >");
  stack1 = helpers._triageMustache.call(depth0, "App.currentUser.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><b class=\"caret\"></b>\n    </a>\n    <ul class=\"dropdown-menu\">\n      <li>\n        <a href=\"#ChangeAvatarModal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAvatarChangeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change avatar", options) : helperMissing.call(depth0, "t", "Change avatar", options))));
  data.buffer.push("\n        </a>\n      </li>\n      <li class=\"divider\"></li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "App.currentUser.id", options) : helperMissing.call(depth0, "link-to", "user", "App.currentUser.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li class=\"divider\"></li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authChangePassword", options) : helperMissing.call(depth0, "link-to", "authChangePassword", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li class=\"divider\"></li>\n      <li><a href=\"/auth/logout\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logOut", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Sair", options) : helperMissing.call(depth0, "t", "Sair", options))));
  data.buffer.push("</a></li>\n    </ul>\n  </li>\n</ul>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "View / edit profile", options) : helperMissing.call(depth0, "t", "View / edit profile", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change password", options) : helperMissing.call(depth0, "t", "Change password", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "App.auth.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['users'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['users/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user/teaser", "", options) : helperMissing.call(depth0, "render", "user/teaser", "", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div id=\"dynamic-grid-container\" class=\"users row\">\n  <div class=\"col-md-12\"><h2>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Users", options) : helperMissing.call(depth0, "t", "Users", options))));
  data.buffer.push("</h2></div>\n  ");
  stack1 = helpers.each.call(depth0, "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['partials/novo'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("novo.hbs");
  
});