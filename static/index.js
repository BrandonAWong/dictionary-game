const dictionary = JSON.parse(data)

function startGame()
{   
    document.getElementById("win").hidden = true;

    let options = [];
    const choices = document.getElementsByClassName("choice");
    for (const btn of choices) 
    {
        if (btn.className != "choice fade-in")
        {
            const randomInt = Math.floor(Math.random() * dictionary.length)
            var word = dictionary[randomInt].Word;
            var definition = dictionary[randomInt].Definition;
        }
        else
        {
            var word = btn.innerHTML
            var definition = btn.definition
        }

        btn.disabled = false;
        btn.className = "choice fade-in"
        btn.addEventListener("click", checkAnswer);
        btn.innerHTML = word;
        btn.definition = definition;
        options.push(btn)
    }

    const randomInt = Math.floor(Math.random() * options.length);
    const ansWord = options[randomInt].innerHTML
    const ansDef = options[randomInt].definition.replace(ansWord, "______")
    const card = document.getElementById("card-info")
    card.innerHTML = ansDef;
    card.className = "fade-in"
}

function checkAnswer(evt)
{
    const button = evt.currentTarget
    button.disabled = true;
    let answerDef = document.getElementById("card-info")
    answerDef = answerDef.innerHTML.replace(/______/g, button.innerHTML)
    const choiceDef = button.definition

    if (choiceDef == answerDef)
    {
        button.className = "choice correct";
        win()
    }
    else
    {
        button.className = "choice incorrect";
    }
}

function win() 
{
    const choices = document.getElementsByClassName("choice");
    for (const btn of choices) 
    {
        btn.disabled = true;
    }
    document.getElementById("win").hidden = false;
    document.getElementById("win-button").addEventListener("click", startGame)
}

startGame()