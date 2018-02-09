require(['config'],function(){
    require(['jquery','common'],function($){
        $('.btnReg').on('click',function(){
            $.ajax({
                url:'../api/reg.php',
                data:{
                    username:$('#username').val(),
                    password:$('#password').val()
                },
                success:function(data){
                    // console.log(data);
                    if(data === 'success'){
                        location.href = 'login.html';
                    }else if(data === 'fail'){
                        $('#username').addClass('danger');
                    }

                    
                }
                
            });
            
        });
        $('#username').on('click',function(){
           console.log($('#username').next('span'))
            $('this').next('span').display='block';
            
        })
    });
});