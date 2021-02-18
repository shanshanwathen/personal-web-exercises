




Test.assertEquals(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true)
Test.assertEquals(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false)
Test.assertEquals(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false)
Test.assertEquals(isSpecialArray([1, 1, 1, 2]), false)
Test.assertEquals(isSpecialArray([2, 2, 2, 2]), false)
Test.assertEquals(isSpecialArray([2, 1, 2, 1]), true)
Test.assertEquals(isSpecialArray([4, 5, 6, 7]), true)
Test.assertEquals(isSpecialArray([4, 5, 6, 7, 0, 5]), true)