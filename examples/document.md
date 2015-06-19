# 全屏

---

## document

````html
<button id="show" class="demo-btn">显示全屏遮罩，2s后关闭</button>
````

````javascript
var Masker = require('masker');
var $ = require('jquery');
var masker = new Masker({
    target:document,
    backgroundColor:'#000',
    opacity:.8
});

$('#show').click(function(){
 masker.show();
 setTimeout(function(){
    masker.hide();
    },2000)
});

$('#hide').click(function(){
    masker.hide();
});

````
