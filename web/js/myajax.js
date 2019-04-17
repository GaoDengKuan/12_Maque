//1.创建对象
var oAjax = new XMLHttpRequest();
//2.连接到服务器
oAjax.open("GET","a.txt");
//3.发送请求
oAjax.send();
//4.接收服务器返回数据
oAjax.onreadystatechange =function () {
    if (oAjax.readyState == 4){
        //学号：HTTP状态码
        if (oAjax.status ==200){
            var result=oAjax.responseText;
            alert(typeof result);
            var json =JSON.parse(result);
            alert(typeof json);
        }else {

        }
    }
}