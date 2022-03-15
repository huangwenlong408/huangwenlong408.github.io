var stuName = document.getElementById("name");
var stuID = document.getElementById("id");
var btn = document.getElementById("btn");
var qrcode = document.getElementsByClassName("img3");
var showName = document.getElementsByClassName("xsxx");
var inputinfo = document.getElementsByClassName("inputinfo")
var str = "2123/5/17 00:00:00";
var endDate = new Date(str);
var end = endDate.getTime();
stuName.value = localStorage.getItem('name');
stuID.value = localStorage.getItem('ID');

function countTime() {
  //获取当前时间
  var date = new Date();
  var now = date.getTime();
  //时间差
  var leftTime = end - now;
  //定义变量 h,m,s保存倒计时的时间
  var h, m, s;
  if (leftTime >= 0) {
    h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
    m = Math.floor(leftTime / 1000 / 60 % 60);
    s = Math.floor(leftTime / 1000 % 60);
  }
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  //将倒计时赋值到div中
  document.getElementById("_h").innerHTML = h + ":";
  document.getElementById("_m").innerHTML = m + ":";
  document.getElementById("_s").innerHTML = s;
  //递归每秒调用countTime方法，显示动态时间效果
  setTimeout(countTime, 1000);

}
btn.onclick = function () {
  qrcode[0].src = "./img/" + stuID.value + ".png";
  showName[0].firstElementChild.innerHTML = stuName.value + "&nbsp&nbsp" + stuID.value;
  localStorage.setItem('name', stuName.value);
  localStorage.setItem('ID', stuID.value);

  // showName[0].firstChild.innerHTML = "aaa";
  // alert(stuName.value + stuID.value);
  var url = "./img/" + stuID.value + ".png"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
  var request = new XMLHttpRequest();
  request.open("get", url);/*设置请求方法与路径*/
  request.send(null);/*不发送数据到服务器*/
  request.onload = function () {/*XHR对象获取到返回信息后执行*/
    if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
      inputinfo[0].style.display = "none";
      inputinfo[1].style.display = "none";
      countTime();

    } else {
      alert("本网页仅供学习，禁止一切使用！");
    }
  }
}