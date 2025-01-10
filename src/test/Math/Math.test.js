import { describe, expect, it, suite } from "vitest";
import { factorial } from "../../Math/factorial";
import { fibonacci } from "../../Math/fibonacci";
import { gcd } from "../../Math/gcd";


describe('Math Utils : ',()=>{
    suite("factorial",()=>{
        it('finds a factorial for a positive number',()=>{
            expect(factorial(3)).toBe(6)
        })
        it('finds a factorial for a 0',()=>{
            expect(factorial(0)).toBe(1)
        })
        it('Throws Error for a negative input',()=>{
            expect(()=>factorial(-2)).toThrowError('Must not be a negative number')
        })
    })
    suite('fibonacci',()=>{
        it('finds the factorial of a number',()=>{
            expect(fibonacci(4)).toBe(3)
        })
        it('gives a error for a negative number',()=>{
            expect(()=>fibonacci(-4)).toThrowError("Must not be a positive number")
        })
    })
    suite('GCD',()=>{
        it('finds a GCD for two numbers',()=>{
            expect(gcd(12,6)).toBe(6)
        })
        it('finds a GCD for two same number',()=>{
            expect(gcd(6,6)).toBe(6)
        })
        it('throws a Error if two numbers are 0',()=>{
            expect(()=>gcd(0,0)).toThrowError('Both are zero , the GCD is undefined')
        })
    })
   
})