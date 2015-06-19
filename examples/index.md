# 一般使用

---

## textarea

````html
<textarea style="width:200px;height:60px;" id="textarea1">我是内容啊</textarea>
<button id="show" class="demo-btn">显示</button>
<button id="hide" class="demo-btn">关闭</button>
<button id="hide_unmask" class="demo-btn">通过静态方法`unmask`关闭</button>
````

````javascript

var Masker = require('masker');
var $ = require('jquery');

var masker = new Masker({
    target:'#textarea1',
    backgroundColor:'#ccc'
});

$('#show').click(function(){
    masker.show();
});

$('#hide').click(function(){
    masker.hide();
});

$('#hide_unmask').click(function(){
    Masker.unmask('#textarea1');
});

$('#hide').click(function(){
 masker.hide();
});

````
