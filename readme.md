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

