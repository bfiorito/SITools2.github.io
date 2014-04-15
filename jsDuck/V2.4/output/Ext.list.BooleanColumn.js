Ext.data.JsonP.Ext_list_BooleanColumn({"alternateClassNames":[],"inheritdoc":null,"singleton":false,"statics":{"cfg":[],"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"members":{"cfg":[{"meta":{},"owner":"Ext.list.Column","name":"align","id":"cfg-align","tagname":"cfg"},{"meta":{},"owner":"Ext.list.Column","name":"cls","id":"cfg-cls","tagname":"cfg"},{"meta":{},"owner":"Ext.list.Column","name":"dataIndex","id":"cfg-dataIndex","tagname":"cfg"},{"meta":{},"owner":"Ext.list.BooleanColumn","name":"falseText","id":"cfg-falseText","tagname":"cfg"},{"meta":{},"owner":"Ext.list.Column","name":"header","id":"cfg-header","tagname":"cfg"},{"meta":{"private":true},"owner":"Ext.list.Column","name":"isColumn","id":"cfg-isColumn","tagname":"cfg"},{"meta":{},"owner":"Ext.list.Column","name":"tpl","id":"cfg-tpl","tagname":"cfg"},{"meta":{},"owner":"Ext.list.BooleanColumn","name":"trueText","id":"cfg-trueText","tagname":"cfg"},{"meta":{},"owner":"Ext.list.BooleanColumn","name":"undefinedText","id":"cfg-undefinedText","tagname":"cfg"},{"meta":{},"owner":"Ext.list.Column","name":"width","id":"cfg-width","tagname":"cfg"}],"method":[],"event":[],"property":[],"css_var":[],"css_mixin":[]},"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":["Ext.list.Column"],"name":"Ext.list.BooleanColumn","files":[{"href":"ext-all-debug-w-comments.html#Ext-list-BooleanColumn","filename":"ext-all-debug-w-comments.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='docClass'>Ext.list.Column</a><div class='subclass '><strong>Ext.list.BooleanColumn</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-list-BooleanColumn' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>A Column definition class which renders boolean data fields.  See the xtype\nconfig option of <a href=\"#!/api/Ext.list.Column\" rel=\"Ext.list.Column\" class=\"docClass\">Ext.list.Column</a> for more details.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-align' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-Column-cfg-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-align' class='name expandable'>align</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Set the CSS text-align property of the column. ...</div><div class='long'><p>Set the CSS text-align property of the column. Defaults to <tt>'left'</tt>.</p>\n<p>Defaults to: <code>&quot;left&quot;</code></p></div></div></div><div id='cfg-cls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-Column-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-cls' class='name expandable'>cls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. This option can be used to add a CSS class to the cell of each\nrow for this column.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-dataIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-Column-cfg-dataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-dataIndex' class='name expandable'>dataIndex</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Required. ...</div><div class='long'><p><b>Required</b>. The name of the field in the\nListViews's <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>'s <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> definition from\nwhich to draw the column's value.</p>\n\n</div></div></div><div id='cfg-falseText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.BooleanColumn'>Ext.list.BooleanColumn</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-BooleanColumn-cfg-falseText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.BooleanColumn-cfg-falseText' class='name expandable'>falseText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The string returned by the renderer when the column value is falsey (but not undefined) (defaults to\n'false'). ...</div><div class='long'><p>The string returned by the renderer when the column value is falsey (but not undefined) (defaults to\n<tt>'false'</tt>).</p>\n<p>Defaults to: <code>&quot;false&quot;</code></p></div></div></div><div id='cfg-header' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-Column-cfg-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-header' class='name expandable'>header</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. The header text to be used as innerHTML\n(html tags are accepted) to display in the ListView.  <b>Note</b>: to\nhave a clickable header with no text displayed use <tt>'&#160;'</tt>.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-isColumn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-Column-cfg-isColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-isColumn' class='name expandable'>isColumn</a><span> : Boolean</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Used by ListView constructor method to avoid reprocessing a Column\nif isColumn is not set ListView will recreate a ne...</div><div class='long'><p>Used by ListView constructor method to avoid reprocessing a Column\nif <code>isColumn</code> is not set ListView will recreate a new <a href=\"#!/api/Ext.list.Column\" rel=\"Ext.list.Column\" class=\"docClass\">Ext.list.Column</a>\nDefaults to true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-tpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-Column-cfg-tpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-tpl' class='name expandable'>tpl</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. Specify a string to pass as the\nconfiguration string for <a href=\"#!/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.  By default an <a href=\"#!/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>\nwill be implicitly created using the <tt>dataIndex</tt>.</p>\n</div></div></div><div id='cfg-trueText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.BooleanColumn'>Ext.list.BooleanColumn</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-BooleanColumn-cfg-trueText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.BooleanColumn-cfg-trueText' class='name expandable'>trueText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The string returned by the renderer when the column value is not falsey (defaults to 'true'). ...</div><div class='long'><p>The string returned by the renderer when the column value is not falsey (defaults to <tt>'true'</tt>).</p>\n<p>Defaults to: <code>&quot;true&quot;</code></p></div></div></div><div id='cfg-undefinedText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.BooleanColumn'>Ext.list.BooleanColumn</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-BooleanColumn-cfg-undefinedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.BooleanColumn-cfg-undefinedText' class='name expandable'>undefinedText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The string returned by the renderer when the column value is undefined (defaults to '&#160;'). ...</div><div class='long'><p>The string returned by the renderer when the column value is undefined (defaults to <tt>'&#160;'</tt>).</p>\n<p>Defaults to: <code>&quot;&amp;#160;&quot;</code></p></div></div></div><div id='cfg-width' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-list-Column-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-width' class='name expandable'>width</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. Percentage of the container width\nthis column should be allocated.  Columns that have no width specified will be\nallocated with an equal percentage to fill 100% of the container width.  To easily take\nadvantage of the full container width, leave the width of at least one column undefined.\nNote that if you do not want to take up the full width of the container, the width of\nevery column needs to be explicitly defined.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div></div></div>","subclasses":[],"id":"class-Ext.list.BooleanColumn","html_meta":{},"tagname":"class","extends":"Ext.list.Column"});