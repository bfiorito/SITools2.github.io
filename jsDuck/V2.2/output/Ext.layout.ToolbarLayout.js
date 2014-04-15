Ext.data.JsonP.Ext_layout_ToolbarLayout({"alternateClassNames":[],"inheritdoc":null,"singleton":false,"statics":{"cfg":[],"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"members":{"cfg":[{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"extraCls","id":"cfg-extraCls","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"renderHidden","id":"cfg-renderHidden","tagname":"cfg"}],"method":[{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"addComponentToMenu","id":"method-addComponentToMenu","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"beforeMoreShow","id":"method-beforeMoreShow","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"cleanup","id":"method-cleanup","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"clearMenu","id":"method-clearMenu","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ContainerLayout","name":"configureItem","id":"method-configureItem","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"createMenuConfig","id":"method-createMenuConfig","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"fitToSize","id":"method-fitToSize","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"getItemWidth","id":"method-getItemWidth","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"hideItem","id":"method-hideItem","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"initMore","id":"method-initMore","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"insertCell","id":"method-insertCell","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"onLayout","id":"method-onLayout","tagname":"method"},{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"parseMargins","id":"method-parseMargins","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ContainerLayout","name":"renderItem","id":"method-renderItem","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"unhideItem","id":"method-unhideItem","tagname":"method"}],"event":[],"property":[{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"","id":"property-","tagname":"property"},{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"activeItem","id":"property-activeItem","tagname":"property"},{"meta":{},"owner":"Ext.layout.ContainerLayout","name":"fieldTpl","id":"property-fieldTpl","tagname":"property"},{"meta":{},"owner":"Ext.layout.ToolbarLayout","name":"hiddenItems","id":"property-hiddenItems","tagname":"property"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"lastOverflow","id":"property-lastOverflow","tagname":"property"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"more","id":"property-more","tagname":"property"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"moreMenu","id":"property-moreMenu","tagname":"property"},{"meta":{},"owner":"Ext.layout.ToolbarLayout","name":"noItemsMenuText","id":"property-noItemsMenuText","tagname":"property"},{"meta":{"private":true},"owner":"Ext.layout.ToolbarLayout","name":"tableHTML","id":"property-tableHTML","tagname":"property"},{"meta":{},"owner":"Ext.layout.ToolbarLayout","name":"triggerWidth","id":"property-triggerWidth","tagname":"property"}],"css_var":[],"css_mixin":[]},"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":["Ext.layout.ContainerLayout"],"name":"Ext.layout.ToolbarLayout","files":[{"href":"ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout","filename":"ext-all-debug-w-comments.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='docClass'>Ext.layout.ContainerLayout</a><div class='subclass '><strong>Ext.layout.ToolbarLayout</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>Layout manager used by <a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a>. This is highly specialised for use by Toolbars and would not\nusually be used by any other class.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-extraCls' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-cfg-extraCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-extraCls' class='name expandable'>extraCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-ctCls\" rel=\"Ext.Component-cfg-ctCls\" class=\"docClass\">ctCls</a> also.</p>\n\n\n<p><b>Note</b>: <tt>extraCls</tt> defaults to <tt>''</tt> except for the following classes\nwhich assign a value by default:\n<div class=\"mdetail-params\"><ul>\n<li><a href=\"#!/api/Ext.layout.AbsoluteLayout\" rel=\"Ext.layout.AbsoluteLayout\" class=\"docClass\">Absolute Layout</a> : <tt>'x-abs-layout-item'</tt></li>\n<li>Box Layout : <tt>'x-box-item'</tt></li>\n<li><a href=\"#!/api/Ext.layout.ColumnLayout\" rel=\"Ext.layout.ColumnLayout\" class=\"docClass\">Column Layout</a> : <tt>'x-column'</tt></li>\n</ul></div>\nTo configure the above Classes with an extra CSS class append to the default.  For example,\nfor ColumnLayout:\n<pre><code>extraCls: 'x-column custom-class'\n</code></pre>\n</p>\n\n</div></div></div><div id='cfg-renderHidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-cfg-renderHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-renderHidden' class='name not-expandable'>renderHidden</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to hide each contained item on render (defaults to false).</p>\n</div><div class='long'><p>True to hide each contained item on render (defaults to false).</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-' class='name expandable'></a><span> : Object</span></div><div class='description'><div class='short'>This monitorResize flag will be renamed soon as to avoid confusion\nwith the Container version which hooks onWindowRes...</div><div class='long'><p>This monitorResize flag will be renamed soon as to avoid confusion\nwith the Container version which hooks onWindowResize to doLayout</p>\n\n<p>monitorResize flag in this context attaches the resize event between\na container and it's layout</p>\n</div></div></div><div id='property-activeItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-property-activeItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-activeItem' class='name expandable'>activeItem</a><span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></span></div><div class='description'><div class='short'>A reference to the Ext.Component that is active. ...</div><div class='long'><p>A reference to the <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> that is active.  For example,</p>\n\n<pre><code>if(myPanel.layout.activeItem.id == 'item-1') { ... }\n</code></pre>\n\n\n<p><tt>activeItem</tt> only applies to layout styles that can display items one at a time\n(like <a href=\"#!/api/Ext.layout.AccordionLayout\" rel=\"Ext.layout.AccordionLayout\" class=\"docClass\">Ext.layout.AccordionLayout</a>, <a href=\"#!/api/Ext.layout.CardLayout\" rel=\"Ext.layout.CardLayout\" class=\"docClass\">Ext.layout.CardLayout</a>\nand <a href=\"#!/api/Ext.layout.FitLayout\" rel=\"Ext.layout.FitLayout\" class=\"docClass\">Ext.layout.FitLayout</a>).  Read-only.  Related to <a href=\"#!/api/Ext.Container-cfg-activeItem\" rel=\"Ext.Container-cfg-activeItem\" class=\"docClass\">Ext.Container.activeItem</a>.</p>\n</div></div></div><div id='property-fieldTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-property-fieldTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-fieldTpl' class='name expandable'>fieldTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The Ext.Template used by Field rendering layout classes (such as\nExt.layout.FormLayout) to create the DOM structure o...</div><div class='long'><p>The <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> used by Field rendering layout classes (such as\n<a href=\"#!/api/Ext.layout.FormLayout\" rel=\"Ext.layout.FormLayout\" class=\"docClass\">Ext.layout.FormLayout</a>) to create the DOM structure of a fully wrapped,\nlabeled and styled form Field. A default Template is supplied, but this may be\noverriden to create custom field structures. The template processes values returned from\n<a href=\"#!/api/Ext.layout.FormLayout-method-getTemplateArgs\" rel=\"Ext.layout.FormLayout-method-getTemplateArgs\" class=\"docClass\">Ext.layout.FormLayout.getTemplateArgs</a>.</p>\n</div></div></div><div id='property-hiddenItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-property-hiddenItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-property-hiddenItems' class='name expandable'>hiddenItems</a><span> : Array</span></div><div class='description'><div class='short'>Holds all items that are currently hidden due to there not being enough space to render them\nThese items will appear ...</div><div class='long'><p>Holds all items that are currently hidden due to there not being enough space to render them\nThese items will appear on the expand menu.</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-lastOverflow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-property-lastOverflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-property-lastOverflow' class='name expandable'>lastOverflow</a><span> : Boolean</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Used internally to record whether the last layout caused an overflow or not ...</div><div class='long'><p>Used internally to record whether the last layout caused an overflow or not</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-more' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-property-more' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-property-more' class='name not-expandable'>more</a><span> : <a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'><p>The expand button which triggers the overflow menu to be shown</p>\n</div><div class='long'><p>The expand button which triggers the overflow menu to be shown</p>\n</div></div></div><div id='property-moreMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-property-moreMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-property-moreMenu' class='name expandable'>moreMenu</a><span> : <a href=\"#!/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>The expand menu - holds items for every Toolbar item that cannot be shown\nbecause the Toolbar is currently not wide e...</div><div class='long'><p>The expand menu - holds items for every Toolbar item that cannot be shown\nbecause the Toolbar is currently not wide enough.</p>\n</div></div></div><div id='property-noItemsMenuText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-property-noItemsMenuText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-property-noItemsMenuText' class='name expandable'>noItemsMenuText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>HTML fragment to render into the toolbar overflow menu if there are no items to display ...</div><div class='long'><p>HTML fragment to render into the toolbar overflow menu if there are no items to display</p>\n<p>Defaults to: <code>&quot;&lt;div class=&quot;x-toolbar-no-items&quot;&gt;(None)&lt;/div&gt;&quot;</code></p></div></div></div><div id='property-tableHTML' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-property-tableHTML' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-property-tableHTML' class='name expandable'>tableHTML</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>String used to build the HTML injected to support the Toolbar's layout. ...</div><div class='long'><p>String used to build the HTML injected to support the Toolbar's layout. The align property is\ninjected into this string inside the td.x-toolbar-left element during onLayout.</p>\n</div></div></div><div id='property-triggerWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-property-triggerWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-property-triggerWidth' class='name expandable'>triggerWidth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The width allocated for the menu trigger at the extreme right end of the Toolbar ...</div><div class='long'><p>The width allocated for the menu trigger at the extreme right end of the Toolbar</p>\n<p>Defaults to: <code>18</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addComponentToMenu' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-addComponentToMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-addComponentToMenu' class='name expandable'>addComponentToMenu</a>( <span class='pre'><a href=\"#!/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a> menu, <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> component</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Adds the given Toolbar item to the given menu. ...</div><div class='long'><p>Adds the given Toolbar item to the given menu. Buttons inside a buttongroup are added individually.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>menu</span> : <a href=\"#!/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a><div class='sub-desc'><p>The menu to add to</p>\n</div></li><li><span class='pre'>component</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component to add</p>\n</div></li></ul></div></div></div><div id='method-beforeMoreShow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-beforeMoreShow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-beforeMoreShow' class='name expandable'>beforeMoreShow</a>( <span class='pre'><a href=\"#!/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a> m</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Called before the expand menu is shown, this rebuilds the menu since it was last shown because\nit is possible that th...</div><div class='long'><p>Called before the expand menu is shown, this rebuilds the menu since it was last shown because\nit is possible that the items hidden due to space limitations on the Toolbar have changed since.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>m</span> : <a href=\"#!/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a><div class='sub-desc'><p>The menu</p>\n</div></li></ul></div></div></div><div id='method-cleanup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-cleanup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-cleanup' class='name expandable'>cleanup</a>( <span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> el</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Removes any empty nodes from the given element ...</div><div class='long'><p>Removes any empty nodes from the given element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The element to clean up</p>\n</div></li></ul></div></div></div><div id='method-clearMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-clearMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-clearMenu' class='name expandable'>clearMenu</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Deletes the sub-menu of each item in the expander menu. ...</div><div class='long'><p>Deletes the sub-menu of each item in the expander menu. Submenus are created for items such as\nsplitbuttons and buttongroups, where the Toolbar item cannot be represented by a single menu item</p>\n</div></div></div><div id='method-configureItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-method-configureItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-configureItem' class='name expandable'>configureItem</a>( <span class='pre'>Object c</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Applies extraCls and hides the item if renderHidden is true ...</div><div class='long'><p>Applies extraCls and hides the item if renderHidden is true</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createMenuConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-createMenuConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-createMenuConfig' class='name expandable'>createMenuConfig</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> component, Boolean hideOnClick</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns a menu config for a given component. ...</div><div class='long'><p>Returns a menu config for a given component. This config is used to create a menu item\nto be added to the expander menu</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component to create the config for</p>\n</div></li><li><span class='pre'>hideOnClick</span> : Boolean<div class='sub-desc'><p>Passed through to the menu item</p>\n</div></li></ul></div></div></div><div id='method-fitToSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-fitToSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-fitToSize' class='name expandable'>fitToSize</a>( <span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Called at the end of onLayout. ...</div><div class='long'><p>Called at the end of onLayout. At this point the Toolbar has already been resized, so we need\nto fit the items into the available width. We add up the width required by all of the items in\nthe toolbar - if we don't have enough space we hide the extra items and render the expand menu\ntrigger.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The Element the Toolbar is currently laid out within</p>\n</div></li></ul></div></div></div><div id='method-getItemWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-getItemWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-getItemWidth' class='name expandable'>getItemWidth</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> c</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns the width of the given toolbar item. ...</div><div class='long'><p>Returns the width of the given toolbar item. If the item is currently hidden because there\nis not enough room to render it, its previous width is returned</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component to measure</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The width of the item</p>\n</div></li></ul></div></div></div><div id='method-hideItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-hideItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-hideItem' class='name expandable'>hideItem</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> item</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Hides an item because it will not fit in the available width. ...</div><div class='long'><p>Hides an item because it will not fit in the available width. The item will be unhidden again\nif the Toolbar is resized to be large enough to show it</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The item to hide</p>\n</div></li></ul></div></div></div><div id='method-initMore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-initMore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-initMore' class='name expandable'>initMore</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Creates the expand trigger and menu, adding them to the  at the extreme right of the\nToolbar table ...</div><div class='long'><p>Creates the expand trigger and menu, adding them to the <tr> at the extreme right of the\nToolbar table</p>\n</div></div></div><div id='method-insertCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-insertCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-insertCell' class='name expandable'>insertCell</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> c, <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> target, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> position</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Inserts the given Toolbar item into the given element ...</div><div class='long'><p>Inserts the given Toolbar item into the given element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component to add</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target to add the component to</p>\n</div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The position to add the component at</p>\n</div></li></ul></div></div></div><div id='method-onLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-onLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-onLayout' class='name expandable'>onLayout</a>( <span class='pre'>Object ct, Object target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Create the wrapping Toolbar HTML and render/move all the items into the correct places ...</div><div class='long'><p>Create the wrapping Toolbar HTML and render/move all the items into the correct places</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseMargins' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-method-parseMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-parseMargins' class='name expandable'>parseMargins</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> v</span> ) : Object</div><div class='description'><div class='short'>Parses a number or string representing margin sizes into an object. ...</div><div class='long'><p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The encoded margins</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with margin sizes for top, right, bottom and left</p>\n</div></li></ul></div></div></div><div id='method-renderItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ContainerLayout-method-renderItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-renderItem' class='name expandable'>renderItem</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> c, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> position, <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> target</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Renders the given Component into the target Element. ...</div><div class='long'><p>Renders the given Component into the target Element. If the Component is already rendered,\nit is moved to the provided target instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component to render</p>\n</div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The position within the target to render the item to</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target Element</p>\n</div></li></ul></div></div></div><div id='method-unhideItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.ToolbarLayout'>Ext.layout.ToolbarLayout</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-ToolbarLayout-method-unhideItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ToolbarLayout-method-unhideItem' class='name expandable'>unhideItem</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> item</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Unhides an item that was previously hidden due to there not being enough space left on the Toolbar ...</div><div class='long'><p>Unhides an item that was previously hidden due to there not being enough space left on the Toolbar</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The item to show</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"id":"class-Ext.layout.ToolbarLayout","html_meta":{},"tagname":"class","extends":"Ext.layout.ContainerLayout"});