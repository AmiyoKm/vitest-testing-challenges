import { describe, expect, it } from "vitest";
import { fetchUserData } from "../../async/fetchUserData";


describe("Fetch user Data",()=>{
    it("should return userData",async()=>{
        const result = await fetchUserData(1)
        expect(result).toStrictEqual({id: 1 , name : "Amiyo Kumar"})
    })

    it("should throw an error on not giving a userId",async()=>{
        
        expect(async()=> await fetchUserData("Invalid")).rejects.toBe("User not found")
    })
})