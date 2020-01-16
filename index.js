'use strict';

const fs = require("fs");

var palette;

async function reload() {
	const text = await fs.promises.readFile("./data/palettes/default.hex", "ascii");
	const colors = text.split(/[\n\r]+/g).slice(0, 64);

	// Process hex codes. (To-Do)

	palette = colors;

	return "Why did you expect a value?";
}

reload()
	.then(() => console.log(palette));