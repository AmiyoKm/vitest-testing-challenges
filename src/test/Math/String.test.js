import { describe, expect, it, suite } from "vitest";
import { capitalizeWords, isPalindrome, reversedString } from "../../String/string";

describe("String", () => {
  suite("Reversed String", () => {
    it("checks for a reversed string", () => {
      expect(reversedString("amiyo")).toBe("oyima");
    });
    it("works with spaces and special chars", () => {
      expect(reversedString("amiyo kumar")).toBe("ramuk oyima");
    });
  });
  suite("Capitalize Word", () => {
    it("capitalizes a word", () => {
      expect(capitalizeWords("amiyo")).toBe("AMIYO");
    });
    it("works with space",()=>{
      expect(capitalizeWords("amiyo kumar")).toBe("AMIYO KUMAR");
        
    })
  })
  suite("Palindrome Word", () => {
    it("checks for a palindrome", () => {
      expect(isPalindrome("civic")).toBe(true);
    });
    it("works with a non palindrome",()=>{
      expect(isPalindrome("amiyo")).toBe(false);    
    })
    it("works with a special characters",()=>{
        expect(isPalindrome("$%$")).toBe(true);    
      })
  });
});
