
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////탱크 동작 관련 함수///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tankP1 = function(map, x, y, wid, hei, velX, velY, gravity){

	this.img;
	this.src="../images/tankRight.png";
	this.width=wid;
	this.height=hei;
	this.x=x;
	this.y=y;
	this.velX=velX;
	this.velY=velY;
	this.gravity=gravity;

	this.map=map;
	
	this.damage1=150;
	this.damage2=300;
	this.distance=50;
	this.fireAngle=40;
	this.defense=20;
	this.fireImg;
	this.hitImg;
	this.hp=1200;

	this.init = function(){

		this.img = document.createElement("img");

		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
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


		if(tankP1.velY>0){
			
			this.falling=true;

		}

		console.log(this.img.style.top);

		for(var i=0;i<blockArr.length;i++){					//	히트테스트

			var result=hitTest(this.img, blockArr[i].img );

			if(result){

				console.log("나 밟았어");

				this.velY=0; //밟으면 떨어지지 않게 velY값을 0으로 준다!!

				this.falling=false;

			}

		}


		setTimeout(function(){

			me.move();
		
		}, 10);

	}

}






