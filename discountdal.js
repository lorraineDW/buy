( function () {
    $(function () {
        var productId = getQueryString("id");
        console.log(productId);
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:3000/api/getdiscountproduct',
            dataType:'json',
            data:{productid:productId},
            success:function (data) {
                var htm = '',
                    data = data.result[0];
                htm += ' <h2>'+data.productName +'</h2>'+'<p class="intro">'+data.productFrom + data.productTime + data.productTips+
                    '</p>'+data.productImg +'<p class="info">'+ data.productInfo +'</p>'+data.productImg +
                    '<p class="addr clearfix">'+'<span>北京</span><span>有货</span></p>'+data.productComment;
                $('main .mctrldal').html( htm );
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
