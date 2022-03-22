"use strict";

let inputFile = document.getElementById('InputFile');
let fileName = document.querySelector(".fileName");
let imagesOutput = document.getElementById("imagesOutput");
let videoOutput = document.getElementById("videoOutput");

inputFile.addEventListener("input", function() {
	let makeURL = URL.createObjectURL(this.files[0]);
	let lastExt = inputFile.value.slice(-3, inputFile.value.length);

	if (lastExt == "mp4" || lastExt == "jpg" || lastExt == "png" || lastExt == "jpeg") {
		if (lastExt == "mp4") {
			videoOutput.classList.remove("disNone");
			imagesOutput.classList.add("disNone");
			videoOutput.src = makeURL;
			fileName.classList.remove("disNone");
			fileName.innerText = inputFile.value;
		} else if (lastExt == "jpg" || lastExt == "png" || lastExt == "jpeg") {
			imagesOutput.classList.remove("disNone");
			videoOutput.classList.add("disNone");
			imagesOutput.src = makeURL;
			fileName.classList.remove("disNone");
			fileName.innerText = inputFile.value;
			videoOutput.pause();
		}
	}
})