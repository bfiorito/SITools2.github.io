Ext.data.JsonP.sitools_user_Desktop_App({"superclasses":[],"parentMixins":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.app.App' rel='Ext.app.App' class='docClass'>Ext.app.App</a></div><h4>Files</h4><div class='dependency'><a href='source/desktop2.html#sitools-user-Desktop-App' target='_blank'>desktop.js</a></div><div class='dependency'><a href='source/client-user-project-all.html#sitools-user-Desktop-App' target='_blank'>client-user-project-all.js</a></div></pre><div class='doc-contents'><p>Main Application of sitools desktop\nWhen instanciate, it will :\n - build an instance of <a href=\"#!/api/Ext.app.App\" rel=\"Ext.app.App\" class=\"docClass\">Ext.app.App</a> ()\n - launch initProject on projectGlobal object.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-windowSettings' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-cfg-windowSettings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-cfg-windowSettings' class='name expandable'>windowSettings</a><span> : </span></div><div class='description'><div class='short'>public load the preferences for a window if the user is logged and then build the window Window Settings object build...</div><div class='long'><p>public load the preferences for a window if the user is logged and then build the window Window Settings object build with attributes</p>\n\n<pre><code> {string} id (required) : windowId\n {string} title (required) : windowTitle, \n {string} type (required if saveToolbar) : the type of the window, will determine the userStorage path\n     [forms, data]\n {string} datasetName (required if saveToolbar) : name of the dataset, will determine the userStorage name\n {string} urlPreferences (required if saveToolbar) : the url to request to get the userPreferences\n {boolean} saveToolbar  : true if the saveSettings toolbar should be displayed\n     default false : the items to add to the Window : the name of the Javascript Object used to build the component inside the window\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-property-' class='name expandable'></a><span> : Object</span></div><div class='description'><div class='short'>Copyright 2011, 2012 CNES - CENTRE NATIONAL d'ETUDES SPATIALES\n\nThis file is part of SITools2. ...</div><div class='long'><hr />\n\n<p>Copyright 2011, 2012 CNES - CENTRE NATIONAL d'ETUDES SPATIALES</p>\n\n<p>This file is part of SITools2.</p>\n\n<p>SITools2 is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.</p>\n\n<p>SITools2 is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.</p>\n\n<p>You should have received a copy of the GNU General Public License\nalong with SITools2.  If not, see <a href=\"http://www.gnu.org/licenses/\">http://www.gnu.org/licenses/</a>.</p>\n\n<hr />\n</div></div></div><div id='property-app' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-property-app' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-property-app' class='name not-expandable'>app</a><span> : <a href=\"#!/api/Ext.app.App\" rel=\"Ext.app.App\" class=\"docClass\">Ext.app.App</a></span></div><div class='description'><div class='short'><p>the sitools <a href=\"#!/api/Ext.app.App\" rel=\"Ext.app.App\" class=\"docClass\">Ext.app.App</a> instance</p>\n</div><div class='long'><p>the sitools <a href=\"#!/api/Ext.app.App\" rel=\"Ext.app.App\" class=\"docClass\">Ext.app.App</a> instance</p>\n</div></div></div><div id='property-modulesACharger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-property-modulesACharger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-property-modulesACharger' class='name expandable'>modulesACharger</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>{integer} modulesACharger The number of modules to load at start. ...</div><div class='long'><p>{integer} modulesACharger The number of modules to load at start.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-modulesCharges' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-property-modulesCharges' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-property-modulesCharges' class='name expandable'>modulesCharges</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>{integer} modulesCharges The number of loaded Modules ...</div><div class='long'><p>{integer} modulesCharges The number of loaded Modules</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_onLogin' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-_onLogin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-_onLogin' class='name expandable'>_onLogin</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Called when login is pressed. ...</div><div class='long'><p>Called when login is pressed.\nShow a {sitools.widget.Login} window</p>\n</div></div></div><div id='method-_onLogout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-_onLogout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-_onLogout' class='name expandable'>_onLogout</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Called when logout is pressed. ...</div><div class='long'><p>Called when logout is pressed.</p>\n</div></div></div><div id='method-addApplication' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-addApplication' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-addApplication' class='name expandable'>addApplication</a>( <span class='pre'>Object composant</span> )</div><div class='description'><div class='short'>public dynamically add a new application to the desktop\n\n\nmoduleFactory.createModule 2. ...</div><div class='long'><p>public dynamically add a new application to the desktop</p>\n\n<ol>\n<li>moduleFactory.createModule 2. ajout du module dans le fisheyeMenu</li>\n</ol>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>composant</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addWinData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-addWinData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-addWinData' class='name expandable'>addWinData</a>( <span class='pre'> windowSettings, Object componentConfiguration, Object JsObj</span> )</div><div class='description'><div class='short'>private Open a window in the desktop with the Datas. ...</div><div class='long'><p>private Open a window in the desktop with the Datas. If the Window with\nthe specified Id already  exists, it destroy it and rebuild it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>windowSettings</span> : <div class='sub-desc'><p>{string} id (required) : windowId</p>\n\n<pre><code> {string} title (required) : windowTitle, \n {string} datasetName (required) : datasetName, \n {string} moduleId : String\n {} position : [xpos, ypos]\n {} size : {\n     width : w\n     height : h\n }\n {string} specificType : sitoolsSpecificType\n [<a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a>] toolbarItems\n</code></pre>\n</div></li><li><span class='pre'>componentConfiguration</span> : Object<div class='sub-desc'><p>: Object containing the configuration</p>\n</div></li><li><span class='pre'>JsObj</span> : Object<div class='sub-desc'><p>: the name of the Javascript Object used to build the component inside the window</p>\n</div></li></ul></div></div></div><div id='method-callbackRESTCreateProject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-callbackRESTCreateProject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-callbackRESTCreateProject' class='name expandable'>callbackRESTCreateProject</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Create each module. ...</div><div class='long'><p>Create each module.</p>\n\n\n<p></p>\n\n<p>1 - request the project to get All modules defined. </p>\n\n\n<p>2 - As callback, create a module for each module of the project. \n    In case user is logged, will check if the module is in the preference list, before adding module.</p>\n\n</div></div></div><div id='method-createModule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-createModule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-createModule' class='name expandable'>createModule</a>( <span class='pre'> config</span> )</div><div class='description'><div class='short'>private Create a Module from a Json configuration\nInclude all Css and JS dependencies. ...</div><div class='long'><p>private Create a Module from a Json configuration\nInclude all Css and JS dependencies.\nAfter loading all Js dependencies,  fire event allJsIncludesDone</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <div class='sub-desc'><p>The json représentation of a module</p>\n</div></li></ul></div></div></div><div id='method-deletePublicPref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-deletePublicPref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-deletePublicPref' class='name expandable'>deletePublicPref</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Called when deletePrefButton is pressed. ...</div><div class='long'><p>Called when deletePrefButton is pressed.\nRemove the public Preferences.</p>\n</div></div></div><div id='method-desktopReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-desktopReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-desktopReady' class='name expandable'>desktopReady</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unmask desktop Elements ...</div><div class='long'><p>Unmask desktop Elements</p>\n</div></div></div><div id='method-initProject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-initProject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-initProject' class='name expandable'>initProject</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Initialize the project. ...</div><div class='long'><p>Initialize the project.\nLoad sql2Ext settings,\nCall the projectGloabal initProject method</p>\n</div></div></div><div id='method-loadPreferences' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-loadPreferences' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-loadPreferences' class='name expandable'>loadPreferences</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Load the module Window corresponding to the project Preference. ...</div><div class='long'><p>Load the module Window corresponding to the project Preference.\n1 - load the module Windows\n2 - load the Component windows (actually only \"data\" type window)</p>\n</div></div></div><div id='method-maskDesktop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-maskDesktop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-maskDesktop' class='name expandable'>maskDesktop</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Mask all the desktop element. ...</div><div class='long'><p>Mask all the desktop element.</p>\n</div></div></div><div id='method-removeApplication' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-removeApplication' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-removeApplication' class='name expandable'>removeApplication</a>( <span class='pre'>Object idApplication</span> )</div><div class='description'><div class='short'>public dynamically remove an application from the desktop\n\nOn supprime son icone du menu demarrer et du fisheyeMenu a...</div><div class='long'><p>public dynamically remove an application from the desktop</p>\n\n<p>On supprime son icone du menu demarrer et du fisheyeMenu ainsi que de\nla liste des modules existants</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>idApplication</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-saveWindowSettings' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sitools.user.Desktop.App'>sitools.user.Desktop.App</span><br/><a href='source/client-user-project-all.html#sitools-user-Desktop-App-method-saveWindowSettings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sitools.user.Desktop.App-method-saveWindowSettings' class='name expandable'>saveWindowSettings</a>( <span class='pre'>Object forPublicUser</span> )</div><div class='description'><div class='short'>Called when Save button is pressed. ...</div><div class='long'><p>Called when Save button is pressed.\nLoop through all desktop windows and save windows settings via  userStorage.set method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>forPublicUser</span> : Object<div class='sub-desc'><p>true to save on publicStorage, false (null) to save on userStorage</p>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":[],"members":{"css_mixin":[],"method":[{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"_onLogin","id":"method-_onLogin"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"_onLogout","id":"method-_onLogout"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"addApplication","id":"method-addApplication"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"addWinData","id":"method-addWinData"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"callbackRESTCreateProject","id":"method-callbackRESTCreateProject"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"createModule","id":"method-createModule"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"deletePublicPref","id":"method-deletePublicPref"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"desktopReady","id":"method-desktopReady"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"initProject","id":"method-initProject"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"loadPreferences","id":"method-loadPreferences"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"maskDesktop","id":"method-maskDesktop"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"removeApplication","id":"method-removeApplication"},{"tagname":"method","meta":{},"owner":"sitools.user.Desktop.App","name":"saveWindowSettings","id":"method-saveWindowSettings"}],"cfg":[{"tagname":"cfg","meta":{},"owner":"sitools.user.Desktop.App","name":"windowSettings","id":"cfg-windowSettings"}],"property":[{"tagname":"property","meta":{},"owner":"sitools.user.Desktop.App","name":"","id":"property-"},{"tagname":"property","meta":{},"owner":"sitools.user.Desktop.App","name":"app","id":"property-app"},{"tagname":"property","meta":{},"owner":"sitools.user.Desktop.App","name":"modulesACharger","id":"property-modulesACharger"},{"tagname":"property","meta":{},"owner":"sitools.user.Desktop.App","name":"modulesCharges","id":"property-modulesCharges"}],"css_var":[],"event":[]},"html_meta":{},"tagname":"class","singleton":false,"statics":{"css_mixin":[],"method":[],"cfg":[],"property":[],"event":[],"css_var":[]},"mixins":[],"code_type":"assignment","inheritable":false,"private":null,"files":[{"href":"desktop2.html#sitools-user-Desktop-App","filename":"desktop.js"},{"href":"client-user-project-all.html#sitools-user-Desktop-App","filename":"client-user-project-all.js"}],"component":false,"name":"sitools.user.Desktop.App","meta":{},"requires":["Ext.app.App"],"id":"class-sitools.user.Desktop.App","mixedInto":[],"subclasses":[],"aliases":{},"inheritdoc":null});