(function () {
    $(function () {
        $.ajax({
            type : 'get',
            url : 'http://127.0.0.1:3000/api/getinlanddiscount',
            datatype : 'json',
            success : function (data) {
                var i,
                    str = '',
                    data = data.result;
                for( i=0; i<data.length; i++ ){
                    str += '<div class="discout_con"><a href="discountdal.html?id='+ data[i].productId +'">'+data[i].productImg +
                        '<p class="dis_con">'+ data[i].productInfo +'</p>'+
                        '<p class="mmRed dis_intro">'+ data[i].productName +'</p>'+
                        '<div class="main_price"><i>'+ data[i].productFrom +'</i> | <b>'+ data[i].productTime +'</b>'+
                        ' </div></a></div>';
                }
                $('main .discout').html( str );
            }
        });
        $('.backtrack').on( 'click', function(){
            $('body').scrollTop(0).animate() ;
        } );
       // $("main .discout .discout_con").lazyload({effect: "slideIn"});
    })
})();