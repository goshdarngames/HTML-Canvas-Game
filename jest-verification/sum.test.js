//This test is used to check that the Jest testing framework was installed
//correctly.


const sum = require ( './sum' )

test ( 'adds 1 + 2 to equal 3', () => 
        {
            expect ( sum ( 1, 2 )).toBe (3);
        });
