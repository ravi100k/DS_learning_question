# -*- coding: utf-8 -*-
def capitalize(string):
    ans = string[0].upper()
    for i in range(1,len(string)):
        if string[i-1]== ' ':
            ans += string[i].upper()
        else:
            ans += string[i]
    return ans

print capitalize('i am fine')