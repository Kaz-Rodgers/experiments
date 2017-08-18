var quotes = ["Why do I want to win so much...? Everyone takes up soccer for different reasons. But we all have a passion for the sport... That drive carries us through a game, even if we lose. If we win, it pushes us forward to the next game. The winners of the game honour the losers by playing with everything they have... and until we hit a wall, until a better team beats us, we should try our best, instead of running away. That's what I want to do!",

             "I want to reply with a long message, but if it's too long, that might be kind of revolting. But if it's too short, then I might come off as cold instead. Feeling apprehensive of what to do, I decided to reply back with a similar word count instead. This was what they called \"mirroring\" in psychology. By emulating the actions of the other party, your affection levels would increase!",
             "A road is something that you make yourself.", "If what I wished for was granted to me, if what I wanted was given to me. Then, as I thought, I wouldn't wish for anything nor want anything. Because the things you were granted and the things you were given were surely shams that would one day be lost. The things you wished for had no shape and the things you wanted were untouchable. Or possibly, they might be the most wonderful treasures that would become nothing if you were to touch them.",

              "I don't think I'll learn anything if I don't try to do something about it on my own.",

               "If youve got energy to spend on feeling guilty, then use it to show your gratitude.",

               // add some more quotes
           ];


function displayRandomQuote() {
    var displayQuote = document.getElementById('quoteText');
    var displayBox = document.getElementById('quoteBox');
    var randNum = Math.floor(Math.random() * quotes.length);
    displayQuote.innerHTML = quotes[randNum];
    displayBox.style.display = "block";
};

// try animations
// do this in jQuery
