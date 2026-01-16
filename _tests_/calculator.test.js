import { add } from "../src/calculator";

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