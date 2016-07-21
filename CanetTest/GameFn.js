var tankCom = function(){

}


var miniMap = function(){						//	게임 내의 미니맵

}


var gameInfo = function(){					//	게임 맵 이름, 음악 이름

}


var tankSkill = function(){						//	탱크의 능력치를 보여주는 창

}


var hpGauge = function(){						//	체력게이지

}


var miniHpGauge = function(){					//	탱크에 붙는 체력게이지

}


var bulletGauge = function(){						//	총알 쏘는 힘 게이지

}


var moveGauge = function(){						//	이동 가능 거리 게이지

}


var bulletDegGauge = function(){						//	총알 발사 각도 창

}


var windType = function(){						//	바람 방향

}


var windGauge = function(){						//	바람 게이지 창

}


var TimerGauge = function(){						//	제한 시간 표시 창

}


var tankMove = function( speed ){						//	탱크 이동

	//console.log("스피드카운트"+speedCount);
	this.speed=speed;
		//움직임 효과
	tankP1.velX=this.speed;
		
}


var fireBullet = function(){

	var bulletMove = new bulletMoving( map, tankP1.x, tankP1.y, gravity, shotPw );

	bulletMove.init();

}


var bulletMoving = function( map, x, y, gravity, shotPw ){						//	탄 효과

	this.map=map;
	this.img;
	this.x=x+55;
	this.y=y+10;
	this.st;								//	나의 셋타임 아웃을 가리킴
	this.shotPw=5;					
	this.velX=this.shotPw;						//	몇 픽셀씩 움질일지 결정
	this.velY=-this.shotPw;
	this.gravity=gravity;
	
	//	객체안에 들어있는 함수는 메서드(method)라 한다
	//	method(방법) : 객체의 동작 방식을 결정하는 로직이 들어있기 때문에
	this.init=function(){

		this.img =  document.createElement("img");
		this.img.src="../images/bullet.png";
		this.img.style.position="absolute";
		this.img.style.width=50+"px";
		this.img.style.height=25+"px";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

/*

		if(key==39){

			this.x=x+55;
			this.y=y+10;
			this.velX=this.shotPower;
			this.velY=-this.shotPower;
			tankP1.img.src="../images/tankRight.png";

		}else if(key==37){

			this.x=x;
			this.y=y;
			this.velX=-this.shotPower;
			this.velY=-this.shotPower;
			tankP1.img.src="../images/tankLeft.png";

		}
*/

		this.map.appendChild(this.img);

		this.move();

	}



	this.move=function(){


		var me = this;


		this.x+=this.velX;
		this.velY+=this.gravity;
		this.y+=this.velY;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		//	stage를 벗어나면, 총알의 setTimeout은 멈춰야한다
		console.log( parseInt( this.map.style.width ) );
		
		this.st=setTimeout(function(){me.move();}, 10);		// setTimeout이 clearTimeout보다 먼저 호출되어야 한다.
		
/*

		//	적군과 부딪히면
		for( var a=0 ; a<enemyArray.length ; a++ ){

			if(enemyArray[a]!=undefined){							//	배열에 존재하는 img에 대해서만 (undefined가 아닌 경우만)
				
				var result = hitTest(this.img, enemyArray[a].img);

				if( result ){

					//	총알 죽이고 총알의 setTimeout도 중지
					this.stage.removeChild(this.img);
					clearTimeout(this.st);

					//	적군 죽이고
					this.stage.removeChild(enemyArray[a].img);			//	이미지를 먼저 없애고 delete를 맨마지막에 쓴다.
					clearTimeout(enemyArray[a].st);
					delete enemyArray[a];				//	배열에서 제거하고 이자리에는 Undefined 가 남음

				}

			}

		}

*/
			
		// 부딪히지 않고 화면 밖으로 나가면
		if( parseInt( this.img.style.left ) > parseInt( this.map.style.width ) ){

			alert("저 자살할게요");

			clearTimeout(this.st);
			this.map.removeChild(this.img);
			return;

		}

	}

}


var getDamage = function(){					//	데미지 효과

}


var hitImage = function(){						// 총알 맞을 때 나타나는 효과

}


var dropItem = function(){						//	아이템 떨어뜨리기

}


var playerLoc = function(){						//	플레이어 초기 위치

}


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

}
