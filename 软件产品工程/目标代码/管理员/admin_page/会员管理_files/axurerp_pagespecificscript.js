for(var i = 0; i < 52; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u44'] = 'center';
u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

                                ExpandNode('u40', 'cncu40', 'u41');
}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u42'] = 'center';
u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

    objIframe = document.getElementById("u51");
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
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u33'] = 'center';