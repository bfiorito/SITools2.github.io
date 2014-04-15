Ext.data.JsonP.Ext_data_JsonReader({"alternateClassNames":[],"inheritdoc":null,"singleton":false,"statics":{"cfg":[],"method":[],"property":[],"event":[],"css_var":[],"css_mixin":[]},"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"members":{"cfg":[{"meta":{},"owner":"Ext.data.DataReader","name":"fields","id":"cfg-fields","tagname":"cfg"},{"meta":{},"owner":"Ext.data.JsonReader","name":"idProperty","id":"cfg-idProperty","tagname":"cfg"},{"meta":{},"owner":"Ext.data.DataReader","name":"messageProperty","id":"cfg-messageProperty","tagname":"cfg"},{"meta":{},"owner":"Ext.data.JsonReader","name":"root","id":"cfg-root","tagname":"cfg"},{"meta":{},"owner":"Ext.data.JsonReader","name":"successProperty","id":"cfg-successProperty","tagname":"cfg"},{"meta":{},"owner":"Ext.data.JsonReader","name":"totalProperty","id":"cfg-totalProperty","tagname":"cfg"}],"method":[{"meta":{},"owner":"Ext.data.JsonReader","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"Ext.data.DataReader","name":"buildExtractors","id":"method-buildExtractors","tagname":"method"},{"meta":{"private":true},"owner":"Ext.data.DataReader","name":"extractData","id":"method-extractData","tagname":"method"},{"meta":{"private":true},"owner":"Ext.data.JsonReader","name":"extractValues","id":"method-extractValues","tagname":"method"},{"meta":{},"owner":"Ext.data.DataReader","name":"getId","id":"method-getId","tagname":"method"},{"meta":{},"owner":"Ext.data.DataReader","name":"getMessage","id":"method-getMessage","tagname":"method"},{"meta":{},"owner":"Ext.data.DataReader","name":"getRoot","id":"method-getRoot","tagname":"method"},{"meta":{},"owner":"Ext.data.DataReader","name":"getSuccess","id":"method-getSuccess","tagname":"method"},{"meta":{},"owner":"Ext.data.DataReader","name":"getTotal","id":"method-getTotal","tagname":"method"},{"meta":{},"owner":"Ext.data.DataReader","name":"isData","id":"method-isData","tagname":"method"},{"meta":{},"owner":"Ext.data.JsonReader","name":"read","id":"method-read","tagname":"method"},{"meta":{},"owner":"Ext.data.JsonReader","name":"readRecords","id":"method-readRecords","tagname":"method"},{"meta":{},"owner":"Ext.data.JsonReader","name":"readResponse","id":"method-readResponse","tagname":"method"},{"meta":{},"owner":"Ext.data.DataReader","name":"realize","id":"method-realize","tagname":"method"},{"meta":{},"owner":"Ext.data.DataReader","name":"update","id":"method-update","tagname":"method"}],"event":[],"property":[{"meta":{},"owner":"Ext.data.JsonReader","name":"jsonData","id":"property-jsonData","tagname":"property"},{"meta":{},"owner":"Ext.data.JsonReader","name":"meta","id":"property-meta","tagname":"property"}],"css_var":[],"css_mixin":[]},"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":["Ext.data.DataReader"],"name":"Ext.data.JsonReader","files":[{"href":"ext-all-debug-w-comments.html#Ext-data-JsonReader","filename":"ext-all-debug-w-comments.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='docClass'>Ext.data.DataReader</a><div class='subclass '><strong>Ext.data.JsonReader</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.data.ArrayReader' rel='Ext.data.ArrayReader' class='docClass'>Ext.data.ArrayReader</a></div><div class='dependency'><a href='#!/api/Ext.ux.grid.livegrid.JsonReader' rel='Ext.ux.grid.livegrid.JsonReader' class='docClass'>Ext.ux.grid.livegrid.JsonReader</a></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>Data reader class to create an Array of <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> objects\nfrom a JSON packet based on mappings in a provided <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a>\nconstructor.</p>\n\n\n<p>Example code:</p>\n\n\n<pre><code>var myReader = new <a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a>({\n    // metadata configuration options:\n    <a href=\"#!/api/Ext.data.JsonReader-cfg-idProperty\" rel=\"Ext.data.JsonReader-cfg-idProperty\" class=\"docClass\">idProperty</a>: 'id'\n    <a href=\"#!/api/Ext.data.JsonReader-cfg-root\" rel=\"Ext.data.JsonReader-cfg-root\" class=\"docClass\">root</a>: 'rows',\n    <a href=\"#!/api/Ext.data.JsonReader-cfg-totalProperty\" rel=\"Ext.data.JsonReader-cfg-totalProperty\" class=\"docClass\">totalProperty</a>: 'results',\n    <a href=\"#!/api/Ext.data.DataReader-cfg-messageProperty\" rel=\"Ext.data.DataReader-cfg-messageProperty\" class=\"docClass\">Ext.data.DataReader.messageProperty</a>: \"msg\"  // The element within the response that provides a user-feedback message (optional)\n\n    // the fields config option will internally create an <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a>\n    // constructor that provides mapping for reading the record data objects\n    <a href=\"#!/api/Ext.data.DataReader-cfg-fields\" rel=\"Ext.data.DataReader-cfg-fields\" class=\"docClass\">fields</a>: [\n        // map Record&#39;s 'firstname' field to data object&#39;s key of same name\n        {name: 'name', mapping: 'firstname'},\n        // map Record&#39;s 'job' field to data object&#39;s 'occupation' key\n        {name: 'job', mapping: 'occupation'}\n    ]\n});\n</code></pre>\n\n\n<p>This would consume a JSON data object of the form:</p>\n\n\n<pre><code>{\n    results: 2000, // Reader&#39;s configured <a href=\"#!/api/Ext.data.JsonReader-cfg-totalProperty\" rel=\"Ext.data.JsonReader-cfg-totalProperty\" class=\"docClass\">totalProperty</a>\n    rows: [        // Reader&#39;s configured <a href=\"#!/api/Ext.data.JsonReader-cfg-root\" rel=\"Ext.data.JsonReader-cfg-root\" class=\"docClass\">root</a>\n        // record data objects:\n        { <a href=\"#!/api/Ext.data.JsonReader-cfg-idProperty\" rel=\"Ext.data.JsonReader-cfg-idProperty\" class=\"docClass\">id</a>: 1, firstname: 'Bill', occupation: 'Gardener' },\n        { <a href=\"#!/api/Ext.data.JsonReader-cfg-idProperty\" rel=\"Ext.data.JsonReader-cfg-idProperty\" class=\"docClass\">id</a>: 2, firstname: 'Ben' , occupation: 'Horticulturalist' },\n        ...\n    ]\n}\n</code></pre>\n\n\n<p><b><u>Automatic configuration using metaData</u></b></p>\n\n\n<p>It is possible to change a JsonReader's metadata at any time by including\na <b><tt>metaData</tt></b> property in the JSON data object. If the JSON data\nobject has a <b><tt>metaData</tt></b> property, a <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\nobject using this Reader will reconfigure itself to use the newly provided\nfield definition and fire its <a href=\"#!/api/Ext.data.Store-event-metachange\" rel=\"Ext.data.Store-event-metachange\" class=\"docClass\">metachange</a>\nevent. The metachange event handler may interrogate the <b><tt>metaData</tt></b>\nproperty to perform any configuration required.</p>\n\n\n<p>Note that reconfiguring a Store potentially invalidates objects which may\nrefer to Fields or Records which no longer exist.</p>\n\n\n<p>To use this facility you would create the JsonReader like this:</p>\n\n\n<pre><code>var myReader = new <a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a>();\n</code></pre>\n\n\n<p>The first data packet from the server would configure the reader by\ncontaining a <b><tt>metaData</tt></b> property <b>and</b> the data. For\nexample, the JSON data object might take the form:</p>\n\n\n<pre><code>{\n    metaData: {\n        \"<a href=\"#!/api/Ext.data.JsonReader-cfg-idProperty\" rel=\"Ext.data.JsonReader-cfg-idProperty\" class=\"docClass\">idProperty</a>\": \"id\",\n        \"<a href=\"#!/api/Ext.data.JsonReader-cfg-root\" rel=\"Ext.data.JsonReader-cfg-root\" class=\"docClass\">root</a>\": \"rows\",\n        \"<a href=\"#!/api/Ext.data.JsonReader-cfg-totalProperty\" rel=\"Ext.data.JsonReader-cfg-totalProperty\" class=\"docClass\">totalProperty</a>\": \"results\"\n        \"<a href=\"#!/api/Ext.data.JsonReader-cfg-successProperty\" rel=\"Ext.data.JsonReader-cfg-successProperty\" class=\"docClass\">successProperty</a>\": \"success\",\n        \"<a href=\"#!/api/Ext.data.DataReader-cfg-fields\" rel=\"Ext.data.DataReader-cfg-fields\" class=\"docClass\">fields</a>\": [\n            {\"name\": \"name\"},\n            {\"name\": \"job\", \"mapping\": \"occupation\"}\n        ],\n        // used by store to set its sortInfo\n        \"sortInfo\":{\n           \"field\": \"name\",\n           \"direction\": \"ASC\"\n        },\n        // <a href=\"#!/api/Ext.PagingToolbar\" rel=\"Ext.PagingToolbar\" class=\"docClass\">paging data</a> (if applicable)\n        \"start\": 0,\n        \"limit\": 2,\n        // custom property\n        \"foo\": \"bar\"\n    },\n    // Reader&#39;s configured <a href=\"#!/api/Ext.data.JsonReader-cfg-successProperty\" rel=\"Ext.data.JsonReader-cfg-successProperty\" class=\"docClass\">successProperty</a>\n    \"success\": true,\n    // Reader&#39;s configured <a href=\"#!/api/Ext.data.JsonReader-cfg-totalProperty\" rel=\"Ext.data.JsonReader-cfg-totalProperty\" class=\"docClass\">totalProperty</a>\n    \"results\": 2000,\n    // Reader&#39;s configured <a href=\"#!/api/Ext.data.JsonReader-cfg-root\" rel=\"Ext.data.JsonReader-cfg-root\" class=\"docClass\">root</a>\n    // (this data simulates 2 results <a href=\"#!/api/Ext.PagingToolbar\" rel=\"Ext.PagingToolbar\" class=\"docClass\">per page</a>)\n    \"rows\": [ // <b>*Note:</b> this must be an Array\n        { \"id\": 1, \"name\": \"Bill\", \"occupation\": \"Gardener\" },\n        { \"id\": 2, \"name\":  \"Ben\", \"occupation\": \"Horticulturalist\" }\n    ]\n}\n</code></pre>\n\n\n<p>The <b><tt>metaData</tt></b> property in the JSON data object should contain:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>any of the configuration options for this class</li>\n<li>a <b><tt><a href=\"#!/api/Ext.data.Record-property-fields\" rel=\"Ext.data.Record-property-fields\" class=\"docClass\">fields</a></tt></b> property which\nthe JsonReader will use as an argument to the\n<a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">data Record create method</a> in order to\nconfigure the layout of the Records it will produce.</li>\n<li>a <b><tt><a href=\"#!/api/Ext.data.Store-cfg-sortInfo\" rel=\"Ext.data.Store-cfg-sortInfo\" class=\"docClass\">sortInfo</a></tt></b> property\nwhich the JsonReader will use to set the <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>'s\n<a href=\"#!/api/Ext.data.Store-cfg-sortInfo\" rel=\"Ext.data.Store-cfg-sortInfo\" class=\"docClass\">sortInfo</a> property</li>\n<li>any custom properties needed</li>\n</ul></div>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-fields' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-cfg-fields' class='name expandable'>fields</a><span> : Array/Object</span></div><div class='description'><div class='short'>Either an Array of Field definition objects (which\nwill be passed to Ext.data.Record.create, or a Record\nconstructor ...</div><div class='long'><p>Either an Array of <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> definition objects (which\nwill be passed to <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>, or a <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>\nconstructor created from <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>.</p>\n\n</div></div></div><div id='cfg-idProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-cfg-idProperty' class='name expandable'>idProperty</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[id] Name of the property within a row object\nthat contains a record identifier value. ...</div><div class='long'><p>[id] Name of the property within a row object\nthat contains a record identifier value.  Defaults to <tt>id</tt></p>\n</div></div></div><div id='cfg-messageProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-cfg-messageProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-cfg-messageProperty' class='name not-expandable'>messageProperty</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>[undefined] Optional name of a property within a server-response that represents a user-feedback message.</p>\n</div><div class='long'><p>[undefined] Optional name of a property within a server-response that represents a user-feedback message.</p>\n</div></div></div><div id='cfg-root' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-cfg-root' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-cfg-root' class='name expandable'>root</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[undefined] Required. ...</div><div class='long'><p>[undefined] <b>Required</b>.  The name of the property\nwhich contains the Array of row objects.  Defaults to <tt>undefined</tt>.\nAn exception will be thrown if the root property is undefined. The data\npacket value for this property should be an empty array to clear the data\nor show no data.</p>\n</div></div></div><div id='cfg-successProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-cfg-successProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-cfg-successProperty' class='name expandable'>successProperty</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[success] Name of the property from which to\nretrieve the success attribute. ...</div><div class='long'><p>[success] Name of the property from which to\nretrieve the success attribute. Defaults to <tt>success</tt>.  See\n<a href=\"#!/api/Ext.data.DataProxy\" rel=\"Ext.data.DataProxy\" class=\"docClass\">Ext.data.DataProxy</a>.<a href=\"#!/api/Ext.data.DataProxy-event-exception\" rel=\"Ext.data.DataProxy-event-exception\" class=\"docClass\">exception</a>\nfor additional information.</p>\n</div></div></div><div id='cfg-totalProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-cfg-totalProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-cfg-totalProperty' class='name expandable'>totalProperty</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[total] Name of the property from which to\nretrieve the total number of records in the dataset. ...</div><div class='long'><p>[total] Name of the property from which to\nretrieve the total number of records in the dataset. This is only needed\nif the whole dataset is not passed in one go, but is being paged from\nthe remote server.  Defaults to <tt>total</tt>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-jsonData' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-property-jsonData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-property-jsonData' class='name expandable'>jsonData</a><span> : Object</span></div><div class='description'><div class='short'>After any data loads, the raw JSON data is available for further custom processing. ...</div><div class='long'><p>After any data loads, the raw JSON data is available for further custom processing.  If no data is\nloaded or there is a load exception this property will be undefined.</p>\n</div></div></div><div id='property-meta' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-property-meta' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-property-meta' class='name not-expandable'>meta</a><span> : Mixed</span></div><div class='description'><div class='short'><p>This JsonReader's metadata as passed to the constructor, or as passed in\nthe last data packet's <b><tt>metaData</tt></b> property.</p>\n</div><div class='long'><p>This JsonReader's metadata as passed to the constructor, or as passed in\nthe last data packet's <b><tt>metaData</tt></b> property.</p>\n<p>Overrides: <a href='#!/api/Ext.data.DataReader-property-meta' rel='Ext.data.DataReader-property-meta' class='docClass'>Ext.data.DataReader.meta</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.JsonReader-method-constructor' class='name expandable'>Ext.data.JsonReader</a>( <span class='pre'>Object meta, Array/Object recordType</span> ) : Object</div><div class='description'><div class='short'>Create a new JsonReader ...</div><div class='long'><p>Create a new JsonReader</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>meta</span> : Object<div class='sub-desc'><p>Metadata configuration options.</p>\n</div></li><li><span class='pre'>recordType</span> : Array/Object<div class='sub-desc'><p>Either an Array of <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> definition objects (which\nwill be passed to <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>, or a <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>\nconstructor created from <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.DataReader-method-constructor' rel='Ext.data.DataReader-method-constructor' class='docClass'>Ext.data.DataReader.constructor</a></p></div></div></div><div id='method-buildExtractors' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-buildExtractors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-buildExtractors' class='name expandable'>buildExtractors</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method, overridden in DataReader extensions such as Ext.data.JsonReader and Ext.data.XmlReader ...</div><div class='long'><p>Abstract method, overridden in DataReader extensions such as <a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a> and <a href=\"#!/api/Ext.data.XmlReader\" rel=\"Ext.data.XmlReader\" class=\"docClass\">Ext.data.XmlReader</a></p>\n</div></div></div><div id='method-extractData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-extractData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-extractData' class='name expandable'>extractData</a>( <span class='pre'>Object[]/Object data-root, Boolean returnRecords</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>returns extracted, type-cast rows of data. ...</div><div class='long'><p>returns extracted, type-cast rows of data.  Iterates to call <a href=\"#!/api/Ext.data.DataReader-method-extractValues\" rel=\"Ext.data.DataReader-method-extractValues\" class=\"docClass\">extractValues</a> for each row</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data-root</span> : Object[]/Object<div class='sub-desc'><p>from server response</p>\n</div></li><li><span class='pre'>returnRecords</span> : Boolean<div class='sub-desc'><p>[false] Set true to return instances of <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a></p>\n</div></li></ul></div></div></div><div id='method-extractValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-method-extractValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-extractValues' class='name expandable'>extractValues</a>( <span class='pre'>Object data, Array items, Integer len</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>type-casts a single row of raw-data from server ...</div><div class='long'><p>type-casts a single row of raw-data from server</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>items</span> : Array<div class='sub-desc'>\n</div></li><li><span class='pre'>len</span> : Integer<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.DataReader-method-extractValues' rel='Ext.data.DataReader-method-extractValues' class='docClass'>Ext.data.DataReader.extractValues</a></p></div></div></div><div id='method-getId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getMessage' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getMessage' class='name expandable'>getMessage</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getRoot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getRoot' class='name expandable'>getRoot</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getSuccess' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getSuccess' class='name expandable'>getSuccess</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getTotal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getTotal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getTotal' class='name expandable'>getTotal</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-isData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-isData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-isData' class='name expandable'>isData</a>( <span class='pre'>Object data</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the supplied data-hash looks and quacks like data. ...</div><div class='long'><p>Returns true if the supplied data-hash <b>looks</b> and quacks like data.  Checks to see if it has a key\ncorresponding to idProperty defined in your DataReader config containing non-empty pk.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-read' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-method-read' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-read' class='name expandable'>read</a>( <span class='pre'>Object response</span> ) : Object</div><div class='description'><div class='short'>This method is only used by a DataProxy which has retrieved data from a remote server. ...</div><div class='long'><p>This method is only used by a DataProxy which has retrieved data from a remote server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The XHR object which contains the JSON data in its responseText.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>data A data block which is used by an <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> object as\na cache of Ext.data.Records.</p>\n</div></li></ul></div></div></div><div id='method-readRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-method-readRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-readRecords' class='name expandable'>readRecords</a>( <span class='pre'>Object o</span> ) : Object</div><div class='description'><div class='short'>Create a data block containing Ext.data.Records from a JSON object. ...</div><div class='long'><p>Create a data block containing Ext.data.Records from a JSON object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>An object which contains an Array of row objects in the property specified\nin the config as 'root, and optionally a property, specified in the config as 'totalProperty'\nwhich contains the total size of the dataset.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>data A data block which is used by an <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> object as\na cache of Ext.data.Records.</p>\n</div></li></ul></div></div></div><div id='method-readResponse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.JsonReader'>Ext.data.JsonReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-JsonReader-method-readResponse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-readResponse' class='name expandable'>readResponse</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> action, Object response</span> ) : Response</div><div class='description'><div class='short'>Decode a JSON response from server. ...</div><div class='long'><p>Decode a JSON response from server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>[Ext.data.Api.actions.create|read|update|destroy]</p>\n</div></li><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The XHR object returned through an Ajax server request.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Response</span><div class='sub-desc'><p>A <a href=\"#!/api/Ext.data.Response\" rel=\"Ext.data.Response\" class=\"docClass\">Response</a> object containing the data response, and also status information.</p>\n</div></li></ul></div></div></div><div id='method-realize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-realize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-realize' class='name expandable'>realize</a>( <span class='pre'>Record/Record[] record, Object/Object[] data</span> )</div><div class='description'><div class='short'>Used for un-phantoming a record after a successful database insert. ...</div><div class='long'><p>Used for un-phantoming a record after a successful database insert.  Sets the records pk along with new data from server.\nYou <b>must</b> return at least the database pk using the idProperty defined in your DataReader configuration.  The incoming\ndata from server will be merged with the data in the local record.\nIn addition, you <b>must</b> return record-data from the server in the same order received.\nWill perform a commit as well, un-marking dirty-fields.  Store's \"update\" event will be suppressed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Record/Record[]<div class='sub-desc'><p>The phantom record to be realized.</p>\n</div></li><li><span class='pre'>data</span> : Object/Object[]<div class='sub-desc'><p>The new record data to apply.  Must include the primary-key from database defined in idProperty field.</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-update' class='name expandable'>update</a>( <span class='pre'>Record/Record[] rs, Object/Object[] data</span> )</div><div class='description'><div class='short'>Used for updating a non-phantom or \"real\" record's data with fresh data from server after remote-save. ...</div><div class='long'><p>Used for updating a non-phantom or \"real\" record's data with fresh data from server after remote-save.\nIf returning data from multiple-records after a batch-update, you <b>must</b> return record-data from the server in\nthe same order received.  Will perform a commit as well, un-marking dirty-fields.  Store's \"update\" event will be\nsuppressed as the record receives fresh new data-hash</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rs</span> : Record/Record[]<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object/Object[]<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":["Ext.data.ArrayReader","Ext.ux.grid.livegrid.JsonReader"],"id":"class-Ext.data.JsonReader","html_meta":{},"tagname":"class","extends":"Ext.data.DataReader"});