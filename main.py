import requests
import random
from random_word import RandomWords

def getWordsWithDefs():
    wordChoices = []
    definitions = []
    for _ in range(4):
        randomWord = RandomWords().get_random_word()
        getDefinition(randomWord, definitions)
        wordChoices.append(randomWord)

    return wordChoices, definitions

def getDefinition(word, definitions):
    while True:
        try:
            url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
            info = requests.get(url).json()[0]
            return definitions.append(info['meanings'][0]['definitions'][0]['definition'])

        except:
            print(word, "shit aint here")
            word = RandomWords().get_random_word()




if __name__ == '__main__':
    words, definitions = getWordsWithDefs()
    correctWord = random.choice(words)
    correctIndex = words.index(correctWord)
    print(f'If the definition of the word is:\n{definitions[correctIndex]}\n')

    for index, word in enumerate(words):
        print(f'{index+1}) {word}')
    
    answer = input('\nThen the word is: ')
    if answer == correctWord:
        print("🎉🥳🎉")

    else:
        print(f'😭 the answer was {correctWord}')
    
    words.pop(correctIndex)
    definitions.pop(correctIndex)
    print('\nThe rest of the words:')
    for index, word in enumerate(words):
        print(f'{word} - {definitions[index]}')
