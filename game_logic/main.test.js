//Testing that this test is not included when concatenating

const main = require ('./main')

test ( 'checks 1+1 = 2', () => 
        {
            expect ( 1+1 ).toBe (2);
        });
