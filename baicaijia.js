(function () {
    $(function () {
        var titleId = getQueryString("titleid");
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:3000/api/getbaicaijiatitle',
            dataType: 'json',
            success: function (data) {
                var i,
                    htm = '',
                    lisWidth = 0,
                    data = data.result;
                for (i = 0; i < data.length; i++) {
                    htm += '<li titleId="' + data[i].titleId + '" id="' + data[i]._id + '">' + data[i].title + '</li>';
                }
                $('nav ul').html(htm);
                for (var j = 0; j < $("nav li").length; j++) {
                    lisWidth += $("nav li").eq(j).innerWidth();
                }
                $('nav ul').css('width', lisWidth / 100 + 'rem');
                get_Data(0);
                $("nav ul > li").click(function () {
                    $(this).css('backgroundColor', '#acb').siblings().css('backgroundColor', '');
                    var index = $(this).index();
                    $(".bc_con >div:eq(" + index + ")").siblings().hide();
                    $('.bc_con>div').eq(index).show();
                    var titleid = $(this).attr('titleid') - 0;
                    get_Data(titleid);
                });
            }
        });
        $('.backtrack').on('click', function () {
            $('body').scrollTop(0).animate();
        });
        function getQueryString(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2]);
            }
            return null;
        }
        function get_Data( titleid) {
            $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:3000/api/getbaicaijiaproduct',
            dataType: 'json',
            data: { titleid: titleid},
            success: function (data) {
                var i,
                    str = '',
                    data = data.result;
                console.log(data);
                for( i=0; i<data.length; i++ ){
                    str += '<li class="clearfix">'+data[i].productImg+'<div class="dbc_con"><p>'+data[i].productName+'</p><p>'+data[i].productPrice+'</p>'+
                    data[i].productCouponRemain+'<p>'+ data[i].productCoupon + data[i].productHref +'</p></li>';
                }
                $('main .dbc_info').html(str);
               /* console.log($('.bar > i').width());
                var spanInner = $('.bar > i>span').html().slice(0,-1)-0;
                console.log(spanInner);
                var emWidth = ((($('.bar > i').width()) * spanInner)/100)+'px';
                console.log(emWidth);
                $('.bar > i> em').css('width',emWidth);
                $('.bar > i> em').css('backgroudColor','rgba(255,0,0,0.6)');*/
            }
        });
        }
    });
})();
