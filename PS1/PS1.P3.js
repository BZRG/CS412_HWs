// decorator function
const decorator = (str, dec_func) => dec_func(str);

// expression 1
let result1 = decorator("supercalifragilisticexpialidocious",
    input_str => {
        let str_split = input_str.split("");
        let sub_string = "";
        let final_array = [];

        // loop through every char and create substrings,
        // and combine them to the final return array
        for (const char of str_split) {
            if (char == "c") {
                final_array.push(sub_string);
                sub_string = char;
            } else
                sub_string = sub_string.concat("", char);
        };

        final_array.push(sub_string);       // push the last substring
        return final_array;
    });

// expression 2
let result2 = decorator("supercalifragilisticexpialidocious",
        input_str => {
            let str_split = input_str.split("");
            let idx = 0;
            let count = 0;

            // loop through every char and replace 'a' with 'A'
            for (const char of str_split) {
                if (char == "a") {
                    str_split[idx] = "A";
                    count++;
                };
                idx++
            }

            // construct final object returned
            const final_object = {originalString: input_str,
                modifiedString: str_split.join(""),
                numberReplaced: count,
                length: idx};

            return final_object;
        });


console.log(result1);
console.table(result2);