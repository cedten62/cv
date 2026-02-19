function init() {
	var refcontact = document.getElementById("contact");
}

function description(obj) {
	console.log("Fonction : description");
	if (obj.children[0].style.display === "none") {
		obj.style.padding = "";
		obj.children[0].style.display = "";
		obj.children[1].style.display = "";
		obj.children[2].style.display = "";
	}
	else {
		obj.style.padding = "3% 0";
		obj.children[0].style.display = "none";
		obj.children[1].style.display = "block";
		obj.children[2].style.display = "block";
	}
}

function Pcontact() {
	console.log("Fonction : Pcontact");
	if (contact.style.display === "block") contact.style.display = "none";
	else contact.style.display = "block";
}