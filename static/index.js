const dictionary = JSON.parse(data);


function startGame()
{   
    document.getElementById("win").hidden = true;

    let options = [];
    const choices = document.getElementsByClassName("choice");
    for (const btn of choices)
    {
        if (btn.className != "choice fade-in" && btn.className != "choice fade-in incorrect")
        {
            const randomInt = Math.floor(Math.random() * dictionary.length);
            var word = dictionary[randomInt].Word;
            var definition = dictionary[randomInt].Definition;
            btn.className = "choice fade-in";
        }
        else
        {
            var word = btn.innerHTML;
            var definition = btn.definition;
            btn.className = "choice fade-in";
        }

        btn.disabled = false;
        
        btn.addEventListener("click", checkAnswer);
        btn.innerHTML = word;
        btn.definition = definition;
        options.push(btn);
    }

    const randomInt = Math.floor(Math.random() * options.length);
    const ansWord = options[randomInt].innerHTML;
    const ansDef = options[randomInt].definition.replace(/ansWord/gi, "______");
    const card = document.getElementById("card-info");
    card.innerHTML = ansDef;
    card.className = "slide-in";
}

function checkAnswer(evt)
{
    const button = evt.currentTarget;
    button.disabled = true;
    let answerDef = document.getElementById("card-info");
    answerDef = answerDef.innerHTML.replace(/______/g, button.innerHTML).toLowerCase();
    const choiceDef = button.definition.toLowerCase();

    if (choiceDef == answerDef)
    {
        button.className = "choice correct";
        win();
    }
    else
    {
        button.className = "choice fade-in incorrect";
    }
}

function win() 
{
    const choices = document.getElementsByClassName("choice");
    for (const btn of choices) 
    {
        btn.disabled = true;
    }
    const card = document.getElementById("card-info");
    card.className = "";
    document.getElementById("win").hidden = false;
    document.getElementById("win-button").addEventListener("click", startGame)
}

startGame()