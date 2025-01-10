import { describe, expect, it } from "vitest";
import { validatePassword } from "../validatePassword";

const valid = "Password is valid"
const notValid = "password must be between 8 and 16 Characters"
describe("Validate Password",()=>{
    it("should allow a password with exactly 8 Characters",()=>{
        const result = validatePassword("12345678")

        expect(result).toBe(valid)
    })

    it("should throw an error if password has less than 8 Characters",()=>{
        

        expect(()=>validatePassword("1234567")).toThrowError(notValid)
    })
    it("should allow a password with exactly 16 Characters",()=>{
        const result = validatePassword("123456789012345")

        expect(result).toBe(valid)
    })
    it("should throw an error if password has more than 16  Characters",()=>{
        expect(()=>validatePassword("12345678901234567")).toThrow(notValid)
    })
})