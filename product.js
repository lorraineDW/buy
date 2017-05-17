( function () {
    $(function () {
        var adre = window.location.search;
        var reg = /\d+/;
        var categoryid = reg.exec(adre)[0];
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:3000/api/getcategorybyid',
            dataType: 'json',
            data: {categoryid: categoryid},
            success: function (data) {
                $('.TV').html( data.result[0].category + '> ');
                $.ajax({
                    type: 'get',
                    url: 'http://127.0.0.1:3000/api/getproductlist',
                    dataType: 'json',
                    data: {categoryid: categoryid, pageid: 1},
                    success: function (data) {
                        var i,
                            that = 1,
                            str = '',
                            htmlStr = '',
                            cot = Math.ceil((data.totalCount) / 10),
                            data = data.result;
                        for (i = 0; i < data.length; i++) {
                            htmlStr += '<a href="http://localhost:63342/buy/detail.html?productId=' + data[i].productId +'&id='+categoryid +'" class="main_con clearfix" id="' +
                                data[i]._id +'" productId="' + data[i].productId + '" brandId="' + data[i].brandId + '">' +data[i].productImg +'<div class="main_info">'+
                                '<span class="m_i_meg">' +data[i].productName + '</span>' + '<span class="m_i_price">' + data[i].productPrice + '</span>'+'<span class="m_i_comment">'+
                                data[i].productQuote + data[i].productCom + '</span></div></a>';
                        }
                        for (var m = 0; m < cot; m++) {
                            str += '<option value="' + (m + 1) + '">' + (m + 1) + '/' + cot + '</option>';
                        }
                        $('main .product_con').html(htmlStr);
                        $('main .control select').html(str);
                        $('.prev').click(function () {
                            $('main .product_con').children().remove();
                            that--;
                            if(that==0){
                                that=cot;
                            }
                            get_Data(categoryid,that);
                        });
                        $('.next').click(function () {
                            $('main .product_con').children().remove();
                            that++;
                            if(that==cot+1){
                                that=1;
                            }
                            get_Data(categoryid,that);
                        });
                    }
                });
            }
        });
        $('.backtrack').on( 'click', function(){
            $('body').scrollTop(0).animate() ;
        } );
        function get_Data( categoryid, that) {
            $.ajax({
                type: 'get',
                url: 'http://127.0.0.1:3000/api/getproductlist',
                dataType: 'json',
                data: {categoryid: categoryid, pageid: that},
                success: function (data) {
                    var i,
                        htmlStr = '',
                        data = data.result;
                    for (i = 0; i < data.length; i++) {
                        htmlStr += '<a href="http://localhost:63342/buy/detail.html?productId=' + data[i].productId +'&id='+categoryid +'" class="main_con clearfix" id="' +
                            data[i]._id +'" productId="' + data[i].productId + '" brandId="' + data[i].brandId + '">' +data[i].productImg +'<div class="main_info">'+
                            '<span class="m_i_meg">' +data[i].productName + '</span>' + '<span class="m_i_price">' + data[i].productPrice + '</span>'+'<span class="m_i_comment">'+
                            data[i].productQuote + data[i].productCom + '</span></div></a>';
                    }
                    $('main .product_con').html(htmlStr);
                    $('main .control select option[value="' + that + '"]').attr("selected", true);
                }
            });

        }
    });
} )();

