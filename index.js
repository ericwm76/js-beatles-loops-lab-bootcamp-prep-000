var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = []
 for (var i = 0; i < musicians.length; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`);
}
return array
}

theBeatlesPlay(musicians, instruments);

function johnLennonFacts(facts){
facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice',
];
var array = [];
    var i = 0;
    while (i < facts.length) {
        array.push(facts[i] +'!!!');
        i++;
    }
    return array;
}

function iLoveTheBeatles(num) {
  i = i + 1;
  return i;
}
 
do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < 5);