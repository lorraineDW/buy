( function () {
    $(function () {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:3000/api/getindexmenu',
            dataType: 'json',
            success: function (data) {
                var i,
                    htmStr = '',
                    data = data.result;
                console.log(data);
                for (i = 0; i < data.length; i++) {
                    htmStr += '<div class="col-xs-3 nav_con" id="' + data[i]._id + ' " indexmenuId=" '+ data[i].indexmenuId +' ">' +
                        '<a href="' + data[i].titlehref + '">' +
                        data[i].img +
                        '<span>' + data[i].name + '</span>' +
                        '</a>' +
                        '</div>';
                    $('#creatDynamic').html(htmStr);
                }
                $(".nav_con:eq(7)").on('click', function () {
                    $(".nav_con:nth-of-type( n+9 )").slideToggle();
                });

            }
        });
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:3000/api/getmoneyctrl',
            dataType: 'json',
            success: function (data) {
                var i,
                    htmStr = '',
                    data = data.result;
                console.log(data);
                for (i = 0; i < data.length; i++) {
                    htmStr = ' <div class="main_con"><div class="main_pic">' +
                        data[i].productImg2 + '</div><div class="main_info">' +
                        '<span class="main_meg">' + data[i].productName + '<i class="mmRed">' + data[i].productTips + '</i></span>' +
                        '<div class="main_price"><i>' + data[i].productFrom + '</i> | <b>' + data[i].productTime + '</b><div>' +
                        '</div></div>';
                    $('main .toobar').before(htmStr);
                }
            }
        });

        $('.backtrack').on( 'click', function(){
            $('body').scrollTop(0).animate() ;
        } );
    });
} )();