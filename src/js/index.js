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
// --------------------------------------------------------------------------
        // 轮播图
        let banner=document.querySelector('#banner');
        let lunbotu=document.querySelector('#banner .lunbotu');
        let ul=banner.querySelector('#banner .lunbotu ul');
        ul.appendChild(ul.children[0].cloneNode(true));
        var li=ul.querySelectorAll('li')[0];
        console.log(li)       
        var len=ul.children.length;
        ul.style.width=lunbotu.clientWidth*5+'px';
        var idx=0;
        let timer1=setInterval(autoPlay,2000);
        
        // 生成页码按钮 并且默认让第一颗按钮亮
        let page=document.createElement('div');
        for(var i=1;i<ul.children.length;i++){
            let span=document.createElement('span');
            span.innerText=i;
            page.appendChild(span);
            if(i==idx+1){
                span.classList.add('active');
                // 开始的时候第一个高亮
            }
        }
        lunbotu.appendChild(page);
        function autoPlay(){
             idx++;
             autoShow();
        }
        function autoShow(){    
            // 当滚动到复制那张图片时，瞬间重置回初始状态
            if(idx>=len){idx=1;ul.style.left=0;}
            var target=-li.clientWidth*idx;
            //  animate_jianban(节点,属性,目标值) 
            animate_jianban(ul,'left',target);
            // 高亮页码
            // 高亮前先清除
            // 先将高亮的class去掉
            page.querySelector('.active').classList.remove('active');
            if(idx<len-1){
                page.children[idx].className='active';
                // 跑到复制的那一张 高亮第一张
            }else{
                page.children[0].className='active';
            }

        }

        // 当鼠标一进去时，图片暂停
        lunbotu.addEventListener('mouseenter',()=>{
            clearInterval(timer1);
        })

        lunbotu.addEventListener('mouseleave',()=>{
            timer1=setInterval(autoPlay,3000)
        })

        lunbotu.addEventListener('click',e=>{
                if(e.target.tagName.toLowerCase()==='span'){
                    idx=e.target.innerText-1;
                    console.log(e.target)            
                    autoShow();   
                }
                if(e.target.className==='l2'){
                    console.log(e.target)
                    if(idx>len-1){
                        idx=0;
                    }
                    idx++;
                    autoShow();
                }
                if(e.target.className==='l1'){
                    if(idx<1){
                        idx=len-1;
                        ul.style.left=-(len-1)*li.clientWidth+'px';
                    }
                    idx--;
                    autoShow();
                }
        })
        function animate_jianban(ele,attr,target){
            var timername = attr + 'timer';//toptimer,lefttimer
            clearInterval(ele[timername]);
            ele[timername] = setInterval(()=>{
                // 获取当前值
                let current = getComputedStyle(ele)[attr];//'100px,50deg,0.3'

                //提取单位
                let unit = current.match(/[a-z]+$/);//px,deg,null

                // 
                unit = unit ? unit[0] : '';

                // 提取值
                current = parseFloat(current);

                // 计算缓冲速度
                let speed = Math.floor((target-current)/10);//-32->20->10->5.5->0.5

                // 计算top值
                current += speed;

                if(current === target || speed === 0){
                    clearInterval(ele[timername]);

                    // 重置current值
                    current = target;
                }

                ele.style[attr] = current + unit;

            },30);
        }
            
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
                clearInterval(timer1);
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
        $('.meiri .meiri_t div').first().addClass('active1');
        // 点击切换
        $('.meiri').on('mouseover','.meiri_t div',function(){
            // 获取当前索引值
            var idx = $(this).index();
            
            // * 高亮显示当前tab，去除其它高亮
            $('.meiri .meiri_t div').eq(idx).addClass('active1').siblings().removeClass('active1');

            //* 显示对应图片，隐藏其它图片
            $('.meiri .meiri_b div').eq(idx).slideDown().siblings().slideUp();
        })

        // 导入数据
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                category:'母婴专区'
            },
            success:function(data){
                // console.log(data);
                var box1 = data.map(function(item){
                    return`
                    <li>
                        <img src="${item.imgs}"/>
                        <p>${item.name}</p>
                        <span><i>${item.price}</i></span><span><del>￥</del></span>
                    </li>
                    `
                }).join('');
                $('.jingtiao_tc ul').html(box1);
                // 边框阴影
                $('.jingtiao_tc ul li').on('mouseover',function(){
                    $(this).addClass('active2');
                });
                $('.jingtiao_tc ul li').on('mouseleave',function(){
                    $(this).removeClass('active2');
                });
            }
        });

        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                category:'美妆个护'
            },
            success:function(data){
                // console.log(data);
                var box2 = data.map(function(item){
                    return`
                    <li>
                        <img src="${item.imgs}"/>
                        <p>${item.name}</p>
                        <span><i>${item.price}</i></span><span><del>￥</del></span>
                    </li>
                    `
                }).join('');
                $('.meirong_tc ul').html(box2);
                // 边框阴影
                $('.meirong_tc ul li').on('mouseover',function(){
                    $(this).addClass('active2');
                });
                $('.meirong_tc ul li').on('mouseleave',function(){
                    $(this).removeClass('active2');
                });
            }
        });

        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                category:'数码家电'
            },
            success:function(data){
                // console.log(data);
                var box2 = data.map(function(item){
                    return`
                    <li>
                        <img src="${item.imgs}"/>
                        <p>${item.name}</p>
                        <span><i>${item.price}</i></span><span><del>￥</del></span>
                    </li>
                    `
                }).join('');
                $('.jiadian_tc ul').html(box2);
                // 边框阴影
                $('.jiadian_tc ul li').on('mouseover',function(){
                    $(this).addClass('active2');
                });
                $('.jiadian_tc ul li').on('mouseleave',function(){
                    $(this).removeClass('active2');
                });
            }
        });

        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                category:'家居日用'
            },
            success:function(data){
                // console.log(data);
                var box2 = data.map(function(item){
                    return`
                    <li>
                        <img src="${item.imgs}"/>
                        <p>${item.name}</p>
                        <span><i>${item.price}</i></span><span><del>￥</del></span>
                    </li>
                    `
                }).join('');
                $('.fushi_tc ul').html(box2);
                // 边框阴影
                $('.fushi_tc ul li').on('mouseover',function(){
                    $(this).addClass('active2');
                });
                $('.fushi_tc ul li').on('mouseleave',function(){
                    $(this).removeClass('active2');
                });
            }
        });

        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                category:'环球美食'
            },
            success:function(data){
                // console.log(data);
                var box2 = data.map(function(item){
                    return`
                    <li>
                        <img src="${item.imgs}"/>
                        <p>${item.name}</p>
                        <span><i>${item.price}</i></span><span><del>￥</del></span>
                    </li>
                    `
                }).join('');
                $('.shipin_tc ul').html(box2);
                // 边框阴影
                $('.shipin_tc ul li').on('mouseover',function(){
                    $(this).addClass('active2');
                });
                $('.shipin_tc ul li').on('mouseleave',function(){
                    $(this).removeClass('active2');
                });
            }
        });

        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                category:'运动户外'
            },
            success:function(data){
                // console.log(data);
                var box2 = data.map(function(item){
                    return`
                    <li>
                        <img src="${item.imgs}"/>
                        <p>${item.name}</p>
                        <span><i>${item.price}</i></span><span><del>￥</del></span>
                    </li>
                    `
                }).join('');
                $('.huwai_tc ul').html(box2);
                // 边框阴影
                $('.huwai_tc ul li').on('mouseover',function(){
                    $(this).addClass('active2');
                });
                $('.huwai_tc ul li').on('mouseleave',function(){
                    $(this).removeClass('active2');
                });
            }
        });

        


//------------------------------------------------------------------------------------------ 
        // 导入尾部
        $('footer').load('../html/footer.html');
    });
});
    
