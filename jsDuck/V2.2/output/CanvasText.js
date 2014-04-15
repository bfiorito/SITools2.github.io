Ext.data.JsonP.CanvasText({"alternateClassNames":[],"inheritdoc":null,"singleton":false,"statics":{"cfg":[],"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"members":{"cfg":[],"method":[{"meta":{},"owner":"CanvasText","name":"ascent","id":"method-ascent","tagname":"method"},{"meta":{},"owner":"CanvasText","name":"descent","id":"method-descent","tagname":"method"},{"meta":{},"owner":"CanvasText","name":"draw","id":"method-draw","tagname":"method"},{"meta":{},"owner":"CanvasText","name":"drawPoints","id":"method-drawPoints","tagname":"method"},{"meta":{},"owner":"CanvasText","name":"letter","id":"method-letter","tagname":"method"},{"meta":{},"owner":"CanvasText","name":"measure","id":"method-measure","tagname":"method"}],"event":[],"property":[{"meta":{},"owner":"CanvasText","name":"diacritics","id":"property-diacritics","tagname":"property"},{"meta":{},"owner":"CanvasText","name":"letters","id":"property-letters","tagname":"property"},{"meta":{},"owner":"CanvasText","name":"proto","id":"property-proto","tagname":"property"},{"meta":{},"owner":"CanvasText","name":"style","id":"property-style","tagname":"property"}],"css_var":[],"css_mixin":[]},"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":[],"name":"CanvasText","files":[{"href":"canvastext.html#CanvasText","filename":"canvastext.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/canvastext.html#CanvasText' target='_blank'>canvastext.js</a></div></pre><div class='doc-contents'><p>This code is released to the public domain by Jim Studt, 2007.\nHe may keep some sort of up to date copy at http://www.federated.com/~jim/canvastext/\nIt as been modified by Fabien M�nager to handle font style like size, weight, color and rotation.\nA partial support for special characters has been added too.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-diacritics' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-property-diacritics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-property-diacritics' class='name not-expandable'>diacritics</a><span> : Object</span></div><div class='description'><div class='short'><p>Diacritics, used to draw accentuated letters</p>\n</div><div class='long'><p>Diacritics, used to draw accentuated letters</p>\n</div></div></div><div id='property-letters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-property-letters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-property-letters' class='name expandable'>letters</a><span> : Object</span></div><div class='description'><div class='short'>The letters definition. ...</div><div class='long'><p>The letters definition. It is a list of letters,\nwith their width, and the coordinates of points compositing them.\nThe syntax for the points is : [x, y], null value means \"pen up\"</p>\n</div></div></div><div id='property-proto' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-property-proto' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-property-proto' class='name not-expandable'>proto</a><span> : Object</span></div><div class='description'><div class='short'><p>The text functions are bound to the CanvasRenderingContext2D prototype</p>\n</div><div class='long'><p>The text functions are bound to the CanvasRenderingContext2D prototype</p>\n</div></div></div><div id='property-style' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-property-style' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-property-style' class='name expandable'>style</a><span> : Object</span></div><div class='description'><div class='short'>The default font styling ...</div><div class='long'><p>The default font styling</p>\n<p>Defaults to: <code>{size: 8, font: null, color: &quot;#000000&quot;, weight: 1, textAlign: &quot;left&quot;, textBaseline: &quot;bottom&quot;, adjustAlign: false, angle: 0, tracking: 1, boundingBoxColor: &quot;#ff0000&quot;, originPointColor: &quot;#000000&quot;}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-ascent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-method-ascent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-method-ascent' class='name expandable'>ascent</a>( <span class='pre'>Object style</span> )</div><div class='description'><div class='short'>Get the font ascent for a given style ...</div><div class='long'><p>Get the font ascent for a given style</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>style</span> : Object<div class='sub-desc'><ul>\n<li>The reference style</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-descent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-method-descent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-method-descent' class='name expandable'>descent</a>( <span class='pre'>Object style</span> )</div><div class='description'><div class='short'>Get the font descent for a given style ...</div><div class='long'><p>Get the font descent for a given style</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>style</span> : Object<div class='sub-desc'><ul>\n<li>The reference style</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-method-draw' class='name expandable'>draw</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> str, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> xOrig, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> yOrig, Object style</span> )</div><div class='description'><div class='short'>Draws a text at given coordinates and with a given style ...</div><div class='long'><p>Draws a text at given coordinates and with a given style</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><ul>\n<li>The text to draw</li>\n</ul>\n\n</div></li><li><span class='pre'>xOrig</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><ul>\n<li>The X coordinate</li>\n</ul>\n\n</div></li><li><span class='pre'>yOrig</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><ul>\n<li>The Y coordinate</li>\n</ul>\n\n</div></li><li><span class='pre'>style</span> : Object<div class='sub-desc'><ul>\n<li>The font style</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-drawPoints' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-method-drawPoints' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-method-drawPoints' class='name expandable'>drawPoints</a>( <span class='pre'>Canvas context ctx, Array points, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> x, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> y, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> mag</span> )</div><div class='description'><div class='short'>Draws serie of points at given coordinates ...</div><div class='long'><p>Draws serie of points at given coordinates</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctx</span> : Canvas context<div class='sub-desc'><ul>\n<li>The canvas context</li>\n</ul>\n\n</div></li><li><span class='pre'>points</span> : Array<div class='sub-desc'><ul>\n<li>The points to draw</li>\n</ul>\n\n</div></li><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><ul>\n<li>The X coordinate</li>\n</ul>\n\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><ul>\n<li>The Y coordinate</li>\n</ul>\n\n</div></li><li><span class='pre'>mag</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><ul>\n<li>The scale</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-letter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-method-letter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-method-letter' class='name expandable'>letter</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> ch</span> )</div><div class='description'><div class='short'>Get the letter data corresponding to a char ...</div><div class='long'><p>Get the letter data corresponding to a char</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ch</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><ul>\n<li>The char</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-measure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasText'>CanvasText</span><br/><a href='source/canvastext.html#CanvasText-method-measure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasText-method-measure' class='name expandable'>measure</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> str, Object style</span> )</div><div class='description'><div class='short'>Measure the text horizontal size ...</div><div class='long'><p>Measure the text horizontal size</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><ul>\n<li>The text</li>\n</ul>\n\n</div></li><li><span class='pre'>style</span> : Object<div class='sub-desc'><ul>\n<li>Text style</li>\n</ul>\n\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"id":"class-CanvasText","html_meta":{},"tagname":"class","extends":null});