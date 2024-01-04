function getLetterFrequency(str) {
	str = removeWhitespaces(str)
	const frequencyMap = new Map();
	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		if (frequencyMap.has(letter)) {
			frequencyMap.set(letter, frequencyMap.get(letter) + 1);
		} else {
			frequencyMap.set(letter, 1);
		}
	}
	const sortedMap = new Map([...frequencyMap.entries()].sort((a, b) => b[1] - a[1]));

	let mapString = Array.from(sortedMap)
		.map(([key, value]) => `${key}: ${value}`)
		.join("\n");
	
	return mapString;
}

function removeWhitespaces(str) {
	return str.replace(/\s/g, '');
}

function getLettersWithFrequency(frequency, str) {
	const letterFrequencyMap = getLetterFrequency(removeWhitespaces(str));
	const lettersWithFrequency = new Map();
	for (const [letter, freq] of letterFrequencyMap) {
		if (freq === frequency) {
			lettersWithFrequency.set(letter, freq);
		}
	}
	let mapString = Array.from(lettersWithFrequency)
	.map(([key, value]) => `${key}: ${value}`)
	.join("\n");
	if (mapString === "") {
		mapString = "No letters with that frequency";
	}
	console.log(mapString);
	return mapString;
}

