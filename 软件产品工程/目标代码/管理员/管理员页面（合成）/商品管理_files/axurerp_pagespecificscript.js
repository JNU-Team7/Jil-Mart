for(var i = 0; i < 17; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('会员管理.html');

}
});
gv_vAlignTable['u12'] = 'top';u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('评价管理.html');

}
});
gv_vAlignTable['u15'] = 'top';u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u1'] = 'center';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('订单管理.html');

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u11'] = 'center';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u13'] = 'top';