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


var bulletMove = function(){						//	총알의 움직임 로직

}


var fireBullet = function(){						//	총 쏘기

}


var getDamage = function(){					//	데미지 효과

}


var hitImage = function(){						// 총알 맞을 때 나타나는 효과

}


var dropItem = function(){						//	아이템 떨어뜨리기

}


var playerLoc = function(){						//	플레이어 초기 위치

}


function hitTest(me, target) {
 
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
