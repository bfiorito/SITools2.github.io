Ext.data.JsonP.Ext_layout_boxOverflow_Scroller({"alternateClassNames":[],"inheritdoc":null,"singleton":false,"statics":{"cfg":[],"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"members":{"cfg":[],"method":[{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"atExtremeBefore","id":"method-atExtremeBefore","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"clearOverflow","id":"method-clearOverflow","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"createScrollers","id":"method-createScrollers","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"createWheelListener","id":"method-createWheelListener","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"destroy","id":"method-destroy","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"getItem","id":"method-getItem","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"getItemVisibility","id":"method-getItemVisibility","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"getScrollAnim","id":"method-getScrollAnim","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"handleOverflow","id":"method-handleOverflow","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"hideScrollers","id":"method-hideScrollers","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"scrollBy","id":"method-scrollBy","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"scrollLeft","id":"method-scrollLeft","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"scrollRight","id":"method-scrollRight","tagname":"method"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"scrollToItem","id":"method-scrollToItem","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"showScrollers","id":"method-showScrollers","tagname":"method"},{"meta":{"private":true},"owner":"Ext.layout.boxOverflow.Scroller","name":"updateScrollButtons","id":"method-updateScrollButtons","tagname":"method"}],"event":[],"property":[{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"afterCls","id":"property-afterCls","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"afterScroller","id":"property-afterScroller","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"afterScrollerCls","id":"property-afterScrollerCls","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"animateScroll","id":"property-animateScroll","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"beforeCls","id":"property-beforeCls","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"beforeScroller","id":"property-beforeScroller","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"beforeScrollerCls","id":"property-beforeScrollerCls","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"scrollDuration","id":"property-scrollDuration","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"scrollIncrement","id":"property-scrollIncrement","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"scrollRepeatInterval","id":"property-scrollRepeatInterval","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"scrollerCls","id":"property-scrollerCls","tagname":"property"},{"meta":{},"owner":"Ext.layout.boxOverflow.Scroller","name":"wheelIncrement","id":"property-wheelIncrement","tagname":"property"}],"css_var":[],"css_mixin":[]},"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":["Ext.layout.boxOverflow.None"],"name":"Ext.layout.boxOverflow.Scroller","files":[{"href":"ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller","filename":"ext-all-debug-w-comments.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.boxOverflow.None' rel='Ext.layout.boxOverflow.None' class='docClass'>Ext.layout.boxOverflow.None</a><div class='subclass '><strong>Ext.layout.boxOverflow.Scroller</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.layout.boxOverflow.HorizontalScroller' rel='Ext.layout.boxOverflow.HorizontalScroller' class='docClass'>Ext.layout.boxOverflow.HorizontalScroller</a></div><div class='dependency'><a href='#!/api/Ext.layout.boxOverflow.VerticalScroller' rel='Ext.layout.boxOverflow.VerticalScroller' class='docClass'>Ext.layout.boxOverflow.VerticalScroller</a></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>Description</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-afterCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-afterCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-afterCls' class='name expandable'>afterCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>CSS class added to the afterCt element. ...</div><div class='long'><p>CSS class added to the afterCt element. This is the element that holds any special items such as scrollers,\nwhich must always be present at the rightmost edge of the Container</p>\n<p>Defaults to: <code>&quot;x-strip-right&quot;</code></p></div></div></div><div id='property-afterScroller' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-afterScroller' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-afterScroller' class='name expandable'>afterScroller</a><span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span></div><div class='description'><div class='short'>The left scroller element. ...</div><div class='long'><p>The left scroller element. Only created when needed.</p>\n</div></div></div><div id='property-afterScrollerCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-afterScrollerCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-afterScrollerCls' class='name expandable'>afterScrollerCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>CSS class added to the right scroller element if enableScroll is used ...</div><div class='long'><p>CSS class added to the right scroller element if enableScroll is used</p>\n<p>Defaults to: <code>&quot;x-strip-scroller-right&quot;</code></p></div></div></div><div id='property-animateScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-animateScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-animateScroll' class='name expandable'>animateScroll</a><span> : Boolean</span></div><div class='description'><div class='short'>True to animate the scrolling of items within the layout (defaults to true, ignored if enableScroll is false) ...</div><div class='long'><p>True to animate the scrolling of items within the layout (defaults to true, ignored if enableScroll is false)</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-beforeCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-beforeCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-beforeCls' class='name expandable'>beforeCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>CSS class added to the beforeCt element. ...</div><div class='long'><p>CSS class added to the beforeCt element. This is the element that holds any special items such as scrollers,\nwhich must always be present at the leftmost edge of the Container</p>\n<p>Defaults to: <code>&quot;x-strip-left&quot;</code></p></div></div></div><div id='property-beforeScroller' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-beforeScroller' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-beforeScroller' class='name expandable'>beforeScroller</a><span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span></div><div class='description'><div class='short'>The left scroller element. ...</div><div class='long'><p>The left scroller element. Only created when needed.</p>\n</div></div></div><div id='property-beforeScrollerCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-beforeScrollerCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-beforeScrollerCls' class='name expandable'>beforeScrollerCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>CSS class added to the left scroller element if enableScroll is used ...</div><div class='long'><p>CSS class added to the left scroller element if enableScroll is used</p>\n<p>Defaults to: <code>&quot;x-strip-scroller-left&quot;</code></p></div></div></div><div id='property-scrollDuration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-scrollDuration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-scrollDuration' class='name expandable'>scrollDuration</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Number of seconds that each scroll animation lasts (defaults to 0.4) ...</div><div class='long'><p>Number of seconds that each scroll animation lasts (defaults to 0.4)</p>\n<p>Defaults to: <code>0.4</code></p></div></div></div><div id='property-scrollIncrement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-scrollIncrement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-scrollIncrement' class='name expandable'>scrollIncrement</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of pixels to scroll by on scroller click (defaults to 100) ...</div><div class='long'><p>The number of pixels to scroll by on scroller click (defaults to 100)</p>\n<p>Defaults to: <code>100</code></p></div></div></div><div id='property-scrollRepeatInterval' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-scrollRepeatInterval' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-scrollRepeatInterval' class='name expandable'>scrollRepeatInterval</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Number of milliseconds between each scroll while a scroller button is held down (defaults to 400) ...</div><div class='long'><p>Number of milliseconds between each scroll while a scroller button is held down (defaults to 400)</p>\n<p>Defaults to: <code>400</code></p></div></div></div><div id='property-scrollerCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-scrollerCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-scrollerCls' class='name expandable'>scrollerCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>CSS class added to both scroller elements if enableScroll is used ...</div><div class='long'><p>CSS class added to both scroller elements if enableScroll is used</p>\n<p>Defaults to: <code>&quot;x-strip-scroller&quot;</code></p></div></div></div><div id='property-wheelIncrement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-property-wheelIncrement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-property-wheelIncrement' class='name expandable'>wheelIncrement</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of pixels to increment on mouse wheel scrolling (defaults to 3). ...</div><div class='long'><p>The number of pixels to increment on mouse wheel scrolling (defaults to <tt>3</tt>).</p>\n<p>Defaults to: <code>3</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-atExtremeBefore' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-atExtremeBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-atExtremeBefore' class='name expandable'>atExtremeBefore</a>( <span class='pre'></span> ) : Boolean<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns true if the innerCt scroll is already at its left-most point ...</div><div class='long'><p>Returns true if the innerCt scroll is already at its left-most point</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if already at furthest left point</p>\n</div></li></ul></div></div></div><div id='method-clearOverflow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-clearOverflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-clearOverflow' class='name expandable'>clearOverflow</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createScrollers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-createScrollers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-createScrollers' class='name expandable'>createScrollers</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Creates the clickable scroller elements and places them into the beforeCt and afterCt ...</div><div class='long'><p>Creates the clickable scroller elements and places them into the beforeCt and afterCt</p>\n</div></div></div><div id='method-createWheelListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-createWheelListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-createWheelListener' class='name expandable'>createWheelListener</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Sets up an listener to scroll on the layout's innerCt mousewheel event ...</div><div class='long'><p>Sets up an listener to scroll on the layout's innerCt mousewheel event</p>\n</div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-getItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-getItem' class='name expandable'>getItem</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> item</span> ) : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Normalizes an item reference, string id or numerical index into a reference to the item ...</div><div class='long'><p>Normalizes an item reference, string id or numerical index into a reference to the item</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The item reference, id or index</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></span><div class='sub-desc'><p>The item</p>\n</div></li></ul></div></div></div><div id='method-getItemVisibility' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-getItemVisibility' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-getItemVisibility' class='name expandable'>getItemVisibility</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> item</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>For a given item in the container, return an object with information on whether the item is visible\nwith the current ...</div><div class='long'><p>For a given item in the container, return an object with information on whether the item is visible\nwith the current innerCt scroll value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The item</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Values for fullyVisible, hiddenLeft and hiddenRight</p>\n</div></li></ul></div></div></div><div id='method-getScrollAnim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-getScrollAnim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-getScrollAnim' class='name expandable'>getScrollAnim</a>( <span class='pre'></span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Object passed to scrollTo when scrolling</p>\n</div></li></ul></div></div></div><div id='method-handleOverflow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-handleOverflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-handleOverflow' class='name expandable'>handleOverflow</a>( <span class='pre'>Object calculations, Object targetSize</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Most of the heavy lifting is done in the subclasses ...</div><div class='long'><p>Most of the heavy lifting is done in the subclasses</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>calculations</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>targetSize</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hideScrollers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-hideScrollers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-hideScrollers' class='name expandable'>hideScrollers</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Hides the scroller elements in the beforeCt and afterCt ...</div><div class='long'><p>Hides the scroller elements in the beforeCt and afterCt</p>\n</div></div></div><div id='method-scrollBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-scrollBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-scrollBy' class='name expandable'>scrollBy</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> delta</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Scrolls left or right by the number of pixels specified ...</div><div class='long'><p>Scrolls left or right by the number of pixels specified</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>delta</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Number of pixels to scroll to the right by. Use a negative number to scroll left</p>\n</div></li></ul></div></div></div><div id='method-scrollLeft' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-scrollLeft' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-scrollLeft' class='name expandable'>scrollLeft</a>( <span class='pre'>Object animate</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Scrolls to the left by the configured amount ...</div><div class='long'><p>Scrolls to the left by the configured amount</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>animate</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-scrollRight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-scrollRight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-scrollRight' class='name expandable'>scrollRight</a>( <span class='pre'>Object animate</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Scrolls to the right by the configured amount ...</div><div class='long'><p>Scrolls to the right by the configured amount</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>animate</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-scrollToItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-scrollToItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-scrollToItem' class='name expandable'>scrollToItem</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> item, Boolean animate</span> )</div><div class='description'><div class='short'>Scrolls to the given component. ...</div><div class='long'><p>Scrolls to the given component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The item to scroll to. Can be a numerical index, component id\nor a reference to the component itself.</p>\n</div></li><li><span class='pre'>animate</span> : Boolean<div class='sub-desc'><p>True to animate the scrolling</p>\n</div></li></ul></div></div></div><div id='method-showScrollers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-showScrollers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-showScrollers' class='name expandable'>showScrollers</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Shows the scroller elements in the beforeCt and afterCt. ...</div><div class='long'><p>Shows the scroller elements in the beforeCt and afterCt. Creates the scrollers first if they are not already\npresent.</p>\n</div></div></div><div id='method-updateScrollButtons' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Scroller'>Ext.layout.boxOverflow.Scroller</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-layout-boxOverflow-Scroller-method-updateScrollButtons' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Scroller-method-updateScrollButtons' class='name expandable'>updateScrollButtons</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Enables or disables each scroller button based on the current scroll position ...</div><div class='long'><p>Enables or disables each scroller button based on the current scroll position</p>\n</div></div></div></div></div></div></div>","subclasses":["Ext.layout.boxOverflow.VerticalScroller","Ext.layout.boxOverflow.HorizontalScroller"],"id":"class-Ext.layout.boxOverflow.Scroller","html_meta":{},"tagname":"class","extends":"Ext.layout.boxOverflow.None"});