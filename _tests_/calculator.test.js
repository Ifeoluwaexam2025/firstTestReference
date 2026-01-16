import { add } from "../src/calculator";
import { divide } from "../src/calculatorDivide";

describe('add', ()=>{
    it('adds two positive numbers', ()=>{
        expect(add(2,3)).toBe(5);
    })

    it('adds negative numbers',()=>{
        expect(add(-2,-3)).toBe(-5);
    })

    it('throws when inputs are not numbers', ()=>{
        expect(()=> add('2', 3)).toThrow('Add expects two numbers');
        })
})
describe('divide', ()=>{
    it('divides two positive numbers', ()=>{
        expect(divide(2,1)).toBe(2);
    })
    it('throws when dividing by zero', ()=>{
        expect(()=> divide(2,0)).toThrow(RangeError);
    })
    it('throws when inputs are not numbers', ()=>{
        expect(()=> divide('2', 1)).toThrow('Both arguments must be numbers');
    })
    it('throws when inputs are NaN', ()=>{
        expect(()=> divide(NaN, 1)).toThrow('Arguments cannot be NaN');
    })
})