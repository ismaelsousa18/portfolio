var list=$(".technologies .left .list"),items=$(".technologies .left .list .item"),visible=$(".technologies .left .list .item.visible");const increment=240,total=600;var atual=0;$(".technologies .left .arrow-previous").on("click",function(){atual>0&&(atual-=240),$(list).scrollTop(atual)}),$(".technologies .left .arrow-next").on("click",function(){(atual+=240)>=600&&(atual-=240),$(list).scrollTop(atual)});