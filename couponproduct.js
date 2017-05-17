( function () {
    var couponid = getQueryString( 'couponid' );
    $(function () {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:3000/api/getcouponproduct',
            dataType: 'json',
            data: {couponid: couponid},
            success: function (data) {
                var i,
                    str = '',
                    data = data.result;
                //console.log(data);
                for( i=0; i<data.length; i++ ){
                    str += '<li class="clearfix "couponProductId = "'+ data[i].couponProductId +'">'+
                        data[i].couponProductImg +'<div class="couppro">'+
                        '<p>'+ data[i].couponProductName +'<s><i class="glyphicon glyphicon-menu-right"></i></s></p><h2>'+
                        data[i].couponProductPrice +'</h2><span>'+ data[i].couponProductTime +'</span></div></li>';
                }
                $('main ul').html(str);
                $('main ul >li>img').on( 'click',function () {
                    var index = $(this).index();
                    $('.mask').css('display','block');
                    var maskImg = $('main ul >li>img:eq('+ index +')').attr('src');
                    $('.mask .maskCon >img').attr('src',maskImg);

                    $('.mask .prev').click( function () {
                        console.log(1);
                    } );
                    $('.mask').click( function () {
                         $('.mask').css('display','none');
                    } );
                } );
            }
        });
    });
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
} )();