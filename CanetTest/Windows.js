
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////										/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////										/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////		게임창 관련 함수			/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////										/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////										/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//	시작 시 뜰 화면을 표시
////////////////////////////////////////////////////////////////////////
var StartWin = function ( wrapper, stageW, stageH  ){			// stage로부터 stage와 stage의 높이 stage의 넓이를 받는다

	this.wrapper=wrapper;
	this.stage;
	this.width=stageW;
	this.height=stageH;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/start.mp3');

		this.audio.init();

		this.stage = document.createElement("div");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";

		this.stage.style.backgroundImage="url('../images/space1.jpg')";							//	배경이미지 소스

		this.wrapper.appendChild(this.stage);

	}

}


////////////////////////////////////////////////////////////////////////
//	공지사항 띄우는 화면
////////////////////////////////////////////////////////////////////////


var noticeWin = function( stage, stageW, stageH ){

	this.stage=stage;
	this.div_wrapper;
	this.width=stageW;
	this.height=stageH;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/notice.mp3');

		this.audio.init();

		this.div_wrapper = document.createElement("div");

		this.div_wrapper.style.width=this.width+"px";
		this.div_wrapper.style.height=this.height+"px";
		this.div_wrapper.style.margin=0+"px";
		this.div_wrapper.style.position="absolute";

		this.div_wrapper.style.backgroundImage="url('../images/f1.png')";

		this.stage.appendChild(this.div_wrapper);
	
	}

}


////////////////////////////////////////////////////////////////////////
//	회원가입, 로그인 화면
////////////////////////////////////////////////////////////////////////

var logIn = function( stage, stageW, stageH ){

	this.stage=stage;
	this.div_wrapper;
	this.width=stageW;
	this.height=stageH;
	this.audio;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/logIn.mp3');

		this.audio.init();

		this.div_wrapper = document.createElement("div");

		this.div_wrapper.style.width=this.width+"px";
		this.div_wrapper.style.height=this.height+"px";
		this.div_wrapper.style.margin=0+"px";
		this.div_wrapper.style.position="absolute";

		this.div_wrapper.style.backgroundImage="url('../images/f1.png')";

		this.stage.appendChild(this.div_wrapper);
	
	}

}



////////////////////////////////////////////////////////////////////////
//	플레이어 선택 화면
////////////////////////////////////////////////////////////////////////
var selectMode = function( stage, stageW, stageH ){			// stage로부터 stage와 stage의 높이 stage의 넓이를 받는다

	this.div_wrapper;
	this.div_up;
	this.div_mul;
	this.div_sing;
	this.div_down;
	this.img_mul;									//	멀티플레이 버튼에 들어갈 이미지
	this.img_sing;									//	싱글플레이 버튼에 들어갈 이미지
	this.img_bg;										//	배경에 넣을 이미지
	this.stage=stage;
	this.width=stageW;
	this.height=stageH;
	this.bt_mul;										//	멀티플레이 선택 버튼
	this.bt_sing;										//	싱글플레이 선택 버튼
	

	this.init = function(){

		this.audio = new audioCtrl('../music/selectMode.mp3');

		this.audio.init();

		this.div_wrapper = document.createElement("div");				//	버튼들을 넣을 div
		this.div_down = document.createElement("div");
		this.div_mul = document.createElement("div");
		this.div_sing = document.createElement("div");

		this.img_mul = document.createElement("img");			
		this.img_sing = document.createElement("img");		
		this.img_bg = document.createElement("img");			

		this.bt_mul = document.createElement("button");		
		this.bt_sing = document.createElement("button");	
	
	

		this.div_wrapper.style.width=this.width+"px";									//	div_wrapper의 style 정의
		this.div_wrapper.style.height=this.height+"px";
		this.div_wrapper.style.margin="0px";
		this.div_wrapper.style.position="absolute";

		this.div_mul.style.width=this.width/2+"px";									//	div_mul의 style 정의
		this.div_mul.style.height=this.height*3/4+"px";
		this.div_mul.style.textAlign="center";
		this.div_mul.style.float="left";

		this.div_sing.style.width=this.width/2+"px";									//	div_sing의 style 정의
		this.div_sing.style.height=this.height*3/4+"px";
		this.div_sing.style.textAlign="center";
		this.div_sing.style.float="left";

		this.bt_mul.style.width=450+"px";									//	멀티플레이 버튼 style 정의
		this.bt_mul.style.height=450+"px";
		this.bt_mul.innerText="P1 vs P2";
		this.bt_mul.style.top=20+"px";
		this.bt_mul.style.fontSize="80pt";
		this.bt_mul.style.marginTop=30+"px";

		this.bt_sing.style.width=450+"px";									//	싱글플레이 버튼 style 정의
		this.bt_sing.style.height=450+"px";
		this.bt_sing.innerText="vs COM";
		this.bt_sing.style.fontSize="80pt";
		this.bt_sing.style.marginTop=30+"px";

		this.div_down.style.width=this.width+"px";									//	div_down의 style 정의
		this.div_down.style.height=this.height/4+"px";
		this.div_down.style.margin="auto";
		this.div_down.innerText="모드를 선택해 주세요";
		this.div_down.style.textAlign="center";
		this.div_down.style.fontSize="50pt";
		this.div_down.style.float="left";

		this.div_mul.appendChild(this.bt_mul);									//	버튼들을 div에 갖다 붙임
		this.div_sing.appendChild(this.bt_sing);

		this.div_wrapper.appendChild(this.div_mul);
		this.div_wrapper.appendChild(this.div_sing);
		this.div_wrapper.appendChild(this.div_down);

		this.stage.appendChild(this.div_wrapper);


	}


}


var selectContents = function(stage, stageW, stageH){

	this.stage=stage;
	this.width=stageW;
	this.height=stageH;

	this.div_wrapper;

	this.div_showP1;
	this.div_showP2;
	this.div_showVs;
	this.div_selTank;											//	탱크들을 선택하는 곳이 담긴 div
	this.div_down;
	this.div_selMap;											//	맵을 고르는 창을 담을 div
	this.audio;

	this.div_showMargin=150;
	this.bt_tankLen=150;
	
	this.bt_tankArr = new Array(6);												//	탱크 선택 버튼


	this.init = function(){

		this.audio = new audioCtrl('../music/selectContents.mp3');

		this.audio.init();

		this.div_wrapper = document.createElement("div");

		this.div_showP1 = document.createElement("div");
		this.div_showP2 = document.createElement("div");
		this.div_showVs = document.createElement("div");

		this.div_tankP1 = document.createElement("div");
		this.div_tankSkillP1 = document.createElement("div");
		this.img_tankP1 = document.createElement("img");

		this.div_tankP2 = document.createElement("div");
		this.div_tankSkillP2 = document.createElement("div");
		this.img_tankP2 = document.createElement("img");

		this.div_selTank = document.createElement("div");
		this.div_down = document.createElement("div");
		this.div_selMap = document.createElement("div");

		//this.div_showP1.style.border="1px solid red";

		this.div_wrapper.style.width=this.width+"px";									//	div_wrapper의 style 정의
		this.div_wrapper.style.height=this.height+"px";
		this.div_wrapper.style.margin="0px";
		this.div_wrapper.style.position="absolute";


		this.div_showP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showP1.style.height=this.height/2+"px";
		this.div_showP1.style.textAlign="right";
		this.div_showP1.style.float="left";
		this.div_showP1.style.marginTop=this.div_showMargin/2+"px";

		this.div_tankP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankP1.style.height=this.height/4+"px";
		this.div_tankP1.style.textAlign="right";
		this.div_tankP1.style.float="left";

		this.div_tankSkillP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankSkillP1.style.height=this.height/4+"px";
		this.div_tankSkillP1.style.textAlign="right";
		this.div_tankSkillP1.style.float="left";

		this.img_tankP1.style.width=200+"px";
		this.img_tankP1.style.height=200+"px";
		this.img_tankP1.src="../images/enemyship.png";
		this.img_tankP1.style.border="1px solid red";


		this.div_showP2.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showP2.style.height=this.height/2+"px";
		this.div_showP2.style.textAlign="right";
		this.div_showP2.style.float="left";
		this.div_showP2.style.marginTop=this.div_showMargin/2+"px";

		this.div_tankP2.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankP2.style.height=this.height/4+"px";
		this.div_tankP2.style.textAlign="left";
		this.div_tankP2.style.float="left";

		this.div_tankSkillP2.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankSkillP2.style.height=this.height/4+"px";
		this.div_tankSkillP2.style.textAlign="left";
		this.div_tankSkillP2.style.float="left";

		this.img_tankP2.style.width=200+"px";
		this.img_tankP2.style.height=200+"px";
		this.img_tankP2.src="../images/enemyship.png";
		this.img_tankP2.style.border="1px solid red";


		this.div_showVs.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showVs.style.height=this.height/4+"px";
		this.div_showVs.style.textAlign="center";
		this.div_showVs.innerText="VS"
		this.div_showVs.style.fontSize="100pt";
		this.div_showVs.style.float="left";
		//this.div_showVs.style.margin="auto";
		this.div_showVs.style.marginTop=this.div_showMargin+"px";
		//this.div_showVs.style.border="1px solid red";

		this.div_down.style.width=this.width+"px";
		this.div_down.style.height=this.height/2+"px";
		this.div_down.style.float="left";
		this.div_down.style.textAlign="center";

		this.div_selMap.style.width=this.width/3+"px";
		this.div_selMap.style.height=this.height/3+"px";
		this.div_selMap.style.border="30px solid red";
		//this.div_selMap.style.display="inline-block";
		this.div_selMap.style.float="left";

		this.div_selTank.style.width=this.width/3+50+"px";
		this.div_selTank.style.height=this.height/3+"px";
		this.div_selTank.style.border="30px solid red";
		this.div_selTank.style.display="inline-block";

		for( var a=0 ; a<this.bt_tankArr.length ; a++ ){

			this.bt_tankArr[a] = document.createElement("button");

			this.bt_tankArr[a].style.width=this.bt_tankLen+"px";
			this.bt_tankArr[a].style.height=this.bt_tankLen+"px";
			this.bt_tankArr[a].style.float="left";
			this.bt_tankArr[a].innerText="난탱크"+a;

			this.div_selTank.appendChild(this.bt_tankArr[a]);

		}

		this.div_tankP1.appendChild(this.img_tankP1);
		this.div_tankP2.appendChild(this.img_tankP2);

		this.div_showP1.appendChild(this.div_tankP1);
		this.div_showP1.appendChild(this.div_tankSkillP1);
		this.div_showP2.appendChild(this.div_tankP2);
		this.div_showP2.appendChild(this.div_tankSkillP2);

		this.div_down.appendChild(this.div_selMap);
		this.div_down.appendChild(this.div_selTank);

		this.div_wrapper.appendChild(this.div_showP1);
		this.div_wrapper.appendChild(this.div_showVs);
		this.div_wrapper.appendChild(this.div_showP2);
		this.div_wrapper.appendChild(this.div_down);

		this.stage.appendChild(this.div_wrapper);


	
	}

}


var itemShop = function( stage, stageW, stageH ){

	this.stage=stage;
	this.div_wrapper;
	this.width=stageW;
	this.height=stageH;
	this.audio;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/shop.mp3');

		this.audio.init();

		this.div_wrapper = document.createElement("div");

		this.div_wrapper.style.width=this.width+"px";
		this.div_wrapper.style.height=this.height+"px";
		this.div_wrapper.style.margin=0+"px";
		this.div_wrapper.style.position="absolute";

		this.div_wrapper.style.backgroundImage="url('../images/f1.png')";

		this.stage.appendChild(this.div_wrapper);
	
	}

}


var loadGame = function( stage, stageW, stageH ){

	this.stage=stage;
	this.div_wrapper;
	this.width=stageW;
	this.height=stageH;

	this.init = function(){

		this.div_wrapper = document.createElement("div");

		this.div_wrapper.style.width=this.width+"px";
		this.div_wrapper.style.height=this.height+"px";
		this.div_wrapper.style.margin=0+"px";
		this.div_wrapper.style.position="absolute";

		this.div_wrapper.style.backgroundImage="url('../images/f1.png')";

		this.stage.appendChild(this.div_wrapper);
	
	}

}


var gameEnd = function( stage, stageW, stageH ){

	this.stage=stage;
	this.div_wrapper;
	this.width=stageW;
	this.height=stageH;
	this.audio;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/selectContents.mp3');

		this.audio.init();

		this.div_wrapper = document.createElement("div");

		this.div_wrapper.style.width=this.width+"px";
		this.div_wrapper.style.height=this.height+"px";
		this.div_wrapper.style.margin=0+"px";
		this.div_wrapper.style.position="absolute";

		this.div_wrapper.style.backgroundImage="url('../images/f1.png')";

		this.stage.appendChild(this.div_wrapper);
	
	}

}


var rankingWin = function( stage, stageW, stageH ){

	this.stage=stage;
	this.div_wrapper;
	this.width=stageW;
	this.height=stageH;
	this.audio;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/selectContents.mp3');

		this.audio.init();

		this.div_wrapper = document.createElement("div");

		this.div_wrapper.style.width=this.width+"px";
		this.div_wrapper.style.height=this.height+"px";
		this.div_wrapper.style.margin=0+"px";
		this.div_wrapper.style.position="absolute";

		this.div_wrapper.style.backgroundImage="url('../images/f1.png')";

		this.stage.appendChild(this.div_wrapper);
	
	}

}
