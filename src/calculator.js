export function add (a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Add expects two numbers');
    }
    return a + b;
}