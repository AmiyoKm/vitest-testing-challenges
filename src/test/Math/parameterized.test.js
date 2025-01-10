import { describe, expect, it } from "vitest";
import { multiply } from "../../Math/Multiply";


describe("Multiply",()=>{
    it.each([
        [1,2,2],
        [2,3,6],
        [5,10,50],
        [10,500,5000],
        [1,0,0],
        [-1,5,-5]
    ])("should multiply %d  and %d (expected : %d)",( a,b , expected )=> {
        expect(multiply(a,b)).toBe(expected)
    })
})