import re
def vowels(string):
    a = re.findall(r'([aeiou])', string, re.IGNORECASE)
    return len(a)
        
print vowels('AEIOU')
print vowels('abcdefghijklmnopqrstuvwxyz')
print vowels('bcdfghjkl')