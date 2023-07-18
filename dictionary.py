from csv import DictReader


with open('wordlist.csv', 'r', encoding='cp850') as word_list:
    bank: DictReader = DictReader(word_list)
    dictionary: list[dict] = [row for row in bank]