Ext.data.JsonP.Ext_Error({"alternateClassNames":[],"inheritdoc":null,"singleton":false,"statics":{"cfg":[],"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"members":{"cfg":[],"method":[{"meta":{},"owner":"Ext.Error","name":"getMessage","id":"method-getMessage","tagname":"method"},{"meta":{},"owner":"Ext.Error","name":"getName","id":"method-getName","tagname":"method"},{"meta":{},"owner":"Ext.Error","name":"toJson","id":"method-toJson","tagname":"method"}],"event":[],"property":[],"css_var":[],"css_mixin":[]},"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":["Error"],"name":"Ext.Error","files":[{"href":"ext-all-debug-w-comments.html#Ext-Error","filename":"ext-all-debug-w-comments.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Error<div class='subclass '><strong>Ext.Error</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.data.Api.Error' rel='Ext.data.Api.Error' class='docClass'>Ext.data.Api.Error</a></div><div class='dependency'><a href='#!/api/Ext.data.DataProxy.Error' rel='Ext.data.DataProxy.Error' class='docClass'>Ext.data.DataProxy.Error</a></div><div class='dependency'><a href='#!/api/Ext.data.DataReader.Error' rel='Ext.data.DataReader.Error' class='docClass'>Ext.data.DataReader.Error</a></div><div class='dependency'><a href='#!/api/Ext.data.JsonReader.Error' rel='Ext.data.JsonReader.Error' class='docClass'>Ext.data.JsonReader.Error</a></div><div class='dependency'><a href='#!/api/Ext.data.Store.Error' rel='Ext.data.Store.Error' class='docClass'>Ext.data.Store.Error</a></div><div class='dependency'><a href='#!/api/Ext.ux.ManagedIFrame.Error' rel='Ext.ux.ManagedIFrame.Error' class='docClass'>Ext.ux.ManagedIFrame.Error</a></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-Error' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>A base error class. Future implementations are intended to provide more\nrobust error handling throughout the framework (<b>in the debug build only</b>)\nto check for common errors and problems. The messages issued by this class\nwill aid error checking. Error checks will be automatically removed in the\nproduction build so that performance is not negatively impacted.</p>\n\n\n<p>Some sample messages currently implemented:</p>\n\n\n<pre>\"DataProxy attempted to execute an API-action but found an undefined\nurl / function. Please review your Proxy url/api-configuration.\"\n</pre>\n\n\n<pre>\"Could not locate your \"root\" property in your server response.\nPlease review your JsonReader config to ensure the config-property\n\"root\" matches the property your server-response.  See the JsonReader\ndocs for additional assistance.\"\n</pre>\n\n\n<p>An example of the code used for generating error messages:</p>\n\n\n<pre><code>try {\n    generateError({\n        foo: 'bar'\n    });\n}\ncatch (e) {\n    console.error(e);\n}\nfunction generateError(data) {\n    throw new <a href=\"#!/api/Ext.Error\" rel=\"Ext.Error\" class=\"docClass\">Ext.Error</a>('foo-error', data);\n}\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getMessage' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Error'>Ext.Error</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-Error-method-getMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Error-method-getMessage' class='name expandable'>getMessage</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>getMessage ...</div><div class='long'><p>getMessage</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Error'>Ext.Error</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-Error-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Error-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>getName ...</div><div class='long'><p>getName</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toJson' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Error'>Ext.Error</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-Error-method-toJson' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Error-method-toJson' class='name expandable'>toJson</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>toJson ...</div><div class='long'><p>toJson</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":["Ext.data.Api.Error","Ext.data.Store.Error","Ext.data.DataReader.Error","Ext.data.DataProxy.Error","Ext.data.JsonReader.Error","Ext.ux.ManagedIFrame.Error"],"id":"class-Ext.Error","html_meta":{},"tagname":"class","extends":"Error"});