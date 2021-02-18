// Tests for edabit challenges


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
    it("should return false when passed [false]", function() {
        expect(allTruthy([false])).toBe(false);
    });
    it("should return true when passed [true]", function() {
        expect(allTruthy([true])).toBe(true);
    });
    it("should return false when passed [false, true, true, true, 20]", function() {
        expect(allTruthy([false, true, true, true, 20])).toBe(false);
    });
    it("should return true when passed [Infinity, 92347238467.219378, 'Hello World']", function() {
        expect(allTruthy([Infinity, 92347238467.219378, 'Hello World'])).toBe(true);
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
    it("should return true when passed [Boolean, Number, Object, String]", function() {
        expect(allTruthy([Boolean, Number, Object, String])).toBe(true);
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
    it("should return \"This is wesome\" when passed in \"This is awesome\"", function() {
        expect(removeABC("This is awesome")).toBe("This is wesome");
    });
    it("should return \"This might e  it hrd\" when passed in \"This might be a bit hard\"", function() {
        expect(removeABC("This might be a bit hard")).toBe("This might e  it hrd");
    });
    it("should return null when passed in \"hello world!\"", function() {
        expect(removeABC("hello world!")).toBe(null);
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
    it("should return true when passed [2, 1, 2, 1]", function() {
        expect(isSpecialArray([2, 1, 2, 1])).toBe(true);
    });
    it("should return true when passed [4, 5, 6, 7]", function() {
        expect(isSpecialArray([4, 5, 6, 7])).toBe(true);
    });
    it("should return true when passed [4, 5, 6, 7, 0, 5]", function() {
        expect(isSpecialArray([4, 5, 6, 7, 0, 5])).toBe(true);
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
Test.assertEquals(factorChain([1, 2, 4, 8, 16, 32]), true)
Test.assertEquals(factorChain([1, 1, 1, 1, 1, 1]), true)
Test.assertEquals(factorChain([2, 4, 6, 7, 12]), false)
Test.assertEquals(factorChain([10, 1]), false)
Test.assertEquals(factorChain([10, 20, 30, 40]), false)
Test.assertEquals(factorChain([10, 20, 40]), true)
Test.assertEquals(factorChain([1, 1, 1, 1, 7, 49]), true)