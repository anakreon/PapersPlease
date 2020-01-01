/*
# ACTS Test Suite Generation: Wed Jan 01 18:39:33 CET 2020
#  '*' represents don't care value 
# Degree of interaction coverage: -1
# Number of parameters: 4
# Maximum number of values per parameter: 2
# Number of configurations: 4
hasId,name,sex,expired
true,SPACE_SEPARATED_VALUE,F,true
true,COMMA_SEPARATED_VALUE,F,false
false,SPACE_SEPARATED_VALUE,M,true
false,SPACE_SEPARATED_VALUE,M,false
*/


const COMMA_SEPARATED_VALUE = 'Guyovich, Russian';
const SPACE_SEPARATED_VALUE = 'Russian Guyovich';
const expired = '1981.07.10';
const notExpired = '1983.07.10';

export default
[{
    passport: {
        id: 'GC07D-FU8AR',
        name: SPACE_SEPARATED_VALUE,
        sex: 'F',
        exp: expired
    },
    expectedResult: 'Entry denied: passport expired.'
}, {
    passport: {
        id: 'GC07D-FU8AR',
        name: COMMA_SEPARATED_VALUE,
        sex: 'F',
        exp: notExpired
    },
    expectedResult: 'Glory to Arstotzka.'
}, {
    passport: {
        name: SPACE_SEPARATED_VALUE,
        sex: 'M',
        exp: expired
    },
    expectedResult: 'Entry denied: passport expired.'
}, {
    passport: {
        name: SPACE_SEPARATED_VALUE,
        sex: 'M',
        exp: notExpired
    },
    expectedResult: 'Glory to Arstotzka.'
}]
