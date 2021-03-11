// Tests for edabit challenges

const randomBoolean = Boolean(Math.round(Math.random()));
const randomPositiveNumber = Math.ceil(Math.random() * 100);
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;
const randomFloatingNumber = Number((Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2));
const randomNegFloatingNumber = Number((-1 * Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2));
const exampleObject = { "firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];
const exampleString = "Grace Hopper";
const randomIndex = Math.floor(Math.random() * exampleArray.length);
const randomString = exampleArray[randomIndex];

// Triangular Number Sequence
describe('triangle', function() {
    it('should be a defined function', function() {
        expect(typeof triangle).toBe('function');
    });
    it('should return a number when executed', function() {
        expect(typeof triangle()).toBe('number');
    });
    it('should return 1 when passed 1', function() {
        expect(triangle(1)).toBe(1);
    });
    it('should return 3 when passed 2', function() {
        expect(triangle(2)).toBe(3);
    });
    it('should return 6 when passed 3', function() {
        expect(triangle(3)).toBe(6);
    });
    it('should return 36 when passed 8', function() {
        expect(triangle(8)).toBe(36);
    });
    it('should return 2318781 when passed 2153', function() {
        expect(triangle(2153)).toBe(2318781);
    });
})



// Array of Multiples
describe('arrayOfMultiples', function() {
    it('should be a defined function', function() {
        expect(typeof arrayOfMultiples).toBe('function');
    });
    it('should return an array when executed', function() {
        expect(Array.isArray(arrayOfMultiples())).toBe(true);
    });
    it('should return [7, 14, 21, 28, 35] when passed 7 and 5', function() {
        expect(arrayOfMultiples(7,5)).toEqual([7, 14, 21, 28, 35]);
    });
    it('should return [12, 24, 36, 48, 60, 72, 84, 96, 108, 120] when passed 12 and 10', function() {
        expect(arrayOfMultiples(12, 10)).toEqual([12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
    });
    it('should return [17, 34, 51, 68, 85, 102, 119] when passed 17 and 7', function() {
        expect(arrayOfMultiples(17, 7)).toEqual([17, 34, 51, 68, 85, 102, 119]);
    });
    it('should return [630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820] when passed 630 and 14', function() {
        expect(arrayOfMultiples(630, 14)).toEqual([630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820]);
    });
    it('should return [140, 280, 420] when passed 140 and 3', function() {
        expect(arrayOfMultiples(140, 3)).toEqual([140, 280, 420]);
    });
    it('should return [7, 14, 21, 28, 35, 42, 49, 56] when passed 7 and 8', function() {
        expect(arrayOfMultiples(7, 8)).toEqual([7, 14, 21, 28, 35, 42, 49, 56]);
    });
    it('should return [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231] when passed 11 and 21', function() {
        expect(arrayOfMultiples(11, 21)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231]);
    });
})


// Burglary Series (01): Calculate Total Losses
describe('calculateLosses', function() {
    it('should be a defined function', function() {
        expect(typeof calculateLosses).toBe('function');
    });
    it('should return "Lucky you!" when passed in empty object', function() {
        expect(calculateLosses({})).toBe("Lucky you!");
    });
    it('should return 100 when passed {\n' +
        '    tv: 30,\n' +
        '    skate: 20,\n' +
        '    stereo: 50,\n' +
        '}', function() {
        expect(calculateLosses({
            tv: 30,
            skate: 20,
            stereo: 50,
        })).toBe(100);
    });
    it('should return 50001 when passed {\n' +
        '    ring: 30000,\n' +
        '    painting: 20000,\n' +
        '    bust: 1,\n' +
        '}', function() {
        expect(calculateLosses({
            ring: 30000,
            painting: 20000,
            bust: 1,
        })).toBe(50001);
    });
    it('should return 3500 when passed {\n' +
        '    chair: 3500,\n' +
        '}', function() {
        expect(calculateLosses({
            chair: 3500,
        })).toBe(3500);
    });
})



// Integer Digits Count
var random = Math.floor(Math.random() * 100);
describe("count", function() {
    it("should be a defined function", function() {
        expect(typeof count).toBe("function");
    });
    it("should return a number when passed in a number", function() {
        expect(typeof count(random)).toBe("number");
    });
    it("should return 1 when passed 0", function() {
        expect(count(0)).toBe(1);
    });
    it("should return 1 when passed 0", function() {
        expect(count(0)).toBe(1);
    });
    it("should return 3 when passed 318", function() {
        expect(count(318)).toBe(3);
    });
    it("should return 5 when passed -92563", function() {
        expect(count(-92563)).toBe(5);
    });
    it("should return 4 when passed 4666", function() {
        expect(count(4666)).toBe(4);
    });
    it("should return 6 when passed -314890", function() {
        expect(count(-314890)).toBe(6);
    });
    it("should return 6 when passed 654321", function() {
        expect(count(654321)).toBe(6);
    });
    it("should return 6 when passed 638476", function() {
        expect(count(638476)).toBe(6);
    });
    it("should return 5 when passed 12345", function() {
        expect(count(12345)).toBe(5);
    });
    it("should return 7 when passed 1289396", function() {
        expect(count(1289396)).toBe(7);
    });
    it("should return 7 when passed -1232323", function() {
        expect(count(-1232323)).toBe(7);
    });
    it("should return 8 when passed 12839393", function() {
        expect(count(12839393)).toBe(8);
    });
    it("should return 9 when passed -231273683", function() {
        expect(count(-231273683)).toBe(9);
    });
})


// Check if All Values Are True
describe("allTruthy", function() {
    it("should be a defined function", function() {
        expect(typeof allTruthy).toBe("function");
    });
    it("should return a boolean value when passed in an array", function() {
        expect(typeof allTruthy([])).toBe("boolean");
    });
    it("should return true when passed [true, true, true]", function() {
        expect(allTruthy([true, true, true])).toBe(true);
    });
    it("should return true when passed [true]", function() {
        expect(allTruthy([true])).toBe(true);
    });
    it("should return true when passed [Boolean, Number, Object, String]", function() {
        expect(allTruthy([Boolean, Number, Object, String])).toBe(true);
    });
    it("should return true when passed [Infinity, 92347238467.219378, 'Hello World']", function() {
        expect(allTruthy([Infinity, 92347238467.219378, 'Hello World'])).toBe(true);
    });
    it("should return false when passed [false, true, true, true, 20]", function() {
        expect(allTruthy([false, true, true, true, 20])).toBe(false);
    });
    it("should return false when passed [false]", function() {
        expect(allTruthy([false])).toBe(false);
    });
    it("should return false when passed [Infinity, 92347238467.219378, 'Hello World', 0]", function() {
        expect(allTruthy([Infinity, 92347238467.219378, 'Hello World', 0])).toBe(false);
    });
    it("should return false when passed ['', 'r', 'ra', 'rac', 'race']", function() {
        expect(allTruthy(['', 'r', 'ra', 'rac', 'race'])).toBe(false);
    });
    it("should return false when passed [+'Hi!']", function() {
        expect(allTruthy([+'Hi!'])).toBe(false);
    });
    it("should return false when passed [{}.twice]", function() {
        expect(allTruthy([{}.twice])).toBe(false);
    });
    it("should return false when passed [true, 32, Number, [][1]]", function() {
        expect(allTruthy([true, 32, Number, [][1]])).toBe(false);
    });
})


// Instant JAZZ
describe("jazzify", function() {
    it("should be a defined function", function() {
        expect(typeof jazzify).toBe("function");
    });
    it("should return an array when passed in an array", function() {
        expect(Array.isArray(jazzify([]))).toBe(true);
    });
    it("should return ['G7', 'F7', 'C7'] when passed ['G', 'F', 'C']", function() {
        expect(jazzify(['G', 'F', 'C'])).toEqual(['G7', 'F7', 'C7']);
    });
    it("should return ['Dm7', 'G7', 'E7', 'A7'] when passed ['Dm', 'G', 'E', 'A']", function() {
        expect(jazzify(['Dm', 'G', 'E', 'A'])).toEqual(['Dm7', 'G7', 'E7', 'A7']);
    });
    it("should return ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'] when passed ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']", function() {
        expect(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])).toEqual(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']);
    });
    it("should return ['G7', 'C7'] when passed ['G', 'C7']", function() {
        expect(jazzify(['G', 'C7'])).toEqual(['G7', 'C7']);
    });
    it("should return [] when passed []", function() {
        expect(jazzify([])).toEqual([]);
    });
})



// Algebra Sequence — Boxes
describe("boxSeq", function() {
    it("should be a defined function", function() {
        expect(typeof boxSeq).toBe("function");
    });
    it("should return a number when passed in a number", function() {
        expect(typeof boxSeq(random)).toBe("number");
    });
    it("should return 7 when passed 5", function() {
        expect(boxSeq(5)).toBe(7);
    });
    it("should return 0 when passed 0", function() {
        expect(boxSeq(0)).toBe(0);
    });
    it("should return 6 when passed 6", function() {
        expect(boxSeq(6)).toBe(6);
    });
    it("should return 101 when passed 99", function() {
        expect(boxSeq(99)).toBe(101);
    });
    it("should return 2 when passed 2", function() {
        expect(boxSeq(2)).toBe(2);
    });
    it("should return 3 when passed 1", function() {
        expect(boxSeq(1)).toBe(3);
    });
})


// Remove the Letters ABC
describe("removeABC", function() {
    it("should be a defined function", function() {
        expect(typeof removeABC).toBe("function");
    });
    it("should return null when passed in empty string", function() {
        expect(removeABC("")).toBe(null);
    });
    it("should return null when passed in \"hello world!\"", function() {
        expect(removeABC("hello world!")).toBe(null);
    });
    it("should return \"This is wesome\" when passed in \"This is awesome\"", function() {
        expect(removeABC("This is awesome")).toBe("This is wesome");
    });
    it("should return \"This might e  it hrd\" when passed in \"This might be a bit hard\"", function() {
        expect(removeABC("This might be a bit hard")).toBe("This might e  it hrd");
    });
    it("should return \"oding is fun!\" when passed in \"coding is fun!\"", function() {
        expect(removeABC("coding is fun!")).toBe("oding is fun!");
    });
})


// Special Arrays
describe("isSpecialArray", function() {
    it("should be a defined function", function() {
        expect(typeof isSpecialArray).toBe("function");
    });
    it("should return a boolean value when passed an array", function() {
        expect(typeof isSpecialArray([])).toBe("boolean");
    });
    it("should return true when passed [2, 7, 4, 9, 6, 1, 6, 3]", function() {
        expect(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])).toBe(true);
    });
    it("should return true when passed [2, 1, 2, 1]", function() {
        expect(isSpecialArray([2, 1, 2, 1])).toBe(true);
    });
    it("should return true when passed [4, 5, 6, 7]", function() {
        expect(isSpecialArray([4, 5, 6, 7])).toBe(true);
    });
    it("should return true when passed [4, 5, 6, 7, 0, 5]", function() {
        expect(isSpecialArray([4, 5, 6, 7, 0, 5])).toBe(true);
    });
    it("should return false when passed [2, 7, 9, 1, 6, 1, 6, 3]", function() {
        expect(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])).toBe(false);
    });
    it("should return false when passed [2, 7, 8, 8, 6, 1, 6, 3]", function() {
        expect(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])).toBe(false);
    });
    it("should return false when passed [1, 1, 1, 2]", function() {
        expect(isSpecialArray([1, 1, 1, 2])).toBe(false);
    });
    it("should return false when passed [2, 2, 2, 2]", function() {
        expect(isSpecialArray([2, 2, 2, 2])).toBe(false);
    });
})


// Likes vs. Dislikes
describe("likeOrDislike", function() {
    it("should be a defined function", function() {
        expect(typeof likeOrDislike).toBe("function");
    });
    it("should return 'Dislike' when passed in ['Dislike']", function() {
        expect(likeOrDislike(['Dislike'])).toBe("Dislike");
    });
    it("should return 'Nothing' when passed in ['Like', 'Like']", function() {
        expect(likeOrDislike(['Like', 'Like'])).toBe("Nothing");
    });
    it("should return 'Nothing' when passed in ['Dislike', 'Dislike']", function() {
        expect(likeOrDislike(['Dislike', 'Dislike'])).toBe("Nothing");
    });
    it("should return 'Like' when passed in ['Like', 'Like', 'Like']", function() {
        expect(likeOrDislike(['Like', 'Like', 'Like'])).toBe("Like");
    });
    it("should return 'Dislike' when passed in ['Like', 'Dislike']", function() {
        expect(likeOrDislike(['Like', 'Dislike'])).toBe("Dislike");
    });
    it("should return 'Like' when passed in ['Dislike', 'Like']", function() {
        expect(likeOrDislike(['Dislike', 'Like'])).toBe("Like");
    });
    it("should return 'Nothing' when passed in ['Like', 'Dislike', 'Dislike']", function() {
        expect(likeOrDislike(['Like', 'Dislike', 'Dislike'])).toBe("Nothing");
    });
    it("should return 'Dislike' when passed in ['Dislike', 'Like', 'Dislike']", function() {
        expect(likeOrDislike(['Dislike', 'Like', 'Dislike'])).toBe("Dislike");
    });
    it("should return 'Nothing' when passed in []", function() {
        expect(likeOrDislike([])).toBe("Nothing");
    });
    it("should return 'Dislike' when passed in ['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike']", function() {
        expect(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike'])).toBe("Dislike");
    });
    it("should return 'Like' when passed in ['Like', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Like', 'Like']", function() {
        expect(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Like', 'Like'])).toBe("Like");
    });
    it("should return 'Nothing' when passed in ['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Dislike', 'Dislike']", function() {
        expect(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Dislike', 'Dislike'])).toBe("Nothing");
    });
    it("should return 'Dislike' when passed in ['Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike']", function() {
        expect(likeOrDislike(['Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike'])).toBe("Dislike");
    });
})


// Factor Chain
describe("factorChain", function() {
    it("should be a defined function", function() {
        expect(typeof factorChain).toBe("function");
    });
    it("should return a boolean value when passed in an array", function() {
        expect(typeof factorChain([])).toBe("boolean");
    });
    it("should return true when passed in [1, 2, 4, 8, 16, 32]", function() {
        expect(factorChain([1, 2, 4, 8, 16, 32])).toBe(true);
    });
    it("should return true when passed in [1, 1, 1, 1, 1, 1]", function() {
        expect(factorChain([1, 1, 1, 1, 1, 1])).toBe(true);
    });
    it("should return true when passed in [10, 20, 40]", function() {
        expect(factorChain([10, 20, 40])).toBe(true);
    });
    it("should return true when passed in [1, 1, 1, 1, 7, 49]", function() {
        expect(factorChain([1, 1, 1, 1, 7, 49])).toBe(true);
    });
    it("should return false when passed in [2, 4, 6, 7, 12]", function() {
        expect(factorChain([2, 4, 6, 7, 12])).toBe(false);
    });
    it("should return false when passed in [10, 1]", function() {
        expect(factorChain([10, 1])).toBe(false);
    });
    it("should return false when passed in [10, 20, 30, 40]", function() {
        expect(factorChain([10, 20, 30, 40])).toBe(false);
    });
})


// Is Johnny Making Progress?
describe("progressDays", function() {
    it("should be a defined function", function() {
        expect(typeof progressDays).toBe("function");
    });
    it("should return a number when passed in an array", function() {
        expect(typeof progressDays([])).toBe("number");
    });
    it("should return 2 when passed in [3, 4, 1, 2]", function() {
        expect(progressDays([3, 4, 1, 2])).toBe(2);
    });
    it("should return 3 when passed in [10, 11, 12, 9, 10]", function() {
        expect(progressDays([10, 11, 12, 9, 10])).toBe(3);
    });
    it("should return 1 when passed in [6, 5, 4, 3, 2, 9]", function() {
        expect(progressDays([6, 5, 4, 3, 2, 9])).toBe(1);
    });
    it("should return 0 when passed in [9, 9]", function() {
        expect(progressDays([9, 9])).toBe(0);
    });
    it("should return 2 when passed in [12, 11, 10, 12, 11, 13]", function() {
        expect(progressDays([12, 11, 10, 12, 11, 13])).toBe(2);
    });
})


// Purge and Organize
describe("uniqueSort", function () {
    it("should be a defined function", function() {
        expect(typeof uniqueSort).toBe("function");
    });
    it("should return an array when passed an array", function() {
        expect(Array.isArray(uniqueSort([]))).toBe(true);
    });
    it("should return [1, 2, 3, 4, 5, 8, 10] when passed in [1, 5, 8, 2, 3, 4, 4, 4, 10]",  function() {
        expect(uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10])).toEqual([1, 2, 3, 4, 5, 8, 10]);
    });
    it("should return [1, 2, 4, 5, 7] when passed in [1, 2, 5, 4, 7, 7, 7]",  function() {
        expect(uniqueSort([1, 2, 5, 4, 7, 7, 7])).toEqual([1, 2, 4, 5, 7]);
    });
    it("should return [0, 1, 2, 3, 4, 5, 6, 7] when passed in [7, 6, 5, 4, 3, 2, 1, 0, 1]",  function() {
        expect(uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1])).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });
    it("should return [1, 3, 4, 5, 6, 27, 100] when passed in [3, 6, 5, 4, 3, 27, 1, 100, 1]",  function() {
        expect(uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1])).toEqual([1, 3, 4, 5, 6, 27, 100]);
    });
    it("should return [-87, -9, -4.323827, -3.1415, -3.1414, 8] when passed in [-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]",  function() {
        expect(uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415])).toEqual([-87, -9, -4.323827, -3.1415, -3.1414, 8]);
    });
});


// Something in the Box?
describe("inBox", function() {
    it("should be a defined function", function() {
        expect(typeof inBox).toBe("function");
    });
    it("should return a boolean value when passed in an array", function () {
        expect(typeof inBox([])).toBe("boolean");
    });
    it("should return false when passed [\n" +
        "\t\t\"###\", \n" +
        "\t\t\"# #\", \n" +
        "\t\t\"###\"\n" +
        "\t]", function() {
        expect(inBox([
            "###",
            "# #",
            "###"
        ])).toBe(false);
    });
    it("should return false when passed [\n" +
        "\t\t\"####\", \n" +
        "\t\t\"#  #\", \n" +
        "\t\t\"#  #\", \n" +
        "\t\t\"####\"\n" +
        "\t]", function() {
        expect(inBox([
            "####",
            "#  #",
            "#  #",
            "####"
        ])).toBe(false);
    });
    it("should return false when passed in [\n" +
        "\t\t\"#####\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"#####\"\n" +
        "\t]", function() {
        expect(inBox([
            "#####",
            "#   #",
            "#   #",
            "#   #",
            "#####"
        ])).toBe(false);
    });
    it("should return true when passed in [\n" +
        "\t\t\"###\", \n" +
        "\t\t\"#*#\", \n" +
        "\t\t\"###\"\n" +
        "\t]", function() {
        expect(inBox([
            "###",
            "#*#",
            "###"
        ])).toBe(true);
    });
    it("should return true when passed [\n" +
        "\t\t\"####\", \n" +
        "\t\t\"# *#\", \n" +
        "\t\t\"#  #\", \n" +
        "\t\t\"####\"\n" +
        "\t]", function() {
        expect(inBox([
            "####",
            "# *#",
            "#  #",
            "####"
        ])).toBe(true);
    });
    it("should return true when passed in [\n" +
        "\t\t\"#####\", \n" +
        "\t\t\"#  *#\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"#####\"\n" +
        "\t]", function() {
        expect(inBox([
            "#####",
            "#  *#",
            "#   #",
            "#   #",
            "#####"
        ])).toBe(true);
    });
    it("should return true when passed in [\n" +
        "\t\t\"#####\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"# * #\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"#####\"\n" +
        "\t]", function() {
        expect(inBox([
            "#####",
            "#   #",
            "# * #",
            "#   #",
            "#####"
        ])).toBe(true);
    });
    it("should return true when passed in [\n" +
        "\t\t\"#####\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"# * #\", \n" +
        "\t\t\"#####\"\n" +
        "\t]", function() {
        expect(inBox([
            "#####",
            "#   #",
            "#   #",
            "# * #",
            "#####"
        ])).toBe(true);
    });
    it("should return true when passed in [\n" +
        "\t\t\"#####\", \n" +
        "\t\t\"#*  #\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"#   #\", \n" +
        "\t\t\"#####\"\n" +
        "\t]", function() {
        expect(inBox([
            "#####",
            "#*  #",
            "#   #",
            "#   #",
            "#####"
        ])).toBe(true);
    });
})


// Capitalize the First Letter of Each Word
describe("makeTitle", function() {
    it("should be a defined function", function() {
        expect(typeof makeTitle).toBe("function");
    });
    it("should return a string when executed", function() {
        expect(typeof makeTitle("")).toBe("string");
    });
    it("should return 'I Am A Title' when passed in 'I am a title'", function() {
        expect(makeTitle("I am a title")).toBe("I Am A Title");
    });
    it("should return 'I AM A TITLE' when passed in 'I AM A TITLE'", function() {
        expect(makeTitle("I AM A TITLE")).toBe("I AM A TITLE");
    });
    it("should return 'I AM A TITLE' when passed in 'i aM a tITLE'", function() {
        expect(makeTitle("i aM a tITLE")).toBe("I AM A TITLE");
    });
    it("should return 'The First Letter Of Every Word Is Capitalized' when passed in 'the first letter of every word is capitalized'", function() {
        expect(makeTitle("the first letter of every word is capitalized")).toBe("The First Letter Of Every Word Is Capitalized");
    });
    it("should return 'I LIke Pizza' when passed in 'I Like Pizza'", function() {
        expect(makeTitle("I Like Pizza")).toBe("I Like Pizza");
    });
    it("should return 'Don't Count Your ChiCKens BeFore They HatCh' when passed in 'Don't count your ChiCKens BeFore They HatCh'", function() {
        expect(makeTitle("Don't count your ChiCKens BeFore They HatCh")).toBe("Don't Count Your ChiCKens BeFore They HatCh");
    });
    it("should return 'All Generalizations Are False, Including This One' when passed in 'All generalizations are false, including this one'", function() {
        expect(makeTitle("All generalizations are false, including this one")).toBe("All Generalizations Are False, Including This One");
    });
    it("should return 'Me And My Wife Lived Happily For Twenty Years And Then We Met.' when passed in 'Me and my wife lived happily for twenty years and then we met.'", function() {
        expect(makeTitle("Me and my wife lived happily for twenty years and then we met.")).toBe("Me And My Wife Lived Happily For Twenty Years And Then We Met.");
    });
    it("should return 'There Are No Stupid Questions, Just Stupid People.' when passed in 'There are no stupid questions, just stupid people.'", function() {
        expect(makeTitle("There are no stupid questions, just stupid people.")).toBe("There Are No Stupid Questions, Just Stupid People.");
    });
    it("should return '1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d' when passed in '1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d'", function() {
        expect(makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d")).toBe("1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d");
    });
    it("should return 'PIZZA PIZZA PIZZA' when passed 'PIZZA PIZZA PIZZA'", function() {
        expect(makeTitle("PIZZA PIZZA PIZZA")).toBe("PIZZA PIZZA PIZZA");
    });
})


// Find the Mean of All Digits
describe("mean", function() {
    it("should be a defined function", function() {
        expect(typeof mean).toBe("function");
    });
    it("should return a number when passed in a number", function() {
        expect(typeof mean(random)).toBe("number");
    });
    it("should return 6 when passed in 666", function() {
        expect(mean(666)).toBe(6);
    });
    it("should return 4 when passed in 80", function() {
        expect(mean(80)).toBe(4);
    });
    it("should return 8 when passed in 789", function() {
        expect(mean(789)).toBe(8);
    });
    it("should return 4 when passed in 417", function() {
        expect(mean(417)).toBe(4);
    });
    it("should return 4 when passed in 1357", function() {
        expect(mean(1357)).toBe(4);
    });
    it("should return 3 when passed in 42", function() {
        expect(mean(42)).toBe(3);
    });
    it("should return 3 when passed in 12345", function() {
        expect(mean(12345)).toBe(3);
    });
})


// Capitalize the Names
describe("capMe", function() {
    it("should be a defined function", function() {
        expect(typeof capMe).toBe("function");
    });
    it("should return an array when passed in an array", function() {
        expect(Array.isArray(capMe([]))).toBe(true);
    });
    it("should return ['Mavis', 'Senaida', 'Letty'] when passed in ['mavis', 'senaida', 'letty']", function() {
        expect(capMe(['mavis', 'senaida', 'letty'])).toEqual(['Mavis', 'Senaida', 'Letty']);
    });
    it("should return ['Samuel', 'Mabelle', 'Letitia', 'Meridith'] when passed in ['samuel', 'MABELLE', 'letitia', 'meridith']", function() {
        expect(capMe(['samuel', 'MABELLE', 'letitia', 'meridith'])).toEqual(['Samuel', 'Mabelle', 'Letitia', 'Meridith']);
    });
    it("should return ['Slyvia', 'Kristal', 'Sharilyn', 'Calista'] when passed in ['Slyvia', 'Kristal', 'Sharilyn', 'Calista']", function() {
        expect(capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista'])).toEqual(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']);
    });
    it("should return ['Kristopher', 'Oliva', 'Herminia'] when passed in ['krisTopher', 'olIva', 'herminiA']", function() {
        expect(capMe(['krisTopher', 'olIva', 'herminiA'])).toEqual(['Kristopher', 'Oliva', 'Herminia']);
    });
    it("should return ['Luke', 'Marsha', 'Stanford'] when passed in ['luke', 'marsha', 'stanford']", function() {
        expect(capMe(['luke', 'marsha', 'stanford'])).toEqual(['Luke', 'Marsha', 'Stanford']);
    });
    it("should return ['Kara'] when passed in ['kara']", function() {
        expect(capMe(['kara'])).toEqual(['Kara']);
    });
    it("should return ['Mariann', 'Joi', 'Georgeann'] when passed in ['mARIANN', 'jOI', 'gEORGEANN']", function() {
        expect(capMe(['mARIANN', 'jOI', 'gEORGEANN'])).toEqual(['Mariann', 'Joi', 'Georgeann']);
    });
})


// Iterated Square Root
describe("iSqrt", function() {
    it("should be a defined function", function() {
        expect(typeof iSqrt).toBe("function");
    });
    it("should return 0 when passed 1", function() {
        expect(iSqrt(1)).toBe(0);
    });
    it("should return 1 when passed 2", function() {
        expect(iSqrt(2)).toBe(1);
    });
    it("should return 2 when passed 7", function() {
        expect(iSqrt(7)).toBe(2);
    });
    it("should return 3 when passed 27", function() {
        expect(iSqrt(27)).toBe(3);
    });
    it("should return 4 when passed 256", function() {
        expect(iSqrt(256)).toBe(4);
    });
    it("should return 'invalid' when passed -1", function() {
        expect(iSqrt(-1)).toBe("invalid");
    });
    it("should return 3 when passed 25", function() {
        expect(iSqrt(25)).toBe(3);
    });
    it("should return 3 when passed 59", function() {
        expect(iSqrt(59)).toBe(3);
    });
    it("should return 3 when passed 113", function() {
        expect(iSqrt(113)).toBe(3);
    });
    it("should return 3 when passed 253", function() {
        expect(iSqrt(253)).toBe(3);
    });
    it("should return 4 when passed 965", function() {
        expect(iSqrt(965)).toBe(4);
    });
    it("should return 4 when passed 999", function() {
        expect(iSqrt(999)).toBe(4);
    });
    it("should return 4 when passed 2746", function() {
        expect(iSqrt(2746)).toBe(4);
    });
    it("should return 4 when passed 2872", function() {
        expect(iSqrt(2872)).toBe(4);
    });
    it("should return 4 when passed 4069", function() {
        expect(iSqrt(4069)).toBe(4);
    });
    it("should return 4 when passed 6575", function() {
        expect(iSqrt(6575)).toBe(4);
    });
    it("should return 4 when passed 7985", function() {
        expect(iSqrt(7985)).toBe(4);
    });
    it("should return 4 when passed 8385", function() {
        expect(iSqrt(8385)).toBe(4);
    });
    it("should return 4 when passed 16943", function() {
        expect(iSqrt(16943)).toBe(4);
    });
    it("should return 4 when passed 26749", function() {
        expect(iSqrt(26749)).toBe(4);
    });
    it("should return 4 when passed 34665", function() {
        expect(iSqrt(34665)).toBe(4);
    });
    it("should return 4 when passed 44591", function() {
        expect(iSqrt(44591)).toBe(4);
    });
    it("should return 4 when passed 50320", function() {
        expect(iSqrt(50320)).toBe(4);
    });
    it("should return 5 when passed 66343", function() {
        expect(iSqrt(66343)).toBe(5);
    });
    it("should return 5 when passed 69420", function() {
        expect(iSqrt(69420)).toBe(5);
    });
    it("should return 5 when passed 77632", function() {
        expect(iSqrt(77632)).toBe(5);
    });
    it("should return 5 when passed 97197", function() {
        expect(iSqrt(97197)).toBe(5);
    });
    it("should return 5 when passed 108787", function() {
        expect(iSqrt(108787)).toBe(5);
    });
    it("should return 5 when passed 229276", function() {
        expect(iSqrt(229276)).toBe(5);
    });
    it("should return 5 when passed 319228", function() {
        expect(iSqrt(319228)).toBe(5);
    });
    it("should return 5 when passed 426748", function() {
        expect(iSqrt(426748)).toBe(5);
    });
    it("should return 5 when passed 595996", function() {
        expect(iSqrt(595996)).toBe(5);
    });
    it("should return 5 when passed 652940", function() {
        expect(iSqrt(652940)).toBe(5);
    });
    it("should return 5 when passed 709442", function() {
        expect(iSqrt(709442)).toBe(5);
    });
    it("should return 5 when passed 881414", function() {
        expect(iSqrt(881414)).toBe(5);
    });
    it("should return 5 when passed 954281", function() {
        expect(iSqrt(954281)).toBe(5);
    });
    it("should return 6 when passed 4294967296", function() {
        expect(iSqrt(4294967296)).toBe(6);
    });
    it("should return 6 when passed 9852481428", function() {
        expect(iSqrt(9852481428)).toBe(6);
    });
    it("should return 'invalid' when passed -198329", function() {
        expect(iSqrt(-198329)).toBe("invalid");
    });
    it("should return 'invalid' when passed -928437002", function() {
        expect(iSqrt(-928437002)).toBe("invalid");
    });
})


// Neutralisation




// Burglary Series (04): Add its Name
describe("addName", function() {
    it("should be a defined function", function() {
        expect(typeof addName).toBe("function");
    });
    it("should return {Brutus: 300} when passed in {}, \"Brutus\", 300)", function() {
        expect(addName({}, "Brutus", 300)).toEqual({Brutus: 300});
    });
    it("should return {piano: 500, Brutus: 400} when passed in {piano: 500}, \"Brutus\", 400", function() {
        expect(addName({piano: 500}, "Brutus", 400)).toEqual({piano: 500, Brutus: 400});
    });
    it("should return {piano: 500,  stereo: 300, Caligula: 440} when passed in {piano: 500, stereo: 300}, \"Caligula\", 440", function() {
        expect(addName({piano: 500, stereo: 300}, "Caligula", 440)).toEqual({piano: 500,  stereo: 300, Caligula: 440});
    });
})


// Converting Objects to Arrays
describe("toArray", function() {
    it("should be a defined function", function() {
        expect(typeof toArray).toBe("function");
    });
    it("should return an array when executed", function() {
        expect(Array.isArray(toArray({}))).toBe(true);
    });
    it("should return an empty array when passed an empty object", function() {
        expect(toArray({})).toEqual([]);
    });
    it("should return [[\"a\", 1], [\"b\", 2]] when passed in { a: 1, b: 2 }", function() {
        expect(toArray({ a: 1, b: 2 })).toEqual([["a", 1], ["b", 2]]);
    });
    it("should return [[\"foo\", 33], [\"bar\", 45], [\"baz\", 67]] when passed in { foo: 33, bar: 45, baz: 67 }", function() {
        expect(toArray({ foo: 33, bar: 45, baz: 67 })).toEqual([["foo", 33], ["bar", 45], ["baz", 67]]);
    });
    it("should return [[\"shrimp\", 15], [\"tots\", 12]] when passed in { shrimp: 15, tots: 12 }", function() {
        expect(toArray({ shrimp: 15, tots: 12 })).toEqual([["shrimp", 15], ["tots", 12]]);
    });
})


// Concatenate Variable Number of Input Arrays
describe("concat", function() {
    it("should be a defined function", function() {
        expect(typeof concat).toBe("function");
    });
    it("should return an array when executed", function() {
        expect(Array.isArray(concat([]))).toBe(true);
    });
    it("should return [1, 2, 3, 4, 5, 6, 7] if passed in [1, 2, 3], [4, 5], [6, 7]", function() {
        expect(concat([1, 2, 3], [4, 5], [6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    it("should return [1, 2, 3, 4, 5, 6, 7] if passed in [1], [2], [3], [4], [5], [6], [7]", function() {
        expect(concat([1], [2], [3], [4], [5], [6], [7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    it("should return [1, 2, 3, 4] if passed in [1, 2], [3, 4]", function() {
        expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });
    it("should return [4, 4, 4, 4, 4] if passed in [4, 4, 4, 4, 4]", function() {
        expect(concat([4, 4, 4, 4, 4])).toEqual([4, 4, 4, 4, 4]);
    });
    it("should return ['a', 'b', 'c'] if passed in ['a'], ['b', 'c']", function() {
        expect(concat(['a'], ['b', 'c'])).toEqual(['a', 'b', 'c']);
    });
})


// Convenience Store
describe("changeEnough", function() {
    it("should be a defined function", function() {
        expect(typeof changeEnough).toBe("function");
    });
    it("should return a boolean value when executed", function() {
        expect(typeof changeEnough([0, 0, 0, 0], random)).toBe("boolean");
    });
    it("should return false when passed in [2, 100, 0, 0], 14.11", function() {
        expect(changeEnough([2, 100, 0, 0], 14.11)).toBe(false);
    });
    it("should return true when passed in [0, 0, 20, 5], 0.75", function() {
        expect(changeEnough([0, 0, 20, 5], 0.75)).toBe(true);
    });
    it("should return true when passed in [30, 40, 20, 5], 12.55", function() {
        expect(changeEnough([30, 40, 20, 5], 12.55)).toBe(true);
    });
    it("should return false when passed in [10, 0, 0, 50], 13.85", function() {
        expect(changeEnough([10, 0, 0, 50], 13.85)).toBe(false);
    });
    it("should return false when passed in [1, 0, 5, 219], 19.99", function() {
        expect(changeEnough([1, 0, 5, 219], 19.99)).toBe(false);
    });
    it("should return true when passed in [1, 0, 2555, 219], 127.75", function() {
        expect(changeEnough([1, 0, 2555, 219], 127.75)).toBe(true);
    });
    it("should return true when passed in [1, 335, 0, 219], 35.21", function() {
        expect(changeEnough([1, 335, 0, 219], 35.21)).toBe(true);
    });
})


// Convert Key, Values in an Object to Array
describe("objectToArray", function() {
    it("should be a defined function", function() {
        expect(typeof objectToArray).toBe("function");
    });
    it("should return an array when passed in an object", function() {
        expect(Array.isArray(objectToArray({}))).toBe(true);
    });
    it("should return [[\"D\", 1], [\"B\", 2], [\"C\", 3]] when passed in {\n" +
        "\tD: 1, \n" +
        "  B: 2, \n" +
        "  C: 3\n" +
        "}", function() {
        expect(objectToArray({
            D: 1,
            B: 2,
            C: 3
        })).toEqual([["D", 1], ["B", 2], ["C", 3]]);
    });
    it("should return [[\"likes\", 2], [\"dislikes\", 3], [\"followers\", 10]] when passed in {\n" +
        "\tlikes: 2, \n" +
        "  dislikes: 3, \n" +
        "  followers: 10\n" +
        "}", function() {
        expect(objectToArray({
            likes: 2,
            dislikes: 3,
            followers: 10
        })).toEqual([["likes", 2], ["dislikes", 3], ["followers", 10]]);
    });
})


// Sort the Unsortable
describe("sortIt", function() {
    it("should be a defined function", function() {
        expect(typeof sortIt).toBe("function");
    });
    it("should return an array when executed", function() {
        expect(Array.isArray(sortIt([]))).toBe(true);
    });
    it("should return [1, 3, 4] when passed in [4, 1, 3]", function() {
        expect(sortIt([4, 1, 3])).toEqual([1, 3, 4]);
    });
    it("should return [[1], [3], [4]] when passed in [[4], [1], [3]]", function() {
        expect(sortIt([[4], [1], [3]])).toEqual([[1], [3], [4]]);
    });
    it("should return [[1], 3, 4] when passed in [4, [1], 3]", function() {
        expect(sortIt([4, [1], 3])).toEqual([[1], 3, 4]);
    });
    it("should return [1, [3], [4]] when passed in [[4], 1, [3]]", function() {
        expect(sortIt([[4], 1, [3]])).toEqual([1, [3], [4]]);
    });
    it("should return [1, [2], [3], 4, [5], 6] when passed in [[3], 4, [2], [5], 1, 6]", function() {
        expect(sortIt([[3], 4, [2], [5], 1, 6])).toEqual([1, [2], [3], 4, [5], 6]);
    });
    it("should return [1, [3], [5], 6, 7, [9]] when passed in [[3], 7, [9], [5], 1, 6]", function() {
        expect(sortIt([[3], 7, [9], [5], 1, 6])).toEqual([1, [3], [5], 6, 7, [9]]);
    });
    it("should return [[0], 1, [3], [5], 6, 7, [9] when passed in [[3], 7, [9], [5], 1, 6, [0]]", function() {
        expect(sortIt([[3], 7, [9], [5], 1, 6, [0]])).toEqual([[0], 1, [3], [5], 6, 7, [9]]);
    });
})


// Finding Nemo
describe("findNemo", function() {
    it("should be a defined function", function() {
        expect(typeof findNemo).toBe("function");
    });
    it("should return a string when passed in a string", function() {
        expect(typeof findNemo("")).toBe("string");
    });
    it("should return 'I can\'t find Nemo :(' when passed in an empty string", function() {
        expect(findNemo("")).toBe("I can't find Nemo :(");
    });
    it("should return 'I found Nemo at 5!' when passed in 'I am Ne mo Nemo !'", function() {
        expect(findNemo("I am Ne mo Nemo !")).toBe("I found Nemo at 5!");
    });
    it("should return 'I found Nemo at 8!' when passed in 'N e m o is NEMO NeMo Nemo !'", function() {
        expect(findNemo("N e m o is NEMO NeMo Nemo !")).toBe("I found Nemo at 8!");
    });
    it("should return 'I found Nemo at 5!' when passed in 'I am Nemo's dad Nemo senior.'", function() {
        expect(findNemo("I am Nemo's dad Nemo senior.")).toBe("I found Nemo at 5!");
    });
    it("should return 'I can\'t find Nemo :(' when passed in 'Oh, hello!'", function() {
        expect(findNemo("Oh, hello!")).toBe("I can't find Nemo :(");
    });
    it("should return 'I can\'t find Nemo :(' when passed in 'Is it Nemos, Nemona, Nemoor or Garfield?'", function() {
        expect(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?")).toBe("I can't find Nemo :(");
    });
    it("should return 'I found Nemo at 1!' when passed in 'Nemo is a clown fish, he has white and orange stripes. Nemo , come back!'", function() {
        expect(findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!")).toBe("I found Nemo at 1!");
    });
})


// Return the Middle Character(s) of a String
describe("getMiddle", function() {
    it("should be a defined function", function() {
        expect(typeof getMiddle).toBe("function");
    });
    it("should return a string when executed", function() {
        expect(typeof getMiddle("")).toBe("string");
    });
    it("should return 'es' when passed in 'test'", function() {
        expect(getMiddle("test")).toBe("es");
    });
    it("should return 't' when passed in 'testing'", function() {
        expect(getMiddle("testing")).toBe("t");
    });
    it("should return 'dd' when passed in 'middle'", function() {
        expect(getMiddle("middle")).toBe("dd");
    });
    it("should return 'A' when passed in 'A'", function() {
        expect(getMiddle("A")).toBe("A");
    });
    it("should return 'bi' when passed in 'inhabitant'", function() {
        expect(getMiddle("inhabitant")).toBe("bi");
    });
    it("should return 'o' when passed in 'brown'", function() {
        expect(getMiddle("brown")).toBe("o");
    });
    it("should return 'aw' when passed in 'pawn'", function() {
        expect(getMiddle("pawn")).toBe("aw");
    });
    it("should return 'i' when passed in 'cabinet'", function() {
        expect(getMiddle("cabinet")).toBe("i");
    });
    it("should return 'e' when passed in 'fresh'", function() {
        expect(getMiddle("fresh")).toBe("e");
    });
    it("should return 'or' when passed in 'shorts'", function() {
        expect(getMiddle("shorts")).toBe("or");
    });
})


// Reverse the Odd Length Words
describe("reverseOdd", function() {
    it("should be a defined function", function() {
        expect(typeof reverseOdd).toBe("function");
    });
    it("should return a string when executed", function() {
        expect(typeof reverseOdd("")).toBe("string");
    });
    it("should return '' when passed in an empty string", function() {
        expect(reverseOdd("")).toBe("");
    });
    it("should return 'enO owt eerht four' when passed in 'One two three four'", function() {
        expect(reverseOdd("One two three four")).toBe("enO owt eerht four");
    });
    it("should return 'Make sure you only reverse words of odd length' when passed in 'Make sure uoy only esrever sdrow of ddo length'", function() {
        expect(reverseOdd("Make sure uoy only esrever sdrow of ddo length")).toBe("Make sure you only reverse words of odd length")
    });
    it("should return 'sananaB' when passed in 'Bananas'", function() {
        expect(reverseOdd("Bananas")).toBe("sananaB");
    });
    it("should return 'ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo' when passed in 'Odd odd odd odd odd odd odd odd odd odd odd'", function() {
        expect(reverseOdd("Odd odd odd odd odd odd odd odd odd odd odd")).toBe("ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo");
    });
})


// Game of Thrones: Character Titles
describe("correctTitle",  function() {
    it("should be a defined function", function() {
        expect(typeof correctTitle).toBe("function");
    });
    it("should return a string when executed", function() {
        expect(typeof correctTitle("")).toBe("string");
    });
    it("should return 'Sansa Stark, Lady of Winterfell.' when passed in 'sansa stark, lady of winterfell.'", function() {
        expect(correctTitle("sansa stark, lady of winterfell.")).toBe("Sansa Stark, Lady of Winterfell.");
    });
    it("should return 'Lord Eddard Stark, Hand of the King.' when passed in 'lord eddard stark, hand of the king.'", function() {
        expect(correctTitle("lord eddard stark, hand of the king.")).toBe("Lord Eddard Stark, Hand of the King.");
    });
    it("should return 'Jaime Lannister, Lord Commander of the Kingsguard.' when passed in 'jaime lannister, lord commander of the kingsguard.'", function() {
        expect(correctTitle("jaime lannister, lord commander of the kingsguard.")).toBe("Jaime Lannister, Lord Commander of the Kingsguard.");
    });
    it("should return 'Varys, Master of Whisperers.' when passed in 'varys, master of whisperers.'", function() {
        expect(correctTitle("varys, master of whisperers.")).toBe("Varys, Master of Whisperers.");
    });
    it("should return 'Doran Martell, Prince of Dorne, Lord of Sunspear.' when passed in 'doran martell, prince of dorne, lord of sunspear.'", function() {
        expect(correctTitle("doran martell, prince of dorne, lord of sunspear.")).toBe("Doran Martell, Prince of Dorne, Lord of Sunspear.");
    });
    it("should return 'Tyrion Lannister, Hand of the Queen.' when passed in 'TYRION LANNISTER, HAND OF THE QUEEN.'", function() {
        expect(correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")).toBe("Tyrion Lannister, Hand of the Queen.");
    });
    it("should return 'Grand Maester Pycelle.' when passed in 'GRAND MAESTER PYCELLE.'", function() {
        expect(correctTitle("GRAND MAESTER PYCELLE.")).toBe("Grand Maester Pycelle.");
    });
    it("should return 'Euron Greyjoy, King of the Iron Islands, Lord Reaper of Pyke.' when passed in 'EURON GREYJOY, KING OF THE IRON ISLANDS, LORD REAPER OF PYKE.'", function() {
        expect(correctTitle("EURON GREYJOY, KING OF THE IRON ISLANDS, LORD REAPER OF PYKE.")).toBe("Euron Greyjoy, King of the Iron Islands, Lord Reaper of Pyke.");
    });
    it("should return 'Petyr Baelish, Lord Protector of the Vale.' when passed in 'PETYR BAELISH, LORD PROTECTOR OF THE VALE.'", function() {
        expect(correctTitle("PETYR BAELISH, LORD PROTECTOR OF THE VALE.")).toBe("Petyr Baelish, Lord Protector of the Vale.");
    });
    it("should return 'Mance Rayder, King-Beyond-the-Wall.' when passed in 'MANCE RAYDER, KING-BEYOND-THE-WALL.'", function() {
        expect(correctTitle("MANCE RAYDER, KING-BEYOND-THE-WALL.")).toBe("Mance Rayder, King-Beyond-the-Wall.");
    });
    it("should return 'Jon Snow, King in the North.' when passed in 'jOn SnoW, kINg IN thE noRth.'", function() {
        expect(correctTitle("jOn SnoW, kINg IN thE noRth.")).toBe("Jon Snow, King in the North.");
    });
    it("should return 'Jeor Mormont, Lord Commander of the Night's Watch.' when passed in 'Jeor MORMONT, Lord COMMANDER of the NIGHT'S WATCH.'", function() {
        expect(correctTitle("Jeor MORMONT, Lord COMMANDER of the NIGHT'S WATCH.")).toBe("Jeor Mormont, Lord Commander of the Night's Watch.");
    });
    it("should return 'Cersei Lannister, Queen of the Andals and the First Men, Protector of the Seven Kingdoms.' when passed in 'cERSei LANnIStEr, QuEEn Of the aNdals and THE fIRSt men, PROtecTOR OF tHe SEVEN KInGdOmS.'", function() {
        expect(correctTitle("cERSei LANnIStEr, QuEEn Of the aNdals and THE fIRSt men, PROtecTOR OF tHe SEVEN KInGdOmS.")).toBe("Cersei Lannister, Queen of the Andals and the First Men, Protector of the Seven Kingdoms.");
    });
    it("should return 'Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains.' when passed in 'DAeneRYS StOrmboRn oF hOuse TARGARYEn, ThE FirsT OF HER naMe, QUeEn OF The ANdAlS And THe FirsT mEN, PROtECtOr Of tHE SEven KinGDOmS, The MoTHeR of DrAGONS, thE KhALeEsi oF THE GReAt gRAss sEa, The UnburNT, The BReakEr of cHAInS.'", function() {
        expect(correctTitle("DAeneRYS StOrmboRn oF hOuse TARGARYEn, ThE FirsT OF HER naMe, QUeEn OF The ANdAlS And THe FirsT mEN, PROtECtOr Of tHE SEven KinGDOmS, The MoTHeR of DrAGONS, thE KhALeEsi oF THE GReAt gRAss sEa, The UnburNT, The BReakEr of cHAInS.")).toBe("Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains.");
    });
})

// Is it an Object?
describe("isObject", function() {
    it("should be a defined function", function() {
        expect(typeof isObject).toBe("function");
    });
    it("should return a boolean value when executed", function() {
        expect(typeof isObject("")).toBe("boolean");
    });
    it("should return true when passed new Date()", function() {
        expect(isObject(new Date())).toBe(true);
    });
    it("should return true when passed [1, 2, 3]", function() {
        expect(isObject([1, 2, 3])).toBe(true);
    });
    it("should return true when passed {}", function() {
        expect(isObject({})).toBe(true);
    });
    it("should return false when passed '12/12/2011'", function() {
        expect(isObject("12/12/2011")).toBe(false);
    });
    it("should return false when passed null", function() {
        expect(isObject(null)).toBe(false);
    });
})


// Learn Lodash: matchesProperty, Check if an Object Contains a Key Value Pair

const cars = [
    { make: "mazda", year: 2020, color: "red", isUsed: false },
    { make: "mazda", year: 2018, color: "blue", isUsed: true },
    { make: "toyota", year: 2018, color: "blue", isUsed: true },
    { make: "toyota", year: 2017, color: "grey", isUsed: true },
    { make: "ford", year: 2017, color: "grey", isUsed: true },
    { make: "for", year: 2020, color: "red", isUsed: false },
];

describe("matchesProperty_myVersion", function() {
    it("should be a defined function", function () {
        expect(typeof matchesProperty_myVersion).toBe("function");
    });
    it("should return " + [cars[1], cars[2]] + " when passed in 'color' and 'blue'", function () {
        expect(matchesProperty_myVersion("color", "blue")).toEqual([cars[1], cars[2]]);
    });
    it("should return " + [cars[1], cars[2], cars[3], cars[4]] + " when passed in 'isUsed' and true", function () {
        expect(matchesProperty_myVersion("isUsed", true)).toEqual([cars[1], cars[2], cars[3], cars[4]]);
    });
    it("should return " + [cars[4]] + " when passed in 'make' and 'ford'", function () {
        expect(matchesProperty_myVersion("make", "ford")).toEqual([cars[4]]);
    });
    it("should return " + [cars[3], cars[4]] + " when passed in 'year' and 2017", function () {
        expect(matchesProperty_myVersion("year", 2017)).toEqual([cars[3], cars[4]]);
    });
})

// Fix the Error: Flattening an Array
describe("flatten", function () {
    it("should be a defined function", function () {
        expect(typeof flatten).toBe("function");
    });
    it("should return an array when passed in an array", function () {
        expect(Array.isArray(flatten([]))).toBe(true);
    });
    it("should return [1, 2, 3, 4] when passed in [[1, 2], [3, 4]]", function () {
        expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    });
    it("should return ['a', 'b', 'c', 'd'] when passed in [['a', 'b'], ['c', 'd']]", function () {
        expect(flatten([['a', 'b'], ['c', 'd']])).toEqual(['a', 'b', 'c', 'd']);
    });
    it("should return [true, false, false, false] when passed in [[true, false], [false, false]]", function () {
        expect(flatten([[true, false], [false, false]])).toEqual([true, false, false, false]);
    });
})

// Seven Boom!
describe("sevenBoom", function () {
    it("should be a defined function", function () {
        expect(typeof sevenBoom).toBe("function");
    });
    it("should return a string when passed in an array", function () {
        expect(typeof sevenBoom(exampleArray)).toBe("string");
    });
    it("should return 'Boom!' when passed in [2, 6, 7, 9, 3]", function () {
        expect(sevenBoom([2, 6, 7, 9, 3])).toBe("Boom!");
    });
    it("should return 'Boom!' when passed in [76, 55, 44, 32]", function () {
        expect(sevenBoom([76, 55, 44, 32])).toBe("Boom!");
    });
    it("should return 'Boom!' when passed in [35, 4, 9, 37]", function () {
        expect(sevenBoom([35, 4, 9, 37])).toBe("Boom!");
    });
    it("should return 'there is no 7 in the array' when passed in [33, 68, 400, 5]", function () {
        expect(sevenBoom([33, 68, 400, 5])).toBe("there is no 7 in the array");
    });
    it("should return 'there is no 7 in the array' when passed in [86, 48, 100, 66]", function () {
        expect(sevenBoom([86, 48, 100, 66])).toBe("there is no 7 in the array");
    });
})

// Tower of Hanoi
describe("towerHanoi", function () {
    it("should be a defined function", function () {
        expect(typeof towerHanoi).toBe("function");
    });
    it("should return a number when passed in a positive whole number", function () {
        expect(typeof towerHanoi(randomPositiveNumber)).toBe("number");
    });
    it("should return 7 when passed in 3", function () {
        expect(towerHanoi(3)).toBe(7);
    });
    it("should return 31 when passed in 5", function () {
        expect(towerHanoi(5)).toBe(31);
    });
    it("should return 255 when passed in 8", function () {
        expect(towerHanoi(8)).toBe(255);
    });
    it("should return 524287 when passed in 19", function () {
        expect(towerHanoi(19)).toBe(524287);
    });
    it("should return 511 when passed in 9", function () {
        expect(towerHanoi(9)).toBe(511);
    });
    it("should return 8191 when passed in 13", function () {
        expect(towerHanoi(13)).toBe(8191);
    });
    it("should return 0 when passed in 0", function () {
        expect(towerHanoi(0)).toBe(0);
    });
})

// How Many Days Between Two Dates
describe("getDays", function () {
    it("should be a defined function", function () {
        expect(typeof getDays).toBe("function");
    });
    it("should return a number when passed in dates", function () {
        expect(typeof getDays(new Date(), new Date())).toBe("number");
    });
    it("should return 6 when passed in 'June 14, 2019' and 'June 20, 2019'", function () {
        expect(getDays(new Date('June 14, 2019'), new Date('June 20, 2019'))).toBe(6);
    });
    it("should return 3 when passed in 'December 29, 2018' and 'January 1, 2019'", function () {
        expect(getDays(new Date('December 29, 2018'), new Date('January 1, 2019'))).toBe(3);
    });
    it("should return 10 when passed in 'July 20, 2019' and 'July 30, 2019'", function () {
        expect(getDays(new Date('July 20, 2019'), new Date('July 30, 2019'))).toBe(10);
    });
    it("should return 36 when passed in 'March 18, 2021' and 'February 10, 2021'", function () {
        expect(getDays(new Date('March 18, 2021'), new Date('February 10, 2021'))).toBe(36);
    });
    it("should return 402 when passed in 'March 18, 2021' and 'February 10, 2020'", function () {
        expect(getDays(new Date('March 18, 2021'), new Date('February 10, 2020'))).toBe(402);
    });
})

// Length of a Nested Array
describe("getLength", function () {
    it("should be a defined function", function () {
        expect(typeof getLength).toBe("function");
    });
    it("should return a number when passed in an array", function () {
        expect(typeof getLength(exampleArray)).toBe("number");
    });
    it("should return 0 when passed in an empty array", function () {
        expect(getLength([])).toBe(0);
    });
    it("should return 3 when passed in [1, [2,3]]", function () {
        expect(getLength([1, [2,3]])).toBe(3);
    });
    it("should return 4 when passed in [1, [2, [3, 4]]]", function () {
        expect(getLength([1, [2, [3, 4]]])).toBe(4);
    });
    it("should return 6 when passed in [1, [2, [3, [4, [5, 6]]]]]", function () {
        expect(getLength([1, [2, [3, [4, [5, 6]]]]])).toBe(6);
    });
    it("should return 3 when passed in [1, 7, 8]", function () {
        expect(getLength([1, 7, 8])).toBe(3);
    });
    it("should return 1 when passed in [2]", function () {
        expect(getLength([2])).toBe(1);
    });
    it("should return 4 when passed in [2, [3], 4, [7]]", function () {
        expect(getLength([2, [3], 4, [7]])).toBe(4);
    });
    it("should return 6 when passed in [2, [3, [5, 7]], 4, [7]]", function () {
        expect(getLength([2, [3, [5, 7]], 4, [7]])).toBe(6);
    });
    it("should return 5 when passed in [2, [3, [4, [5]]], [9]]", function () {
        expect(getLength([2, [3, [4, [5]]], [9]])).toBe(5);
    });
})

// Check If the Brick Fits through the Hole
describe("doesBrickFit", function () {
    it("should be a defined function", function () {
        expect(typeof doesBrickFit).toBe("function");
    });
    it("should return a boolean value when passed in positive whole numbers", function () {
        expect(typeof doesBrickFit(randomPositiveNumber, randomPositiveNumber, randomPositiveNumber, randomPositiveNumber, randomPositiveNumber)).toBe("boolean");
    });
    it("should return true when passed in 1, 1, 1, 1, 1", function () {
        expect(doesBrickFit(1, 1, 1, 1, 1)).toBe(true);
    });
    it("should return true when passed in 1, 2, 1, 1, 1", function () {
        expect(doesBrickFit(1, 2, 1, 1, 1)).toBe(true);
    });
    it("should return true when passed in 1, 2, 2, 1, 2", function () {
        expect(doesBrickFit(1, 2, 2, 1, 2)).toBe(true);
    });
    it("should return true when passed in 1, 2, 2, 2, 1", function () {
        expect(doesBrickFit(1, 2, 2, 2, 1)).toBe(true);
    });
    it("should return false when passed in 1, 2, 2, 1, 1", function () {
        expect(doesBrickFit(1, 2, 2, 1, 1)).toBe(false);
    });
    it("should return false when passed in 2, 2, 2, 1, 2", function () {
        expect(doesBrickFit(2, 2, 2, 1, 2)).toBe(false);
    });
})

