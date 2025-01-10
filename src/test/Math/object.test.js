import { describe, expect, it, suite } from "vitest";
import { deepClone, flattenObject, mergedObject } from "../../Object/object";


describe("Object Utils",()=>{
    suite("Merged Object",()=>{
        it("Checks for a merge between two normal objects",()=>{
            expect(mergedObject(
                {
                    name : "amiyo", job : 'student'
                },
                {
                    uniName : "UITS"
                }
            )).toEqual({name : "amiyo" , job: "student" , uniName: "UITS"})
        })
        it("overwrites properties of obj1 with properties from obj2 if there are conflicts",()=>{
            expect(mergedObject(
                {
                    name : "amiyo", job : 'student'
                },
                {
                    name : "amiyo123"
                }
            )).toEqual({name : "amiyo" , job: "student"})
        })
        it("works with objects that have different structures (e.g., one with nested objects and the other with flat properties)",()=>{
            expect(mergedObject(
                {
                    name : "amiyo", job : 'student'
                },
                {
                    uniName : "UITS" , faculty :{
                        name : "some faculty"
                    }
                }
            )).toEqual({name : "amiyo" , job: "student" ,  uniName : "UITS" , faculty :{
                name : "some faculty"
            }})
        })
    })
    suite("Depp Clone",()=>{
        it("returns a new object that is a deep copy of the original",()=>{
            expect(deepClone({
                name : "amiyo", job : 'student'
            })).toStrictEqual({
                name : "amiyo", job : 'student'
            })
        })
        it("works with nested objects and arrays inside the object",()=>{
            expect(deepClone({
                name : "amiyo", job : 'student' , courses : ['compiler' , 'software' ,'graphics'] , faculty :{
                    name : "some faculty"
                }
            })).toStrictEqual({
                name : "amiyo", job : 'student' , courses : ['compiler' , 'software' ,'graphics'] ,faculty :{
                    name : "some faculty"
                }
            })
        })
    })
    suite("Flatten Clone",()=>{
        it("flattens nested objects into key-value pairs",()=>{
            expect(flattenObject({
                a: 1,
                b: {
                    c: 2,
                    d: {
                        e: 3
                    }
                }
            })).toStrictEqual({
                a: 1,
                "b.c": 2,
                "b.d.e": 3
              })
        })
        it("handles objects with multiple levels of nesting and special characters in keys",()=>{
            expect(flattenObject({
                a: 1,
                b: {
                    c: 2,
                    d: {
                        e: 3
                    }
                }
            })).toStrictEqual({
                a: 1,
                "b.c": 2,
                "b.d.e": 3
              })
        })
       
    })
    
})