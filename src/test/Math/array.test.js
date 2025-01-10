import { describe, expect, it, suite } from "vitest";
import { flattenArray, intersectArrays, removeDuplicates } from "../../Array/array";


describe("Array Utils",()=>{
    suite("flattenArray",()=>{
        it("flattens a nested Array",()=>{
            expect(flattenArray([[1,2],3,4,5])).toStrictEqual([1,2,3,4,5])
        })
        it("flattens a normal Array",()=>{
            expect(flattenArray([1,2,3,4,5])).toStrictEqual([1,2,3,4,5])
        })
        
    })
    suite("InterSection Array",()=>{
        it("Intersects 2 array with different values",()=>{
            expect(intersectArrays([1,2] , [3,4,5])).toStrictEqual([])
        })
        it("Intersects 2 array with similar values",()=>{
            expect(intersectArrays([1,2,4,5],[3,4,5])).toStrictEqual([4,5])
        })
        
    })
    suite("Remove Duplicate Array",()=>{
        it("Removes duplicates of 2 arrays",()=>{
            expect(removeDuplicates([1,2,3] , [3,4,5])).toStrictEqual([1,2,3,4,5])
        })
        it("works with no common values",()=>{
            expect(removeDuplicates([1,2],[3,4,5])).toStrictEqual([1,2,3,4,5])
        })
        
    })
})
