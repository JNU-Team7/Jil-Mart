for(var i = 0; i < 32; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u28'] = 'center';
u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

    objIframe = document.getElementById("u17");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('商品评价.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('商品评价.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('商品评价.html'));
    }

}
});
u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u14'] = 'top';u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('管理员页面.html');

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u1'] = 'center';
u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

    objIframe = document.getElementById("u17");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('用户评价.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('用户评价.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('用户评价.html'));
    }

}
});
u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('会员管理.html');

}
});
gv_vAlignTable['u10'] = 'top';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品管理.html');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u9'] = 'center';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('订单管理.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u19'] = 'center';