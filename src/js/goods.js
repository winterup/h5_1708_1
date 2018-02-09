require(['config'],function(){
    require(['jquery','common','zoom'],function($){
        // 导入头部
        $('header').load('../html/header.html',function(){
            // 导航
            // 给有下级菜单的li添加箭头
            // <span>&gt;</span>
            let all = document.querySelector('.all');
            let all_c = all.children[0];
            all_c.style.display="none";
            var $hasMenu = $('.sanji ul li');
            $('.sanji ul li ul .erji').append('<span class="jiantou">&gt;</span>');
            var timer;
            $hasMenu.mouseenter(function(){
                // 清除后，延迟器中的代码不会被执行
                clearTimeout(timer);

                // 先隐藏同级li下的所有ul
                $(this).siblings().children('ul').fadeOut();

                // 显示当前
                var $subMenu = $(this).children('ul');
                $subMenu.fadeIn();
                // 高亮当前li
                $(this).addClass('active0').siblings().removeClass('active0');
            }).mouseleave(function(){

                timer = setTimeout(function(){
                    var $subMenu = $(this).children('ul');
                    $subMenu.fadeOut();

                }.bind(this),300);
                $(this).removeClass('active0');
            });

            // 二维码显示
            $('.head_tr ul li .ma1').on('mouseover',function(){
                $('.head_tr ul li .ma2').slideDown();
            }).on('mouseleave',function(){
                $('.head_tr ul li .ma2').slideUp();
            })

            //  右边固定栏
            $('.top div').on('mouseover',function(){
                $(this).children('div').slideDown();
            }).on('mouseleave',function(){
                $(this).children('div').slideUp();
            });

            // 返回顶部
            // 点击返回顶部
            $('.ding').on('click',function(){
                var timer = setInterval(function(){
                    // 滚动过的距离越大，返回越快
                    var scrollTop = window.scrollY;

                    // 计算速度
                    // 1000->900->600->300->100->30->0
                    var speed = Math.floor(scrollTop/10);


                    if(scrollTop<=10 || speed === 0){
                        clearInterval(timer);
                    }
                    window.scrollBy(0,-speed);
                },30);
            });
        });
        
        // 获取参数
        //获取传递过来的参数
        var params = location.search;//'?id=g001'
        params = params.slice(1);
        // console.log(params);
        // 拆分成数组
        params = params.split('&');
        // 遍历数组，还原成对象
        var dado = {};
        params.forEach(function(item1){
            var arr = item1.split('=');
            // dado[arr[0]] = decodeURI(arr[1]);
            dado[arr[0]] =arr[1];
        });
        var res = dado.id;
        console.log(res);
        // 导入数据
        $.ajax({
            url:'../api/goods.php',
            dataType:'json',
            data:{
                id:res
                // category:'母婴专区'
            },
            success:function(data){
                console.log(data);
                var box1 = (function(){
                    return`
                    <img src="../${data.imgs}"/>
                    `
                });
                $('.bigList').html(box1);
                $('.smallList .smallList1').html(box1);
                var box2 = (function(){
                    return`
                    <h3>${data.name}</h3>
                    `
                });
                $('.main_tc .mingzi').html(box2);
                var box3 = (function(){
                    return`
                    <i>${data.price}</i>
                    `
                });
                $('.shoujia .shoujia1').html(box3);
                var box4 = (function(){
                    return`
                    <input type="text" value="${data.qty}">
                    `
                });
                $('.shuliang .shuliang1').html(box4);
                // 放大镜
                $('.bigList').gdsZoom({
                    position:'right'
                });
                $('.smallList').on('click','img',function(){
                    $('.bigList img').attr({
                        src:this.src,
                        'data-big':this.dataset.big || this.src
                    })
                    $(this).parent('li').addClass('active1').siblings().removeClass('active1');
                });

                // 飞入购物车
                $('.gouwuche').on('click',function(){
                    // 1>复制当前商品图片(目的：用于实现动画效果)
                    var $copyImg = $('.bigList img').clone();
                    // 设定图片样式
                    $copyImg.css({
                        position:'absolute',
                        left:$('.bigList img').offset().left,
                        top:$('.bigList img').offset().top,
                        width:$('.bigList img').outerWidth()
                    });
                    // 把图片写入页面
                    $('body').append($copyImg);
                    // 动画
                    $copyImg.animate({
                        left:$('.head_br span').offset().left,
                        top:$('.head_br span').offset().top + $('.head_br span').height(),
                        width:30
                    },function(){
                        // 动画完成后

                        // 删除复制的图片
                        $copyImg.remove();
                    });
                });

                // cookie
                var goodslist = [];
                // 获取cookie
                var cookies = document.cookie;
                cookies = cookies.split('; ');
                cookies.forEach(function(item){
                    var arr = item.split('=');
                    if(arr[0] === 'goodslist'){
                        goodslist = JSON.parse(arr[1]);
                    }
                });
                $('.gouwuche').on('click',function(e){
                    // 判断当前商品是否已经存在cookie当中
                    for(var i=0;i<goodslist.length;i++){
                        if(goodslist[i].id === data.id){
                            goodslist[i].qty++;
                            break;
                        }
                    }
                    // 如果i的值等于goodslist.length
                    // 说明循环执行完成后，无法找对应id的商品
                    if(i===goodslist.length){
                        // 通过按钮获取商品信息
                        var goods = {
                            id:data.id,
                            imgurl:data.imgs,
                            name:data.name,
                            price:data.price,
                            qty:$('.shuliang1 input').attr('value')
                        }

                        // 添加到数组
                        goodslist.push(goods);
                        console.log($('.shuliang1 input').attr('value'));
                    }
                    // 写入cookie
                    document.cookie = 'goodslist='+JSON.stringify(goodslist);
                })
            }
            
        });

        

        // 导入尾部
        $('footer').load('../html/footer.html');

    })

    
});
