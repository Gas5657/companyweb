/**
 * Created by double on 2016/10/31.
 */

//设置
// .首页
function SetHome(url){
    //判断是否存在网页
    if(document.all){
        document.body.style.behavior = 'url(#default#homepage)';//ie

        document.body.setHomePage(url);//firefox
    }else{
        alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
    }
}

//加入收藏
function AddFavorite(sUrl, sTitle) {

    sUrl = encodeURI(sUrl);//格式化链接地址

    try {

        window.external.addFavorite(sURL, sTitle); //ie有效

    } catch (e) {

        try {

            window.sidebar.addPanel(sUrl, sTitle, ""); //firefox有效

        } catch (e) {

            alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");//其他浏览器

        }

    }

}