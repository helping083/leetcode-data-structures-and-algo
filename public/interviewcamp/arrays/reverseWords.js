export const reverseWords = (words) => {
    reverseCharacters(words, 0, words.length - 1);
    let current_word_start_index = 0
    for(let i = 0; i <= words.length; i++) {
        if(i === words.length || words[i] === ' ') {
            reverseCharacters(words, current_word_start_index, i-1);
            current_word_start_index = i + 1;
        }
    }
    console.log(words.join(''));
}

function reverseCharacters(ans, start, end) {
    while(start < end) {
        [ans[start], ans[end]] = [ans[end], ans[start]];
        start++;
        end--;
    }
}