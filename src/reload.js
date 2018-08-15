var csInterface = new CSInterface();

console.log('Fury said to a mouse');

var menu_ContextXML = '<Menu> \
   <MenuItem Id="refresh" Label="Refresh panel" Enabled="true" Checked="false"/> \
  </Menu>';
csInterface.setContextMenu(menu_ContextXML, function(evt){if (event == "refresh"){location.reload();}})

console.log('That he met in the house');
