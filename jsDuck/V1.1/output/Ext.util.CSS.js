Ext.data.JsonP.Ext_util_CSS({"superclasses":[],"parentMixins":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-util-CSS' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>Utility class for manipulating CSS rules</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createStyleSheet' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-CSS-method-createStyleSheet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-createStyleSheet' class='name expandable'>createStyleSheet</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> cssText, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> id</span> ) : StyleSheet</div><div class='description'><div class='short'>Creates a stylesheet from a text blob of rules. ...</div><div class='long'><p>Creates a stylesheet from a text blob of rules.\nThese rules will be wrapped in a STYLE tag and appended to the HEAD of the document.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cssText</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text containing the css rules</p>\n</div></li><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>An id to add to the stylesheet for later removal</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>StyleSheet</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-CSS-method-getRule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-getRule' class='name expandable'>getRule</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Array selector, Boolean refreshCache</span> ) : CSSRule</div><div class='description'><div class='short'>Gets an an individual CSS rule by selector(s) ...</div><div class='long'><p>Gets an an individual CSS rule by selector(s)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Array<div class='sub-desc'><p>The CSS selector or an array of selectors to try. The first selector that is found is returned.</p>\n</div></li><li><span class='pre'>refreshCache</span> : Boolean<div class='sub-desc'><p>true to refresh the internal cache if you have recently updated any rules or added styles dynamically</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CSSRule</span><div class='sub-desc'><p>The CSS rule or null if one is not found</p>\n</div></li></ul></div></div></div><div id='method-getRules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-CSS-method-getRules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-getRules' class='name expandable'>getRules</a>( <span class='pre'>Boolean refreshCache</span> ) : Object</div><div class='description'><div class='short'>Gets all css rules for the document ...</div><div class='long'><p>Gets all css rules for the document</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refreshCache</span> : Boolean<div class='sub-desc'><p>true to refresh the internal cache</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object (hash) of rules indexed by selector</p>\n</div></li></ul></div></div></div><div id='method-refreshCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-CSS-method-refreshCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-refreshCache' class='name expandable'>refreshCache</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Refresh the rule cache if you have dynamically added stylesheets ...</div><div class='long'><p>Refresh the rule cache if you have dynamically added stylesheets</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object (hash) of rules indexed by selector</p>\n</div></li></ul></div></div></div><div id='method-removeStyleSheet' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-CSS-method-removeStyleSheet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-removeStyleSheet' class='name expandable'>removeStyleSheet</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> id</span> )</div><div class='description'><div class='short'>Removes a style or link tag by id ...</div><div class='long'><p>Removes a style or link tag by id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of the tag</p>\n</div></li></ul></div></div></div><div id='method-swapStyleSheet' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-CSS-method-swapStyleSheet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-swapStyleSheet' class='name expandable'>swapStyleSheet</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> id, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> url</span> )</div><div class='description'><div class='short'>Dynamically swaps an existing stylesheet reference for a new one ...</div><div class='long'><p>Dynamically swaps an existing stylesheet reference for a new one</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of an existing link tag to remove</p>\n</div></li><li><span class='pre'>url</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The href of the new stylesheet to include</p>\n</div></li></ul></div></div></div><div id='method-updateRule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-CSS-method-updateRule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-updateRule' class='name expandable'>updateRule</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Array selector, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> property, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : Boolean</div><div class='description'><div class='short'>Updates a rule property ...</div><div class='long'><p>Updates a rule property</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Array<div class='sub-desc'><p>If it's an array it tries each selector until it finds one. Stops immediately once one is found.</p>\n</div></li><li><span class='pre'>property</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The css property</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The new value for the property</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true If a rule was found and updated</p>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":[],"members":{"css_mixin":[],"method":[{"tagname":"method","meta":{},"owner":"Ext.util.CSS","name":"createStyleSheet","id":"method-createStyleSheet"},{"tagname":"method","meta":{},"owner":"Ext.util.CSS","name":"getRule","id":"method-getRule"},{"tagname":"method","meta":{},"owner":"Ext.util.CSS","name":"getRules","id":"method-getRules"},{"tagname":"method","meta":{},"owner":"Ext.util.CSS","name":"refreshCache","id":"method-refreshCache"},{"tagname":"method","meta":{},"owner":"Ext.util.CSS","name":"removeStyleSheet","id":"method-removeStyleSheet"},{"tagname":"method","meta":{},"owner":"Ext.util.CSS","name":"swapStyleSheet","id":"method-swapStyleSheet"},{"tagname":"method","meta":{},"owner":"Ext.util.CSS","name":"updateRule","id":"method-updateRule"}],"cfg":[],"property":[],"css_var":[],"event":[]},"html_meta":{},"tagname":"class","singleton":true,"statics":{"css_mixin":[],"method":[],"cfg":[],"property":[],"event":[],"css_var":[]},"mixins":[],"code_type":"assignment","inheritable":false,"files":[{"href":"ext-all-debug-w-comments.html#Ext-util-CSS","filename":"ext-all-debug-w-comments.js"}],"component":false,"name":"Ext.util.CSS","meta":{},"requires":[],"id":"class-Ext.util.CSS","mixedInto":[],"subclasses":[],"aliases":{},"inheritdoc":null});