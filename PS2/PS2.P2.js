// generator
function* emit_words(sentence) {
    let sentence_by_char = sentence.split("");
    let next_word = "";         // initialize next word to be yielded
    for (let i = 0; i < sentence_by_char.length; i++) {
        let next_char = sentence_by_char[i];
        if (next_char !== " ") {      // check space to determine each word
            next_word += next_char;
        } else {
            yield next_word;
            next_word = "";     // reset to empty string
        }
    }
    yield next_word;    // last output
}

// test case
my_emit = emit_words("All I know is something like a bird within her sang");
let next_emit;
do {
    next_emit = my_emit.next();
    if (typeof next_emit.value !== "undefined")
        console.log(next_emit.value);
} while(!next_emit.done);
