for(var i = 0; i < 40; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

    objIframe = document.getElementById("u19");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('已完成.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('已完成.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('已完成.html'));
    }

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u16'] = 'center';u17.tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u17'] = 'top';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

    objIframe = document.getElementById("u19");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('已发货.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('已发货.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('已发货.html'));
    }

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u21'] = 'center';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品管理.html');

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u1'] = 'center';
u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

    objIframe = document.getElementById("u19");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('待发货.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('待发货.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('待发货.html'));
    }

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u39'] = 'center';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('会员管理.html');

}
});
gv_vAlignTable['u12'] = 'top';u18.tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u33'] = 'center';
u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

    objIframe = document.getElementById("u19");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('已取消.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('已取消.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('已取消.html'));
    }

}
});
