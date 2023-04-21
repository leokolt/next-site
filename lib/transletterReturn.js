const transliterateReturn = (slug) =>  {
    const letters = {"YO":"Ё","I":"Й","TS":"Ц","U":"У","K":"К","E":"Е","N":"Н","G":"Г","SH":"Ш","SCH":"Щ","Z":"З","H":"Х","Ъ":"'","yo":"ё","й":"i","ts":"ц","u":"у","k":"к","e":"е","n":"н","g":"г","sh":"ш","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};

    return slug.split('').map(function (char) {
        return letters[char] || char;
    }).join("");
}

module.exports.transliterateReturn = transliterateReturn
