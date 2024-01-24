function getLetterFrequency(str) {
	str = removeWhitespaces(str)
	const frequencyMap = new Map();
	const totalLetters = str.length;
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
		.map(([key, value]) => `${key}: ${(value / totalLetters * 100).toFixed(2)}%`)
		.join("\n");
	console.log(mapString);
	return mapString;
}

function removeWhitespaces(str) {
	return str.replace(/\s/g, '');
}

function countSingle(str){
	let singCount = {};
	for (let i = 0; i < str.length; i++) {
		let letter = str[i];
		if (singCount[letter]) {
			singCount[letter]++;
		} else {
			singCount[letter] = 1;
		}
	}
	let countString = Object.entries(singCount)
		.map(([key, value]) => `${key}: ${value}`)
		.join("\n");

	console.log(countString);
	return countString;
}

function countDigrams(str) {
	let digramCounts = {};
	for (let i = 0; i < str.length - 1; i++) {
		let digram = str.substring(i, i + 2);
		if (digramCounts[digram]) {
			digramCounts[digram]++;
		} else {
			digramCounts[digram] = 1;
		}
	}

	let digramString = Object.entries(digramCounts)
		.map(([key, value]) => `${key}: ${value}`)
		.join("\n");

	return digramString;
}

function countTrigrams(str) {
	let trigramCounts = {};
	for (let i = 0; i < str.length - 2; i++) {
		let trigram = str.substring(i, i + 3);
		if (trigramCounts[trigram]) {
			trigramCounts[trigram]++;
		} else {
			trigramCounts[trigram] = 1;
		}
	}

	let trigramString = Object.entries(trigramCounts)
	.map(([key, value]) => `${key}: ${value}`)
	.join("\n");

	return trigramString;
}

function substituteCipherText(cipherText, substitutionMap) {
	let substitutedText = '';
	substitutionMap = constructMapFromInput(substitutionMap);
	for (let i = 0; i < cipherText.length; i++) {
		const letter = cipherText[i];
		if (substitutionMap.has(letter)) {
			substitutedText += substitutionMap.get(letter);
		} else {
			substitutedText += letter;
		}
	}
	console.log(substitutedText);
	return substitutedText;
}

function constructMapFromInput(input) {
	let map = new Map();
	let pairs = input.split(', ');
	for (let pair of pairs) {
		let [key, value] = pair.split(':');
		map.set(key, value);
	}
	return map;
}

substituteCipherText('abc', 'a:g, b:k, c:z')