//在页面加载完后立即执行多个函数完美方案。
function addloadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addloadEvent(showTime);
addloadEvent(day);
addloadEvent(tb);
//在页面加载完后立即执行多个函数完美方案over。
//天时秒分倒计时
function tb() {
    var myDate = new Date(); //获取当前时间
    var endtime = new Date("2019,10,7"); //获取结束时间
    //换算成秒 小数点向下舍入取整
    var ltime = Math.floor((endtime.getTime() - myDate.getTime()) / 1000);
    //console.log(ltime)
    //换算成天 小数点向下舍入取整
    var d = Math.floor(ltime / (24 * 60 * 60));
    //换算成小时取去掉天数的余数（也就是小时） 小数点向下舍入取整
    var h = Math.floor(ltime / (60 * 60) % 24);
    //换算成分钟取去掉小时的余数（也就是分钟） 小数点向下舍入取整
    var m = Math.floor(ltime / 60 % 60);
    //换算成分钟取去掉分钟的余数（也就是秒） 小数点向下舍入取整
    var s = Math.floor(ltime % 60);
    document.getElementById("tm").innerHTML = "距2019年重阳节还有:" + d + "天" + h + "小时" + m + "分钟" + s + "秒";
    if (ltime <= 0) {
        document.getElementById("tm").innerHTML = "重阳节快乐！";
        clearTimeout(tb);
    }
    setTimeout(tb, 1000);
}
//当秒数为个位数时前面+字符串0
function checkTime(i) {
    return i < 10 ? "0" + i : "" + i;
}
//当前时间标准格式
function showTime() {
    var myDate = new Date(); //获取当前时间
    var year = myDate.getFullYear(); //获取年份
    var month = myDate.getMonth() + 1; //获取月份是0-11的数字所以+1
    var date = myDate.getDate(); //日
    var day = myDate.getDay(); //
    var h = myDate.getHours(); //小时
    var m = myDate.getMinutes(); //分钟
    var s = myDate.getSeconds(); //秒
    checkTime(m);
    checkTime(s);
    //console.log(day)
    var week = "日一二三四五六".charAt(day);
    document.getElementById("time").innerHTML = year + "年" + month + "月" + date + "日" + "星期" + week + h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);
}
//倒计时天数计算
function day() {
    var myDate = new Date(); //获取当前时间
    var endtime = new Date("2019,10,7"); //获取结束时间
    //先换算成毫秒再相减就是时间差，再除以一天的毫秒数结果是带有小数点的，用math方法进一位取整
}