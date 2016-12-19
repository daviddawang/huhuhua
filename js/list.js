/**
 * Created by jameswatt2008 on 2016/11/2.
 */

$(function () {
    $.getJSON("data/data.json",function (data) {
        //alert(data)

        // 回去 三星  小米



        (function () {
            var html = "";
            for(var i in data){
                var item = data[i];
                //alert(item.name)
                // data-i = 'classfiy01'
                // data-i = 'classfiy02'  // html5 的 data-i  data-abc
                html += "<span data-abc='"+i+"'>"+item.name+"</span>";
            }
            $(".nav").html(html);
        })();

        //给 选项添加事件，点击不同的选项 显示不同的内容
        (function () {
            $(".nav").on("click","span",function () {

              //alert($(this).data("abc"))
                var dataabc = $(this).data("abc");//classfiy01
                var list = data[dataabc].list;// classfiy01 里的list 数组
                //alert(list.length)

                // 给ul 设个标志
                $(".shoplist").data("abc",dataabc);

                var html = "";
                for(var i=0;i<list.length;i++){
                    var product = list[i];
                    html += "<li>"+
                                // "<img src="+product.src+"/>"+
                                "<p>"+product.name+"</p>"+
                                "<p>"+product.price+"</p>"+
                                "<button>"+"加入购物车"+"</button>"
                                "</li>"
                }
                $(".shoplist").html(html);



                $(".shoplist li").on("click","button",function () {

                    //把对应的 商品信息保存cookie

                    //carts ---[{produdct1},{product2}]-->json串

                    //点击的商品信息

                    //分类
                    var key = $(".shoplist").data("abc");
                    var array = data[key].list;
                    var product = array[$(this).parent().index()];
                    //alert(product.name)

                    var tmparray = [];
                    if($.cookie("carts")){
                        tmparray = JSON.parse($.cookie("carts"));
                    }
                    //先检查一下 购车中有没有这个商品，如果有，数量加1，如果没有数量1；

                    var has = false;

                    for(var i=0;i<tmparray.length;i++){
                        var item = tmparray[i];
                        if(item.id == product.id){
                            item.num++;
                            has = true;
                        }

                    }
                    //如果购物车里面没有这个商品
                    if(!has){
                        product.num = 1;
                        tmparray.push(product);
                    }

                    //把数组转为json串
                    var str = JSON.stringify(tmparray);
                    $.cookie("carts",str,{expires:7});

                    alert(JSON.parse($.cookie("carts")).length)





                })

            })
        })();






        $(".nav span").eq(0).trigger("click");


    })

})

//判断数组中有没有 对应的商品
function arrayHasProduct(arr,product) {

}
