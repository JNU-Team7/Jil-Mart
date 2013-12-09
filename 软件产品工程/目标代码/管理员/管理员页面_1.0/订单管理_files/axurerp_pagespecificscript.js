for(var i = 0; i < 38; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u31'] = 'center';u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('评价管理.html');

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u28'] = 'center';
u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

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
u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('会员管理.html');

}
});
gv_vAlignTable['u6'] = 'top';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

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
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u37'] = 'center';
u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

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
gv_vAlignTable['u10'] = 'center';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u3'] = 'center';
u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

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
u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品管理.html');

}
});
gv_vAlignTable['u7'] = 'top';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u34'] = 'center';