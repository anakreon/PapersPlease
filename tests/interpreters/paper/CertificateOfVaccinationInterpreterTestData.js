/*
# ACTS Test Suite Generation: Wed Dec 25 15:01:28 CET 2019
#  '*' represents don't care value 
# Degree of interaction coverage: 2
# Number of parameters: 3
# Maximum number of values per parameter: 3
# Number of configurations: 9
id,name,vaccines
NO_VALUE,NO_VALUE,NO_VALUE
STRING_VALUE,NO_VALUE,SINGLE_VACCINE
NO_VALUE,NO_VALUE,MULTIPLE_VACCINES
STRING_VALUE,COMMA_SEPARATED_STRING,NO_VALUE
NO_VALUE,COMMA_SEPARATED_STRING,SINGLE_VACCINE
STRING_VALUE,COMMA_SEPARATED_STRING,MULTIPLE_VACCINES
NO_VALUE,SPACE_SEPARATED_STRING,NO_VALUE
STRING_VALUE,SPACE_SEPARATED_STRING,SINGLE_VACCINE
NO_VALUE,SPACE_SEPARATED_STRING,MULTIPLE_VACCINES
*/

export default
[
    {
        input: {},
        expected: {}
    },
    {
        input: {
            id: 'TE8M1-V3N7R',
            vaccines: ['influenza']
        },
        expected: {
            id: 'TE8M1-V3N7R',
            vaccines: ['influenza']
        }
    },
    {
        input: {
            vaccines: ['influenza', 'measles']
        },
        expected: {
            vaccines: ['influenza', 'measles']
        }
    },
    {
        input: {
            id: 'TE8M1-V3N7R',
            name: 'Guyovich, Russian'
        },
        expected: {
            id: 'TE8M1-V3N7R',
            name: 'Russian Guyovich',
        }
    },
    {
        input: {
            name: 'Guyovich, Russian',
            vaccines: ['influenza']
        },
        expected: {
            name: 'Russian Guyovich',
            vaccines: ['influenza']
        }
    },
    {
        input: {
            id: 'TE8M1-V3N7R',
            name: 'Guyovich, Russian',
            vaccines: ['influenza', 'measles']
        },
        expected: {
            id: 'TE8M1-V3N7R',
            name: 'Russian Guyovich',
            vaccines: ['influenza', 'measles']
        }
    },
    {
        input: {
            name: 'Russian Guyovich'
        },
        expected: {
            name: 'Russian Guyovich'
        }
    },
    {
        input: {
            id: 'TE8M1-V3N7R',
            name: 'Russian Guyovich',
            vaccines: ['influenza']
        },
        expected: {
            id: 'TE8M1-V3N7R',
            name: 'Russian Guyovich',
            vaccines: ['influenza']
        }
    },
    {
        input: {
            name: 'Russian Guyovich',
            vaccines: ['influenza', 'measles']
        },
        expected: {
            name: 'Russian Guyovich',
            vaccines: ['influenza', 'measles']
        }
    },
]