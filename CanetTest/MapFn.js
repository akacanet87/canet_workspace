var mapFn = function(map, blockArr ,bgSrc, bgmSrc, blockImg){

	this.img;
	this.blockImg=blockImg;
	this.map=map;
	this.left=-750;
	this.top=-400;
	this.blockArr=blockArr;

	this.bgmSrc=bgmSrc;
	this.bgSrc=bgSrc;

	this.init = function(){

		this.audio = new audioCtrl(this.bgmSrc);

		this.audio.init();

		//this.map.style.left=this.left+"px";
		//this.map.style.top=this.top+"px";

		this.map.style.backgroundImage="url('"+this.bgSrc+"')";

		for( var a=0 ; a<20 ; a++ ){

			this.block = new stBlock( this.map, 50, 50, 45*a, 700, this.blockImg);

			this.block.init();

			this.blockArr.push(this.block);

			this.map.appendChild(this.blockArr[a].img);

		}
		
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
