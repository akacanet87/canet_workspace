
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////기타 함수/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var tankCom = function(){

}


var gameInfo = function(){					//	게임 맵 이름, 음악 이름

}


var tankSkillWin = function(){						//	탱크의 능력치를 보여주는 창

}

var helicopter = function( map ){

	this.dropItemX=parseInt(Math.random()*3000);
	this.dropItemY=0;
	this.velY=1;
	this.velX=0;
	this.width=100;
	this.height=50;

	this.init = function(){

		this.img = document.createElement("img");

		this.img.src="../images/effect/helicopter.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.dropItemX+"px";
		this.img.style.top=this.y+"px";
		
		this.map.appendChild(this.img);

		this.move();

	}

	this.move = function(){

		var me=this;

		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
		this.velY+=this.gravity;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";


		if(tankFn.velY>0){
			
			this.falling=true;

		}

		//console.log(this.img.style.top);

		for(var i=0;i<blockArr.length;i++){					//	히트테스트

			for(var j=0;j<blockArr[i].length;j++){

				if(blockArr[i][j]!=undefined){

					var result=hitTest(this.img, blockArr[i][j].img );

					if(result){

						//console.log("나 밟았어");

						this.velY=0; //밟으면 떨어지지 않게 velY값을 0으로 준다!!

						this.falling=false;

						break;

					}

				}

			}

		}

		this.st=setTimeout(function(){

			me.move();
		
		}, 10);

	}

}

}


var dropItem = function( map, gravity ){						//	아이템 떨어뜨리기

	this.map=map;
	this.gravity=gravity;

	

	



var hitTest = function(me, target) {
 
 //두물체간 충돌 여부 판단 
	 me_x= parseInt(me.style.left);			// div이든 image 이든 style시트를 갖고 잇는 모든 것
	 me_y= parseInt(me.style.top);
	 me_width=parseInt(me.style.width);
	 me_height=parseInt(me.style.height);
	 
	 target_x= parseInt(target.style.left);
	 target_y= parseInt(target.style.top);
	 target_width=parseInt(target.style.width);
	 target_height=parseInt(target.style.height);
	 
	 var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	 var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	 
	 var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	 var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	  
	 return (result1 || result2) && (result3 || result4);
}



var audioCtrl = function( src ){

	this.src=src;
	this.audio = new Audio(this.src);
	/*
	
	this.audio.addEventListener('ended',function(){
		
		me.audio.currentTime=0;
		me.audio.play();
		
	},false);

	*/

	//this.audio.loop="loop";
	this.init = function(){

		this.audio.play();
		this.audio.loop="loop";	
		this.audio.volume=0.1;

	}

	this.clear = function(){

		this.audio.pause();

	}

}


var fireAngle = function( bullet, cal ){

	this.rad=0.9;

	this.cal=cal;

	this.angleY+=cal;

	this.angleX=parseFloat(Math.sqrt(this.rad*this.rad-this.angleY*this.angleY));

	if( this.angleY >= 0 && this.angleX >= 0 ){

		this.angleX=this.angleX;
		this.angleY=this.angleY;

	}else if( this.angleX >= this.rad ){

		this.angleX=this.rad;
		this.angleY=parseFloat(Math.sqrt(this.rad*this.rad-this.angleX*this.angleX))

	}else if( this.angleY >= this.rad ){

		this.angleY=this.rad;
		this.angleX=parseFloat(Math.sqrt(this.rad*this.rad-this.angleY*this.angleY))

	}else if( this.angleX <= 0 ){

		this.angleX=0;
		this.angleY=parseFloat(Math.sqrt(this.rad*this.rad-this.angleX*this.angleX))

	}else if( this.angleY <= 0 ){

		this.angleY=0;
		this.angleX=parseFloat(Math.sqrt(this.rad*this.rad-this.angleY*this.angleY))

	}

	console.log( this.angleX+" , "+this.angleY);


	bullet.angleY=this.angleY;

	bullet.angleX=this.angleX;

	console.log(bullet.angleX+" , "+bullet.angleY);

}
