for(var i = 0; i < 53; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u28'] = 'center';
u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

                                ExpandNode('u29', 'cncu29', 'u30');
}
});
u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u13'] = 'top';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品管理.html');

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u1'] = 'center';
u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

                                ExpandNode('u37', 'cncu37', 'u38');
}
});

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

    objIframe = document.getElementById("u48");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('账户管理.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('账户管理.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('账户管理.html'));
    }

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u9'] = 'center';
u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

    objIframe = document.getElementById("u48");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('登陆日志.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('登陆日志.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('登陆日志.html'));
    }

}
});

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

    objIframe = document.getElementById("u48");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('会员列表.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('会员列表.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('会员列表.html'));
    }

}
});
gv_vAlignTable['u25'] = 'center';u2.tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u2'] = 'top';
u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

                                ExpandNode('u18', 'cncu18', 'u19');
}
});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u51'] = 'center';
u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

    objIframe = document.getElementById("u48");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('余额日志.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('余额日志.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('余额日志.html'));
    }

}
});
u52.tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('订单管理.html');

}
});
gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u33'] = 'center';
u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

    objIframe = document.getElementById("u48");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('详细信息.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('详细信息.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('详细信息.html'));
    }

}
});
