
// 获取当前界面高
var mainBox = document.getElementById("mistakes");
mainBox.style.height = document.documentElement.clientHeight + "px";
// 接受数据
var num = eval("("+localStorage.getItem("localNum")+")")
var wordsGroup = eval("("+localStorage.getItem("localWords")+")");
var yinbiaoGroup = eval("("+localStorage.getItem("localYinbiao")+")");
var meanGroup = eval("("+localStorage.getItem("localMean")+")");
var wordsShow = document.getElementById('words');//单词显示
var yinbiaoShow = document.getElementById('yinbiao');//音标显示
var meanShow = document.getElementById('mean');//意思显示
var prev = document.getElementById('prev');//上一个按钮
var next = document.getElementById('next');//下一个按钮
var drill = document.getElementById('drill');//直接跳转按钮

// 当前词下标
var i=0;
//初始化第一次显示
wordsShow.innerHTML = wordsGroup[0];
yinbiaoShow.innerHTML = yinbiaoGroup[0];
meanShow.innerHTML = meanGroup[0];
//单独定义next背景色
next.style.backgroundColor = '#ffff37';
//隐藏直接连接
drill.style.display = 'none';
//下一个点击事件
next.onclick = function(){
	nextFun();
}
//上一个点击事件
prev.onclick = function(){
	prevFun();
}
// 键盘事件
document.onkeydown = function(e){
	var e = e||window.event;
	if(e.keyCode == 37){//左箭头事件
		prevFun();
	}
	if(e.keyCode == 39){//右箭头事件
		nextFun();
	}
}
//关闭
end.onclick = function(){
	logout();
}
//上一个事件函数
function prevFun(){
	if (i <= 0) {
		alert('到达最前');
	}else{
		i--;
		show();
	}
}
//下一个事件函数
function nextFun(){
	if(i >= num - 1){
		alert('所选单词已经记忆完');
		drill.style.display = 'block';
	}else{
		i++;
		show();
	}
}
// 显示函数
function show(){
	wordsShow.innerHTML = wordsGroup[i];
	yinbiaoShow.innerHTML = yinbiaoGroup[i];
	meanShow.innerHTML = meanGroup[i];
}
// 关闭窗口
function logout(){
	if(confirm("确定要退出吗？")){
	// 移动端|PC端
	var userAgent = navigator.userAgent;
	if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
	   window.location.href="about:blank";
	}else if(userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1){
	   window.opener=null;window.open('about:blank','_self','').close();
	}else {
	   window.opener = null;
	   window.open("about:blank", "_self");
	   window.close();
	}
	// 微信端
	WeixinJSBridge.call('closeWindow');
	}
}