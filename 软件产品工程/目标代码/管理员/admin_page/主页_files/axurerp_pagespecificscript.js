for(var i = 0; i < 18; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u1'] = 'center';
u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (((GetWidgetText('u4')) == ('admin')) && (((GetWidgetText('u5')) == ('admin')) && ((GetWidgetText('u6')) == ('3913')))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('会员管理.html');

	SetPanelVisibility('u13','hidden','none',500);

}
else
if (((GetWidgetText('u4')) != ('admin')) || ((GetWidgetText('u5')) != ('admin'))) {

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
else
if (((GetWidgetText('u4')) == ('admin')) && (((GetWidgetText('u5')) == ('admin')) && ((GetWidgetText('u6')) != ('3913')))) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u11'] = 'top';