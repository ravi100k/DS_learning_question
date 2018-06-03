# -*- coding: utf-8 -*-
# // --- Directions
# // Check to see if two provided strings are anagrams of eachother.
# // One string is an anagram of another if it uses the same characters
# // in the same quantity. Only consider characters, not spaces
# // or punctuation.  Consider capital letters to be the same as lower case
# // --- Examples
# //   anagrams('rail safety', 'fairy tales') --> True
# //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
# //   anagrams('Hi there', 'Bye there') --> False

def anagrams(s1, s2):
    s1.lower()
    s2.lower()
    if(sorted(s1) == sorted(s2)):
        print("The strings are anagrams.") 
        return True
    else:
        print("The strings aren't anagrams.") 
        return False
    

anagrams('hello', 'llohe')
anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
anagrams('One one', 'One one c')
anagrams('Whoa! Hi!', 'Hi! Whoa!')
anagrams('RAIL! SAFETY!', 'fairy tales')