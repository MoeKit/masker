# 一般

---

## textarea

````html
<textarea style="width:200px;height:60px;" id="textarea1">我是内容啊</textarea>
<button id="show">显示</button>
<button id="hide">关闭</button>
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

````
