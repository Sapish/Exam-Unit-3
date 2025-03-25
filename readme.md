Imported some of my old code to call the api, and got the challenge.

Task 1 -------------------
First challenge received, crack the code: “☉☿☽♂☉”.
After copy pasting the symbols into google i found that they are "planetary symbols" used in astrology and astronomy: https://en.wikipedia.org/wiki/Planetary_symbols
Since the task is about alchemy, that probably is an indication that i will need to link the symbols to the metals. So my answer would be a list of the metals that match the symbols.
Running into the problem that was shown in class where im getting the HTML bug. (fixed by reading the task again, seeing that i need to submit answer using a POST request, rewrote my code to fit this need.)
I believe im writing the answer correct, but im still getting wrong answer? "Gold, Quicksilver, Silver, Iron, Gold".
Fixed the answer, i was not returning an array.
I have now solved the task manually and got the correct answer, i will now try implementing code to solve the challenge.
  1. Added code to decode the symbols over to metals.
  2. “☉☿☽♂☉” should now be converted into an array by connecting each symbol to the correct metal.
For some reason im getting task two, even though i still haven't completed task 1, i can also no longer see task 1.
Going to start on task two and then ill come back to this task and try figuring out the issue, honestly don't know if its a server thing or me.

Task 2 -------------------
Im guessing there is some sort of secret message within the poem “Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.”
1. First thing i thought of was that it could be the numbers of letters in the poem, but that wouldn't really be a secret message but a number.
2. Second thought if it had to be a secret message is trying the capital letters, so ill make a test for that.
3. Doesn't seem like SILVER is the correct answer either.
4. Realised after a while that i had just been using a variable from task one in task 2, copy pasted some stuff from task one to task 2 to save time.. clearly didn't save me much time.
5. Now i got the correct answer which was SILVER after all.
6. Moving on to task 3!

Task 3 -------------------
So, we are most likely dealing with a book cypher in this task. https://en.wikipedia.org/wiki/Book_cipher
Thought process:
1. Added the numbers to a word document to see it more clearly and make it easier to look for patterns.
2. The numbers are clearly separated using either spaces, commas or semicolon... i would assume that this means that each number could be a letter, and that the spaces separate words?
3. I was thinking the numbers could their position in the alphabet, which would make the first word QT. This cant be the case though as there are some numbers that are way higher than the length of the alphabet.
4. Numbers are also being repeated so either repeated words or letters?
5. Found the book in question, but don't really know what to do with it yet.
6. Been trying for a while to just make sentences out of the numbers, not gotten any big words yet, but im guessing the two letter combinations might be words like "or, to, if, by, do" etc... Think they will start making more sense once i look into the book potentially.
7. Next step is looking at the first page of the book to see if i can make sense of things.
8. Went to this specific page and counted the letters, so lets take 17 for example, if i count 17 letters it will be 17=T next, 20=o. So first word could be "To".
   - https://archive.org/details/chirurgischebuch00para/page/n5/mode/2up
9. Next i will try swapping out all the numbers with letters from the page. Will just do the smaller numbers, so not numbers over 100, as i hope i can see what those are and just fill them inn, that way i don't have to count the rest of my life. (testing it in word).
10. After switching out all numbers with letters it gave me 'to obtain access to the next vault, input the formula for the the fourth element; combine mercury, copper and sulfur over heat, add salt and water, infuse gold through air'
11. Will be trying to answer with "combine mercury, copper and sulfur over heat, add salt and water, infuse gold through air".
12. Did not seem to be the correct answer, tried both lower case and capital letters.
13. Could try swapping out the text with symbols, so following these: https://en.wikipedia.org/wiki/Alchemical_symbol
14. Im expecting this to be the answer, if taking the alchemical symbols is correct: "☿♀🜍🜂🜔🜄☉🜁"
15. Answer was correct! Now i just need to code it.

Task 4 -------------------
From experience from previous tasks, i think it would be logical to focus on upper case letters, they are also placed in spots were it grammarly doesn't fit.
I will most likely have to extract the upper case letters
In the first part of the challenge there are 26 upper case letters, i googled what has 26 letters in it, and then it showed up the english alphabet: https://en.wikipedia.org/wiki/English_alphabet
After looking at the text one more time, i can see that all letters in the alphabet are there but not in the correct order. A-Z and also not Z-A
This is the "code" that it spells out: HOPSUMDTLKWIBCNYERGJQXVZFA
I tried using this to translate the letters, but it didn't get me any further https://www.theproblemsite.com/reference/mathematics/codes/backwards-alphabet-code
It just spelled out: SLKHFNWGOPDRYXMBVITQJCEAUZ
Since it is the alphabet a guess would be that if i line those letters up with the actual correct way of writing the alphabet than we could get a translation for the next part of the task. So:
HOPSUMDTLKWIBCNYERGJQXVZFA
ABCDEFGHIJKLMNOPQRSTUVWXYZ
H=A, O=B, P=C etc...
Given that this is the next part of the challenge, i will try to translate it using the translation above:
    'DNIS PNYYUR DNIS DNIS GLIXUR \n' +
    'UHRJT BURPQRF PNYYUR MLRU HLR \n' +
    'MLRU UHRJT IUHS UHRJT GLIXUR\n' +
    'LRNC DNIS GLIXUR VHJUR DNIS\n' +
    'PNYYUR MLRU DNIS LRNC IUHS\n' +
    'UHRJT PNYYUR PNYYUR JLC BURPQRF\n'

    GOLD COPPER GOLD GOLD SILVER              ☉ ♀ ☉ ☉ ☽
    EARTH MERCURY COPPER FIRE AIR             🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽
    FIRE EARTH LEAD EARTH SILVER ---------->  ♂ ☉ ☽ 🜄 ☉
    IRON GOLD SILVER WATER GOLD               ♀ 🜂 ☉ ♂ ♄
    COPPER FIRE GOLD IRON LEAD                🜃 ♀ ♀ ♃ ☿
    EARTH COPPER COPPER TIN MERCURY

Next step would probably be same as the other tasks to translate the elements over to symbols.(Also added it above for convinience)
GOLD → ☉
COPPER → ♀
SILVER → ☽
EARTH → 🜃
MERCURY → ☿
FIRE → 🜂
AIR → 🜁
LEAD → ♄
IRON → ♂
WATER → 🜄
TIN → ♃

The challenge now says to "combine the horizontal and vertical indicies".
The next part is some sort of a table or a grid system. And with a hidden message somewhere inside it.

    ☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿
    🜄 🜂 ♄ 🜂 🜁 🜂 🜄 ☿ 🜁 ☽ ♂ ☽ ♄ ♃ 🜄 ♄ ♀ ♂ ☉ 🜄 ♂ ☽ ♀ ♂ ♀ ♃ ♄ 🜄 ♃
    🜂 ☿ 🜄 ♂ ♀ ♃ ♃ 🜄 ☉ ♂ ♃ 🜂 ♀ 🜂 🜃 🜁 ☉ 🜂 ♀ ♃ ♄ ☽ 🜂 ♂ ♄ ♂ ☉ 🜄 ☉
    🜁 🜄 🜂 ☉ ♃ 🜂 🜂 ☿ 🜁 ☿ ♂ ♀ ♂ ♂ ♃ ☽ ☉ 🜂 ☉ ☽ ☿ ♀ 🜂 🜁 ♄ ♂ 🜃 ☉ ♂
    ☉ 🜂 🜁 ♃ 🜂 ☽ 🜄 ♀ 🜄 🜁 ♃ 🜂 🜂 ♂ 🜂 ♃ ☽ ☽ 🜂 ☉ 🜄 ☉ 🜁 ♀ 🜄 ♃ 🜄 ♂ ☉
    ☽ ♄ 🜃 ♀ 🜄 ♃ 🜁 ♃ 🜃 🜂 🜂 🜂 🜂 ♄ 🜂 🜄 🜃 ♀ 🜁 🜁 🜂 🜃 ☽ 🜁 ☿ 🜂 🜂 ♂ ☽
    ☉ ♄ 🜁 ♄ ☿ ♄ ☉ ☉ ☽ ♄ ♀ ☉ 🜄 ♄ 🜁 ♂ ☿ ☿ 🜄 ♃ ♀ ☿ 🜃 ♂ ☿ ♀ ☽ ♀ 🜃
    ☉ ☿ 🜁 🜂 ♂ ♀ 🜁 🜂 🜁 ☽ 🜂 ♀ ☉ 🜃 ♄ ♃ ♀ ☽ ☽ 🜄 ☉ ♃ 🜂 🜂 🜃 🜄 ♀ ☽ 🜄
    🜃 🜂 ♀ ♀ ☽ 🜃 ☿ ♃ 🜄 🜃 🜃 ☉ ♃ 🜁 ♄ 🜁 🜂 🜁 🜄 🜁 ☽ ♃ 🜂 ♀ 🜃 ☿ ☿ 🜁 🜃
    ☿ ♀ ♀ ☉ ♄ 🜄 ♂ ☽ ☉ ♀ ☿ 🜃 ☿ ♄ ♄ 🜂 🜁 🜃 ☽ ♃ ☿ ♃ ♃ ♂ ♄ ☉ 🜂 ☉ 🜁
    🜄 🜃 ☽ 🜄 ☿ ♀ ☿ 🜃 ☿ ☿ ♀ ☿ 🜁 ♀ ♄ ♄ 🜂 ♄ 🜃 ☽ ♂ ♀ ☿ ☽ ♃ ♂ ♄ ♄ 🜄
    🜃 🜂 🜁 ♄ ♂ ☽ ♀ 🜃 🜁 🜂 ♄ ☿ ☽ ☽ 🜄 🜁 🜃 ☉ ☉ ♄ ♂ ☽ ♃ 🜄 ♃ 🜃 ☿ ♃ ☿
    🜄 ♂ ♀ ♂ ♀ ♂ 🜄 ♀ ♂ 🜂 🜁 🜂 ♄ ☿ ☿ ☽ ♄ ♀ 🜄 ☽ ♂ 🜁 ♃ ☉ 🜄 🜁 🜂 ☉ ♃
    ♄ ♀ ♄ ♀ 🜃 ♂ ♄ 🜂 ♃ 🜄 ♄ ♀ ☽ ♀ ☽ 🜂 🜃 ♂ ♃ 🜂 ♄ 🜂 ♂ ♃ 🜃 ♂ ♄ ☽ ♀
    🜄 ♄ ☽ ☉ 🜃 ☽ ☽ 🜂 ☽ ♀ 🜄 ☉ ♃ ♂ ♄ ♄ ☽ ♄ ☽ ♀ ♀ ♀ 🜄 ♃ 🜃 ♃ ♀ ♀ ♃
    ♂ ☽ 🜃 🜄 ☉ ♀ 🜄 🜄 🜄 ☽ ♂ 🜂 ♃ ☽ 🜃 ♂ ♂ ♀ ☉ ☿ ♂ ♂ ☉ ☽ ☿ ☉ 🜃 🜁 ♀
    🜃 ♄ ♂ 🜂 ☽ ☿ 🜂 🜃 ☉ 🜂 ♄ 🜂 ☿ ♄ 🜃 🜃 ☉ 🜂 ♃ ☽ ☽ ♄ 🜂 ♄ 🜄 ☽ 🜂 ♂ ☿
    ♃ 🜃 ♀ 🜃 🜁 ☽ ☉ ♃ 🜁 ☽ ♄ 🜄 🜄 ☽ 🜃 ♃ ☽ ☉ 🜂 ♃ ☉ 🜁 ☿ 🜃 ☉ 🜃 ☉ 🜄 ☉
    🜁 ♃ 🜁 ☉ ☽ ♄ 🜂 ♀ 🜂 ♃ ☽ ☽ ♃ ☽ ☽ 🜄 🜄 ♀ ☉ ♂ 🜃 ♂ ☉ 🜁 ☿ 🜂 🜃 ♀ ☉
    ♂ 🜁 ☽ 🜄 ☿ ♃ 🜁 ☉ 🜂 ☽ ♂ 🜄 ♂ ♃ ♄ ♄ ☉ ♀ 🜂 ♄ ☿ ♄ ♀ 🜄 ☿ ♄ ☉ 🜄 🜄
    🜂 🜃 ☽ ☉ ☿ 🜂 ♂ ♃ ☿ ☉ ☿ ♄ ☉ ☿ 🜂 🜃 ♀ ☿ ♂ ♃ ♃ ♂ ☉ ♂ ☽ 🜃 🜃 ♂ ♄
    ☽ 🜁 ☽ 🜁 ☉ ☿ ♄ ♂ ☉ ♂ ☉ ♂ 🜄 ♂ 🜄 ☽ 🜂 ♀ ♂ ☉ ♂ 🜃 ♀ ♃ ☉ ♀ ♃ 🜁 ☿
    🜄 ☉ 🜁 ♃ 🜁 ☽ ☿ ☉ ♂ 🜃 🜁 ☽ ☉ 🜃 ♀ ♃ ☉ ♄ ♀ ☿ ♀ 🜁 ♂ ♀ ♄ 🜁 ☽ ☉ ♃
    ♄ ☿ ☽ 🜄 ☿ ☿ ♄ ♃ ♀ ☿ ♄ 🜂 🜄 ☿ ☿ ♃ ♂ 🜁 ♀ ☽ ☉ ☽ 🜁 🜄 🜃 🜄 ☿ ♀ ☿
    ☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉
    🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉
    🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂
    🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉
    🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂
    🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉
    ☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀
    🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉
    ☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀
    ☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂
    ☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀
    ☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂
    ☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂

