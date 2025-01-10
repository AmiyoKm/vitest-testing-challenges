import { describe, expect, it } from "vitest";
import { fetchData } from "../../async/fetchData";


describe("fetchData" ,()=> {
    it("should fetch data correctly",async ()=>{
        const result = await fetchData()
        expect(result).toBe("Data successfully fetched")
    })
})