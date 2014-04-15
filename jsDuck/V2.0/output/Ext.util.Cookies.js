Ext.data.JsonP.Ext_util_Cookies({"superclasses":[],"parentMixins":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-util-Cookies' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>Utility class for managing and interacting with cookies.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Cookies'>Ext.util.Cookies</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Cookies-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Cookies-method-clear' class='name expandable'>clear</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name</span> )</div><div class='description'><div class='short'>Removes a cookie with the provided name from the browser\nif found by setting its expiration date to sometime in the p...</div><div class='long'><p>Removes a cookie with the provided name from the browser\nif found by setting its expiration date to sometime in the past.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the cookie to remove</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Cookies'>Ext.util.Cookies</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Cookies-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Cookies-method-get' class='name expandable'>get</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name</span> ) : Mixed</div><div class='description'><div class='short'>Retrieves cookies that are accessible by the current page. ...</div><div class='long'><p>Retrieves cookies that are accessible by the current page. If a cookie\ndoes not exist, <code>get()</code> returns <tt>null</tt>.  The following\nexample retrieves the cookie called \"valid\" and stores the String value\nin the variable <tt>validStatus</tt>.</p>\n\n<pre><code>var validStatus = <a href=\"#!/api/Ext.util.Cookies-method-get\" rel=\"Ext.util.Cookies-method-get\" class=\"docClass\">Ext.util.Cookies.get</a>(\"valid\");\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the cookie to get</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>Returns the cookie value for the specified name;\nnull if the cookie name does not exist.</p>\n</div></li></ul></div></div></div><div id='method-getCookieVal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Cookies'>Ext.util.Cookies</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Cookies-method-getCookieVal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Cookies-method-getCookieVal' class='name expandable'>getCookieVal</a>( <span class='pre'>Object offset</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Cookies'>Ext.util.Cookies</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Cookies-method-handleError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Cookies-method-handleError' class='name expandable'>handleError</a>( <span class='pre'>Object/Error e</span> )</div><div class='description'><div class='short'>Framework-wide error-handler. ...</div><div class='long'><p>Framework-wide error-handler.  Developers can override this method to provide\ncustom exception-handling.  Framework errors will often extend from the base\n<a href=\"#!/api/Ext.Error\" rel=\"Ext.Error\" class=\"docClass\">Ext.Error</a> class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object/Error<div class='sub-desc'><p>The thrown exception object.</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Cookies'>Ext.util.Cookies</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Cookies-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Cookies-method-set' class='name expandable'>set</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name, Mixed value, [Object expires], [<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> path], [<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> domain], [Boolean secure]</span> )</div><div class='description'><div class='short'>Create a cookie with the specified name and value. ...</div><div class='long'><p>Create a cookie with the specified name and value. Additional settings\nfor the cookie may be optionally specified (for example: expiration,\naccess restriction, SSL).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the cookie to set.</p>\n</div></li><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to set for the cookie.</p>\n</div></li><li><span class='pre'>expires</span> : Object (optional)<div class='sub-desc'><p>Specify an expiration date the\ncookie is to persist until.  Note that the specified Date object will\nbe converted to Greenwich Mean Time (GMT).</p>\n</div></li><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Setting a path on the cookie restricts\naccess to pages that match that path. Defaults to all pages (<tt>'/'</tt>).</p>\n</div></li><li><span class='pre'>domain</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Setting a domain restricts access to\npages on a given domain (typically used to allow cookie access across\nsubdomains). For example, \"extjs.com\" will create a cookie that can be\naccessed from any subdomain of extjs.com, including www.extjs.com,\nsupport.extjs.com, etc.</p>\n</div></li><li><span class='pre'>secure</span> : Boolean (optional)<div class='sub-desc'><p>Specify true to indicate that the cookie\nshould only be accessible via SSL on a page using the HTTPS protocol.\nDefaults to <tt>false</tt>. Note that this will only work if the page\ncalling this code uses the HTTPS protocol, otherwise the cookie will be\ncreated with default options.</p>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":[],"members":{"css_mixin":[],"method":[{"tagname":"method","meta":{},"owner":"Ext.util.Cookies","name":"clear","id":"method-clear"},{"tagname":"method","meta":{},"owner":"Ext.util.Cookies","name":"get","id":"method-get"},{"tagname":"method","meta":{"private":true},"owner":"Ext.util.Cookies","name":"getCookieVal","id":"method-getCookieVal"},{"tagname":"method","meta":{},"owner":"Ext.util.Cookies","name":"handleError","id":"method-handleError"},{"tagname":"method","meta":{},"owner":"Ext.util.Cookies","name":"set","id":"method-set"}],"cfg":[],"property":[],"css_var":[],"event":[]},"html_meta":{},"tagname":"class","singleton":true,"statics":{"css_mixin":[],"method":[],"cfg":[],"property":[],"event":[],"css_var":[]},"mixins":[],"code_type":"assignment","inheritable":false,"files":[{"href":"ext-all-debug-w-comments.html#Ext-util-Cookies","filename":"ext-all-debug-w-comments.js"}],"component":false,"name":"Ext.util.Cookies","meta":{},"requires":[],"id":"class-Ext.util.Cookies","mixedInto":[],"subclasses":[],"aliases":{},"inheritdoc":null});