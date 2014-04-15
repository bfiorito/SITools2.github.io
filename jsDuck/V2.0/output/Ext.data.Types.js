Ext.data.JsonP.Ext_data_Types({"superclasses":[],"parentMixins":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-data-Types' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>This is s static class containing the system-supplied data types which may be given to a <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a>.<p/>\n<p>The properties in this class are used as type indicators in the <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> class, so to\ntest whether a Field is of a certain type, compare the <a href=\"#!/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">type</a> property against properties\nof this class.</p>\n<p>Developers may add their own application-specific data types to this class. Definition names must be UPPERCASE.\neach type definition must contain three properties:</p>\n<div class=\"mdetail-params\"><ul>\n<li><code>convert</code> : <i>Function</i><div class=\"sub-desc\">A function to convert raw data values from a data block into the data\nto be stored in the Field. The function is passed the collowing parameters:\n<div class=\"mdetail-params\"><ul>\n<li><b>v</b> : Mixed<div class=\"sub-desc\">The data value as read by the Reader, if undefined will use\nthe configured <tt><a href=\"#!/api/Ext.data.Field-cfg-defaultValue\" rel=\"Ext.data.Field-cfg-defaultValue\" class=\"docClass\">defaultValue</a></tt>.</div></li>\n<li><b>rec</b> : Mixed<div class=\"sub-desc\">The data object containing the row as read by the Reader.\nDepending on the Reader type, this could be an Array (<a href=\"#!/api/Ext.data.ArrayReader\" rel=\"Ext.data.ArrayReader\" class=\"docClass\">ArrayReader</a>), an object\n(<a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">JsonReader</a>), or an XML element (XMLReader).</div></li>\n</ul></div></div></li>\n<li><code>sortType</code> : <i>Function</i> <div class=\"sub-desc\">A function to convert the stored data into comparable form, as defined by <a href=\"#!/api/Ext.data.SortTypes\" rel=\"Ext.data.SortTypes\" class=\"docClass\">Ext.data.SortTypes</a>.</div></li>\n<li><code>type</code> : <i>String</i> <div class=\"sub-desc\">A textual data type name.</div></li>\n</ul></div>\n<p>For example, to create a VELatLong field (See the Microsoft Bing Mapping API) containing the latitude/longitude value of a datapoint on a map from a JsonReader data block\nwhich contained the properties <code>lat</code> and <code>long</code>, you would define a new data type like this:</p>\n<pre><code>// Add a new Field data type which stores a VELatLong object in the Record.\nExt.data.Types.VELATLONG = {\n    convert: function(v, data) {\n        return new VELatLong(data.lat, data.long);\n    },\n    sortType: function(v) {\n        return v.Latitude;  // When sorting, order by latitude\n    },\n    type: 'VELatLong'\n};\n</code></pre>\n<p>Then, when declaring a Record, use \n<pre><code>var types = <a href=\"#!/api/Ext.data.Types\" rel=\"Ext.data.Types\" class=\"docClass\">Ext.data.Types</a>; // allow shorthand type access\nUnitRecord = <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>([\n    { name: 'unitName', mapping: 'UnitName' },\n    { name: 'curSpeed', mapping: 'CurSpeed', type: types.INT },\n    { name: 'latitude', mapping: 'lat', type: types.FLOAT },\n    { name: 'latitude', mapping: 'lat', type: types.FLOAT },\n    { name: 'position', type: types.VELATLONG }\n]);\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-AUTO' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-AUTO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-AUTO' class='name not-expandable'>AUTO</a><span> : Object.</span></div><div class='description'><div class='short'><p>This data type means that no conversion is applied to the raw data before it is placed into a Record.</p>\n</div><div class='long'><p>This data type means that no conversion is applied to the raw data before it is placed into a Record.</p>\n</div></div></div><div id='property-BOOL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-BOOL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-BOOL' class='name expandable'>BOOL</a><span> : Object.</span></div><div class='description'><div class='short'>This data type means that the raw data is converted into a boolean before it is placed into\na Record. ...</div><div class='long'><p>This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"true\" and the number 1 are converted to boolean <code>true</code>.</p>\n\n\n<p>The synonym <code>BOOLEAN</code> is equivalent.</p>\n\n</div></div></div><div id='property-BOOLEAN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-BOOLEAN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-BOOLEAN' class='name expandable'>BOOLEAN</a><span> : Object.</span></div><div class='description'><div class='short'>This data type means that the raw data is converted into a boolean before it is placed into\na Record. ...</div><div class='long'><p>This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"true\" and the number 1 are converted to boolean <code>true</code>.</p>\n\n\n<p>The synonym <code>BOOL</code> is equivalent.</p>\n\n</div></div></div><div id='property-DATE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-DATE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-DATE' class='name expandable'>DATE</a><span> : Object.</span></div><div class='description'><div class='short'>This data type means that the raw data is converted into a Date before it is placed into a Record. ...</div><div class='long'><p>This data type means that the raw data is converted into a Date before it is placed into a Record.\nThe date format is specified in the constructor of the <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> to which this type is\nbeing applied.</p>\n</div></div></div><div id='property-FLOAT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-FLOAT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-FLOAT' class='name expandable'>FLOAT</a><span> : Object.</span></div><div class='description'><div class='short'>This data type means that the raw data is converted into a number before it is placed into a Record. ...</div><div class='long'><p>This data type means that the raw data is converted into a number before it is placed into a Record.</p>\n\n<p>The synonym <code>NUMBER</code> is equivalent.</p>\n\n</div></div></div><div id='property-INT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-INT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-INT' class='name expandable'>INT</a><span> : Object.</span></div><div class='description'><div class='short'>This data type means that the raw data is converted into an integer before it is placed into a Record. ...</div><div class='long'><p>This data type means that the raw data is converted into an integer before it is placed into a Record.</p>\n\n<p>The synonym <code>INTEGER</code> is equivalent.</p>\n\n</div></div></div><div id='property-INTEGER' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-INTEGER' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-INTEGER' class='name expandable'>INTEGER</a><span> : Object.</span></div><div class='description'><div class='short'>This data type means that the raw data is converted into an integer before it is placed into a Record. ...</div><div class='long'><p>This data type means that the raw data is converted into an integer before it is placed into a Record.</p>\n\n<p>The synonym <code>INT</code> is equivalent.</p>\n\n</div></div></div><div id='property-NUMBER' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-NUMBER' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-NUMBER' class='name expandable'>NUMBER</a><span> : Object.</span></div><div class='description'><div class='short'>This data type means that the raw data is converted into a number before it is placed into a Record. ...</div><div class='long'><p>This data type means that the raw data is converted into a number before it is placed into a Record.</p>\n\n<p>The synonym <code>FLOAT</code> is equivalent.</p>\n\n</div></div></div><div id='property-STRING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-STRING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-STRING' class='name not-expandable'>STRING</a><span> : Object.</span></div><div class='description'><div class='short'><p>This data type means that the raw data is converted into a String before it is placed into a Record.</p>\n</div><div class='long'><p>This data type means that the raw data is converted into a String before it is placed into a Record.</p>\n</div></div></div><div id='property-stripRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Types'>Ext.data.Types</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-Types-property-stripRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Types-property-stripRe' class='name expandable'>stripRe</a><span> : Regexp</span></div><div class='description'><div class='short'>A regular expression for stripping non-numeric characters from a numeric value. ...</div><div class='long'><p>A regular expression for stripping non-numeric characters from a numeric value. Defaults to <tt>/[\\$,%]/g</tt>.\nThis should be overridden for localization.</p>\n<p>Defaults to: <code>/[\\$,%]/g</code></p></div></div></div></div></div></div></div>","alternateClassNames":[],"members":{"css_mixin":[],"method":[],"cfg":[],"property":[{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"AUTO","id":"property-AUTO"},{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"BOOL","id":"property-BOOL"},{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"BOOLEAN","id":"property-BOOLEAN"},{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"DATE","id":"property-DATE"},{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"FLOAT","id":"property-FLOAT"},{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"INT","id":"property-INT"},{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"INTEGER","id":"property-INTEGER"},{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"NUMBER","id":"property-NUMBER"},{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"STRING","id":"property-STRING"},{"tagname":"property","meta":{},"owner":"Ext.data.Types","name":"stripRe","id":"property-stripRe"}],"css_var":[],"event":[]},"html_meta":{},"tagname":"class","singleton":true,"statics":{"css_mixin":[],"method":[],"cfg":[],"property":[],"event":[],"css_var":[]},"mixins":[],"code_type":"assignment","inheritable":false,"files":[{"href":"ext-all-debug-w-comments.html#Ext-data-Types","filename":"ext-all-debug-w-comments.js"}],"component":false,"name":"Ext.data.Types","meta":{},"requires":[],"id":"class-Ext.data.Types","mixedInto":[],"subclasses":[],"aliases":{},"inheritdoc":null});