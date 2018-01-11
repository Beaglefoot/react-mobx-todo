/* eslint import/extensions: off */
import 'src/styles/global.scss';



function ifElseTest(stuff) {
    if(stuff === "pizza") {
        return "food";
    } else if (stuff === "house") {
        return "building";
    } else if (stuff === "table") {
        return "furniture";
    } else if (stuff === "car") {
        return "driving";
    } else if (stuff === "water") {
        return "drink";
    } else if (stuff === "air") {
        return "nothing";
    }
}

function switchTest(stuff) {
    switch (stuff) {
        case "pizza":
            return "food";
            break;

        case "house":
            return "building";
            break;

        case "table":
            return "furniture";
            break;

        case "car":
            return "driving";
            break;

        case "water":
            return "drink";
            break;

        case "air":
            return "nothing";
            break;
    }
}

const lookupTable = {
    "pizza": function() {
        return "food";
    },
    "house": function() {
        return "building";
    },
    "table": function() {
        return "furniture";
    },
    "car": function() {
        return "driving";
    },
    "water": function() {
        return "drink";
    },
    "air":  function() {
        return "nothing";
    }
};



function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const keywords = Object.keys(lookupTable);
const testArray = new Array(100000).fill().map(() => keywords[random(0, keywords.length - 1)]);

const getMs = () => (new Date()).getTime();


const ifElseStartTime = getMs();
const ifElseResult = testArray.map(ifElseTest);
console.log(`if-else: ${getMs() - ifElseStartTime}ms`);

const swithStartTime = getMs();
const swithResult = testArray.map(switchTest);
console.log(`switch: ${getMs() - swithStartTime}ms`);

const lookupStartTime = getMs();
const lookupResult = testArray.map(key => lookupTable[key]());
console.log(`lookup: ${getMs() - lookupStartTime}ms`);
