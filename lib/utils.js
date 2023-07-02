/*первая буква заглавная*/
export const firstToUpperCase = ( str ) => {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}

/*обратный транслит*/
export const translit = (word) =>  {
	const converter = {
		'sch': 'щ',

		'yo': 'ё', 'zh': 'ж', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'ya': 'я', 'ja': 'джа', 'sc': 'ск',

		'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
		'e': 'е', 'z': 'з', 'i': 'и', 'y': 'й', 'k': 'к',
		'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
		'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
		'h': 'х', 'c': 'ц', 'y': 'ы',
	};

	if (word.indexOf("-") >= 0) {

		word = word.toLowerCase();
		word = word.replace(/-/g, ' ');
		//word = word.replace("*", '');

		for (const [key, value] of Object.entries(converter)) {
			word = word.replaceAll(key, value);
		}

		return word;

	} else {
		word = word.toLowerCase();
		return word;
	}
}
