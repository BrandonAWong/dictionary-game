import requests
import random
from random_word import RandomWords

while True:
    correctWord = RandomWords().get_random_word()
    wordChoices = [correctWord]

    try:
        url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{correctWord}"
        info = requests.get(url).json()[0]
        definition = info['meanings'][0]['definitions'][0]
        print(f'If the definition of the word is:\n{definition["definition"]}\n')
        for i in range(3):
            wordChoices.append(RandomWords().get_random_word())

        random.shuffle(wordChoices)

        for index, word in enumerate(wordChoices):
            print(f'{index+1}) {word}')

        answer = input('\nThen the word is: ')
        if answer == correctWord:
            print("🎉🥳🎉")

        else:
            print(f'😭 the answer was {correctWord}')

        break

    except:
        pass
