var imgs = document.getElementsByTagName("img");
var olds = [];
var is = [];

for (var i=0;i<imgs.length;i++) {
	var rand = Math.random();
	var val = parseInt(Math.random() * 66);
	if (rand < 0.05) {
		olds.push(imgs[i].src);
		is.push(i);
		imgs[i].src = "http://www.aaronkau.com/riyinator8000/Riyas/riya"+val+".jpg";
	}

	setTimeout(function() { returnImages(); }, 5000);
}

function returnImages() {
	for (var i=0;i<is.length;i++) {
		imgs[is[i]].src = olds[i];
	}
}