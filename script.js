//Run on start

//Find the ant-radio buttons
var choices = document.getElementsByClassName('ant-radio');
var len = choices.length;

//Keybinding
document.onkeydown = checkNum;
function checkNum(e) {

	//Find a regular ant-btn if needed
	//
	var submit = document.getElementsByClassName('ant-btn-lg')[0];
	//Bind 1-n for n radio buttons (max buttons is 9)
	for (let i = 0 ; i < len; i++) {
		if (e.which == 49 + i) {
			e.preventDefault();
			choices[i].click();
		}
	}

	if (e.which == 13){
		submit.click();
	}
}