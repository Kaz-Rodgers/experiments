var quotes = ["Power isn't determined by your size, but the size of your heart and dreams! ~ Monkey D. Luffy (One Piece)",
              "Time to get serious ~ Megaman X (Megaman X4)",
              "Jack in, MegaMan.EXE, Transmit! ~ Lan (Megaman Battle Network)",
              "Deceive your other self. Deceive the world. That is what you must do to reach the Steins Gate. Good Luck. El Psy Congroo. ~ Okabe Rintarou (Steins: Gate)",
              "You want to kill me? You couldn't even kill my boredom! ~ Roronoa Zorro (One Piece)",
              "Let's fly..you don't have to worry anymore we'll find the answer, we do it together...let's fly, you and me. ~ Yuki (Grandia III)",
              "Kairi, I... It's just... they really need me. I have to go. I am who I am... because of them. ~ Sora (Kingdom Hearts)",
              "It's over Wily! ~ Megaman (Megaman 8)",
              "It is true that you have more experience than me, but I am good. That's all you will have to explain to your lapdogs how I made you look like an idiot in front of them. Ha ha. Oh another thing, you've got no style. You can throw that in too. ~ Baki (Baki The Grappler)",
              "Power comes in response to a need, not a desire. You have to create that need. ~ Goku (Dragon Ball Z)",
              "People who perish in other's battles are worms... If one can't live their life the way they want, they might as well die. ~ Guts (Berserk)",
              "Why do I desire the touch of something that no longer exists? ~ 9S (Nier: Automata)",
              "The unsuppressed soul lets flow oceans of blood The Watchers drink and raise high the basin of fire  Mighty generals hesitate beneath a crimson sky  As the tears of a goddess flow, four lost temples forebode the coming of the queen The dragon plummets from the tower of red thunder, and where it falls no one has seen ~ Opening (Drakenguard)"
             ];

function displayRandomQuote() {
    var displayQuote = document.getElementById('quoteText');
    var displayBox = document.getElementById('quoteBox');
    var randNum = Math.floor(Math.random() * quotes.length);
    displayQuote.innerHTML = quotes[randNum];
    displayBox.style.display = "block";
};

// try animations
// figure out an appropriate way to change colors
// do this in jQuery
