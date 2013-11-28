for(var i = 0; i < 36; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

    objIframe = document.getElementById("u13");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('待发货.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('待发货.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('待发货.html'));
    }

}
});

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

    objIframe = document.getElementById("u13");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('已取消.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('已取消.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('已取消.html'));
    }

}
});
gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u21'] = 'center';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('会员管理.html');

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u10'] = 'center';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u11'] = 'top';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u27'] = 'center';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品管理.html');

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u24'] = 'center';
u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

    objIframe = document.getElementById("u13");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('已完成.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('已完成.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('已完成.html'));
    }

}
});
gv_vAlignTable['u19'] = 'center';
u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

    objIframe = document.getElementById("u13");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('已发货.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('已发货.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('已发货.html'));
    }

}
});
gv_vAlignTable['u33'] = 'center';u34.tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('评价管理.html');

}
});
gv_vAlignTable['u34'] = 'top';