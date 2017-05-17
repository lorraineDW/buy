( function () {
    $(function () {
        $('.filter>ul>li').click( function () {
            var index  = $(this).index();
            $(".select>ul:eq(" + index + ")").siblings().hide();
            $('.select>ul').eq(index).show();
            if( index === 0 ){
                get_Data( 'http://127.0.0.1:3000/api/getgsshop',0,'shopId','shopName' );
            }else if( index === 1 ){
                get_Data( 'http://127.0.0.1:3000/api/getgsshoparea',1,'areaId','areaName' );
            }
            console.log($('nav > .select > ul:eq(' + index + ') li'));
            /*$('nav > .select > ul:eq(' + index + ') li').on( 'click', function () {
                console.log(1);
            } );*/
        } );
    })
    function get_Data(url,index,id,name) {
        $.ajax({
            type: 'get',
            url: url,
            dataType: 'json',
            success: function (data) {
                var i,
                    str = '',
                    data = data.result;
                for (i = 0; i < data.length; i++) {
                    str += '<li '+ id +'="' + data[i][id] + '">' + data[i][name] + '<i>√</i></li>';
                }
                $('nav > .select > ul:eq('+ index +')').html(str);
            }
        });
    }
} )();