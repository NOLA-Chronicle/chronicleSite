var counter = 0;


function testing(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	console.log("height: " + height + "  width: " + width);
}

function increaseCounter(){
	var b = document.getElementById("btnGC");
	//check button availibility

	counter++;
	console.log(counter);

	updateCounter();

	//disable button
	b.classList.add("disabled");
}

function checkBtn(){
	console.log("Checked");
}

function updateCounter(){
	var text = counter + "";
	var p = document.getElementById("countingBox");

	p.textContent = text;
}