/**
 * Created by jameswatt2008 on 2016/11/2.
 */

$(function () {
    //购物车页面

    (function () {
        if($.cookie("carts")){
            var arr = JSON.parse($.cookie("carts"));

            var html= '';
            for(var i=0;i<arr.length;i++){
                var product = arr[i];
                html += "<li>"+
                    // "<img src="+product.src+"/>"+
                    "<p>"+product.name+"</p>"+
                    "<p>"+product.price+"</p>"+
                    "<button>"+"删除"+"</button>"+
                        "<p>"+product.num+"</p>"+
	
                "</li>";
            }

            $(".list").html(html);

            $(".list").on("click","button",function () {
                //商品的相关信息


                //2 删除 cookie里面 对应的数据信息

                var index = $(this).parent().index();
                var arr = JSON.parse($.cookie("carts"));

                //alert(index)

                arr.splice(index,1);

                $.cookie("carts",JSON.stringify(arr));


                // 1.删除界面上的li
                $(this).parent().remove();



            })




        }else {
            alert("购车时空的")
        }

    })();




})