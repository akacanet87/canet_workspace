
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
var startWin = function ( mask, gameWin, stageW, stageH  ){			// stage로부터 stage와 stage의 높이 stage의 넓이를 받는다

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;
	var me = this; 

	this.init = function(){

		this.audio = new audioCtrl('../music/start.mp3');

		this.audio.init();

		this.stage = document.createElement("div");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";

		this.stage.style.backgroundImage="url('../images/space1.jpg')";							//	배경이미지 소스

		this.gameWin.appendChild(this.stage);

		this.mask.appendChild(this.gameWin);

		this.mask.addEventListener("click", function(){

			me.clear();

			logIn.init();
		
		});

	}

	this.clear = function(){

		this.audio.clear();

		this.gameWin.removeChild(this.stage);

		this.mask.removeChild(this.gameWin);

	}

}


////////////////////////////////////////////////////////////////////////
//	회원가입, 로그인 화면
////////////////////////////////////////////////////////////////////////

var logIn = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.logInForm;
	this.idBox;
	this.pwBox;
	this.btLogIn;
	this.btSignIn;
	this.btSubmit;
	this.btExit;
	this.btBack;
	this.width=stageW;
	this.height=stageH;
	this.isFine=false;

	var me = this;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/logIn.mp3');

		this.audio.init();

		this.stage = document.createElement("div");
		this.logInForm = document.createElement("div");
		this.signInForm = document.createElement("div");
		this.idBox = document.createElement("input");
		this.pwBox = document.createElement("input");
		this.btLogIn = document.createElement("input");
		this.btSignIn = document.createElement("input");
		this.btSubmit = document.createElement("input");
		this.btBack = document.createElement("input");
		this.btExit = document.createElement("input");
		

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/f1.png')";

		this.logInForm.style.width=this.width/2+"px";
		this.logInForm.style.height=this.height/2+"px";
		this.logInForm.style.margin="auto";
		this.logInForm.style.position="absolute";
		this.logInForm.style.left=this.width/4+"px";
		this.logInForm.style.top=this.height/4+"px";
		this.logInForm.style.backgroundImage="url('../images/f3.jpg')";
		this.logInForm.style.textAlign="center";

		this.signInForm.style.width=this.width/2+"px";
		this.signInForm.style.height=this.height/2+"px";
		this.signInForm.style.margin="auto";
		this.signInForm.style.position="absolute";
		this.signInForm.style.left=this.width/4+"px";
		this.signInForm.style.top=this.height/4+"px";
		this.signInForm.style.backgroundImage="url('../images/f2.jpg')";
		this.signInForm.style.textAlign="center";

		this.idBox.type="text";
		this.idBox.style.width=400+"px";
		this.idBox.style.height=70+"px";
		this.idBox.style.position="absolute";
		this.idBox.style.margin="auto";
		this.idBox.style.left=this.width/6+"px";
		this.idBox.style.top=this.height/7+"px";
		this.idBox.style.fontSize="36pt";

		this.pwBox.type="password";
		this.pwBox.style.width=400+"px";
		this.pwBox.style.height=70+"px";
		this.pwBox.style.position="absolute";
		this.pwBox.style.margin="auto";
		this.pwBox.style.left=this.width/6+"px";
		this.pwBox.style.top=this.height/7+80+"px";
		this.pwBox.style.fontSize="36pt";

		this.btLogIn.type="button";
		this.btLogIn.style.width=200+"px";
		this.btLogIn.style.height=70+"px";
		this.btLogIn.style.position="absolute";
		this.btLogIn.style.margin="auto";
		this.btLogIn.style.left=40+"px";
		this.btLogIn.style.top=this.height/7+200+"px";
		this.btLogIn.value="LogIn";
		this.btLogIn.style.fontSize="36pt";

		this.btSignIn.type="button";
		this.btSignIn.style.width=200+"px";
		this.btSignIn.style.height=70+"px";
		this.btSignIn.style.position="absolute";
		this.btSignIn.style.margin="auto";
		this.btSignIn.style.left=400+"px";
		this.btSignIn.style.top=this.height/7+200+"px";
		this.btSignIn.value="SignIn";
		this.btSignIn.style.fontSize="36pt";

		this.btBack.type="button";
		this.btBack.style.width=200+"px";
		this.btBack.style.height=70+"px";
		this.btBack.style.position="absolute";
		this.btBack.style.margin="auto";
		this.btBack.style.left=40+"px";
		this.btBack.style.top=this.height/7+200+"px";
		this.btBack.value="Back";
		this.btBack.style.fontSize="36pt";

		this.btSubmit.type="button";
		this.btSubmit.style.width=200+"px";
		this.btSubmit.style.height=70+"px";
		this.btSubmit.style.position="absolute";
		this.btSubmit.style.margin="auto";
		this.btSubmit.style.left=400+"px";
		this.btSubmit.style.top=this.height/7+200+"px";
		this.btSubmit.value="Submit";
		this.btSubmit.style.fontSize="36pt";

		this.btExit.type="button";
		this.btExit.style.width=150+"px";
		this.btExit.style.height=70+"px";
		this.btExit.style.position="absolute";
		this.btExit.style.margin="auto";
		this.btExit.style.left=this.width-200+"px";
		this.btExit.style.top=this.height-120+"px";
		this.btExit.value="Exit";
		this.btExit.style.fontSize="36pt";

		this.logInForm.appendChild(this.idBox);
		this.logInForm.appendChild(this.pwBox);
		this.logInForm.appendChild(this.btLogIn);
		this.logInForm.appendChild(this.btSignIn);

		this.stage.appendChild(this.logInForm);
		this.stage.appendChild(this.btExit);
		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);

/*

		this.btLogIn.addEventListener("click", function(){

			if( me.idBox.value=="" ){

				alert("아이디를 입력해야지!!");
				
				me.idBox.focus();

				return;

			}else if( me.pwBox.value=="" ){

				alert("패스워드는 왜 빼먹어?");
				
				me.idBox.focus();

				return;

			}else{

				me.isFine=true;

				return me.isFine;

			}
		
		});

*/


		this.btSignIn.addEventListener("click", function(){

			me.stage.removeChild(me.logInForm);

			me.idBox.value="";
			me.pwBox.value="";

			me.signInForm.appendChild(me.idBox);
			me.signInForm.appendChild(me.pwBox);
			me.signInForm.appendChild(me.btBack);
			me.signInForm.appendChild(me.btSubmit);

			me.stage.appendChild(me.signInForm);
		
		});

		this.btBack.addEventListener("click", function(){

			var con = confirm("정말 취소할거임?");

			if( con ){

				me.stage.removeChild(me.signInForm);

				me.logInForm.appendChild(me.idBox);
				me.logInForm.appendChild(me.pwBox);
				me.logInForm.appendChild(me.btLogIn);
				me.logInForm.appendChild(me.btSignIn);

				me.stage.appendChild(me.logInForm);

				me.idBox.value="";
				me.pwBox.value="";

			}

		});



		this.btSubmit.addEventListener("click", function(){

			if( me.idBox.value=="" ){

				alert("아이디를 입력해야지!!");
				
				me.idBox.focus();

				return;

			}else if( me.pwBox.value=="" ){

				alert("패스워드는 왜 빼먹어?");
				
				me.idBox.focus();

				return;

			}else{

				alert(me.idBox.value+"의 가입을 축하해!!");

				me.stage.removeChild(me.signInForm);

				me.logInForm.appendChild(me.idBox);
				me.logInForm.appendChild(me.pwBox);
				me.logInForm.appendChild(me.btLogIn);
				me.logInForm.appendChild(me.btSignIn);

				me.stage.appendChild(me.logInForm);

			}

			me.idBox.value="";
			me.pwBox.value="";
		
		});

		this.btExit.addEventListener("click", function(){

			var con = confirm("정말 종료할거임?");

			if( con ){

				close();

			}
		
		});
	
	}

	this.clear = function(){

		this.audio.clear();

		this.gameWin.removeChild(this.stage);

		this.mask.removeChild(this.gameWin);

	}

}


////////////////////////////////////////////////////////////////////////
//	공지사항 띄우는 화면
////////////////////////////////////////////////////////////////////////


var noticeWin = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;

	this.noticeStage;
	this.btStart;
	this.btBack;
	this.btExit;

	this.init = function(){

		this.audio = new audioCtrl('../music/notice.mp3');

		this.audio.init();

		this.stage = document.createElement("div");
		this.noticeStage = document.createElement("textarea");
		this.btStart = document.createElement("input");
		this.btBack = document.createElement("input");
		this.btExit = document.createElement("input");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/f4.jpg')";
		this.stage.style.textAlign="center";

		this.noticeStage.style.width=this.width*4/5+"px";
		this.noticeStage.style.height=this.height*2/3+"px";
		this.noticeStage.style.margin="auto";
		this.noticeStage.style.position="absolute";
		this.noticeStage.style.left=this.width/10+"px";
		this.noticeStage.style.top=this.height/10+"px";
		this.noticeStage.style.backgroundImage="url('../images/f3.jpg')";
		this.noticeStage.style.fontSize="30pt";
		this.noticeStage.style.fontWeight="bold";
		this.noticeStage.style.color="silver";
		this.noticeStage.disabled=true;
		this.noticeStage.value="안녕";


		//this.noticeStage.style.textAlign="center";

		this.btStart.type="button";
		this.btStart.style.width=150+"px";
		this.btStart.style.height=70+"px";
		this.btStart.style.position="absolute";
		this.btStart.style.margin="auto";
		this.btStart.style.left=50+"px";
		this.btStart.style.top=this.height-120+"px";
		this.btStart.value="Start";
		this.btStart.style.fontSize="36pt";

		this.btBack.type="button";
		this.btBack.style.width=150+"px";
		this.btBack.style.height=70+"px";
		this.btBack.style.position="absolute";
		this.btBack.style.margin="auto";
		this.btBack.style.left=this.width-370+"px";
		this.btBack.style.top=this.height-120+"px";
		this.btBack.value="Back";
		this.btBack.style.fontSize="36pt";

		this.btExit.type="button";
		this.btExit.style.width=150+"px";
		this.btExit.style.height=70+"px";
		this.btExit.style.position="absolute";
		this.btExit.style.margin="auto";
		this.btExit.style.left=this.width-200+"px";
		this.btExit.style.top=this.height-120+"px";
		this.btExit.value="Exit";
		this.btExit.style.fontSize="36pt";

		this.stage.appendChild(this.noticeStage);
		this.stage.appendChild(this.btStart);
		this.stage.appendChild(this.btBack);
		this.stage.appendChild(this.btExit);

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);

		this.btExit.addEventListener("click", function(){

			var con = confirm("정말 종료할거임?");

			if( con ){

				close();

			}
		
		});
	
	}

	this.clear = function(){

		this.audio.clear();

		//this.stage.removeChild(this.noticeStage);
		//this.stage.removeChild(this.btStart);
		//this.stage.removeChild(this.btBack);
		//this.stage.removeChild(this.btExit);

		this.gameWin.removeChild(this.stage);

		this.mask.removeChild(this.gameWin);

	}

}




////////////////////////////////////////////////////////////////////////
//	플레이어 선택 화면
////////////////////////////////////////////////////////////////////////
var selectMode = function( mask, gameWin, stageW, stageH ){			// stage로부터 stage와 stage의 높이 stage의 넓이를 받는다

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.div_up;
	this.div_mul;
	this.div_sing;
	this.div_down;
	this.img_mul;									//	멀티플레이 버튼에 들어갈 이미지
	this.img_sing;									//	싱글플레이 버튼에 들어갈 이미지
	this.img_bg;										//	배경에 넣을 이미지
	this.width=stageW;
	this.height=stageH;
	this.bt_mul;										//	멀티플레이 선택 버튼
	this.bt_sing;										//	싱글플레이 선택 버튼
	

	this.init = function(){

		this.audio = new audioCtrl('../music/selectMode.mp3');

		this.audio.init();

		this.stage = document.createElement("div");				//	버튼들을 넣을 div
		this.div_down = document.createElement("div");
		this.div_mul = document.createElement("div");
		this.div_sing = document.createElement("div");

		this.img_mul = document.createElement("img");			
		this.img_sing = document.createElement("img");		
		this.img_bg = document.createElement("img");			

		this.bt_mul = document.createElement("button");		
		this.bt_sing = document.createElement("button");	
	
	

		this.stage.style.width=this.width+"px";									//	div_wrapper의 style 정의
		this.stage.style.height=this.height+"px";
		this.stage.style.margin="0px";
		this.stage.style.position="absolute";

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

		this.stage.appendChild(this.div_mul);
		this.stage.appendChild(this.div_sing);
		this.stage.appendChild(this.div_down);

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);


	}


}


var selectContents = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;

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

		this.stage = document.createElement("div");

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

		this.stage.style.width=this.width+"px";									//	div_wrapper의 style 정의
		this.stage.style.height=this.height+"px";
		this.stage.style.margin="0px";
		this.stage.style.position="absolute";


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

		this.stage.appendChild(this.div_showP1);
		this.stage.appendChild(this.div_showVs);
		this.stage.appendChild(this.div_showP2);
		this.stage.appendChild(this.div_down);

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);


	
	}

}


var itemShop = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/shop.mp3');

		this.audio.init();

		this.stage = document.createElement("div");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";

		this.stage.style.backgroundImage="url('../images/f1.png')";

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);
	
	}

}


var loadGame = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/logIn.mp3');

		this.audio.init();

		this.stage = document.createElement("div");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";

		this.stage.style.backgroundImage="url('../images/f1.png')";

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);
	
	}

}



var gameWinner = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;
	

	this.init = function(){

		this.audio = new audioCtrl('../music/ending.mp3');

		this.audio.init();

		this.stage = document.createElement("div");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";

		this.stage.style.backgroundImage="url('../images/f1.png')";

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);
	
	}

}
