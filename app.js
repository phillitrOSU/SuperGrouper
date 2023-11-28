/*
    SETUP
*/
const fetch = require("node-fetch");
var cors = require('cors')


// Express
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(cors())
PORT = 9105;

// Handlebars
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.


//Setup css
app.use(express.static(__dirname + '/public'));  

/*
    ROUTES
*/
app.get('/', function(req, res)
    {
        res.render('index');
    });

app.get('/help', function(req, res)
    {
        res.render('help');
    });

app.get('/about', function(req, res)
    {
        res.render('about');
    });



//From: https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a
animalsArr =
[
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

colorsArr = ["Blue", "Aqua", "Purple", "Brown", "Green", "Pink","Orange","Red",
"Gray", "Cyan", "Violet", "Yellow", "Crimson"];


app.get('/animals', function(req, res)
    {
        var amount = req.query.amount;

        //From: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
        const shuffledAnimals = animalsArr.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        let selectedAnimals = shuffledAnimals.slice(0, amount);

        jsonString = JSON.stringify(selectedAnimals);

        animals = JSON.parse(jsonString);

        res.send(animals)

    });

app.get('/colors', function(req, res)
    {
        var amount = req.query.amount;

        //From: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
        const shuffledColors = colorsArr.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        let selectedColors = shuffledColors.slice(0, amount);

        jsonString = JSON.stringify(selectedColors);

        colors = JSON.parse(jsonString);

        res.send(colors)

    });


app.get('/fetch', async function(req, res)
    {

       var amount = 3;
       const response = await fetch(`http://flip4.engr.oregonstate.edu:9105/animals?amount=${amount}`)
       data = await response.json();
       console.log(data);
       res.send(data);
       
    });

async function getRandomAnimalNames(amount){

    const response = await fetch(`http://flip4.engr.oregonstate.edu:9105/animals?amount=${amount}`)

    animalNamesArray = await response.json();

    return animalNamesArray;

};


app.get('/loginpage', async function(req, res)
    {
        res.render('loginpage');
    });




/*
    LISTENER
*/
app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});
