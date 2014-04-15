Ext.data.JsonP.Ext_layout_ContainerLayout({"alternateClassNames":[],"inheritdoc":null,"singleton":false,"statics":{"cfg":[],"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"members":{"cfg":[{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"extraCls","id":"cfg-extraCls","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"renderHidden","id":"cfg-renderHidden","tagname":"cfg"}],"method":[{"meta":{"private":true},"owner":"Ext.layout.ContainerLayout","name":"configureItem","id":"method-configureItem","tagname":"method"},{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"parseMargins","id":"method-parseMargins","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ContainerLayout","name":"renderItem","id":"method-renderItem","tagname":"method"}],"event":[],"property":[{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"","id":"property-","tagname":"property"},{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"activeItem","id":"property-activeItem","tagname":"property"},{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"fieldTpl","id":"property-fieldTpl","tagname":"property"}],"css_var":[],"css_mixin":[]},"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":[],"name":"Ext.layout.ContainerLayout","files":[{"href":"ext-all-debug-w-comments.html#Ext-layout-ContainerLayout","filename":"ext-all-debug-w-comments.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='docClass'>Ext.layout.AnchorLayout</a></div><div class='dependency'><a href='#!/api/Ext.layout.AutoLayout' rel='Ext.layout.AutoLayout' class='docClass'>Ext.layout.AutoLayout</a></div><div class='dependency'><a href='#!/api/Ext.layout.BorderLayout' rel='Ext.layout.BorderLayout' class='docClass'>Ext.layout.BorderLayout</a></div><div class='dependency'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='docClass'>Ext.layout.BoxLayout</a></div><div class='dependency'><a href='#!/api/Ext.layout.ColumnLayout' rel='Ext.layout.ColumnLayout' class='docClass'>Ext.layout.ColumnLayout</a></div><div class='dependency'><a href='#!/api/Ext.layout.FitLayout' rel='Ext.layout.FitLayout' class='docClass'>Ext.layout.FitLayout</a></div><div class='dependency'><a href='#!/api/Ext.layout.MenuLayout' rel='Ext.layout.MenuLayout' class='docClass'>Ext.layout.MenuLayout</a></div><div class='dependency'><a href='#!/api/Ext.layout.TableLayout' rel='Ext.layout.TableLayout' class='docClass'>Ext.layout.TableLayout</a></div><div class='dependency'><a href='#!/api/Ext.layout.ToolbarLayout' rel='Ext.layout.ToolbarLayout' class='docClass'>Ext.layout.ToolbarLayout</a></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>This class is intended to be extended or created via the <tt><b><a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">layout</a></b></tt>\nconfiguration property.  See <tt><b><a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">Ext.Container.layout</a></b></tt> for additional details.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-extraCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ContainerLayout'>Ext.layout.ContainerLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-cfg-extraCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-extraCls' class='name expandable'>extraCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-ctCls\" rel=\"Ext.Component-cfg-ctCls\" class=\"docClass\">ctCls</a> also.</p>\n\n\n<p><b>Note</b>: <tt>extraCls</tt> defaults to <tt>''</tt> except for the following classes\nwhich assign a value by default:\n<div class=\"mdetail-params\"><ul>\n<li><a href=\"#!/api/Ext.layout.AbsoluteLayout\" rel=\"Ext.layout.AbsoluteLayout\" class=\"docClass\">Absolute Layout</a> : <tt>'x-abs-layout-item'</tt></li>\n<li>Box Layout : <tt>'x-box-item'</tt></li>\n<li><a href=\"#!/api/Ext.layout.ColumnLayout\" rel=\"Ext.layout.ColumnLayout\" class=\"docClass\">Column Layout</a> : <tt>'x-column'</tt></li>\n</ul></div>\nTo configure the above Classes with an extra CSS class append to the default.  For example,\nfor ColumnLayout:\n<pre><code>extraCls: 'x-column custom-class'\n</code></pre>\n</p>\n\n</div></div></div><div id='cfg-renderHidden' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ContainerLayout'>Ext.layout.ContainerLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-cfg-renderHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-renderHidden' class='name not-expandable'>renderHidden</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to hide each contained item on render (defaults to false).</p>\n</div><div class='long'><p>True to hide each contained item on render (defaults to false).</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ContainerLayout'>Ext.layout.ContainerLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-' class='name expandable'></a><span> : Object</span></div><div class='description'><div class='short'>This monitorResize flag will be renamed soon as to avoid confusion\nwith the Container version which hooks onWindowRes...</div><div class='long'><p>This monitorResize flag will be renamed soon as to avoid confusion\nwith the Container version which hooks onWindowResize to doLayout</p>\n\n<p>monitorResize flag in this context attaches the resize event between\na container and it's layout</p>\n</div></div></div><div id='property-activeItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ContainerLayout'>Ext.layout.ContainerLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-property-activeItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-activeItem' class='name expandable'>activeItem</a><span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></span></div><div class='description'><div class='short'>A reference to the Ext.Component that is active. ...</div><div class='long'><p>A reference to the <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> that is active.  For example,</p>\n\n<pre><code>if(myPanel.layout.activeItem.id == 'item-1') { ... }\n</code></pre>\n\n\n<p><tt>activeItem</tt> only applies to layout styles that can display items one at a time\n(like <a href=\"#!/api/Ext.layout.AccordionLayout\" rel=\"Ext.layout.AccordionLayout\" class=\"docClass\">Ext.layout.AccordionLayout</a>, <a href=\"#!/api/Ext.layout.CardLayout\" rel=\"Ext.layout.CardLayout\" class=\"docClass\">Ext.layout.CardLayout</a>\nand <a href=\"#!/api/Ext.layout.FitLayout\" rel=\"Ext.layout.FitLayout\" class=\"docClass\">Ext.layout.FitLayout</a>).  Read-only.  Related to <a href=\"#!/api/Ext.Container-cfg-activeItem\" rel=\"Ext.Container-cfg-activeItem\" class=\"docClass\">Ext.Container.activeItem</a>.</p>\n</div></div></div><div id='property-fieldTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ContainerLayout'>Ext.layout.ContainerLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-property-fieldTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-fieldTpl' class='name expandable'>fieldTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The Ext.Template used by Field rendering layout classes (such as\nExt.layout.FormLayout) to create the DOM structure o...</div><div class='long'><p>The <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> used by Field rendering layout classes (such as\n<a href=\"#!/api/Ext.layout.FormLayout\" rel=\"Ext.layout.FormLayout\" class=\"docClass\">Ext.layout.FormLayout</a>) to create the DOM structure of a fully wrapped,\nlabeled and styled form Field. A default Template is supplied, but this may be\noverriden to create custom field structures. The template processes values returned from\n<a href=\"#!/api/Ext.layout.FormLayout-method-getTemplateArgs\" rel=\"Ext.layout.FormLayout-method-getTemplateArgs\" class=\"docClass\">Ext.layout.FormLayout.getTemplateArgs</a>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-configureItem' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ContainerLayout'>Ext.layout.ContainerLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-method-configureItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-configureItem' class='name expandable'>configureItem</a>( <span class='pre'>Object c</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Applies extraCls and hides the item if renderHidden is true ...</div><div class='long'><p>Applies extraCls and hides the item if renderHidden is true</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseMargins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ContainerLayout'>Ext.layout.ContainerLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-method-parseMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-parseMargins' class='name expandable'>parseMargins</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> v</span> ) : Object</div><div class='description'><div class='short'>Parses a number or string representing margin sizes into an object. ...</div><div class='long'><p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The encoded margins</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with margin sizes for top, right, bottom and left</p>\n</div></li></ul></div></div></div><div id='method-renderItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ContainerLayout'>Ext.layout.ContainerLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-method-renderItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-renderItem' class='name expandable'>renderItem</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> c, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> position, <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Renders the given Component into the target Element. ...</div><div class='long'><p>Renders the given Component into the target Element. If the Component is already rendered,\nit is moved to the provided target instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component to render</p>\n</div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The position within the target to render the item to</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target Element</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":["Ext.layout.AutoLayout","Ext.layout.FitLayout","Ext.layout.AnchorLayout","Ext.layout.ColumnLayout","Ext.layout.BorderLayout","Ext.layout.TableLayout","Ext.layout.BoxLayout","Ext.layout.ToolbarLayout","Ext.layout.MenuLayout"],"id":"class-Ext.layout.ContainerLayout","html_meta":{},"tagname":"class","extends":null});