const Y = document.querySelector('.actualheight');
const X = document.querySelector('.actualwidth');
const irisL = document.querySelector('.irisLeft');
const irisR = document.querySelector('.irisRight');


function addActualValue(event){
	var aY = event.clientY;
	var aX = event.clientX;
	Y.textContent = aY;
	X.textContent = aX;
}

function moveEyes(){
	var Ynumber = document.querySelector('.actualheight');
	var Ychild = Ynumber.firstChild;
	var Yvalue = Ychild.nodeValue;
	var minusmoveY = (Yvalue-window.innerHeight/2);
	var moveY = minusmoveY/window.innerHeight*100;
	var Xnumber = document.querySelector('.actualwidth');
	var Xchild = Xnumber.firstChild;
	var Xvalue = Xchild.nodeValue;
	var minusmoveX = (Xvalue-window.innerWidth/2);
	var moveX = minusmoveX/window.innerWidth*100;
	irisL.style.transform = `translate(${moveX}%, ${moveY}%)`;
	irisR.style.transform = `translate(${moveX}%, ${moveY}%) `;
	
}

const el = document.querySelector('.body');
el.addEventListener('mousemove', addActualValue, false);
el.addEventListener('mousemove', moveEyes, false);