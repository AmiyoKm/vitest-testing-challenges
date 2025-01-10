import { describe, expect, it } from "vitest"
import { isValidIndex } from "../isValidIndex"


describe("isValidIndex",()=>{
    const arr = [10,20,30,40,50,60]
    const valid = "Index is Valid!"
    const notValid = "Index out of bounds"
    it("should allow index 0 (first element)",()=>{
        const result = isValidIndex(arr,0)
        expect(result).toBe(valid)
    })
    it("should allow index 5(last element)",()=>{
        const result = isValidIndex(arr,5)
        expect(result).toBe(valid)
    })
    it("should throw an error for index -1 (out of bounds)",()=>{
        expect( ()=>isValidIndex(arr,-1)).toThrowError(notValid)
    })
    it("should throw an error for index greater than the last element",()=>{
       
        expect(()=>isValidIndex(arr,6)).toThrowError(notValid)
    })
})