require(['config'],function(){
    require(['jquery','common'],function($){
        /*
            读取cookie中的goodslist
            把json字符串转换成对象/数组：JSON.parse()
         */
        var goodslist = Cookie.get('goodslist');
        if(goodslist.length===0){
            goodslist = [];
        }else{
            goodslist = JSON.parse(goodslist);
        }
        render();
        function render(){
            
            var total = 0;
            var sl = 0;
            var zj = 0
            // 根据数据生成html结构
            var ul = document.createElement('ul');
            ul.innerHTML = goodslist.map(function(item){
                console.log(item);
                // total += item.price*item.qty;
                sl +=item.qty;
                return '<li data-id="'+item.id+'">'+
                    '<div class="checkbox"><input type="checkbox" /></div>'+
                    '<div class="imgs"><img src="../'+item.imgurl+'" alt="" /></div>'+
                    '<div class="name">'+item.name+'</div>'+
                    '<div class="price">'+item.price+'</div>'+
                    '<div class="qty"><span class="btn1"><img src="../img/car3.png" alt="" /></span><input type="text" value="'+item.qty+'"/><span class="btn2"><img src="../img/car4.png" alt="" /></span></div>'+
                    '<div class="del">删除</div>'
                '</li>';

            }).join('');

            // 添加到页面
            var main_b = document.querySelector('.main_b');
            $('.main_b').innerHTML = '';
            main_b.appendChild(ul);
            // 点击事件
            $('.qty .btn1').on('click',function(){
                $reg1=$(this).next('input').attr('value');
                if($reg1>1){
                    $reg1-=1;
                    $(this).next('input').val($reg1);
                }else{
                    $(this).next('input').val('1');
                }
            })
            $('.qty .btn2').on('click',function(){
                $reg2=$(this).next('input').attr('value');
                    $reg2++;
                    $(this).next('input').val($reg2);
            })
            // 写入总价
            console.log($('.price').html());
            
            $('.heji span .zsl').html(sl);
            $('.heji span .zj').html('￥'+$('.price').html()*$('.qty input').attr('value'));
        }
    })
});

