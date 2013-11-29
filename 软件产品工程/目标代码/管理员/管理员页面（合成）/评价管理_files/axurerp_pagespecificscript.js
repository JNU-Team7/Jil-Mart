for(var i = 0; i < 34; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

    objIframe = document.getElementById("u19");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('商品评价.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('商品评价.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('商品评价.html'));
    }

}
});
u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u16'] = 'top';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

    objIframe = document.getElementById("u19");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('用户评价.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('用户评价.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('用户评价.html'));
    }

}
});
gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u21'] = 'center';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品管理_1.html');

}
});
gv_vAlignTable['u13'] = 'top';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('订单管理.html');

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u27'] = 'center';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('会员管理.html');

}
});
gv_vAlignTable['u12'] = 'top';u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u33'] = 'center';