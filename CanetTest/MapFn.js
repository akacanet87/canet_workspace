
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////맵 관련 함수//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var mapFn = function(map, blockArr ,bgSrc, bgmSrc, blockImg, windImg, blockSize, blockAreaX, blockAreaY, blockLen ){		//PosX, PosY, blockArr ,bgSrc, bgmSrc, blockImg){

	this.img;
	this.blockImg=blockImg;
	this.map=map;
	this.blockSize=blockSize;
	this.blockAreaX=blockAreaX;
	this.blockAreaY=blockAreaY;
	this.blockLen=blockLen;
	//this.left=PosX;
	//this.top=PosY;
	this.blockArr=blockArr;
	this.bgmSrc=bgmSrc;
	this.bgSrc=bgSrc;
	this.windImg=windImg;
	var me = this;
	this.moveMap;

	this.windDirec;

	this.init = function(){

		this.audio = new audioCtrl(this.bgmSrc);

		this.audio.init();

		this.map.style.backgroundImage="url('"+this.bgSrc+"')";
		//this.map.style.left=this.left+"px";
		//this.map.style.right=this.top+"px";

		//console.log(moveMap.PosX+" , "+moveMap.PosY);
		//console.log(PosX+" , "+PosY);
		//console.log(this.left+" , "+this.top);
		//console.log(mapPosX+" , "+mapPosY);

		//console.log(this.moveMap.PosX+" , "+this.moveMap.PosY);

		window.addEventListener("mousemove", function(){

			entX=event.clientX;
			entY=event.clientY;

			//console.log(entX+" , "+entY);

			if( (this.entX > 1230) && mapPosX>-1760 ){

				mapLeft=-20;
				mapTop=0;

				mapPosX+=mapLeft;
				mapPosY+=mapTop;

				//map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";

				this.map.style.left=mapPosX+"px";
				this.map.style.top=mapPosY+"px";

			}
			
			if( (entX < 10) && mapPosX<0 ){

				mapLeft=20;
				mapTop=0;

				mapPosX+=mapLeft;
				mapPosY+=mapTop;

				//map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";

				this.map.style.left=mapPosX+"px";
				this.map.style.top=mapPosY+"px";

			}

			if( (entY > 890) && mapPosY>-1100 ){

				mapLeft=0;
				mapTop=-10;

				mapPosX+=mapLeft;
				mapPosY+=mapTop;

				//map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";

				this.map.style.left=mapPosX+"px";
				this.map.style.top=mapPosY+"px";

			}
			
			if( (entY < 10) && mapPosY<0 ){

				mapLeft=0;
				mapTop=10;

				mapPosX+=mapLeft;
				mapPosY+=mapTop;

				//map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";

				this.map.style.left=mapPosX+"px";
				this.map.style.top=mapPosY+"px";


			}

			if( ( (entX < 1230) && mapPosX<-1760) && ( (entX > 10) && mapPosX>0 ) &&  ( (entY < 890) && mapPosY<-1100 ) && ( (entY > 10) && mapPosY>0 ) ){

				mapLeft=0;
				mapTop=0;

				mapPosX+=mapLeft;
				mapPosY+=mapTop;

				//map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";

				this.map.style.left=mapPosX+"px";
				this.map.style.top=mapPosY+"px";

			}

			PosX=mapPosX;
			PosY=mapPosY;

			//console.log(mapPosX);
			//console.log(PosX);

			

		});

		for( var a=0 ; a<blockArr.length ; a++ ){

			for( var b=0 ; b<this.blockLen[a] ; b++ ){

				if( b<this.blockLen[a]/2 ){

					this.block = new stBlock( this.map, this.blockSize, this.blockSize, this.blockAreaX[a]+(this.blockSize*b), this.blockAreaY[a], this.blockImg);

					this.block.init();

					this.blockArr[a].push(this.block);

					this.map.appendChild(this.blockArr[a][b].img);

				}else{

					this.block = new stBlock( this.map, this.blockSize, this.blockSize, this.blockAreaX[a]+(this.blockSize*(b-this.blockLen[a]/2)), this.blockSize+this.blockAreaY[a], this.blockImg);

					this.block.init();

					this.blockArr[a].push(this.block);

					this.map.appendChild(this.blockArr[a][b].img);


				}

			}

		}
	
	}

	this.move=function(){

		setTimeout(function(){

			me.move();
		
		}, 10);

	}

}


var stBlock = function( map, width, height, x, y, blockImg ){

	this.map=map;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.blockImg=blockImg;

	this.init = function(){

		this.img = document.createElement("img");

		this.img.src=this.blockImg;

		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.map.appendChild(this.img);

	}

}


/*

var moveMap = function(){

	this.PosX;
	this.PosY;

	window.addEventListener("mousemove", function(){

		entX=event.clientX;
		entY=event.clientY;

		//console.log(entX+" , "+entY);

		if( (this.entX > 1230) && mapPosX>-1760 ){

			mapLeft=-20;
			mapTop=0;

			mapPosX+=mapLeft;
			mapPosY+=mapTop;

			map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";

		}
		
		if( (entX < 10) && mapPosX<0 ){

			mapLeft=20;
			mapTop=0;

			mapPosX+=mapLeft;
			mapPosY+=mapTop;

			map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";

		}

		if( (entY > 890) && mapPosY>-1100 ){

			mapLeft=0;
			mapTop=-10;

			mapPosX+=mapLeft;
			mapPosY+=mapTop;

			map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";

		}
		
		if( (entY < 10) && mapPosY<0 ){

			mapLeft=0;
			mapTop=10;

			mapPosX+=mapLeft;
			mapPosY+=mapTop;

			map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";


		}

		if( ( (entX < 1230) && mapPosX<-1760) && ( (entX > 10) && mapPosX>0 ) &&  ( (entY < 890) && mapPosY<-1100 ) && ( (entY > 10) && mapPosY>0 ) ){

			mapLeft=0;
			mapTop=0;

			mapPosX+=mapLeft;
			mapPosY+=mapTop;

			map.style.backgroundPosition=mapPosX+"px "+mapPosY+"px";

		}

		PosX=mapPosX;
		PosY=mapPosY;

		console.log(mapPosX);
		console.log(PosX);

		

	});

	//setTimeout("moveMap()", 100);

}


*/
