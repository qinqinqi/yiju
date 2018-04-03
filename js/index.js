// index团队介绍效果
{
    $(".tuandui_renwu li").mouseenter(function(){
        let index=$(".tuandui_renwu li").index(this);
        $(".tuandui_renwu li").removeClass("active").eq(index).addClass("active");
    })
}

// 产品中心效果
{
    let n=0;
    $(".xulie_right").click(function(){
        if(n<6){
            n++;
            $(".inner").css({"marginLeft":-1245*n+"px"});
            $(".xulie_yuan").removeClass("active").eq(n).addClass("active");
        }
    });
    $(".xulie_left").click(function(){
        if(n>0){
            n--;
            $(".inner").css({"marginLeft":-1245*n+"px"});
            $(".xulie_yuan").removeClass("active").eq(n).addClass("active")
        }
    });
    $(".xulie_yuan").click(function () {
        let index = $(this).index(".xulie_yuan");
        $(".xulie_yuan").removeClass("active").eq(index).addClass("active");
        $(".inner").css({"marginLeft":-1245*index+"px"});
    });
}

//案例效果
{
    let n=0;
    $(".xulie_right").click(function(){
        if(n<6){
            n++;
            $(".anli_inner").css({"marginLeft":-1100*n+"px"});
            $(".xulie_yuan").removeClass("active").eq(n).addClass("active");
        }
    });
    $(".xulie_left").click(function(){
        if(n>0){
            n--;
            $(".anli_inner").css({"marginLeft":-1100*n+"px"});
            $(".xulie_yuan").removeClass("active").eq(n).addClass("active")
        }
    });
    $(".xulie_yuan").click(function () {
        let index = $(this).index(".xulie_yuan");
        $(".xulie_yuan").removeClass("active").eq(index).addClass("active");
        $(".anli_inner").css({"marginLeft":-1100*index+"px"});
    });
}

//团队效果
{
    let n=0;
    $(".xulie_right").click(function(){
        if(n<3){
            n++;
            $(".tuandui_inner").css({"marginLeft":-1005*n+"px"});
            $(".xulie_yuan").removeClass("active").eq(n).addClass("active");
        }
    });
    $(".xulie_left").click(function(){
        if(n>0){
            n--;
            $(".tuandui_inner").css({"marginLeft":-1005*n+"px"});
            $(".xulie_yuan").removeClass("active").eq(n).addClass("active")
        }
    });

    $(".xulie_yuan").click(function () {
        let index = $(this).index(".xulie_yuan");
        $(".xulie_yuan").removeClass("active").eq(index).addClass("active");
        $(".tuandui_inner").css({"marginLeft":-1005*index+"px"});
    });
}