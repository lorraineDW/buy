( function () {
    $(function () {
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:3000/api/getmoneyctrl',
            datatype:'json',
            data:{ pageid : 1 },
            success:function (data) {
                var i,
                    that = 1,
                    htmlS = '',
                    pageAll = Math.ceil(data.totalCount/data.pagesize),
                    data = data.result;
                for( i=0; i<data.length; i++ ){
                    htmlS += ' <div class="ctrl_con"><a href="mctrldetail.html?productid='+ data[i].productId +'"><div class="main_pic">'+data[i].productImgSm+'</div><div class="main_info"><span class="main_meg">'+
                            data[i].productName + '<i class="mmRed">'+ data[i].productTips +'</i></span><div class="main_price">'+
                            '<i>'+ data[i].productFrom +'</i> | <b>'+ data[i].productTime +'</b></div></div></a></div>';
                }
                $( 'main .moneyctrl' ).html( htmlS );
                $('main .control span').html(that);
                $('.prev').click(function () {
                    $('main .ctrl_con').children().remove();
                    that--;
                    if(that==0){
                        that=pageAll;
                    }
                    get_Data(that);
                });
                $('.next').click(function () {
                    $('main .ctrl_con').children().remove();
                    that++;
                    if(that==(pageAll+1)){
                        that=1;
                    }
                    get_Data(that);
                });
            }
        });
        $('.backtrack').on( 'click', function(){
            $('body').scrollTop(0).animate() ;
        } );
        function get_Data( that ){
            $.ajax({
                type: 'get',
                url: 'http://127.0.0.1:3000/api/getmoneyctrl',
                dataType: 'json',
                data: {pageid: that},
                success: function (data) {
                    var i,
                        htmlS = '',
                        data = data.result;
                    for( i=0; i<data.length; i++ ){
                        htmlS += ' <div class="ctrl_con"><a href="mctrldetail.html?'+ data[i].productId +'"><div class="main_pic">'+data[i].productImgSm+'</div><div class="main_info"><span class="main_meg">'+
                            data[i].productName + '<i class="mmRed">'+ data[i].productTips +'</i></span><div class="main_price">'+
                            '<i>'+ data[i].productFrom +'</i> | <b>'+ data[i].productTime +'</b></div></div></a></div>';
                    }
                    $('main .moneyctrl').html(htmlS);
                    $('main .control span').html(that);
                }
            });
        }
    });
} )();