 window.onload = function () {

    /*购物车*/
    $(".header-right2").mouseenter(function () {
        $(".shopcon:first").css("height", '98px').slideDown();
    });

    $(".header-right2").mouseleave(function () {
        $(".shopcon:first").css("height", '0').slideUp();
    });


    //搜索
    let search4 = document.getElementsByClassName("search4")[0];                 //搜索框
    let search4R = document.getElementsByClassName("search4-R")[0];               //
    let input = document.querySelector(".search4>input")                          //input框
    let search4chubo = document.getElementsByClassName("search4chubo")[0];       //
    let status = true;                                                     //状态确定
    search4.onmouseover = function () {                                        //
        if (!status) {
            return                                                          //状态
        }
        input.style.borderColor = "#b0b0b0";
        search4R.style.borderColor = "#b0b0b0";
    }
    search4.onmouseout = function () {
        if (!status) {
            return
        }
        input.style.borderColor = "#e0e0e0";
        search4R.style.borderColor = "#e0e0e0";

    }
    input.onfocus = function () {                                         //获取焦点
        status = false;
        input.style.borderColor = "#ff6700";
        search4R.style.borderColor = "#ff6700";
        search4chubo.style.display = "block";
    }

    input.onblur = function () {                                          //移出焦点
        status = true;
        input.style.borderColor = "#e0e0e0";
        search4R.style.borderColor = "#e0e0e0";
        search4chubo.style.display = "none";
    }

//分装函数(主体上下)
    function slide(btnR,btnL,sub) {
        let n = 0;
        btnR.click(function () {
            n -= 1226;
            if (n <= (-1226) * 2) {
                n = -1226 * 2;
                btnR.css('color', '#e0e0e0');
            }
            sub.css('marginLeft', n + "px");
            btnL.css("color", "#b0b0b0");
        });
        btnL.click(function () {
            n += 1226;
            if (n >= 0) {
                n = 0;
                btnL.css('color', '#e0e0e0');
            }
            sub.css('marginLeft', n + "px");
            btnR.css("color", "#b0b0b0");
        });
        btnL.hover(
            function () {
                if (n < 0) {
                    btnL.css('color:', '#ff6700');
                }
            },
            function () {
                if (n < 0) {
                    btnL.css('color:', '#b0b0b0');
                }
            }
        )
        btnR.hover(
            function () {
                if (n > (-1226) * 2) {
                    btnR.css('color:', '#ff6700');
                }
            },
            function () {
                if (n > (-1226) * 2) {
                    btnR.css('color:', '#b0b0b0');
                }
            }
        )
    }
//小米明星单
    let starbtnL = $(".star-btnL");
    let starbtnR = $(".star-btnR");
    let starbottomnei = $(".starbottomnei");
    slide(starbtnL,starbtnR,starbottomnei);
//为你推荐
    let starbtnL1 = $(".star-btnL1");
    let starbtnR1 = $(".star-btnR1");
    let star1bottomnei = $(".star1-bottomnei");
    slide(starbtnL1,starbtnR1,star1bottomnei);


//banner选框-选项卡
     // （方法一）
    /*   let asideboxli=$(".aside-box>li");
       let asideboxdiv=$(".aside-box>li>div");

       asideboxli.mouseenter(function(event) {
         asideboxdiv.css("display",'none');
         $(this).children(".aside-boxjs").css({"display":'block',"border-right":"1px solid #e0e0e0"})
       });
        asideboxli.mouseleave(function(){
        asideboxdiv.css("display",'none');
    })*/
    //（方法二）
    let asideboxli = $(".aside-box>li");
    let asideboxdiv = $(".aside-box>li>div");
    asideboxli.mouseenter(function () {
        var idx = $(this).index();
        asideboxdiv.hide();
        asideboxdiv.eq(idx).show();
    });
    asideboxli.mouseleave(function(){
        asideboxdiv.hide();
    })


    //封装主体
    function subject(all,part){
        all.mouseenter(function () {
            var idx = $(this).index();
            all.removeClass('hot1').eq(idx).addClass('hot1');
            part.removeClass('active').eq(idx).addClass('active');
        });
    }
    //家电
    let jiadianright = $(".jiadian-right>li");
    let jiadianbottom2wai = $(".jiadianbottom2wai:first").children();
    subject(jiadianright,jiadianbottom2wai);


    //智能
    let zhinengright = $(".zhineng-right>li");
    let jiadianbottom2waiwai2 = $(".jiadianbottom2wai-wai2>ul");
    subject(zhinengright,jiadianbottom2waiwai2);

    //搭配
    let dapeiright = $(".dapei-right>li");
    let jiadianbottom2waiwai3 = $(".jiadianbottom2wai-wai3>ul");
    subject(dapeiright,jiadianbottom2waiwai3);

    //配件
    let peijianright = $(".peijian-right>li");
    let jiadianbottom2waiwai4 = $(".jiadianbottom2wai-wai4>ul");
    subject(peijianright,jiadianbottom2waiwai4);

    //周边
    let zhoubianright = $(".zhoubian-right>li");
    let jiadianbottom2waiwai5 = $(".jiadianbottom2wai-wai5>ul");
    subject(zhoubianright,jiadianbottom2waiwai5);

 //函数封装（小轮播图）
     function river(Larrow,Rarrow,btnslists,contenthuac){
    let m1 = 0;
    let n1 = 0;
    function runs(type = "Rarrow") {
        if (type == "Rarrow") {
            m1 -= 296;
            if (m1 <= (-296) * 2) {
                m1 = -296 * 2;
            }
            n1++;
            if (n1 > 2) {
                n1 = 2;
            }
            contenthuac.style.marginLeft = m1 + "px";
            btnslists.forEach((item) => {
                item.classList.remove("active")
            })
            btnslists[n1].classList.add("active");
        }
        if (type == "Larrow") {
            m1 += 296;
            if (m1 > 0) {
                m1 = 0;
            }
            n1--;
            if (n1 < 0) {
                n1 = 0;
            }
            contenthuac.style.marginLeft = m1 + "px";
            btnslists.forEach((item) => {
                item.classList.remove("active")
            })
            btnslists[n1].classList.add("active");
        }
    }

    Rarrow.onclick = function () {
        runs();
    }
    Larrow.onclick = function () {
        runs("Larrow")
    }
    btnslists.forEach((item, index) => {
        item.onclick = function () {
            if (index > n1) {
                n1 = index - 1;
                m1 = -296 * (index - 1)
                runs();
            } else {
                n1 = index + 1;
                m1 = -296 * (index + 1)
                runs("Larrow")
            }
        }
    })
    }
    //内容1
     let Larrow = document.querySelectorAll(".content>.con>.box>.Larrow")[0];
     let Rarrow = document.querySelectorAll(".content>.con>.box>.Rarrow")[0];
     let btnslists = document.querySelectorAll(".btns>div");
     let contenthuac = document.querySelector(".contenthuac");
    river(Larrow,Rarrow,btnslists,contenthuac);
    //内容2
    let Larrow1 = document.querySelectorAll(".content>.con>.box>.Larrow1")[0];
    let Rarrow1 = document.querySelectorAll(".content>.con>.box>.Rarrow1")[0];
    let contenthuac11 = document.querySelectorAll(".contenthuac1")[0];
    let btnslists1 = document.querySelectorAll(".btns3>div");
    river(Larrow1,Rarrow1,btnslists1,contenthuac11);
    //内容3
    let Larrow2 = document.querySelectorAll(".content>.con>.box>.Larrow1")[1];
     let Rarrow2 = document.querySelectorAll(".content>.con>.box>.Rarrow1")[1];
     let contenthuac12 = document.querySelectorAll(".contenthuac1")[1];
     let btnslists2 = document.querySelectorAll(".btns4>div");
     river(Larrow2,Rarrow2,btnslists2,contenthuac12);
    //内容4
     let Larrow3 = document.querySelectorAll(".content>.con>.box>.Larrow1")[2];
     let Rarrow3 = document.querySelectorAll(".content>.con>.box>.Rarrow1")[2];
     let contenthuac13 = document.querySelectorAll(".contenthuac1")[2];
     let btnslists3 = document.querySelectorAll(".btns5>div");
     river(Larrow3,Rarrow3,btnslists3,contenthuac13);

     //函数分装（banner）
     function figure(son,btnsLi,banner,prev,next){
         let t=setInterval(Rmove,3000);   //定时器
         let index=0;
         let status=true;
         //右移
         function Rmove(){
             index++;
             if(index==son.length){
                 index=0;
             }
             btnsLi.removeClass('active').eq(index).addClass('active');
             son.removeClass('active').eq(index).addClass('active');
         };
         //左移
         function Lmove(){
             index--;
             if(index<0){
                 index=son.length-1;
             }
             btnsLi.removeClass('active').eq(index).addClass('active');
             son.removeClass('active').eq(index).addClass('active');
         };
         btnsLi.click(function(){
             let index=$(this).index();
             btnsLi.removeClass('active').eq(index).addClass('active');
             son.removeClass('active').eq(index).addClass('active');
         });

         banner.mouseenter(function(event) {
             clearInterval(t);
         });
         banner.mouseleave(function(event) {
             t=setInterval(Rmove,2000);
         });
         next.click(function() {
             Lmove();
         });
         prev.click(function(){
             Rmove();
         });
     }
 //轮播图
     let listtu = $(".img-box>li>a");   //获取a》图片
     let banner = $(".banner");         //获取大banner
     let bannergouL = $(".banner-gouL");    //获取左、后退箭头
     let bannergouR = $(".banner-gouR");     //获取右、前进箭头
     let bannerbnt = $(".banner-bnt>li");   //获取滚动的按钮
    figure(listtu,bannerbnt,banner,bannergouL,bannergouR);

    for (let i = 0; i < listtu.length; i++) {
        bannerbnt.onmouseover = function () {
         bannerbnt.forEach((item) => {
                item.className = " ";
            })
            bannerbnt[i].className = "active";

            index = i;
            listtu.forEach((item) => {
                item.className = " ";
            })
            listtu[index].className = "active";
        }
    }


    //van下来图
    let van = document.querySelectorAll(".van");

    let search3li = document.querySelectorAll(".search3>li");
    let search3 = document.querySelector(".search3");
    console.log(search3);
    let vanbig = document.querySelectorAll(".vanbig");
    console.log(vanbig);
    search3.onmouseenter = function () {
        van.forEach((item) => {
            item.classList.add("transition");
        })
    }


    search3li.forEach((item, index) => {
        item.onmouseover = function () {
            if (index > 7) {
                return;
            }
            van.forEach((item) => {

                item.style.zIndex = 0;
            })
            van[index].classList.add("active");
            vanbig[index].style = `border-top:1px solid #e0e0e0;
        box-shadow:0 1px 1px 1px rgba(0,0,0,0.2);z-index:30`

        }
        item.onmouseout = function () {
            if (index > 7) {
                return;
            }
            van[index].classList.remove("active");
            van.forEach((item) => {
                item.classList.remove("transition");

            })
            van[index].classList.add("transition");
            vanbig[index].style = `border-top:0px;box-shadow:none`


        }
    })
}