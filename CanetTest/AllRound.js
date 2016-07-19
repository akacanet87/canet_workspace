

////////////////////////////////////////////////////////////////////////
//	시작 시 뜰 화면을 표시
////////////////////////////////////////////////////////////////////////
var StartWin = function ( stage, stageW, stageH ){			// stage로부터 stage와 stage의 높이 stage의 넓이를 받는다

//	this.div;
	this.img;																			// 시작시 배경 이미지
	this.stage=stage;
	this.width=stageW;
	this.height=stageH;

	this.init = function(){

		this.stage.style.margin=0+"px";

//		this.div = document.createElement("div");
		this.img = document.createElement("img");

//		this.div.style.width=stageW+"px";
//		this.div.style.height=stageH+"px";
//		this.div.style.margin="auto";
//		this.div.style.position="absolute";

		this.img.src="../images/space1.jpg";							//	배경이미지 소스

		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.margin="auto";

//		this.div.appendChild(this.img);
//		this.stage.appendChild(this.div);
		
		this.stage.appendChild(this.img);

	}

}

////////////////////////////////////////////////////////////////////////
//	플레이어 선택 화면
////////////////////////////////////////////////////////////////////////
var selectMode = function(stage, stageW, stageH){			// stage로부터 stage와 stage의 높이 stage의 넓이를 받는다

//	this.div_wrapper;
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

//		this.div_wrapper = document.createElement("div");				//	버튼들을 넣을 div
		this.div_down = document.createElement("div");
		this.div_mul = document.createElement("div");
		this.div_sing = document.createElement("div");

		this.img_mul = document.createElement("img");			
		this.img_sing = document.createElement("img");		
		this.img_bg = document.createElement("img");			

		this.bt_mul = document.createElement("button");		
		this.bt_sing = document.createElement("button");	
	
/*		

		this.div_wrapper.style.width=this.width+"px";									//	div_wrapper의 style 정의
		this.div_wrapper.style.height=this.height+"px";
		this.div_wrapper.style.margin="0px";
		this.div_wrapper.style.position="absolute";

*/

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


	}

	this.move = function(){

		setTimeout(function(){

			me.move();
		
		}, 100);

	}

}





////////////////////////////////////////////////////////////////////////
//	탱크 고르는 화면
////////////////////////////////////////////////////////////////////////
var selectContents = function(stage, stageW, stageH){

	this.div_show;												//	선택한 탱크를 보여줄 창을 담을 div
	this.div_selTank;											//	탱크들을 선택하는 곳이 담긴 div
	this.div_selMap;											//	맵을 고르는 창을 담을 div
	this.div_selItem;											//	아이템을 고르는 창을 담을 div

	this.div_showMargin=70;

	this.bt_tankLen=150;
	this.bt_itemLen=70;
	
	this.img_pLeft;												//	왼쪽 플레이어창의 이미지
	this.img_pRight;											//	오른쪽 플레이어창의 이미지

	this.stage=stage;
	this.width=stageW;
	this.height=stageH;
	
	this.bt_ranSelTank;
	this.bt_tank1;												//	탱크 선택 버튼
	this.bt_tank2;
	this.bt_tank3;
	this.bt_tank4;
	
	this.bt_ranSelItem;
	this.bt_item1;												//	아이템 선택 버튼
	this.bt_item2;
	this.bt_item3;
	this.bt_item4;

	this.init = function(){

		this.div_showP1 = document.createElement("div");
		this.div_showVs = document.createElement("div");
		this.div_showP2 = document.createElement("div");
		this.div_selTank = document.createElement("div");
		this.div_down = document.createElement("div");
		this.div_selMap = document.createElement("div");
		this.div_selItem = document.createElement("div");

		this.img_pLeft = document.createElement("img");
		this.img_pRight = document.createElement("img");

		this.bt_ranSelTank = document.createElement("button");
		this.bt_tank1 = document.createElement("button");
		this.bt_tank2 = document.createElement("button");
		this.bt_tank3 = document.createElement("button");
		this.bt_tank4 = document.createElement("button");

		this.bt_ranSelItem = document.createElement("button");
		this.bt_item1 = document.createElement("button");
		this.bt_item2 = document.createElement("button");
		this.bt_item3 = document.createElement("button");
		this.bt_item4 = document.createElement("button");
	

		this.div_showP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showP1.style.height=this.height*2/5+"px";
		this.div_showP1.style.textAlign="right";
		this.div_showP1.style.float="left";
		this.div_showP1.style.marginTop=this.div_showMargin+"px";

		//this.div_showP1.style.border="1px solid red";

		this.div_showVs.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showVs.style.height=this.height*2/5+"px";
		this.div_showVs.style.textAlign="center";
		this.div_showVs.innerText="VS"
		this.div_showVs.style.fontSize="100pt";
		this.div_showVs.style.float="left";
		//this.div_showVs.style.margin="auto";
		this.div_showVs.style.marginTop=this.div_showMargin+"px";
		//this.div_showVs.style.border="1px solid red";

		this.div_showP2.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showP2.style.height=this.height*2/5+"px";
		this.div_showP2.style.textAlign="left";
		this.div_showP2.style.float="left";
		this.div_showP2.style.marginTop=this.div_showMargin+"px";
		//this.div_showP2.style.border="1px solid red";

		this.img_pLeft.style.width=200+"px";
		this.img_pLeft.style.height=200+"px";
		this.img_pLeft.src="../images/enemyship.png";
		this.img_pLeft.style.border="1px solid red";

		this.img_pRight.style.width=200+"px";
		this.img_pRight.style.height=200+"px";
		this.img_pRight.src="../images/enemyship.png";
		this.img_pRight.style.border="1px solid red";

		this.div_selMap.style.width=this.width/3+"px";
		this.div_selMap.style.height=this.height/2+"px";
		this.div_selMap.style.float="left";
		this.div_selMap.style.border="1px solid red";

		this.div_selTank.style.width=this.width*3/5+"px";
		this.div_selTank.style.height=this.height/4+"px";
		this.div_selTank.style.float="left";
		this.div_selTank.style.border="1px solid red";

		this.bt_ranSelTank.style.width=this.bt_tankLen+"px";
		this.bt_ranSelTank.style.height=this.bt_tankLen+"px";
		this.bt_ranSelTank.style.margin="auto";
		this.bt_ranSelTank.style.float="right";
		this.bt_ranSelTank.innerText="나랜덤";

		this.bt_tank1.style.width=this.bt_tankLen+"px";
		this.bt_tank1.style.height=this.bt_tankLen+"px";
		this.bt_tank1.style.float="right";
		this.bt_tank1.innerText="난탱크1";

		this.bt_tank2.style.width=this.bt_tankLen+"px";
		this.bt_tank2.style.height=this.bt_tankLen+"px";
		this.bt_tank2.style.float="right";
		this.bt_tank2.innerText="난탱크2";

		this.bt_tank3.style.width=this.bt_tankLen+"px";
		this.bt_tank3.style.height=this.bt_tankLen+"px";
		this.bt_tank3.style.float="right";
		this.bt_tank3.innerText="난탱크3";

		this.bt_tank4.style.width=this.bt_tankLen+"px";
		this.bt_tank4.style.height=this.bt_tankLen+"px";
		this.bt_tank4.style.float="right";
		this.bt_tank4.innerText="난탱크4";

		this.div_selItem.style.width=this.width*3/5+"px";
		this.div_selItem.style.height=this.height/4+"px";
		this.div_selItem.style.float="left";
		this.div_selItem.style.alignItems="center";
		this.div_selItem.style.border="1px solid red";

		this.bt_ranSelItem.style.width=this.bt_itemLen+"px";
		this.bt_ranSelItem.style.height=this.bt_itemLen+"px";
		this.bt_ranSelItem.style.float="left";
		this.bt_ranSelItem.innerText="난랜덤아이템";

		this.bt_item1.style.width=this.bt_itemLen+"px";
		this.bt_item1.style.height=this.bt_itemLen+"px";
		this.bt_item1.style.float="left";
		this.bt_item1.innerText="난아이템1";

		this.bt_item2.style.width=this.bt_itemLen+"px";
		this.bt_item2.style.height=this.bt_itemLen+"px";
		//this.bt_item2.style.float="left";
		this.bt_item2.innerText="난아이템2";

		this.bt_item3.style.width=this.bt_itemLen+"px";
		this.bt_item3.style.height=this.bt_itemLen+"px";
		//this.bt_item3.style.float="left";
		this.bt_item3.innerText="난아이템3";

		this.bt_item4.style.width=this.bt_itemLen+"px";
		this.bt_item4.style.height=this.bt_itemLen+"px";
		//this.bt_item4.style.float="left";
		this.bt_item4.innerText="난아이템4";

		this.div_showP1.appendChild(this.img_pLeft);
		this.div_showP2.appendChild(this.img_pRight);

		this.div_selTank.appendChild(this.bt_tank4);
		this.div_selTank.appendChild(this.bt_tank3);
		this.div_selTank.appendChild(this.bt_tank2);
		this.div_selTank.appendChild(this.bt_tank1);
		this.div_selTank.appendChild(this.bt_ranSelTank);

		this.div_selItem.appendChild(this.bt_ranSelItem);
		this.div_selItem.appendChild(this.bt_item1);
		this.div_selItem.appendChild(this.bt_item2);
		this.div_selItem.appendChild(this.bt_item3);
		this.div_selItem.appendChild(this.bt_item4);

		this.stage.appendChild(this.div_showP1);
		this.stage.appendChild(this.div_showVs);
		this.stage.appendChild(this.div_showP2);
		this.stage.appendChild(this.div_selMap);
		this.stage.appendChild(this.div_selTank);
		this.stage.appendChild(this.div_selItem);



	
	}


}

