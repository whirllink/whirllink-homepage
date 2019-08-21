var content;


function Slideshow(slideshowData, target) {
	this.slideshowData = slideshowData;
	this.activePage = 0;
	this.slideshowLength = slideshowData.length;
	this.loadShow = function slideshowLoad() {
		this.clickRight();
	}

	this.clickRight = function clickRight() {
		$('div.image').toggleClass("inactive");
		$("div.image").fadeToggle(100, "linear", function(){
			$('button').removeAttr('disabled');
			$('button').css({'display': 'block'});
		});

		if (slideshowData[this.activePage].image < 1)
		{
			$(".inactive").html('');
		}
		else
		{
			$(".inactive").html('<img class="img-responsive" src="'+slideshowData[this.activePage].image+'">');
		}

		$("#pagecount").html("Page " + (this.activePage+1) + " of "+ this.slideshowLength);
		$(".content").html(slideshowData[this.activePage].content);

		if(this.activePage==this.slideshowLength-1){
			this.activePage = 0;
		}
	  	else {
			this.activePage++;
	  	}
	}

	this.clickLeft = function clickRight() {
		if(this.activePage == 0){
			this.activePage = this.slideshowLength-2;
		}
		else if(this.activePage == 1){
			this.activePage = this.slideshowLength-1;
		}
	  	else {
		  	this.activePage=this.activePage-2;
	  	}
		this.clickRight();
	}
}


function loadContent(content) {
	alert(content[0].content);

	document.getElementByClassName("content").innerHTML = "JavaScript";

	var slideShow = new Slideshow(content);
	slideShow.loadShow();

	$("button.right").click(function () {
		slideShow.clickRight();
	});

	$("button.left").click(function () {
		slideShow.clickLeft();
	});
}


