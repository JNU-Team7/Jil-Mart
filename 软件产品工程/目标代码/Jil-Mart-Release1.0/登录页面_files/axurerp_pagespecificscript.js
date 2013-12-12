for(var i = 0; i < 24; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u10','hidden','none',500);

	SetPanelVisibility('u17','hidden','none',500);

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
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u12'] = 'center';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	SetPanelVisibility('u10','hidden','none',500);

}
});
u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('注册页面.html');

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u19'] = 'center';document.getElementById('u22_img').tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelVisibility('u17','hidden','none',500);

}
});
u5.tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('注册页面.html');

}
});

$axure.eventManager.mouseout('u5', function(e) {
if (!IsTrueMouseOut('u5',e)) return;
if (true) {

	SetPanelState('u3', 'pd0u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u20'] = 'top';
$axure.eventManager.mouseover('u6', function(e) {
if (!IsTrueMouseOver('u6',e)) return;
if (true) {

	SetPanelState('u3', 'pd1u3','none','',500,'none','',500);

}
});
gv_vAlignTable['u6'] = 'top';
u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (((GetWidgetText('u8')) == ('customer')) && ((GetWidgetText('u9')) == ('123456'))) {

	SetPanelVisibility('u10','','none',500);

}
else
if (((GetWidgetText('u8')) == ('admin')) && ((GetWidgetText('u9')) == ('admin'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('会员管理.html');

}
else
if (((GetWidgetText('u8')) != ('customer')) || (((GetWidgetText('u8')) != ('admin')) || (((GetWidgetText('u9')) == ('123456')) || ((GetWidgetText('u9')) == ('admin'))))) {

	SetPanelState('u17', 'pd0u17','none','',500,'none','',500);

}
});
gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u7'] = 'top';