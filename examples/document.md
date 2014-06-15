# 全屏

---

## textarea

````html
<button id="show">显示</button>
<button id="hide">关闭</button>
````

````javascript
seajs.use(['index','jquery'], function(Masker,$) {
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

});
````
