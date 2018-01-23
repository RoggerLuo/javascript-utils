<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Alice</title>
 	 <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
	 <script src="/assets/js/jquery-2.1.1.min.js"></script>
	<script src="/assets/js/get_level2.js"></script>

	 <script>
		var level=1;
		var level1='';
		var level2='';
		var level3='';	
	 	var flag_repeat=0;		
		document.onkeydown = function(evt){

        /*按住contrl或command键*/
		if ((evt.ctrlKey||evt.metaKey)&&(evt.keyCode==83||evt.keyCode==13)){
		   	evt.returnValue=false;
			level=level-1;
			var input=document.getElementById('third_level');
			input.blur(); //让abc获取焦点
			input.contentEditable=false;			
		} 

		if(evt.keyCode==75){

		}

		if( (evt.keyCode==83||evt.keyCode==13) && !evt.metaKey){
		  	if(level==2){
		   		evt.returnValue=false;
			   	level=3;
				
				var input=document.getElementById('third_level');
				input.contentEditable=true;
				input.focus(); //让abc获取焦点
				var v=input.innerHTML;
				input.innerHTML='';
								input.innerHTML=v;

		   	}	

		   	if(level==1){
		   		level=2;
		   	}

		   	if(level==3){

		   	}
		}



			if (evt.keyCode==49){
			   	evt.returnValue=false;
				$('#a1').tab('show');
			} //if

			if (evt.keyCode==50){
			   	evt.returnValue=false;
				$('#a2').tab('show');
			} //if

			if (evt.keyCode==51){
			   	evt.returnValue=false;
				$('#a3').tab('show');
			} //if

			if(evt.keyCode>=65 && evt.keyCode<=90 ){
				
				$(".active .second_level div").each(function(){
  					$(this).removeClass("choosed");
  				});

				if(evt.keyCode==82){

					$(".active .second_level .red:eq(0)").addClass("choosed");

				}

				if(flag_repeat==evt.keyCode){
					alert('repeated');
				}else{
					flag_repeat=evt.keyCode;
				}
			}
/*
	可以实现输入一连串的值，然后判断输入的是什么，不需要文字框

			if (evt.keyCode==65){
			   	evt.returnValue=false;
				
				flag_test=1;
			} //if
			
			if (evt.keyCode==66){
			   	evt.returnValue=false;
				
				if(flag_test==1){
					flag_test=2;
				}else{flag_test=0;}
			} //if

			if (evt.keyCode==67){
			   	evt.returnValue=false;
				
				if(flag_test==2){
					flag_test=3;
				}else{flag_test=0;}
			} //if

			if (evt.keyCode==68){
			   	evt.returnValue=false;
				
				if(flag_test==3){
					flag_test=0;
					alert('abcd');
				}else{flag_test=0;}
			} //if

*/	


		}//fuc onkey down
/*
		$(".active .second_level .red").each(function(){
  			$(this).
  		});
*/



//用坐标的思维来做，每个层级一个全局变量用来储存active的位置
//enter 是进入，进入下一个层级，然后就所有的按键函数 都要加一个 对“层级”变量的 判断
	</script>
	<style>
		html,body{ height: 100%;width: 100%;}


		.tab_div,.tab-content,.tab-pane{
			height:100%;
		}
		.tab-content{
			padding-top: 5px;

		}

		.second_level{
			width:20%;
			background-color: #ccc;
			height:100%;
			float: left;
		}

		.second_level div{
			background-color: #000;
			height:30px;
			color: white;
		}
		.second_level .red{
			background-color: red;
			color: white;
		}
		.second_level .choosed{
			padding-left: 40px;
			font-weight: bold;
		}
		.third_level{
			height:100%;
			margin-left: 20%;
		}
	</style>
</head>

<body>

    <div class="span12">
   	    <h3 class="text-error">Alice</h3>
   	</div>
            
    <input type="button" onclick="test_focus();" value="test_focus" >
            

    <div class="span12 tab_div" >
       	<ul class="nav-tabs nav" id="tabs">
            <li><a id="a1" href="#tabs-1">tabs-1</a></li>
            <li><a id="a2" href="#tabs-2">tabs-2</a></li>
            <li><a id="a3" href="#tabs-3">tabs-3</a></li>
        </ul>

    

        <div class="tab-content" >
                    

            <div class="tab-pane active">
                <p>欢迎。</p>
            </div>

             <!-- tab content 1 start -->
            <div class="tab-pane" id="tabs-1" >

                <div class="second_level">
                    <div id="second_level_1">asdf</div>
                    <input type="hidden" id="hidden_1">
                </div>

                <div class="third_level"  id="third_level" contenteditable="true">
					<p>不知出于什么原因，Google Play商店日前下架了备受欢迎的Nexus 7灰色保护套，而粉红色保护套则只面向非美国地区出售。对于美国用户来说，现在能买的Nexus 7保护套只有淡蓝色一种。 谷歌并未说明灰色保护套是否会永久告别美国用户，不过在华硕的官网上，仍可以选购Nexus 7保护套的六种配色，包括黑、绿、粉红、灰、橙、淡蓝。此外，在其它第三方网络零售商处，也可以照常购买。</p>
                </div>

            </div>
            <!-- tab content 1 end -->
                    



                    <div class="tab-pane" id="tabs-2">
                        <div class="second_level">
                    		
                    	</div>
                    	<div style="float:left;">
	                        <ul >
	                            <li><a href="#">从WordPress1看开源平台的发展</a></li>
	                            <li><a href="#">jQuery 2.0 beta发布，不再支持IE6/7/8，jQuery 1.8、1.9与2.0特性概览</a></li>
	                            <li><a href="#">一个简洁时尚的PSD登陆表单素材</a></li>
	                        </ul>
                    	</div>
                    </div>
                    <div class="tab-pane" id="tabs-3">
                    	<div class="second_level">
                    		
                    	</div>
                        <p>今天是联合国妇女权益和国际和平日，又称“三八妇女节”。谷歌公司决定在这个特殊的日子为女性带来不一样的一天。据悉，谷歌公司专门为此举办了为期24小时的直播演讲活动--Voices Global Conference。该大会由全球科技女性（Global Tech Women）主办。</p>
                    </div>
                </div>
         </div>
<script>
$( call_level2_server(1) );

function test_focus(){
	var input=document.getElementById('third_level');
	input.contentEditable=true;

	input.focus(); //让abc获取焦点
	var temp=input.innerHTML;
	input.innerHTML='';
	input.innerHTML=temp;


}
</script>


    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="/assets/js/bootstrap.min.js"></script>
</body>
</html>