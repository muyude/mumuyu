

'use strict';
 $(window).scroll(function(event){
      var stp =  $(window).scrollTop();
        console.log(stp);
        if(stp > 405){
          $(".nav-navbar-103").addClass("nav-navbar-103forjs")
        }
        else{
          $(".nav-navbar-103").removeClass("nav-navbar-103forjs")
        }
    });
$(function(){
   /*下拉框绑定的hover事件*/
   function changecontent(n) {
		var i;
		for(i = 0;i < 5;i++){
			if(i != n){
				console.log("这是第"+i+"个")
				$(".dp-js111>div.drop-content").eq(i).hide();
			  $(".dp-js111>div.drop-content").eq(i).animate({opacity :'0'},60);	 
			}
	    }
	    $(".dp-js111>div.drop-content").eq(n).show();	
	    setTimeout(function(){
	        $(".dp-js111>div.drop-content").eq(n).animate({opacity :'1'},100);	  	
		},200)
	}	
	/*下拉框项目内容icon图标的动画*/
	    
		$(".bactbox").hover(function(){
			var obj = $(this.getElementsByTagName("i"));
			
		
			obj.css("transition","all 0s ease 0s");
				console.log(obj.css("transition"));
			obj.css("color","#6a6a6e");
			console.log(obj.css("color"));
			setTimeout(function(){
		    obj.css("transition","1s");
			obj.css("color","#186afe");
			},22)
			obj.css("transition","0");
			/*obj.css("transition","4s");
			obj.css("color","#186aff");
			obj.css("transition","0");*/
		},function(){
			var obj = $(this.getElementsByTagName("i"));
			obj.css("transition","0");
			obj.css("color","#186aff");
		});
	/*图片居中*/
	   /* var i = 0;
	     $(".cot-pb").hover(
	     	
	     	function(){
	     		i = 0;
	     		centeredStart (this)
	     	},function(){
	     		centeredStart (this)
	     		i = 0;
	     	}
	     );
	     
	     function centeredStart (obj) {
	     	 
	     	setTimeout(
	     		function(){
	     		listeners(obj);
	     		if(i < 300) {centeredStart (obj);}
	     		console.log(i);
	     	   },1
	     	)  
	     	i++;
	     }
        function listeners(thi) {
	     	var obj = $(thi.getElementsByTagName("img"));
	     	var leftpx;
	     	var n = parseInt(obj.css("width"));
	     	var m = parseInt($(thi).css("width"));	     	    
	     	var leftpx = m-n;
	     	var leftpx = leftpx / 2;
	     	obj.css("margin-left",leftpx);
	     }*/
    /*整体毛玻璃效果*/
   $(".nav-navbar-103").hover(
   	function(){
   		$(".mn").addClass("blurs");
   	},function(){
   		$(".mn").removeClass("blurs");
   	}
   )
        
})
