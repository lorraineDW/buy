( function () {
    $(function(){
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:3000/api/getcategorytitle',
            dataType: 'json',
            success: function (data) {
                var i,
                    htmStr = '',
                    data = data.result;
                for (i = 0; i < data.length; i++) {
                    htmStr = '<div class="main_con" id="' + data[i]._id + '" titleId = " ' + data[i].titleId + ' ">' +
                        '<p class="clearfix"><i>' + data[i].title + '</i> <span class="glyphicon glyphicon-menu-down cli" ></span></p>';
                    '</div>';
                    $('main .container').append(htmStr);
                }
                var cat = $('main .container .main_con  p span');
                for (var i = 0; i < cat.length; i++) {
                    cat[i].onclick = function () {
                        $('main .container .main_con .row').remove();
                        var par = this.parentNode,
                            result = $(par.parentNode).attr('titleId');
                        $.ajax({
                            type: 'get',
                            url: 'http://127.0.0.1:3000/api/getcategory',
                            dataType: 'json',
                            data: {titleid: result},
                            success: function (data) {
                                var i,
                                    htmStr = '',
                                    data = data.result;
                                console.log(data);
                                for (i = 0; i < data.length; i++) {
                                    htmStr += '<div class="col-xs-4 main_c_info" categoryId=" '+
                                        data[i].categoryId +' "><a href = "http://localhost:63342/buy/product.html?id=' +
                                        data[i].categoryId + '">' + data[i].category+ '</a></div>';
                                }
                                htmlSTR =  '<div class="row">' +htmStr +  '</div>';
                                $(par).after(htmlSTR);
                                var all = $('main .container .main_con .row');
                                all.each(function (v, i) {
                                    i.style.display = ' none ';
                                });
                                par.nextSibling.style.display = 'block';
                            }
                        });
                    }
                }
            }
        });
        $('.backtrack').on( 'click', function(){
            $('body').scrollTop(0).animate() ;
        } );
    });
} )();