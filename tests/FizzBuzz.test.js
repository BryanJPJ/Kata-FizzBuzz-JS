import { FizzBuzz } from "../src/scripts/FizzBuzz";

describe ('FizzBuzz', () => {
    test('should return Fizz if divisible by three', () =>{
        let numb = 3;
        const result = FizzBuzz(numb);
        expect(result).toBe("Fizz");
    })
}

)
describe ('FizzBuzz', () => {
    test('should return Buzz if divisible by five', () => {
        //Given
        let numb = 5;
        //When
        const result = FizzBuzz(numb);
        //Then
        expect(result).toBe("Buzz");
    })
});

describe ('FizzBuzz', () => {
    test('should return FizzBuzz if divisible by five and three', () => {
        //Given
        let numb = 15;
        //When
        const result = FizzBuzz(numb);
        //Then
        expect(result).toBe("FizzBuzz");
    
    })
})
