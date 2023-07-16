function createChoices(data)
{
    const options = JSON.parse(data);
    for (let i = 0; i < 4; i++) 
    {
        const word = options[i].Word;
        const button = document.createElement("button")
        button.className = "choice"
        button.onclick = checkAnswer(word, data);
        button.innerHTML = word;
        document.body.appendChild(button);
    }
}

function checkAnswer(word, data)
{
    console.log(word);
}