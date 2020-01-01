/*
# ACTS Test Suite Generation: Wed Jan 01 17:54:59 CET 2020
#  '*' represents don't care value 
# Degree of interaction coverage: 2
# Number of parameters: 8
# Maximum number of values per parameter: 3
# Number of configurations: 10
passportId,accessPermitId,hasAccessPermit,passportNation,passportExpired,accessPermitExpired,passportName,accessPermitName
ID_TWO,ID_TWO,YES,ARSTOTZKA,false,false,NAME_TWO,NAME_TWO
ID_ONE,ID_ONE,YES,OBRISTAN,true,true,NAME_ONE,NAME_ONE
ID_TWO,ID_ONE,YES,OTHER,false,true,NAME_TWO,NAME_ONE
ID_ONE,ID_TWO,NO,ARSTOTZKA,true,false,NAME_ONE,NAME_TWO
ID_TWO,ID_ONE,NO,OBRISTAN,false,false,NAME_TWO,NAME_ONE
ID_ONE,ID_TWO,NO,OTHER,true,true,NAME_TWO,NAME_TWO
ID_TWO,ID_ONE,YES_BUT_WRONG_NATION,ARSTOTZKA,true,true,NAME_ONE,NAME_ONE
ID_ONE,ID_TWO,YES_BUT_WRONG_NATION,OBRISTAN,false,false,NAME_ONE,NAME_TWO
ID_TWO,ID_TWO,YES_BUT_WRONG_NATION,OTHER,false,false,NAME_TWO,NAME_ONE
ID_TWO,ID_ONE,NO,OTHER,false,true,NAME_ONE,NAME_TWO
*/

const ID_ONE = 'GC07D-FU8AR';
const ID_TWO = 'GXXXX-FU8AR';
const ARSTOTZKA = 'Arstotzka';
const OBRISTAN = 'Obristan';
const OTHER = 'OtherNation';
const NAME_ONE = 'Guyovich, Russian';
const NAME_TWO = 'SomeOther, Guy';
const expired = '1981.07.10';
const notExpired = '1983.07.10';

export default
[{
    passport: {
        id: ID_TWO,
        nation: ARSTOTZKA,
        name: NAME_TWO,
        exp: notExpired
    },
    accessPermit: {
        id: ID_TWO,
        nation: ARSTOTZKA,
        name: NAME_TWO,
        exp: notExpired
    },
    expectedResult: 'Glory to Arstotzka.'
}, {
    passport: {
        id: ID_ONE,
        nation: OBRISTAN,
        name: NAME_ONE,
        exp: expired
    },
    accessPermit: {
        id: ID_ONE,
        nation: OBRISTAN,
        name: NAME_ONE,
        exp: expired
    },
    expectedResult: 'Entry denied: passport expired.'
}, {
    passport: {
        id: ID_TWO,
        nation: OTHER,
        name: NAME_TWO,
        exp: notExpired
    },
    accessPermit: {
        id: ID_ONE,
        nation: OBRISTAN,
        name: NAME_ONE,
        exp: expired
    },
    expectedResult: 'Detainment: ID number mismatch.'
}, {
    passport: {
        id: ID_ONE,
        nation: ARSTOTZKA,
        name: NAME_ONE,
        exp: expired
    },
    expectedResult: 'Entry denied: passport expired.'
}, {
    passport: {
        id: ID_TWO,
        nation: OBRISTAN,
        name: NAME_TWO,
        exp: notExpired
    },
    expectedResult: 'Entry denied: missing required access permit.'
}, {
    passport: {
        id: ID_ONE,
        nation: OTHER,
        name: NAME_TWO,
        exp: expired
    },
    expectedResult: 'Cause no trouble.'
}, {
    passport: {
        id: ID_TWO,
        nation: ARSTOTZKA,
        name: NAME_ONE,
        exp: expired
    },
    accessPermit: {
        id: ID_ONE,
        nation: OBRISTAN,
        name: NAME_ONE,
        exp: expired
    },
    expectedResult: 'Detainment: ID number mismatch.'
}, {
    passport: {
        id: ID_ONE,
        nation: OBRISTAN,
        name: NAME_ONE,
        exp: notExpired
    },
    accessPermit: {
        id: ID_TWO,
        nation: ARSTOTZKA,
        name: NAME_TWO,
        exp: notExpired
    },
    expectedResult: 'Detainment: ID number mismatch.'
}, {
    passport: {
        id: ID_TWO,
        nation: OTHER,
        name: NAME_TWO,
        exp: notExpired
    },
    accessPermit: {
        id: ID_TWO,
        nation: ARSTOTZKA,
        name: NAME_ONE,
        exp: notExpired
    },
    expectedResult: 'Detainment: Name mismatch.'
}, {
    passport: {
        id: ID_TWO,
        nation: OTHER,
        name: NAME_ONE,
        exp: notExpired
    },
    expectedResult: 'Cause no trouble.'
}]
