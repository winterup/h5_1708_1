require(['config'],function(){
    require(['jquery','common'],function($){
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
        
        // 简易手风琴
        $('.main_lt div').on('click',function(){
            $(this).next('ul').slideDown().siblings('ul').slideUp();
        })

        // 导入数据
        $.ajax({
            url:'../api/list.php',
            dataType:'json',
            // data:{
            //     category:'母婴专区'
            // },
            success:function(data){
                console.log(data.data);
                var box1 = data.data.map(function(item){
                    
                    return`
                    <li data-id="${item.id}">
                        <img src="../${item.imgs}"/>
                        <p>${item.name}</p>
                        <span><i>${item.price}</i></span>&nbsp&nbsp<span><del>￥</del></span>
                    </li>
                    `
                }).join('');
                $('.main_rlist ul').html(box1);
                let pageNo = 1;
                let qty = 10;
                let arr_status = [200,304];
                let xhr = new XMLHttpRequest();
                var page = document.querySelector('.page');
                // 处理分页
                let pageQty = Math.ceil(data.total/data.qty);
                page.innerText = '';
                for(let i=1;i<=pageQty;i++){
                    let span = document.createElement('span');
                    span.innerText = i;
                    if(i===data.pageNo){
                        span.className = 'active';
                    }
                    page.appendChild(span);
                }
                // POS请求发送数据
                xhr.send(`pageNo=${pageNo}&qty=${qty}`);
                // 切换分页
                page.onclick = function(e){
                    if(e.target.tagName.toLowerCase() === 'span'){
                        pageNo = e.target.innerText*1;
                        xhr.open('post','../api/football.php');
                        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                        xhr.send(`pageNo=${pageNo}&qty=${qty}`);
                    }
                }


                // 传参
                $('.main_rlist ul li').on('click',function(){
                    console.log($(this).attr('data-id'));
                    var params = '?';
                    params += 'id='+$(this).attr('data-id');
                    console.log(params);
                    // 跳转页面
                    location.href = 'goods.html' + params;
                });
            }
        });

        // 导入尾部
        $('footer').load('../html/footer.html');
    })
});
    