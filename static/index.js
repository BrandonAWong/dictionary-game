function createChoices(data)
{
    const buttons = document.getElementsByClassName("choice")
    const options = JSON.parse(data);
    for (let i = 0; i < 4; i++) 
    {
        const button = buttons[i]
        const word = options[i].Word;
        const definition = options[i].Definition;
        button.addEventListener("click", checkAnswer);
        button.innerHTML = word;
        button.definition = definition;
    }
}

function checkAnswer(evt)
{
    const button = evt.currentTarget
    button.disabled = true;
    let answerDef = document.getElementById("card-info")
    answerDef = answerDef.innerHTML.replace("______", button.innerHTML)
    const choiceDef = button.definition

    if (choiceDef === answerDef)
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

    const nextButton = document.getElementById("next");
    nextButton.addEventListener("click", next);
}

function next()
{
    location.reload();
}