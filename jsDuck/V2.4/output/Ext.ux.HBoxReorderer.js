Ext.data.JsonP.Ext_ux_HBoxReorderer({"alternateClassNames":[],"inheritdoc":null,"singleton":false,"statics":{"cfg":[],"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"members":{"cfg":[],"method":[{"meta":{},"owner":"Ext.ux.Reorderer","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{"private":true},"owner":"Ext.ux.Reorderer","name":"createIfReorderable","id":"method-createIfReorderable","tagname":"method"},{"meta":{},"owner":"Ext.ux.HBoxReorderer","name":"createItemDD","id":"method-createItemDD","tagname":"method"},{"meta":{},"owner":"Ext.ux.Reorderer","name":"doReorder","id":"method-doReorder","tagname":"method"},{"meta":{},"owner":"Ext.ux.HBoxReorderer","name":"endDrag","id":"method-endDrag","tagname":"method"},{"meta":{},"owner":"Ext.ux.Reorderer","name":"getItems","id":"method-getItems","tagname":"method"},{"meta":{},"owner":"Ext.ux.HBoxReorderer","name":"init","id":"method-init","tagname":"method"},{"meta":{},"owner":"Ext.ux.Reorderer","name":"initEvents","id":"method-initEvents","tagname":"method"},{"meta":{},"owner":"Ext.ux.Reorderer","name":"reorder","id":"method-reorder","tagname":"method"},{"meta":{"private":true},"owner":"Ext.ux.HBoxReorderer","name":"updateButtonXCache","id":"method-updateButtonXCache","tagname":"method"}],"event":[{"meta":{},"owner":"Ext.ux.Reorderer","name":"before-reorder","id":"event-before-reorder","tagname":"event"},{"meta":{},"owner":"Ext.ux.Reorderer","name":"reorder","id":"event-reorder","tagname":"event"}],"property":[{"meta":{},"owner":"Ext.ux.Reorderer","name":"animate","id":"property-animate","tagname":"property"},{"meta":{},"owner":"Ext.ux.Reorderer","name":"animationDuration","id":"property-animationDuration","tagname":"property"},{"meta":{},"owner":"Ext.ux.HBoxReorderer","name":"buttonXCache","id":"property-buttonXCache","tagname":"property"},{"meta":{},"owner":"Ext.ux.Reorderer","name":"defaultReorderable","id":"property-defaultReorderable","tagname":"property"},{"meta":{},"owner":"Ext.ux.Reorderer","name":"defaults","id":"property-defaults","tagname":"property"},{"meta":{},"owner":"Ext.ux.Reorderer","name":"target","id":"property-target","tagname":"property"}],"css_var":[],"css_mixin":[]},"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":["Ext.ux.Reorderer"],"name":"Ext.ux.HBoxReorderer","files":[{"href":"Reorderer.html#Ext-ux-HBoxReorderer","filename":"Reorderer.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='docClass'>Ext.ux.Reorderer</a><div class='subclass '><strong>Ext.ux.HBoxReorderer</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Reorderer.html#Ext-ux-HBoxReorderer' target='_blank'>Reorderer.js</a></div></pre><div class='doc-contents'><p>Description</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-animate' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-property-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-property-animate' class='name expandable'>animate</a><span> : Boolean</span></div><div class='description'><div class='short'>If set to true, the rearranging of the toolbar items is animated ...</div><div class='long'><p>If set to true, the rearranging of the toolbar items is animated</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-animationDuration' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-property-animationDuration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-property-animationDuration' class='name expandable'>animationDuration</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The duration of the animation used to move other toolbar items out of the way ...</div><div class='long'><p>The duration of the animation used to move other toolbar items out of the way</p>\n<p>Defaults to: <code>0.2</code></p></div></div></div><div id='property-buttonXCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.HBoxReorderer'>Ext.ux.HBoxReorderer</span><br/><a href='source/Reorderer.html#Ext-ux-HBoxReorderer-property-buttonXCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.HBoxReorderer-property-buttonXCache' class='name expandable'>buttonXCache</a><span> : Object</span></div><div class='description'><div class='short'>This is used to store the correct x value of each button in the array. ...</div><div class='long'><p>This is used to store the correct x value of each button in the array. We need to use this\ninstead of the button's reported x co-ordinate because the buttons are animated when they move -\nif another onDrag is fired while the button is still moving, the comparison x value will be incorrect</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-defaultReorderable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-property-defaultReorderable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-property-defaultReorderable' class='name expandable'>defaultReorderable</a><span> : Boolean</span></div><div class='description'><div class='short'>True to make every toolbar draggable unless reorderable is specifically set to false. ...</div><div class='long'><p>True to make every toolbar draggable unless reorderable is specifically set to false.\nThis defaults to false</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-defaults' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-property-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-property-defaults' class='name expandable'>defaults</a><span> : Object</span></div><div class='description'><div class='short'>Object containing default values for plugin configuration details. ...</div><div class='long'><p>Object containing default values for plugin configuration details. These can be overridden when\nconstructing the plugin</p>\n</div></div></div><div id='property-target' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-property-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-property-target' class='name not-expandable'>target</a><span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></span></div><div class='description'><div class='short'><p>Reference to the target component which contains the reorderable items</p>\n</div><div class='long'><p>Reference to the target component which contains the reorderable items</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.ux.Reorderer-method-constructor' class='name expandable'>Ext.ux.HBoxReorderer</a>( <span class='pre'>Object config</span> ) : Object</div><div class='description'><div class='short'>Creates the plugin instance, applies defaults ...</div><div class='long'><p>Creates the plugin instance, applies defaults</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Optional config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createIfReorderable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-method-createIfReorderable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-method-createIfReorderable' class='name expandable'>createIfReorderable</a>( <span class='pre'>Mixed item</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Creates a DD instance for a given item if it is reorderable ...</div><div class='long'><p>Creates a DD instance for a given item if it is reorderable</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Mixed<div class='sub-desc'><p>The item</p>\n</div></li></ul></div></div></div><div id='method-createItemDD' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.HBoxReorderer'>Ext.ux.HBoxReorderer</span><br/><a href='source/Reorderer.html#Ext-ux-HBoxReorderer-method-createItemDD' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.HBoxReorderer-method-createItemDD' class='name expandable'>createItemDD</a>( <span class='pre'>Mixed button</span> )</div><div class='description'><div class='short'>Sets up the given Toolbar item as a draggable ...</div><div class='long'><p>Sets up the given Toolbar item as a draggable</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>button</span> : Mixed<div class='sub-desc'><p>The item to make draggable (usually an <a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a> instance)</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.ux.Reorderer-method-createItemDD' rel='Ext.ux.Reorderer-method-createItemDD' class='docClass'>Ext.ux.Reorderer.createItemDD</a></p></div></div></div><div id='method-doReorder' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-method-doReorder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-method-doReorder' class='name expandable'>doReorder</a>( <span class='pre'>Object mappings</span> )</div><div class='description'><div class='short'>Abstract function to perform the actual reordering. ...</div><div class='long'><p>Abstract function to perform the actual reordering. This MUST be overridden in a subclass</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mappings</span> : Object<div class='sub-desc'><p>Mappings of the old item indexes to new item indexes</p>\n</div></li></ul></div></div></div><div id='method-endDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.HBoxReorderer'>Ext.ux.HBoxReorderer</span><br/><a href='source/Reorderer.html#Ext-ux-HBoxReorderer-method-endDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.HBoxReorderer-method-endDrag' class='name expandable'>endDrag</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>After the drag has been completed, make sure the button being dragged makes it back to\nthe correct location and reset...</div><div class='long'><p>After the drag has been completed, make sure the button being dragged makes it back to\nthe correct location and resets its z index</p>\n<p>Overrides: <a href='#!/api/Ext.ux.Reorderer-method-endDrag' rel='Ext.ux.Reorderer-method-endDrag' class='docClass'>Ext.ux.Reorderer.endDrag</a></p></div></div></div><div id='method-getItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-method-getItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-method-getItems' class='name expandable'>getItems</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Returns an array of items which will be made draggable. ...</div><div class='long'><p>Returns an array of items which will be made draggable. This defaults to the contents of this.target.items,\nbut can be overridden - e.g. for TabPanels</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>The array of items which will be made draggable</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.HBoxReorderer'>Ext.ux.HBoxReorderer</span><br/><a href='source/Reorderer.html#Ext-ux-HBoxReorderer-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.HBoxReorderer-method-init' class='name expandable'>init</a>( <span class='pre'>Object container</span> )</div><div class='description'><div class='short'>Initializes the plugin, decorates the container with additional functionality ...</div><div class='long'><p>Initializes the plugin, decorates the container with additional functionality</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.ux.Reorderer-method-init' rel='Ext.ux.Reorderer-method-init' class='docClass'>Ext.ux.Reorderer.init</a></p></div></div></div><div id='method-initEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-method-initEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-method-initEvents' class='name expandable'>initEvents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Adds before-reorder and reorder events to the target component ...</div><div class='long'><p>Adds before-reorder and reorder events to the target component</p>\n</div></div></div><div id='method-reorder' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-method-reorder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-method-reorder' class='name expandable'>reorder</a>( <span class='pre'>Object mappings</span> )</div><div class='description'><div class='short'>Reorders the items in the target component according to the given mapping object. ...</div><div class='long'><p>Reorders the items in the target component according to the given mapping object. Example:\nthis.reorder({</p>\n\n<pre><code>1: 5,\n3: 2\n</code></pre>\n\n<p>});\nWould move the item at index 1 to index 5, and the item at index 3 to index 2</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mappings</span> : Object<div class='sub-desc'><p>Object containing current item index as key and new index as property</p>\n</div></li></ul></div></div></div><div id='method-updateButtonXCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.HBoxReorderer'>Ext.ux.HBoxReorderer</span><br/><a href='source/Reorderer.html#Ext-ux-HBoxReorderer-method-updateButtonXCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.HBoxReorderer-method-updateButtonXCache' class='name expandable'>updateButtonXCache</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Updates the internal cache of button X locations. ...</div><div class='long'><p>Updates the internal cache of button X locations.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-before-reorder' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-event-before-reorder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-event-before-reorder' class='name expandable'>before-reorder</a>( <span class='pre'>Object mappings, Mixed component, Ext.ux.TabReorderer this</span> )</div><div class='description'><div class='short'>Fires before a reorder occurs. ...</div><div class='long'><p>Fires before a reorder occurs. Return false to cancel</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mappings</span> : Object<div class='sub-desc'><p>Mappings of the old item indexes to new item indexes</p>\n</div></li><li><span class='pre'>component</span> : Mixed<div class='sub-desc'><p>The target component</p>\n</div></li><li><span class='pre'>this</span> : Ext.ux.TabReorderer<div class='sub-desc'><p>The plugin instance</p>\n</div></li></ul></div></div></div><div id='event-reorder' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.Reorderer' rel='Ext.ux.Reorderer' class='defined-in docClass'>Ext.ux.Reorderer</a><br/><a href='source/Reorderer.html#Ext-ux-Reorderer-event-reorder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.Reorderer-event-reorder' class='name expandable'>reorder</a>( <span class='pre'>Object mappings, Mixed component, Ext.ux.TabReorderer this</span> )</div><div class='description'><div class='short'>Fires after a reorder has occured. ...</div><div class='long'><p>Fires after a reorder has occured.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mappings</span> : Object<div class='sub-desc'><p>Mappings of the old item indexes to the new item indexes</p>\n</div></li><li><span class='pre'>component</span> : Mixed<div class='sub-desc'><p>The target component</p>\n</div></li><li><span class='pre'>this</span> : Ext.ux.TabReorderer<div class='sub-desc'><p>The plugin instance</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"id":"class-Ext.ux.HBoxReorderer","html_meta":{},"tagname":"class","extends":"Ext.ux.Reorderer"});