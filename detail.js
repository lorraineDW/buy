( function () {
    $( function(){
        var productId = getQueryString('productId');
        var id = getQueryString('id');
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:3000/api/getcategorybyid',
            dataType: 'json',
            data: {categoryid: id},
            success: function (data) {
                $('.phref').html(data.result[0].category + '> ');
                $('.phref').attr('href','http://localhost:63342/buy/product.html?id='+id);
                $.ajax({
                    type: 'get',
                    url: 'http://127.0.0.1:3000/api/getproduct',
                    dataType: 'json',
                    data: {categoryid: id, productid:productId},
                    success: function (data) {
                        var itemName = (data.result[0].productName).split(' ')[0];
                        $('.nav_item').html(itemName + '> ');
                    }
                });
            }
        });
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:3000/api/getproduct',
            dataType:'json',
            data:{productid:productId},
            success:function (data) {
                var hmlStr = '',
                    data = data.result[0];
                console.log(data);
                hmlStr = '<p class="p_i_intro">'+ data.productName +'</p>'+
                    data.productImg+
                    '<ul class="clearfix p_i_fun">'+'<div class="like">收藏</div>'+
                    '<li class="fl">比价购买</li>'+
                    '<li class="fl">产品参数</li>'+
                    '<li class="fl">评论(2322)</li>'+
                    '</ul>'+data.bjShop+
                    '<p class="p_i_tips">* 实际价格以各网站列出的实时售价为准，我们提供的价格可能有数小时至数日的延迟。</p>';
                $(' main .addParam .product_info ').html( hmlStr );
            }
        });
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:3000/api/getproductcom',
            dataType:'json',
            data:{productid:productId},
            success:function (data) {
                var i,
                    hmlStr = '',
                    data = data.result;
                console.log(data);
                for( i=-0; i<data.length; i++ ){
                    hmlStr += '<p class="p_c_meg clearfix">'+
                        '<span class="fl">'+data[i].comName+'</span>'+
                        '<span class="fr">'+ data[i].comTime+'</span>'+
                        '</p>'+
                        '<p class="clearfix p_c_from"><span class="fr">'+data[i].comFrom+'</span></p>'+
                        '<p  class="p_c_con">'+data[i].comContent+'</p>';
                }
                $(' main .addParam .product_com ').html( hmlStr );
            }
        });
        $('.backtrack').on( 'click', function(){
            $('body').scrollTop(0).animate() ;
        } );
        function getQueryString(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2]);
            }
            return null;
        }
    } );
} )();