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



// // Array of Multiples
// Test.assertSimilar(arrayOfMultiples(7, 5), [7, 14, 21, 28, 35])
// Test.assertSimilar(arrayOfMultiples(12, 10), [12, 24, 36, 48, 60, 72, 84, 96, 108, 120])
// Test.assertSimilar(arrayOfMultiples(17, 7), [17, 34, 51, 68, 85, 102, 119])
// Test.assertSimilar(arrayOfMultiples(630, 14), [630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820])
// Test.assertSimilar(arrayOfMultiples(140, 3), [140, 280, 420])
// Test.assertSimilar(arrayOfMultiples(7, 8), [7, 14, 21, 28, 35, 42, 49, 56])
// Test.assertSimilar(arrayOfMultiples(11, 21), [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231])
//
//
// // Burglary Series (01): Calculate Total Losses
// Test.assertEquals(calculateLosses({
//     tv: 30,
//     skate: 20,
//     stereo: 50,
// }), 100)
//
// Test.assertEquals(calculateLosses({
//     ring: 30000,
//     painting: 20000,
//     bust: 1,
// }), 50001)
//
// Test.assertEquals(calculateLosses({
//     chair: 3500,
// }), 3500)
//
//
// // Integer Digits Count
// let [numVector, resVector] = [
//     [0, 318, -92563, 4666, -314890, 654321, 638476, 12345, 1289396, -1232323, 12839393, -231273683],
//     [1, 3, 5, 4, 6, 6, 6, 5, 7, 7, 8, 9]
// ]
// for (let i in numVector) Test.assertEquals(count(numVector[i]), resVector[i])
//
//
// // Check if All Values Are True
// const tests = [
//     [[true, true, true], true],
//     [[false], false],
//     [[true], true],
//     [[false, true, true, true, 20], false],
//     [[Infinity, 92347238467.219378, 'Hello World'], true],
//     [[Infinity, 92347238467.219378, 'Hello World', 0], false],
//     [['', 'r', 'ra', 'rac', 'race'], false],
//     [[+'Hi!'], false],
//     [[{}.twice], false],
//     [[true, 32, Number, [][1]], false],
//     [[Boolean, Number, Object, String], true],
// ];
//
// tests.forEach(([a, e]) => Test.assertEquals(allTruthy(...a), e))
//
//
//
// // Instant JAZZ
// Test.assertSimilar(jazzify(['G', 'F', 'C']), ['G7', 'F7', 'C7'])
// Test.assertSimilar(jazzify(['Dm', 'G', 'E', 'A']), ['Dm7', 'G7', 'E7', 'A7'])
// Test.assertSimilar(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']), ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])
// Test.assertSimilar(jazzify(['G', 'C7']), ['G7', 'C7'])
// Test.assertSimilar(jazzify([]), [])
//
//
// // Algebra Sequence — Boxes
// Test.assertEquals(boxSeq(5), 7)
// Test.assertEquals(boxSeq(0), 0)
// Test.assertEquals(boxSeq(6), 6)
// Test.assertEquals(boxSeq(99), 101)
// Test.assertEquals(boxSeq(2), 2)
// Test.assertEquals(boxSeq(1), 3)
//
//
// // Remove the Letters ABC
// Test.assertEquals(removeABC("This might be a bit hard"), "This might e  it hrd")
// Test.assertEquals(removeABC("This is awesome"), "This is wesome")
// Test.assertEquals(removeABC("hello world!"), null)
// Test.assertEquals(removeABC("coding is fun!"), "oding is fun!")
// Test.assertEquals(removeABC(""), null)
//
//
// // Special Arrays
// Test.assertEquals(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true)
// Test.assertEquals(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false)
// Test.assertEquals(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false)
// Test.assertEquals(isSpecialArray([1, 1, 1, 2]), false)
// Test.assertEquals(isSpecialArray([2, 2, 2, 2]), false)
// Test.assertEquals(isSpecialArray([2, 1, 2, 1]), true)
// Test.assertEquals(isSpecialArray([4, 5, 6, 7]), true)
// Test.assertEquals(isSpecialArray([4, 5, 6, 7, 0, 5]), true)
//
//
// // Likes vs. Dislikes
// Test.assertEquals(likeOrDislike(['Dislike']), 'Dislike')
// Test.assertEquals(likeOrDislike(['Like', 'Like']), 'Nothing')
// Test.assertEquals(likeOrDislike(['Dislike', 'Dislike']), 'Nothing')
// Test.assertEquals(likeOrDislike(['Like', 'Like', 'Like']), 'Like')
// Test.assertEquals(likeOrDislike(['Like', 'Dislike']), 'Dislike')
// Test.assertEquals(likeOrDislike(['Dislike', 'Like']), 'Like')
// Test.assertEquals(likeOrDislike(['Like', 'Dislike', 'Dislike']), 'Nothing')
// Test.assertEquals(likeOrDislike(['Dislike', 'Like', 'Dislike']), 'Dislike')
// Test.assertEquals(likeOrDislike([]), 'Nothing')
// Test.assertEquals(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike']), 'Dislike')
// Test.assertEquals(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Like', 'Like']), 'Like')
// Test.assertEquals(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Dislike', 'Dislike']), 'Nothing')
// Test.assertEquals(likeOrDislike(['Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike']), 'Dislike')
//
//
// // Factor Chain
// Test.assertEquals(factorChain([1, 2, 4, 8, 16, 32]), true)
// Test.assertEquals(factorChain([1, 1, 1, 1, 1, 1]), true)
// Test.assertEquals(factorChain([2, 4, 6, 7, 12]), false)
// Test.assertEquals(factorChain([10, 1]), false)
// Test.assertEquals(factorChain([10, 20, 30, 40]), false)
// Test.assertEquals(factorChain([10, 20, 40]), true)
// Test.assertEquals(factorChain([1, 1, 1, 1, 7, 49]), true)