Ext.data.JsonP.Ext_data_DataReader({"superclasses":[],"parentMixins":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='docClass'>Ext.data.JsonReader</a></div><div class='dependency'><a href='#!/api/Ext.data.XmlReader' rel='Ext.data.XmlReader' class='docClass'>Ext.data.XmlReader</a></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader' target='_blank'>ext-all-debug-w-comments.js</a></div></pre><div class='doc-contents'><p>Abstract base class for reading structured data from a data source and converting\nit into an object containing <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> objects and metadata for use\nby an <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>.  This class is intended to be extended and should not\nbe created directly. For existing implementations, see <a href=\"#!/api/Ext.data.ArrayReader\" rel=\"Ext.data.ArrayReader\" class=\"docClass\">Ext.data.ArrayReader</a>,\n<a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a> and <a href=\"#!/api/Ext.data.XmlReader\" rel=\"Ext.data.XmlReader\" class=\"docClass\">Ext.data.XmlReader</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-fields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-cfg-fields' class='name expandable'>fields</a><span> : Array/Object</span></div><div class='description'><div class='short'>Either an Array of Field definition objects (which\nwill be passed to Ext.data.Record.create, or a Record\nconstructor ...</div><div class='long'><p>Either an Array of <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> definition objects (which\nwill be passed to <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>, or a <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>\nconstructor created from <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>.</p>\n\n</div></div></div><div id='cfg-messageProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-cfg-messageProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-cfg-messageProperty' class='name not-expandable'>messageProperty</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>[undefined] Optional name of a property within a server-response that represents a user-feedback message.</p>\n</div><div class='long'><p>[undefined] Optional name of a property within a server-response that represents a user-feedback message.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-meta' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-property-meta' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-property-meta' class='name not-expandable'>meta</a><span> : Mixed</span></div><div class='description'><div class='short'><p>This DataReader's configured metadata as passed to the constructor.</p>\n</div><div class='long'><p>This DataReader's configured metadata as passed to the constructor.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.DataReader-method-constructor' class='name expandable'>Ext.data.DataReader</a>( <span class='pre'>Object meta, Array/Object recordType</span> ) : Object</div><div class='description'><div class='short'>Create a new DataReader ...</div><div class='long'><p>Create a new DataReader</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>meta</span> : Object<div class='sub-desc'><p>Metadata configuration options (implementation-specific).</p>\n</div></li><li><span class='pre'>recordType</span> : Array/Object<div class='sub-desc'><p>Either an Array of <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> definition objects (which\nwill be passed to <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>, or a <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>\nconstructor created using <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-buildExtractors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-buildExtractors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-buildExtractors' class='name expandable'>buildExtractors</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method, overridden in DataReader extensions such as Ext.data.JsonReader and Ext.data.XmlReader ...</div><div class='long'><p>Abstract method, overridden in DataReader extensions such as <a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a> and <a href=\"#!/api/Ext.data.XmlReader\" rel=\"Ext.data.XmlReader\" class=\"docClass\">Ext.data.XmlReader</a></p>\n</div></div></div><div id='method-extractData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-extractData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-extractData' class='name expandable'>extractData</a>( <span class='pre'>Object[]/Object data-root, Boolean returnRecords</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>returns extracted, type-cast rows of data. ...</div><div class='long'><p>returns extracted, type-cast rows of data.  Iterates to call <a href=\"#!/api/Ext.data.DataReader-method-extractValues\" rel=\"Ext.data.DataReader-method-extractValues\" class=\"docClass\">extractValues</a> for each row</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data-root</span> : Object[]/Object<div class='sub-desc'><p>from server response</p>\n</div></li><li><span class='pre'>returnRecords</span> : Boolean<div class='sub-desc'><p>[false] Set true to return instances of <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a></p>\n</div></li></ul></div></div></div><div id='method-extractValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-extractValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-extractValues' class='name expandable'>extractValues</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method overridden in DataReader extensions such as Ext.data.JsonReader and Ext.data.XmlReader ...</div><div class='long'><p>Abstract method overridden in DataReader extensions such as <a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a> and <a href=\"#!/api/Ext.data.XmlReader\" rel=\"Ext.data.XmlReader\" class=\"docClass\">Ext.data.XmlReader</a></p>\n</div></div></div><div id='method-getId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getMessage' class='name expandable'>getMessage</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getRoot' class='name expandable'>getRoot</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getSuccess' class='name expandable'>getSuccess</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getTotal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-getTotal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getTotal' class='name expandable'>getTotal</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-isData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-isData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-isData' class='name expandable'>isData</a>( <span class='pre'>Object data</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the supplied data-hash looks and quacks like data. ...</div><div class='long'><p>Returns true if the supplied data-hash <b>looks</b> and quacks like data.  Checks to see if it has a key\ncorresponding to idProperty defined in your DataReader config containing non-empty pk.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-realize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-realize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-realize' class='name expandable'>realize</a>( <span class='pre'>Record/Record[] record, Object/Object[] data</span> )</div><div class='description'><div class='short'>Used for un-phantoming a record after a successful database insert. ...</div><div class='long'><p>Used for un-phantoming a record after a successful database insert.  Sets the records pk along with new data from server.\nYou <b>must</b> return at least the database pk using the idProperty defined in your DataReader configuration.  The incoming\ndata from server will be merged with the data in the local record.\nIn addition, you <b>must</b> return record-data from the server in the same order received.\nWill perform a commit as well, un-marking dirty-fields.  Store's \"update\" event will be suppressed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Record/Record[]<div class='sub-desc'><p>The phantom record to be realized.</p>\n</div></li><li><span class='pre'>data</span> : Object/Object[]<div class='sub-desc'><p>The new record data to apply.  Must include the primary-key from database defined in idProperty field.</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataReader'>Ext.data.DataReader</span><br/><a href='source/ext-all-debug-w-comments.html#Ext-data-DataReader-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-update' class='name expandable'>update</a>( <span class='pre'>Record/Record[] rs, Object/Object[] data</span> )</div><div class='description'><div class='short'>Used for updating a non-phantom or \"real\" record's data with fresh data from server after remote-save. ...</div><div class='long'><p>Used for updating a non-phantom or \"real\" record's data with fresh data from server after remote-save.\nIf returning data from multiple-records after a batch-update, you <b>must</b> return record-data from the server in\nthe same order received.  Will perform a commit as well, un-marking dirty-fields.  Store's \"update\" event will be\nsuppressed as the record receives fresh new data-hash</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rs</span> : Record/Record[]<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object/Object[]<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":[],"members":{"css_mixin":[],"method":[{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"constructor","id":"method-constructor"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"buildExtractors","id":"method-buildExtractors"},{"tagname":"method","meta":{"private":true},"owner":"Ext.data.DataReader","name":"extractData","id":"method-extractData"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"extractValues","id":"method-extractValues"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"getId","id":"method-getId"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"getMessage","id":"method-getMessage"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"getRoot","id":"method-getRoot"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"getSuccess","id":"method-getSuccess"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"getTotal","id":"method-getTotal"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"isData","id":"method-isData"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"realize","id":"method-realize"},{"tagname":"method","meta":{},"owner":"Ext.data.DataReader","name":"update","id":"method-update"}],"cfg":[{"tagname":"cfg","meta":{},"owner":"Ext.data.DataReader","name":"fields","id":"cfg-fields"},{"tagname":"cfg","meta":{},"owner":"Ext.data.DataReader","name":"messageProperty","id":"cfg-messageProperty"}],"property":[{"tagname":"property","meta":{},"owner":"Ext.data.DataReader","name":"meta","id":"property-meta"}],"css_var":[],"event":[]},"html_meta":{},"tagname":"class","singleton":false,"statics":{"css_mixin":[],"method":[],"cfg":[],"property":[],"event":[],"css_var":[]},"mixins":[],"code_type":"assignment","inheritable":false,"files":[{"href":"ext-all-debug-w-comments.html#Ext-data-DataReader","filename":"ext-all-debug-w-comments.js"}],"component":false,"name":"Ext.data.DataReader","meta":{},"requires":[],"id":"class-Ext.data.DataReader","mixedInto":[],"subclasses":["Ext.data.JsonReader","Ext.data.XmlReader"],"aliases":{},"inheritdoc":null});