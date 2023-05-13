const words = {
  number: "",
  adjective: "",
  pluralNoun: "",
  adverb: "",
  anotherAdjective: "",
};


/////////////////////////
//Create the Tech Startup MadLib Story!
/////////////////////////
function startMadlib(words){
   words.number= prompt("Give me a number")
   words.adjective=prompt("Give me an adjective")
   words.pluralNoun=prompt("Give me the plural Noun")
   words.adverb= prompt("Give me an adverb")
   words.anotherAdjective= prompt("Give me another adjective")
   let message = `Once upon a time a group of ${words.number} General Assembly graduates
    got together and made a startup called ${words.adjective} Technologies.
    Their goal was to create smart ${words.pluralNoun}.
    They approached the challenge ${words.adverb}
    which ultimately lead them to ${words.anotherAdjective} fame.`;
   alert(message)
   
}
startMadlib(words)

