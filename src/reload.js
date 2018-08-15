var csInterface = new CSInterface();

console.log('Fury said to a mouse');

var menu_ContextXML = '<Menu> \
   <MenuItem Id="refresh" Label="Refresh panel" Enabled="true" Checked="false"/> \
  </Menu>';
csInterface.setContextMenu(menu_ContextXML, function(evt){if (evt == "refresh"){location.reload();}})

var menu_FlyoutXML = '<Menu> \
  <MenuItem Id="refresh" Label="Refresh panel" Enabled="true" Checked="false"/> \
</Menu>';
csInterface.setPanelFlyoutMenu(menu_FlyoutXML);
csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", function(event){if (event.data.menuId == "refresh") {location.reload();}});

console.log('That he met in the house');
