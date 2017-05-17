( function () {
    $( function () {
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:3000/api/getcoupon',
            dataType:'json',
            success:function (data) {
                var i,
                    str = '',
                    data = data.result;
                for( i=0; i<data.length; i++ ){
                    str +=  '<li id="'+ data[i]._id +'"><a href="'+ data[i].couponLink +'?couponid='+
                            data[i].couponId +'"><img src="'+ data[i].couponImg +'" alt=""><span>'+
                            data[i].couponTitle +'</span></a></li>';
                }
                $('main ul').html(str);
            }
        });
    } );
} )();