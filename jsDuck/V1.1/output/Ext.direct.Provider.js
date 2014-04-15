Ext.data.JsonP.Ext_direct_Provider({"superclasses":["Ext.util.Observable"],"parentMixins":[],"extends":"Ext.util.Observable","uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='docClass'>Ext.util.Observable</a><div class='subclass '><strong>Ext.direct.Provider</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.direct.JsonProvider' rel='Ext.direct.JsonProvider' class='docClass'>Ext.direct.JsonProvider</a></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a> is an abstract class meant to be extended.</p>\n\n\n\n\n<p>For example ExtJs implements the following subclasses:</p>\n\n\n<pre><code>Provider\n|\n+---<a href=\"#!/api/Ext.direct.JsonProvider\" rel=\"Ext.direct.JsonProvider\" class=\"docClass\">JsonProvider</a> \n    |\n    +---<a href=\"#!/api/Ext.direct.PollingProvider\" rel=\"Ext.direct.PollingProvider\" class=\"docClass\">PollingProvider</a>   \n    |\n    +---<a href=\"#!/api/Ext.direct.RemotingProvider\" rel=\"Ext.direct.RemotingProvider\" class=\"docClass\">RemotingProvider</a>   \n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-id' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-cfg-id' class='name expandable'>id</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The unique id of the provider (defaults to an auto-assigned id). ...</div><div class='long'><p>The unique id of the provider (defaults to an auto-assigned id).\nYou should assign an id if you need to be able to access the provider later and you do\nnot have an object reference available, for example:</p>\n\n<pre><code><a href=\"#!/api/Ext.Direct-method-addProvider\" rel=\"Ext.Direct-method-addProvider\" class=\"docClass\">Ext.Direct.addProvider</a>(\n    {\n        type: 'polling',\n        url:  'php/poll.php',\n        id:   'poll-provider'\n    }\n);\n     \nvar p = <a href=\"#!/api/Ext.Direct\" rel=\"Ext.Direct\" class=\"docClass\">Ext.Direct</a>.<a href=\"#!/api/Ext.Direct-method-getProvider\" rel=\"Ext.Direct-method-getProvider\" class=\"docClass\">getProvider</a>('poll-provider');\np.disconnect();\n</code></pre>\n\n</div></div></div><div id='cfg-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-cfg-listeners' class='name expandable'>listeners</a><span> : Object</span></div><div class='description'><div class='short'>(optional) A config object containing one or more event handlers to be added to this\nobject during initialization. ...</div><div class='long'><p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#!/api/Ext.DataView\" rel=\"Ext.DataView\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#!/api/Ext.DataView-event-click\" rel=\"Ext.DataView-event-click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a Component's HTMLElement, listeners must be added to the <i><a href=\"#!/api/Ext.Component-method-getEl\" rel=\"Ext.Component-method-getEl\" class=\"docClass\">Element</a></i> after the Component\nhas been rendered. A plugin can simplify this step:</p>\n\n<pre><code>// Plugin is configured with a listeners config object.\n// The Component is appended to the argument list of all handler functions.\nExt.DomObserver = Ext.extend(Object, {\n    constructor: function(config) {\n        this.listeners = config.listeners ? config.listeners : config;\n    },\n\n    // Component passes itself into plugin&#39;s init method\n    init: function(c) {\n        var p, l = this.listeners;\n        for (p in l) {\n            if (Ext.isFunction(l[p])) {\n                l[p] = this.createHandler(l[p], c);\n            } else {\n                l[p].fn = this.createHandler(l[p].fn, c);\n            }\n        }\n\n        // Add the listeners to the Element immediately following the render call\n        c.render = c.render.<a href=\"#!/api/Function-method-createSequence\" rel=\"Function-method-createSequence\" class=\"docClass\">createSequence</a>(function() {\n            var e = c.getEl();\n            if (e) {\n                e.on(l);\n            }\n        });\n    },\n\n    createHandler: function(fn, c) {\n        return function(e) {\n            fn.call(this, e, c);\n        };\n    }\n});\n\nvar combo = new <a href=\"#!/api/Ext.form.ComboBox\" rel=\"Ext.form.ComboBox\" class=\"docClass\">Ext.form.ComboBox</a>({\n\n    // Collapse combo when its element is clicked on\n    plugins: [ new Ext.DomObserver({\n        click: function(evt, comp) {\n            comp.collapse();\n        }\n    })],\n    store: myStore,\n    typeAhead: true,\n    mode: 'local',\n    triggerAction: 'all'\n});\n</code></pre>\n\n\n<p></p></p>\n</div></div></div><div id='cfg-priority' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-cfg-priority' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-cfg-priority' class='name expandable'>priority</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Priority of the request. ...</div><div class='long'><p>Priority of the request. Lower is higher priority, <tt>0</tt> means \"duplex\" (always on).\nAll Providers default to <tt>1</tt> except for PollingProvider which defaults to <tt>3</tt>.</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='cfg-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-cfg-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Required, undefined by default. ...</div><div class='long'><p><b>Required</b>, <tt>undefined</tt> by default.  The <tt>type</tt> of provider specified\nto <a href=\"#!/api/Ext.Direct\" rel=\"Ext.Direct\" class=\"docClass\">Ext.Direct</a>.<a href=\"#!/api/Ext.Direct-method-addProvider\" rel=\"Ext.Direct-method-addProvider\" class=\"docClass\">addProvider</a> to create a\nnew Provider. Acceptable values by default are:<div class=\"mdetail-params\"><ul>\n<li><b><tt>polling</tt></b> : <a href=\"#!/api/Ext.direct.PollingProvider\" rel=\"Ext.direct.PollingProvider\" class=\"docClass\">PollingProvider</a></li>\n<li><b><tt>remoting</tt></b> : <a href=\"#!/api/Ext.direct.RemotingProvider\" rel=\"Ext.direct.RemotingProvider\" class=\"docClass\">RemotingProvider</a></li>\n</ul></div></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEvents' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>Object|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> o, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a> Optional</span> )</div><div class='description'><div class='short'>Adds the specified events to the list of events which this Observable may fire. ...</div><div class='long'><p>Adds the specified events to the list of events which this Observable may fire.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n</div></li><li><span class='pre'>Optional</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>. Event name if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n</div></li></ul></div></div></div><div id='method-addListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addListener' class='name expandable'>addListener</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> handler, [Object scope], [Object options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object. ...</div><div class='long'><p>Appends an event handler to this object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to listen for.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myDataView.on('click', this.onClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple handlers.\n<p>\n<pre><code>myGridPanel.on({\n'click' : {\n    fn: this.onClick,\n    scope: this,\n    delay: 100\n},\n'mouseover' : {\n    fn: this.onMouseOver,\n    scope: this\n},\n'mouseout' : {\n    fn: this.onMouseOut,\n    scope: this\n}\n});</code></pre>\n<p>\nOr a shorthand syntax:<br>\n<pre><code>myGridPanel.on({\n'click' : this.onClick,\n'mouseover' : this.onMouseOver,\n'mouseout' : this.onMouseOut,\n scope: this\n});</code></pre>\n\n</div></li></ul></div></div></div><div id='method-connect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-method-connect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract methods for subclasses to implement. ...</div><div class='long'><p>Abstract methods for subclasses to implement.</p>\n</div></div></div><div id='method-disconnect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-method-disconnect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract methods for subclasses to implement. ...</div><div class='long'><p>Abstract methods for subclasses to implement.</p>\n</div></div></div><div id='method-enableBubble' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-enableBubble' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-enableBubble' class='name expandable'>enableBubble</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Array events</span> )</div><div class='description'><div class='short'>Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present. ...</div><div class='long'><p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See Ext.Component.getBubbleTarget. The default\nimplementation in <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code>Ext.override(<a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Ext.form.Field</a>, {\n    //  Add functionality to Field&#39;s initComponent to enable the change event to bubble\n    initComponent : Ext.form.Field.prototype.initComponent.createSequence(function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field&#39;s events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Array<div class='sub-desc'><p>The event name to bubble, or an Array of event names.</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, Object... args</span> ) : Boolean</div><div class='description'><div class='short'>Fires the specified event with the passed parameters (minus the event name). ...</div><div class='long'><p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#!/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#!/api/Ext.util.Observable-method-enableBubble\" rel=\"Ext.util.Observable-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to fire.</p>\n</div></li><li><span class='pre'>args</span> : Object...<div class='sub-desc'><p>Variable number of parameters are passed to handlers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>returns false if any of the handlers return false otherwise it returns true.</p>\n</div></li></ul></div></div></div><div id='method-hasListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-hasListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-hasListener' class='name expandable'>hasListener</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName</span> ) : Boolean</div><div class='description'><div class='short'>Checks to see if this object has any listeners for a specified event ...</div><div class='long'><p>Checks to see if this object has any listeners for a specified event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to check for</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the event is being listened for, else false</p>\n</div></li></ul></div></div></div><div id='method-isConnected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-method-isConnected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-method-isConnected' class='name expandable'>isConnected</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Returns whether or not the server-side is currently connected. ...</div><div class='long'><p>Returns whether or not the server-side is currently connected.\nAbstract method for subclasses to implement.</p>\n</div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> handler, [Object scope], [Object options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object (shorthand for addListener.) ...</div><div class='long'><p>Appends an event handler to this object (shorthand for <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event to listen for</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.</p>\n</div></li></ul></div></div></div><div id='method-purgeListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-purgeListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-purgeListeners' class='name expandable'>purgeListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all listeners for this object ...</div><div class='long'><p>Removes all listeners for this object</p>\n</div></div></div><div id='method-relayEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-relayEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-relayEvents' class='name expandable'>relayEvents</a>( <span class='pre'>Object o, Array events</span> )</div><div class='description'><div class='short'>Relays selected events from the specified Observable as if the events were fired by this. ...</div><div class='long'><p>Relays selected events from the specified Observable as if the events were fired by <tt><b>this</b></tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The Observable whose events this object is to relay.</p>\n</div></li><li><span class='pre'>events</span> : Array<div class='sub-desc'><p>Array of event names to relay.</p>\n</div></li></ul></div></div></div><div id='method-removeListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> handler, [Object scope]</span> )</div><div class='description'><div class='short'>Removes an event handler. ...</div><div class='long'><p>Removes an event handler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div><div id='method-resumeEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-resumeEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-resumeEvents' class='name expandable'>resumeEvents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Resume firing events. ...</div><div class='long'><p>Resume firing events. (see <a href=\"#!/api/Ext.util.Observable-method-suspendEvents\" rel=\"Ext.util.Observable-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <tt><b>queueSuspended</b></tt> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n</div></div></div><div id='method-suspendEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-suspendEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-suspendEvents' class='name expandable'>suspendEvents</a>( <span class='pre'>Boolean queueSuspended</span> )</div><div class='description'><div class='short'>Suspend the firing of all events. ...</div><div class='long'><p>Suspend the firing of all events. (see <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queueSuspended</span> : Boolean<div class='sub-desc'><p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n</div></li></ul></div></div></div><div id='method-un' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-util-Observable-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-un' class='name expandable'>un</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> handler, [Object scope]</span> )</div><div class='description'><div class='short'>Removes an event handler (shorthand for removeListener.) ...</div><div class='long'><p>Removes an event handler (shorthand for <a href=\"#!/api/Ext.util.Observable-method-removeListener\" rel=\"Ext.util.Observable-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-connect' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-event-connect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-event-connect' class='name expandable'>connect</a>( <span class='pre'><a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a> provider</span> )</div><div class='description'><div class='short'>Fires when the Provider connects to the server-side ...</div><div class='long'><p>Fires when the Provider connects to the server-side</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a><div class='sub-desc'><p>The <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a>.</p>\n</div></li></ul></div></div></div><div id='event-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-event-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-event-data' class='name expandable'>data</a>( <span class='pre'><a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a> provider, event e</span> )</div><div class='description'><div class='short'>Fires when the Provider receives data from the server-side ...</div><div class='long'><p>Fires when the Provider receives data from the server-side</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a><div class='sub-desc'><p>The <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a>.</p>\n</div></li><li><span class='pre'>e</span> : event<div class='sub-desc'><p>The <a href=\"#!/api/Ext.Direct-property-eventTypes\" rel=\"Ext.Direct-property-eventTypes\" class=\"docClass\">Ext.Direct.Event type</a> that occurred.</p>\n</div></li></ul></div></div></div><div id='event-disconnect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-event-disconnect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-event-disconnect' class='name expandable'>disconnect</a>( <span class='pre'><a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a> provider</span> )</div><div class='description'><div class='short'>Fires when the Provider disconnects from the server-side ...</div><div class='long'><p>Fires when the Provider disconnects from the server-side</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a><div class='sub-desc'><p>The <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a>.</p>\n</div></li></ul></div></div></div><div id='event-exception' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.Provider'>Ext.direct.Provider</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-direct-Provider-event-exception' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-event-exception' class='name expandable'>exception</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fires when the Provider receives an exception from the server-side ...</div><div class='long'><p>Fires when the Provider receives an exception from the server-side</p>\n</div></div></div></div></div></div></div>","alternateClassNames":[],"members":{"css_mixin":[],"method":[{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"addEvents","id":"method-addEvents"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"addListener","id":"method-addListener"},{"tagname":"method","meta":{},"owner":"Ext.direct.Provider","name":"connect","id":"method-connect"},{"tagname":"method","meta":{},"owner":"Ext.direct.Provider","name":"disconnect","id":"method-disconnect"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"enableBubble","id":"method-enableBubble"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"fireEvent","id":"method-fireEvent"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"hasListener","id":"method-hasListener"},{"tagname":"method","meta":{},"owner":"Ext.direct.Provider","name":"isConnected","id":"method-isConnected"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"on","id":"method-on"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"purgeListeners","id":"method-purgeListeners"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"relayEvents","id":"method-relayEvents"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"removeListener","id":"method-removeListener"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"resumeEvents","id":"method-resumeEvents"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"suspendEvents","id":"method-suspendEvents"},{"tagname":"method","meta":{},"owner":"Ext.util.Observable","name":"un","id":"method-un"}],"cfg":[{"tagname":"cfg","meta":{},"owner":"Ext.direct.Provider","name":"id","id":"cfg-id"},{"tagname":"cfg","meta":{},"owner":"Ext.util.Observable","name":"listeners","id":"cfg-listeners"},{"tagname":"cfg","meta":{},"owner":"Ext.direct.Provider","name":"priority","id":"cfg-priority"},{"tagname":"cfg","meta":{},"owner":"Ext.direct.Provider","name":"type","id":"cfg-type"}],"property":[],"css_var":[],"event":[{"tagname":"event","meta":{},"owner":"Ext.direct.Provider","name":"connect","id":"event-connect"},{"tagname":"event","meta":{},"owner":"Ext.direct.Provider","name":"data","id":"event-data"},{"tagname":"event","meta":{},"owner":"Ext.direct.Provider","name":"disconnect","id":"event-disconnect"},{"tagname":"event","meta":{},"owner":"Ext.direct.Provider","name":"exception","id":"event-exception"}]},"html_meta":{"abstract":null},"tagname":"class","singleton":false,"statics":{"css_mixin":[],"method":[],"cfg":[],"property":[],"event":[],"css_var":[]},"mixins":[],"code_type":"assignment","inheritable":false,"files":[{"href":"ext-all-debug-w-comments.html#Ext-direct-Provider","filename":"ext-all-debug-w-comments.js"}],"component":false,"name":"Ext.direct.Provider","meta":{"abstract":true},"requires":[],"id":"class-Ext.direct.Provider","mixedInto":[],"subclasses":["Ext.direct.JsonProvider"],"aliases":{},"inheritdoc":null});