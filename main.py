import requests
import random
from random_word import RandomWords

class Word:
    def __init__(self):
        self.word = None
        self.definition = None

    def setWord(self, word):
        self.validateWord(word)
        self.word = word

    def validateWord(self, word):
        try:
            url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
            info = requests.get(url).json()[0]
            self.setDefinition(info)

        except:
            print(word, "shit aint here")
            self.setWord(RandomWords().get_random_word())


    def setDefinition(self, json):
        self.definition = json['meanings'][0]['definitions'][0]['definition']


def getListWordDef():
    wordChoices = []
    for _ in range(4):
        word = Word()
        word.setWord(RandomWords().get_random_word())
        wordChoices.append(word)

    return wordChoices

if __name__ == '__main__':
    words = getListWordDef()
    correctOption = random.choice(words)
    correctWord = correctOption.word
    print(f'If the definition of the word is:\n{correctOption.definition}\n')

    for index, word in enumerate(words):
        print(f'{index+1}) {word.word}')
    
    answer = input('\nThen the word is: ')
    if answer == correctWord:
        print("🎉🥳🎉")

    else:
        print(f'😭 the answer was {correctWord}')

    words.remove(correctOption)
    print('\nThe rest of the words:')
    for index, word in enumerate(words):
        print(f'{word.word} - {word.definition}')