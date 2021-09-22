

function calculateWords(){
    var words = document.getElementById("word-input").value;

    scores = { 'a' : 2, 'b' : 2, 'c' : 1, 'd' : 2, 'e' : 2, 'f': 1 , 'g': 2, 'h': 1, 'i': 2, 'j': 2,
    'k': 1 , 'l': 1, 'm': 1, 'n': 1, 'o': 2, 'p': 2, 'q': 2, 'r': 1, 's': 1, 't': 1,
    'u': 1 , 'v': 1, 'w': 1, 'x': 1, 'y': 1, 'z': 1,'A' : 2, 'B' : 3, 'C' : 1, 'D' : 2, 'E' : 2, 'F': 1 , 'G': 2, 'H': 1, 'I': 2, 'J': 2,
    'K': 1 , 'L': 1, 'M': 1, 'N': 1, 'O': 2, 'P': 2, 'Q': 2, 'R': 2, 'S': 1, 'T': 1,
    'U': 1 , 'V': 1, 'W': 1, 'X': 1, 'Y': 1, 'Z': 1};

    var sum = 0;
    for (var i = 0; i < words.length; ++i) {
        sum += scores[words.charAt(i)] || 0;
    }

    html = "Your score is <b>" + sum + "</b>"

    document.getElementById('result').innerHTML = html;
}

document.getElementById("button-click").addEventListener("click", calculateWords);
