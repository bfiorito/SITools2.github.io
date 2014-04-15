Ext.data.JsonP.Ext_layout_BorderLayout_Region({"alternateClassNames":[],"inheritdoc":null,"singleton":false,"statics":{"cfg":[],"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"members":{"cfg":[{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"animFloat","id":"cfg-animFloat","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"autoHide","id":"cfg-autoHide","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"cmargins","id":"cfg-cmargins","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"collapseMode","id":"cfg-collapseMode","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"collapsible","id":"cfg-collapsible","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"floatable","id":"cfg-floatable","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"margins","id":"cfg-margins","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"minHeight","id":"cfg-minHeight","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"minWidth","id":"cfg-minWidth","tagname":"cfg"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"split","id":"cfg-split","tagname":"cfg"}],"method":[{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"getMargins","id":"method-getMargins","tagname":"method"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"getMinHeight","id":"method-getMinHeight","tagname":"method"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"getMinWidth","id":"method-getMinWidth","tagname":"method"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"getSize","id":"method-getSize","tagname":"method"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"isVisible","id":"method-isVisible","tagname":"method"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"setPanel","id":"method-setPanel","tagname":"method"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"slideIn","id":"method-slideIn","tagname":"method"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"slideOut","id":"method-slideOut","tagname":"method"}],"event":[],"property":[{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"isCollapsed","id":"property-isCollapsed","tagname":"property"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"layout","id":"property-layout","tagname":"property"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"panel","id":"property-panel","tagname":"property"},{"meta":{},"owner":"Ext.layout.BorderLayout.Region","name":"position","id":"property-position","tagname":"property"}],"css_var":[],"css_mixin":[]},"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":[],"name":"Ext.layout.BorderLayout.Region","files":[{"href":"ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region","filename":"ext-all-debug-w-comments.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.layout.BorderLayout.SplitRegion' rel='Ext.layout.BorderLayout.SplitRegion' class='docClass'>Ext.layout.BorderLayout.SplitRegion</a></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>This is a region of a <a href=\"#!/api/Ext.layout.BorderLayout\" rel=\"Ext.layout.BorderLayout\" class=\"docClass\">BorderLayout</a> that acts as a subcontainer\nwithin the layout.  Each region has its own <a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">layout</a> that is\nindependent of other regions and the containing BorderLayout, and can be any of the\n<a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">valid Ext layout types</a>.</p>\n\n\n<p>Region size is managed automatically and cannot be changed by the user -- for\n<a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-split\" rel=\"Ext.layout.BorderLayout.Region-cfg-split\" class=\"docClass\">resizable regions</a>, see <a href=\"#!/api/Ext.layout.BorderLayout.SplitRegion\" rel=\"Ext.layout.BorderLayout.SplitRegion\" class=\"docClass\">Ext.layout.BorderLayout.SplitRegion</a>.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-animFloat' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-animFloat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-animFloat' class='name expandable'>animFloat</a><span> : Boolean</span></div><div class='description'><div class='short'>When a collapsed region's bar is clicked, the region's panel will be displayed as a floated\npanel that will close aga...</div><div class='long'><p>When a collapsed region's bar is clicked, the region's panel will be displayed as a floated\npanel that will close again once the user mouses out of that panel (or clicks out if\n<tt><a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-autoHide\" rel=\"Ext.layout.BorderLayout.Region-cfg-autoHide\" class=\"docClass\">autoHide</a> = false</tt>).  Setting <tt><a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-animFloat\" rel=\"Ext.layout.BorderLayout.Region-cfg-animFloat\" class=\"docClass\">animFloat</a> = false</tt> will\nprevent the open and close of these floated panels from being animated (defaults to <tt>true</tt>).</p>\n</div></div></div><div id='cfg-autoHide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-autoHide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-autoHide' class='name expandable'>autoHide</a><span> : Boolean</span></div><div class='description'><div class='short'>When a collapsed region's bar is clicked, the region's panel will be displayed as a floated\npanel. ...</div><div class='long'><p>When a collapsed region's bar is clicked, the region's panel will be displayed as a floated\npanel.  If <tt>autoHide = true</tt>, the panel will automatically hide after the user mouses\nout of the panel.  If <tt>autoHide = false</tt>, the panel will continue to display until the\nuser clicks outside of the panel (defaults to <tt>true</tt>).</p>\n</div></div></div><div id='cfg-cmargins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-cmargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-cmargins' class='name expandable'>cmargins</a><span> : Object</span></div><div class='description'><div class='short'>An object containing margins to apply to the region when in the collapsed state in the\nformat:\n\n{\n    top: (top margi...</div><div class='long'><p>An object containing margins to apply to the region when in the collapsed state in the\nformat:</p>\n\n<pre><code>{\n    top: (top margin),\n    right: (right margin),\n    bottom: (bottom margin),\n    left: (left margin)\n}</code></pre>\n\n\n<p>May also be a string containing space-separated, numeric margin values. The order of the\nsides associated with each value matches the way CSS processes margin values.</p>\n\n\n<p><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the first value and the\nright and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left and right are set\nto the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and left, respectively.</li>\n</ul></p>\n\n</div></div></div><div id='cfg-collapseMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-collapseMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-collapseMode' class='name expandable'>collapseMode</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>collapseMode supports two configuration values:\nundefined (default)By default, collapsible\nregions are collapsed by c...</div><div class='long'><p><tt>collapseMode</tt> supports two configuration values:<div class=\"mdetail-params\"><ul>\n<li><b><tt>undefined</tt></b> (default)<div class=\"sub-desc\">By default, <a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-collapsible\" rel=\"Ext.layout.BorderLayout.Region-cfg-collapsible\" class=\"docClass\">collapsible</a>\nregions are collapsed by clicking the expand/collapse tool button that renders into the region's\ntitle bar.</div></li>\n<li><b><tt>'mini'</tt></b><div class=\"sub-desc\">Optionally, when <tt>collapseMode</tt> is set to\n<tt>'mini'</tt> the region's split bar will also display a small collapse button in the center of\nthe bar. In <tt>'mini'</tt> mode the region will collapse to a thinner bar than in normal mode.\n</div></li>\n</ul></div></p></p>\n\n<p><b>Note</b>: if a collapsible region does not have a title bar, then set <tt>collapseMode =\n'mini'</tt> and <tt><a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-split\" rel=\"Ext.layout.BorderLayout.Region-cfg-split\" class=\"docClass\">split</a> = true</tt> in order for the region to be <a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-collapsible\" rel=\"Ext.layout.BorderLayout.Region-cfg-collapsible\" class=\"docClass\">collapsible</a>\nby the user as the expand/collapse tool button (that would go in the title bar) will not be rendered.</p>\n\n\n<p>See also <tt><a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-cmargins\" rel=\"Ext.layout.BorderLayout.Region-cfg-cmargins\" class=\"docClass\">cmargins</a></tt>.</p>\n\n</div></div></div><div id='cfg-collapsible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-collapsible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-collapsible' class='name expandable'>collapsible</a><span> : Boolean</span></div><div class='description'><div class='short'>true to allow the user to collapse this region (defaults to false). ...</div><div class='long'><p><tt>true</tt> to allow the user to collapse this region (defaults to <tt>false</tt>).  If\n<tt>true</tt>, an expand/collapse tool button will automatically be rendered into the title\nbar of the region, otherwise the button will not be shown.</p>\n\n\n<p><b>Note</b>: that a title bar is required to display the collapse/expand toggle button -- if\nno <tt>title</tt> is specified for the region's panel, the region will only be collapsible if\n<tt><a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-collapseMode\" rel=\"Ext.layout.BorderLayout.Region-cfg-collapseMode\" class=\"docClass\">collapseMode</a> = 'mini'</tt> and <tt><a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-split\" rel=\"Ext.layout.BorderLayout.Region-cfg-split\" class=\"docClass\">split</a> = true</tt>.\n\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-floatable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-floatable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-floatable' class='name expandable'>floatable</a><span> : Boolean</span></div><div class='description'><div class='short'>true to allow clicking a collapsed region's bar to display the region's panel floated\nabove the layout, false to forc...</div><div class='long'><p><tt>true</tt> to allow clicking a collapsed region's bar to display the region's panel floated\nabove the layout, <tt>false</tt> to force the user to fully expand a collapsed region by\nclicking the expand button to see it again (defaults to <tt>true</tt>).</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-margins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-margins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-margins' class='name expandable'>margins</a><span> : Object</span></div><div class='description'><div class='short'>An object containing margins to apply to the region when in the expanded state in the\nformat:\n\n{\n    top: (top margin...</div><div class='long'><p>An object containing margins to apply to the region when in the expanded state in the\nformat:</p>\n\n<pre><code>{\n    top: (top margin),\n    right: (right margin),\n    bottom: (bottom margin),\n    left: (left margin)\n}</code></pre>\n\n\n<p>May also be a string containing space-separated, numeric margin values. The order of the\nsides associated with each value matches the way CSS processes margin values:</p>\n\n\n<p><div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the first value and the\nright and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left and right are set\nto the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and left, respectively.</li>\n</ul></div></p>\n\n\n<p>Defaults to:</p>\n\n\n<pre><code>{top:0, right:0, bottom:0, left:0}\n</code></pre>\n\n</div></div></div><div id='cfg-minHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-minHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-minHeight' class='name expandable'>minHeight</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The minimum allowable height in pixels for this region (defaults to 50)\nmaxHeight may also be specified. ...</div><div class='long'><p>The minimum allowable height in pixels for this region (defaults to <tt>50</tt>)\n<tt>maxHeight</tt> may also be specified.</p><br></p>\n\n<p><b>Note</b>: setting the <tt><a href=\"#!/api/Ext.SplitBar-property-minSize\" rel=\"Ext.SplitBar-property-minSize\" class=\"docClass\">minSize</a></tt> /\n<tt><a href=\"#!/api/Ext.SplitBar-property-maxSize\" rel=\"Ext.SplitBar-property-maxSize\" class=\"docClass\">maxSize</a></tt> supersedes any specified\n<tt>minHeight</tt> / <tt>maxHeight</tt>.</p>\n\n<p>Defaults to: <code>50</code></p></div></div></div><div id='cfg-minWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-minWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-minWidth' class='name expandable'>minWidth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The minimum allowable width in pixels for this region (defaults to 50). ...</div><div class='long'><p>The minimum allowable width in pixels for this region (defaults to <tt>50</tt>).\n<tt>maxWidth</tt> may also be specified.</p>\n\n\n<br>\n\n\n<p><b>Note</b>: setting the <tt><a href=\"#!/api/Ext.SplitBar-property-minSize\" rel=\"Ext.SplitBar-property-minSize\" class=\"docClass\">minSize</a></tt> /\n<tt><a href=\"#!/api/Ext.SplitBar-property-maxSize\" rel=\"Ext.SplitBar-property-maxSize\" class=\"docClass\">maxSize</a></tt> supersedes any specified\n<tt>minWidth</tt> / <tt>maxWidth</tt>.</p>\n\n<p>Defaults to: <code>50</code></p></div></div></div><div id='cfg-split' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-cfg-split' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-cfg-split' class='name expandable'>split</a><span> : Boolean</span></div><div class='description'><div class='short'>true to create a SplitRegion and\ndisplay a 5px wide Ext.SplitBar between this region and its neighbor, allowing the u...</div><div class='long'><p><tt>true</tt> to create a <a href=\"#!/api/Ext.layout.BorderLayout.SplitRegion\" rel=\"Ext.layout.BorderLayout.SplitRegion\" class=\"docClass\">SplitRegion</a> and\ndisplay a 5px wide <a href=\"#!/api/Ext.SplitBar\" rel=\"Ext.SplitBar\" class=\"docClass\">Ext.SplitBar</a> between this region and its neighbor, allowing the user to\nresize the regions dynamically.  Defaults to <tt>false</tt> creating a\n<a href=\"#!/api/Ext.layout.BorderLayout.Region\" rel=\"Ext.layout.BorderLayout.Region\" class=\"docClass\">Region</a>.</p>\n\n\n<br>\n\n\n<p><b>Notes</b>:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>this configuration option is ignored if <tt>region='center'</tt></li>\n<li>when <tt>split == true</tt>, it is common to specify a\n<tt><a href=\"#!/api/Ext.SplitBar-property-minSize\" rel=\"Ext.SplitBar-property-minSize\" class=\"docClass\">minSize</a></tt> and <tt><a href=\"#!/api/Ext.SplitBar-property-maxSize\" rel=\"Ext.SplitBar-property-maxSize\" class=\"docClass\">maxSize</a></tt>\nfor the <a href=\"#!/api/Ext.BoxComponent\" rel=\"Ext.BoxComponent\" class=\"docClass\">BoxComponent</a> representing the region. These are not native\nconfigs of <a href=\"#!/api/Ext.BoxComponent\" rel=\"Ext.BoxComponent\" class=\"docClass\">BoxComponent</a>, and are used only by this class.</li>\n<li>if <tt><a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-collapseMode\" rel=\"Ext.layout.BorderLayout.Region-cfg-collapseMode\" class=\"docClass\">collapseMode</a> = 'mini'</tt> requires <tt>split = true</tt> to reserve space\nfor the collapse tool</tt></li>\n</ul></div>\n\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isCollapsed' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-property-isCollapsed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-property-isCollapsed' class='name expandable'>isCollapsed</a><span> : Boolean</span></div><div class='description'><div class='short'>True if this region is collapsed. ...</div><div class='long'><p>True if this region is collapsed. Read-only.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-property-layout' class='name expandable'>layout</a><span> : Layout</span></div><div class='description'><div class='short'>This region's layout. ...</div><div class='long'><p>This region's layout.  Read-only.</p>\n</div></div></div><div id='property-panel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-property-panel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-property-panel' class='name expandable'>panel</a><span> : <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a></span></div><div class='description'><div class='short'>This region's panel. ...</div><div class='long'><p>This region's panel.  Read-only.</p>\n</div></div></div><div id='property-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-property-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-property-position' class='name expandable'>position</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>This region's layout position (north, south, east, west or center). ...</div><div class='long'><p>This region's layout position (north, south, east, west or center).  Read-only.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.BorderLayout.Region-method-constructor' class='name expandable'>Ext.layout.BorderLayout.Region</a>( <span class='pre'>Layout layout, Object config, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> position</span> ) : Object</div><div class='description'><div class='short'>Create a new Region. ...</div><div class='long'><p>Create a new Region.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layout</span> : Layout<div class='sub-desc'><p>The <a href=\"#!/api/Ext.layout.BorderLayout\" rel=\"Ext.layout.BorderLayout\" class=\"docClass\">BorderLayout</a> instance that is managing this Region.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration options</p>\n</div></li><li><span class='pre'>position</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The region position.  Valid values are: <tt>north</tt>, <tt>south</tt>,\n<tt>east</tt>, <tt>west</tt> and <tt>center</tt>.  Every <a href=\"#!/api/Ext.layout.BorderLayout\" rel=\"Ext.layout.BorderLayout\" class=\"docClass\">BorderLayout</a>\n<b>must have a center region</b> for the primary content -- all other regions are optional.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMargins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-method-getMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-method-getMargins' class='name expandable'>getMargins</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the current margins for this region. ...</div><div class='long'><p>Returns the current margins for this region.  If the region is collapsed, the\n<a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-cmargins\" rel=\"Ext.layout.BorderLayout.Region-cfg-cmargins\" class=\"docClass\">cmargins</a> (collapsed margins) value will be returned, otherwise the\n<a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-margins\" rel=\"Ext.layout.BorderLayout.Region-cfg-margins\" class=\"docClass\">margins</a> value will be returned.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the element's margins: <tt>{left: (left\nmargin), top: (top margin), right: (right margin), bottom: (bottom margin)}</tt></p>\n</div></li></ul></div></div></div><div id='method-getMinHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-method-getMinHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-method-getMinHeight' class='name expandable'>getMinHeight</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Returns the minimum allowable height for this region. ...</div><div class='long'><p>Returns the minimum allowable height for this region.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The minimum height</p>\n</div></li></ul></div></div></div><div id='method-getMinWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-method-getMinWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-method-getMinWidth' class='name expandable'>getMinWidth</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Returns the minimum allowable width for this region. ...</div><div class='long'><p>Returns the minimum allowable width for this region.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The minimum width</p>\n</div></li></ul></div></div></div><div id='method-getSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-method-getSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-method-getSize' class='name expandable'>getSize</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the current size of this region. ...</div><div class='long'><p>Returns the current size of this region.  If the region is collapsed, the size of the\ncollapsedEl will be returned, otherwise the size of the region's panel will be returned.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the element's size: <tt>{width: (element width),\nheight: (element height)}</tt></p>\n</div></li></ul></div></div></div><div id='method-isVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-method-isVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-method-isVisible' class='name expandable'>isVisible</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>True if this region is currently visible, else false. ...</div><div class='long'><p>True if this region is currently visible, else false.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPanel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-method-setPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-method-setPanel' class='name expandable'>setPanel</a>( <span class='pre'><a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a> panel</span> )</div><div class='description'><div class='short'>Sets the specified panel as the container element for this region. ...</div><div class='long'><p>Sets the specified panel as the container element for this region.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panel</span> : <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a><div class='sub-desc'><p>The new panel</p>\n</div></li></ul></div></div></div><div id='method-slideIn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-method-slideIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-method-slideIn' class='name expandable'>slideIn</a>( <span class='pre'>Object cb</span> )</div><div class='description'><div class='short'>If this Region is floatable, and this Region has been slid into floating visibility, then this method slides\nthis reg...</div><div class='long'><p>If this Region is <a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-floatable\" rel=\"Ext.layout.BorderLayout.Region-cfg-floatable\" class=\"docClass\">floatable</a>, and this Region has been slid into floating visibility, then this method slides\nthis region back into its collapsed state.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cb</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-slideOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.BorderLayout.Region'>Ext.layout.BorderLayout.Region</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-BorderLayout-Region-method-slideOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BorderLayout.Region-method-slideOut' class='name expandable'>slideOut</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>If this Region is floatable, this method slides this Region into full visibility over the top\nof the center Region wh...</div><div class='long'><p>If this Region is <a href=\"#!/api/Ext.layout.BorderLayout.Region-cfg-floatable\" rel=\"Ext.layout.BorderLayout.Region-cfg-floatable\" class=\"docClass\">floatable</a>, this method slides this Region into full visibility <i>over the top\nof the center Region</i> where it floats until either <a href=\"#!/api/Ext.layout.BorderLayout.Region-method-slideIn\" rel=\"Ext.layout.BorderLayout.Region-method-slideIn\" class=\"docClass\">slideIn</a> is called, or other regions of the layout\nare clicked, or the mouse exits the Region.</p>\n</div></div></div></div></div></div></div>","subclasses":["Ext.layout.BorderLayout.SplitRegion"],"id":"class-Ext.layout.BorderLayout.Region","html_meta":{},"tagname":"class","extends":null});