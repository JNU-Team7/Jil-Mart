for(var i = 0; i < 16; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u13'] = 'top';
u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (((GetWidgetText('u2')) == ('admin')) && (((GetWidgetText('u3')) == ('admin')) && ((GetWidgetText('u4')) == ('3913')))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('会员管理.html');

	SetPanelVisibility('u11','hidden','none',500);

}
else
if (((GetWidgetText('u2')) != ('admin')) || ((GetWidgetText('u3')) != ('admin'))) {

	SetPanelState('u11', 'pd0u11','none','',500,'none','',500);

}
else
if (((GetWidgetText('u2')) == ('admin')) && (((GetWidgetText('u3')) == ('admin')) && ((GetWidgetText('u4')) != ('3913')))) {

	SetPanelState('u11', 'pd1u11','none','',500,'none','',500);

}
});
