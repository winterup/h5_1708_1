require(['config'],function(){
    require(['jquery','common'],function($){
        // 导入头部
        $('header').load('../html/header.html',function(){
            // 导航
            // 给有下级菜单的li添加箭头
            // <span>&gt;</span>
            var $hasMenu = $('.sanji ul li ul .erji');
            $hasMenu.append('<span class="jiantou">&gt;</span>');
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
                $(this).addClass('active').siblings().removeClass('active');
            }).mouseleave(function(){

                timer = setTimeout(function(){
                    var $subMenu = $(this).children('ul');
                    $subMenu.fadeOut();

                }.bind(this),300);
                $(this).removeClass('active');
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

        // 轮播图
            
        // 抖动图
        $('.qianggou_b li img').on('mouseover',function(){
            $(this).animate({left:-5},500)
        });
        $('.qianggou_b li img').on('mouseleave',function(){
            $(this).animate({left:5},500)
        });
        
        // 倒计时
        var countDown = document.getElementsByClassName('countDown');
        // 活动结束时间
        var end = Date.parse('2020-12-29 12:05:20');
        showTime();
        var timer = setInterval(showTime,1000);
        function showTime(){
            // 获取当前时间
            var now = Date.now();
            // 计算差值
            var offset = Math.floor((end - now)/1000);//毫秒
            // 把时间转换成：xx天xx时xx分xx秒
            // 50s:00天00时00分50秒
            // 65s:00天00时01分05秒
            // 65m:00天01时05分05秒
            // 26h:01天02时05分05秒
            if(offset <= 0){
                // 清除定时器
                clearInterval(timer);
            }
            var sec = offset%60;
            var min = Math.floor(offset/60)%60;
            var hour = Math.floor(offset/60/60)%24;
            var day = Math.floor(offset/60/60/24);
            sec = sec<10? '0'+sec : sec;
            min = min<10? '0'+min : min;
            hour = hour<10? '0'+hour : hour;
            day = day<10? '0'+day : day;
            for(var i=0;i<countDown.length;i++){
                countDown[i].innerHTML = '距结束：'+day + '天' + hour + '时' + min + '分' + sec + '秒';
            }
        }


        // tab切换
        // 高亮显示第一个tab
        $('.meiri .meiri_t div').first().addClass('active');
        // 点击切换
        $('.meiri').on('mouseover','.meiri_t div',function(){
            // 获取当前索引值
            var idx = $(this).index();
            
            // * 高亮显示当前tab，去除其它高亮
            $('.meiri .meiri_t div').eq(idx).addClass('active').siblings().removeClass('active');

            //* 显示对应图片，隐藏其它图片
            $('.meiri .meiri_b div').eq(idx).slideDown().siblings().slideUp();
        })

        // 边框阴影
        $('.jingtiao_tc ul li').on('mouseover',function(){
            $(this).addClass('active');
        });
        $('.jingtiao_tc ul li').on('mouseleave',function(){
            $(this).removeClass('active');
        });
        
        // 导入尾部
        $('footer').load('../html/footer.html');
    });
});
    
