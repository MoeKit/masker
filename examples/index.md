# 局部遮罩

---

## some div

````html
<form style="padding:15px;border:1px solid #ececec;border-radius:3px;" id="textarea1">
   <label>username: <input></label> 
   <br>
   <label>password: <input></label> 
</form>
<button id="show" class="demo-btn">显示</button>
<button id="hide" class="demo-btn">关闭</button>
<button id="hide_unmask" class="demo-btn">通过静态方法`unmask`关闭</button>
````

````javascript

var Masker = require('masker');
var $ = require('jquery');

var masker = new Masker({
    target:'#textarea1',
    backgroundColor:'#ccc',
    zIndex:888,
    opacity:0.7
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
