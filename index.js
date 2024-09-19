// ==UserScript==
// @name         四方坪职院学术重定向
// @namespace    https://example.com
// @version      1.2
// @license      MPL-2.0
// @description  通过重定向至图书馆包库，解锁期刊访问权限
// @author       https://github.com/cyan-io
// @homepage     https://github.com/cyan-io/SPC-Academic-Redirection

// @match        *://data.lilun.cn/
// @match        *://lib-nudt.wqxuetang.com/
// @match        *://www.nature.com/
// @match        *://baike.udsim.net/
// @match        *://www.nrcresearchpress.com/
// @match        *://disk.hnadl.cn/
// @match        *://www.emerald.com/
// @match        *://journals.sagepub.com/
// @match        *://e-learning.51cto.com/
// @match        *://webofscience.com/
// @match        *://www.iwaponline.com/
// @match        *://jcr.clarivate.com/
// @match        *://pubsonline.informs.org/
// @match        *://www.cshprotocols.org/
// @match        *://navi.ion.org/
// @match        *://www.cnki.net/
// @match        *://agupubs.onlinelibrary.wiley.com/
// @match        *://www.cxstar.com/
// @match        *://dl.acm.org/
// @match        *://www.ieslib.com/
// @match        *://paper.hnlat.com/
// @match        *://www.doaj.org/
// @match        *://www.futuremedicine.com/
// @match        *://esajournals.onlinelibrary.wiley.com/
// @match        *://www.arabidopsis.org/
// @match        *://elibrary.asabe.org/
// @match        *://kg.iguofang.net:8888/
// @match        *://www.rdfybk.com/
// @match        *://asmedigitalcollection.asme.org/
// @match        *://www.cambridge.org/
// @match        *://scifund.wanfangdata.com.cn/
// @match        *://aspb.org/
// @match        *://journals.aps.org/
// @match        *://edu.sslibrary.com/
// @match        *://link.springer.com/
// @match        *://academic.oup.com/
// @match        *://www.cashl.edu.cn/
// @match        *://www.inoteexpress.com/
// @match        *://www.healthaffairs.org/
// @match        *://m-tob.jd.com/
// @match        *://ssvideo.chaoxing.com/
// @match        *://www.keledge.com/
// @match        *://www.scitation.org/
// @match        *://iopscience.iop.org/
// @match        *://law.hnadl.cn/
// @match        *://sciencechina.cn/
// @match        *://link.gale.com/
// @match        *://sage.cnpereading.com/
// @match        *://olap.epsnet.com.cn/
// @match        *://www.wanfangdata.com.cn/
// @match        *://www.sciencemag.org/
// @match        *://www.52met.com/
// @match        *://www.tandfonline.com/
// @match        *://arxiv.org/
// @match        *://www.webofknowledge.com/
// @match        *://www.jstor.org/
// @match        *://iopscience.iop.org/
// @match        *://uni.resset.com/
// @match        *://www.umajor.net/
// @match        *://www.ydylcn.com/
// @match        *://janes.cinfo.net.cn/
// @match        *://www.spiedigitallibrary.org/
// @match        *://www.emis.cn/
// @match        *://xianxiao.ssap.com.cn/
// @match        *://www.englibrary.com/
// @match        *://www.vipexam.cn/
// @match        *://www.bingoenglish.net/
// @match        *://www.MeTeL.cn/
// @match        *://bksp.hnadl.cn/
// @match        *://ieeexplore.ieee.org/
// @match        *://www.cshlpress.com/
// @match        *://cdnsciencepub.com/
// @match        *://www.plantcell.org/
// @match        *://search.ebscohost.com/
// @match        *://www.twbxyz.net/
// @match        *://www.duxiu.com/
// @match        *://www.proquest.com/
// @match        *://jt.xinyulib.com.cn/
// @match        *://incites.clarivate.com/
// @match        *://www.annualreviews.org/
// @match        *://www.dachengdata.com/
// @match        *://www.bigan.net/
// @match        *://www.innojoy.com/
// @match        *://www.nejm.org/
// @match        *://cadal.edu.cn/
// @match        *://www.annals.org/
// @match        *://xwk.test.cqvip.com:8090/
// @match        *://www.51sjsj.com/
// @match        *://www.osapublishing.org/
// @match        *://portlandpress.com/
// @match        *://cmkd.hnadl.cn/
// @match        *://gwbz.sunwayinfo.com.cn/
// @match        *://www.scopus.com/
// @match        *://pubs.rsna.org/
// @match        *://fx.gfkd.chaoxing.com/
// @match        *://www.royalsocietypublishing.org/
// @match        *://thesis.library.caltech.edu/
// @match        *://www.bjinfobank.com/
// @match        *://cssci.nju.edu.cn/
// @match        *://www.ajnr.org/
// @match        *://www.global-sci.org/
// @match        *://www.patentics.com/
// @match        *://www.pnas.org/
// @match        *://qikan.cqvip.com/
// @match        *://www.scival.com/
// @match        *://www.neohytung.com/
// @match        *://www.htcases.com/
// @match        *://specialsci.cn/
// @match        *://bg.sunwayinfo.com.cn/
// @match        *://www.iresearchbook.cn/
// @match        *://journals.ametsoc.org/
// @match        *://www.degruyter.com/
// @match        *://101.201.29.206:8012/
// @match        *://www.hnadl.cn/
// @match        *://www.oadds.cn/
// @match        *://www.sciencedirect.com/
// @match        *://onlinelibrary.wiley.com/
// @match        *://arc.aiaa.org/
// @match        *://www.engineeringvillage.com/
// @match        *://library.cmpkgs.com/
// @match        *://www.pqdtcn.com/
// @match        *://www.fenqubiao.com/
// @match        *://libfw.nudt.edu.cn/
// @match        *://suyang.zxhnzq.com/
// @match        *://esi.clarivate.com/
// @match        *://pubs.acs.org/
// @match        *://epubs.siam.org/

// @icon         https://library.nudt.edu.cn/favicon.ico
// @downloadURL https://update.greasyfork.org/scripts/509010/%E5%9B%9B%E6%96%B9%E5%9D%AA%E8%81%8C%E9%99%A2%E5%AD%A6%E6%9C%AF%E9%87%8D%E5%AE%9A%E5%90%91.user.js
// @updateURL https://update.greasyfork.org/scripts/509010/%E5%9B%9B%E6%96%B9%E5%9D%AA%E8%81%8C%E9%99%A2%E5%AD%A6%E6%9C%AF%E9%87%8D%E5%AE%9A%E5%90%91.meta.js
// ==/UserScript==

(function () {
    'use strict';

    let regex = /https?:\/\/([^\/]+)\/(.*)/i;
    let match = window.location.href.match(regex);

    console.log('Debug <match>', match);

    if (match) {
        let domain = match[1];
        let path = match[2];

        let redirectUrl = 'https://'+domain.replace(/\./g, "-")+'-s.libyc.nudt.edu.cn/' + path;

        console.log('Debug <url>',redirectUrl);

        let button = document.createElement('button');
        button.innerHTML = '🔗' + redirectUrl;
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.zIndex = '9999';
        button.style.backgroundColor = '#FFFFFF';
        button.style.border = '2px solid black';
        button.style.borderRadius = '5px';
        button.style.padding = '5px 10px';
        button.addEventListener('click', function () {
            window.open(redirectUrl, "_blank");
        });
        document.body.appendChild(button);
    }
})();
