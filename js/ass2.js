var x;
var code=document.getElementById("code");
function generateQuotes(x) {
    var x = Math.floor(Math.random() * 9)
    console.log(x);
    switch (x) {
        case 0:
            code.innerHTML=`“I am so clever that sometimes I don't understand a single word of what I am saying.” </br>  -- Oscar Wilde`;
            break;
        case 1:
            code.innerHTML=`“Be yourself; everyone else is already taken.” </br>  -- Oscar Wilde`;
            break;
        case 2:
            code.innerHTML=`“Live as if you were to die tomorrow. Learn as if you were to live forever.”
            </br>  -- Mahatma Gandhi`;

            break;
        case 3:
            code.innerHTML=`“You only live once, but if you do it right, once is enough.” </br>  -- Mae West`;

            break;
        case 4:
            code.innerHTML=`“In three words I can sum up everything I've learned about life: it goes on.” </br>  -- Robert Frost`;

            break;
        case 5:
            code.innerHTML=`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” </br>  -- Dr. Seuss`;

            break;
        case 6:
            code.innerHTML=`“A room without books is like a body without a soul.” </br>  -- Marcus Tullius Cicero`;

            break;
        case 7:
            code.innerHTML=`“So many books, so little time.” </br>  -- Frank Zappa`;

            break;
        case 8:
            code.innerHTML=`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” </br>  -- Albert Einstein`;

            break;
        case 9:
            code.innerHTML=`“Insanity is doing the same thing, over and over again, but expecting different results.” </br>  -- Narcotics Anonymous`;

            break;
        case __default:
            console.log("the ringe of x between 0:9 there is no value out of this range");
    }
}
console.log(80 / 16);


