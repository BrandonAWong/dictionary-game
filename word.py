import random
from random_word import RandomWords
from pydictionary import Dictionary

class Word:
    def __init__(self):
        self.word = None
        self.definition = None

    def setWord(self, word):
        self.validateWord(word)

    def validateWord(self, word):
        try:
            definition = Dictionary(word, 1).meanings()[0]
            self.setDefinition(definition)
            self.word = word
        except:
            self.setWord(RandomWords().get_random_word())

    def setDefinition(self, definition):
        if definition.__contains__(':'):
            index = definition.find(':')
            definition = definition[0:index]
        self.definition = definition

def getWordChoices():
    wordChoices = []
    for _ in range(4):
        word = Word()
        word.setWord(RandomWords().get_random_word())
        wordChoices.append(word)
    return wordChoices

if __name__ == '__main__':
    words = getWordChoices()
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
        print(f'{index + 1}) {word.word} - {word.definition}')
