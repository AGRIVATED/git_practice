//(Math.floor(Math.random()*5)))
// Math.floor rounds down
// (Math.random() runs the RNG between 0 and 1
// *5) the number here chooses the highest number MINUS 1, as zero is one of the options. 
// randomInput(8) function lets you generate a number between 0 and the * input 
//story is comprised of:
//(starter) Start of a sentence. 
//(location) ends in ", ", can include a time if its funny
//(maleName) ends in "met"
//(femaleName) ends in ". "
//(what they did) Start of a sentence, ends in ". as a result: "
//(what happened) ends in ". "
//(The End)



//the arrays of things to be picked from
//given the array name and the array length as a const variable too (might be unnecessary) 
const maleNames1 = ["Fergus","Spamuel","Glinko","Vanya","Popo","Bottlecap","Scooter","Maximus","Dug","Ralf","Klumpo","Dan-Dan"];
const femaleNames1 = ["Befany","Shapipheny","Destinee","Wungongo","Char-Sui","Gruntilda","Suzu","Arthurina","Femalio","Feebee","Lorraine"];
const names2 = ["Mc","O\'","Volvo-","","","","",""];
const names3 = ["Tomothy","Davies","Spork","Ter-Williger","Gubbins","Trousers","Immortal","Smithson","Garcia-Maria","Arlett","Wii-Remote","Churchill","Pers","Fuckface","Fatlips",
  ,"Mooseknuckle"];
const starters = ["One magical evening, ","Yesterday, ","One night, after huffing petrol ",
  "A long time ago, in a galaxy far, far away, ","It was the best of times, It was the worst of times ","My Granny told me one time ",
  "I stayed up after my bedtime 3 weeks ago, then on my walk home, "];
const locations = ["behind the KFC, ","deep within the bowels of the Earth, ","in Wrexham, ","in the middle of Chester Town Centre, ","at my house, ","in Guantanamo Bay, "
  ,"on the Moon, ","in Germany, 1945, ","in a parallel universe, ","5,000 ft in the air, ","in the middle of the mosh pit at the baby sensory session, ","at the Tescos loading bay",
  "in the Ikea staff toilet, ","in front of 14 Privet Drive while 2 magicians, a giant and a baby watched, ","in Limgrave, ", "in a random corner shop in Bangladesh, ",
  "inside the Warner Brothers watertower, "];
const whatHappened = ["It was love at first sight. ","As you can imagine, they got into a bare-knuckle brawl. ","They went to the zoo to throw rocks at the gorillas. ",
  "They both happened to bring a hacksaw, so they talked about that for a while. ","A flash mob started at that very moment, so they danced for around 6 minutes straight. ",
  "What followed cannot possibly be put into words, just know it was foul. ","They carressed each others earlobes until the sun went down. ","They argued at length over the best porn website is. "]
const results = ["It happened to be when Ragnarok occurred, so they battled for the rest of eternity alongside the valiant fallen of Valhalla. ","Blue by Eiffel 65 started playing, so they danced the night away. ",
  "They added each other on mySpace but never spoke again.","This happened to co-incide with nuclear testing, so the pair were instantly vaporised. ",
  "404 ENDING NOT FOUND, ASSUME THEY GOT MARRIED. ","Their tale has been retold many times, most recently in the film called \"Sonic The Hedgehog\". ",
  "Everything faded to black, and the credits rolled. They went on for 30 minutes..."]


const randomInput = highest => {
    return Math.floor(Math.random()*highest)
    
}

const maleNameGenerator = () => {
  let mName1 = maleNames1[randomInput(maleNames1.length)];
  let mName2 = names2[randomInput(names2.length)];
  let mName3 = names3[randomInput(names3.length)];
  return mName1 + " " + mName2 + mName3
}

const femaleNameGenerator = () => {
  let fName1 = femaleNames1[randomInput(femaleNames1.length)];
  let fName2 = names2[randomInput(names2.length)];
  let fName3 = names3[randomInput(names3.length)];
  return fName1 + " " + fName2 + fName3
}

const generateStart = () => {
  let start = starters[randomInput(starters.length)];
  return start;  
}
const generateLocation = () => {
  let location = locations[randomInput(locations.length)];
  return location;
}

const generateWhatHappened = () => {
  let occurence = whatHappened[randomInput(whatHappened.length)];
  return occurence;
}

const generateResult = () => {
  let result = results[randomInput(results.length)];
  return result;
}

const generateMasterpiece = () => {
  let masterpiece = `${generateStart()}${generateLocation()}${maleNameGenerator()} met ${femaleNameGenerator()}. ${generateWhatHappened()}${generateResult()}\nTHE END!` 
  console.log(`${generateStart()}${generateLocation()}${maleNameGenerator()} met ${femaleNameGenerator()}. ${generateWhatHappened()}${generateResult()}\nTHE END!`)
  return masterpiece;
}


//generateMasterpiece()

function startStory() {
  document.getElementById("story").innerHTML = generateMasterpiece();
}
