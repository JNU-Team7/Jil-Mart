for(var i = 0; i < 14; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u10','hidden','none',500);

}

});

widgetIdToShowFunction['u10'] = function() {
var e = windowEvent;

if (true) {
function waitu07fab20c122c4ea4a99049283ca02b961() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Jil-Mart.html');
}
setTimeout(waitu07fab20c122c4ea4a99049283ca02b961, 3000);

}

}
gv_vAlignTable['u12'] = 'center';u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('注册页面.html'), "");

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u0'] = 'top';u5.tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('注册页面.html'), "");

}
});

$axure.eventManager.mouseout('u5', function(e) {
if (!IsTrueMouseOut('u5',e)) return;
if (true) {

	SetPanelState('u3', 'pd0u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u1'] = 'top';
$axure.eventManager.mouseover('u6', function(e) {
if (!IsTrueMouseOver('u6',e)) return;
if (true) {

	SetPanelState('u3', 'pd1u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u6'] = 'top';
u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	SetPanelVisibility('u10','','none',500);

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u7'] = 'top';