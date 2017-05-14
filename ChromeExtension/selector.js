var imgs = document.getElementsByTagName("img");
var olds;
var is;

for (var i=0;i<imgs.length;i++) {
	var rand = Math.random();
	var val = parseInt(Math.random() * 66);
	if (rand < 0.05) {
		olds = imgs[i].src;
		is = i;
		imgs[i].src = "http://www.aaronkau.com/riyinator8000/Riyas/riya"+val+".jpg";
		break;
	}


	
}

setTimeout(function() { returnImages(); }, 5000);

function returnImages() {
	imgs[is].src = olds;
}