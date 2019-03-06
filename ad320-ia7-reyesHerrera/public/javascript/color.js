document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('div').addEventListener("click", function() {   
		
		var currentColour = document.querySelector("div").style.backgroundColor;
		if (currentColour === 'red') {
			document.querySelector("div").style.backgroundColor = "blue";
		}
		else {
			document.querySelector("div").style.backgroundColor = "red";
		}
	});
});