/*
# ACTS Test Suite Generation: Wed Jan 01 15:55:14 CET 2020
#  '*' represents don't care value 
# Degree of interaction coverage: 3
# Number of parameters: 3
# Maximum number of values per parameter: 3
# Number of configurations: 12
name,height,weight
NO_VALUE,NO_VALUE,NO_VALUE
NO_VALUE,NO_VALUE,STRING_NUMBER
NO_VALUE,STRING_NUMBER,NO_VALUE
NO_VALUE,STRING_NUMBER,STRING_NUMBER
COMMA_SEPARATED_STRING,NO_VALUE,NO_VALUE
COMMA_SEPARATED_STRING,NO_VALUE,STRING_NUMBER
COMMA_SEPARATED_STRING,STRING_NUMBER,NO_VALUE
COMMA_SEPARATED_STRING,STRING_NUMBER,STRING_NUMBER
SPACE_SEPARATED_STRING,NO_VALUE,NO_VALUE
SPACE_SEPARATED_STRING,NO_VALUE,STRING_NUMBER
SPACE_SEPARATED_STRING,STRING_NUMBER,NO_VALUE
SPACE_SEPARATED_STRING,STRING_NUMBER,STRING_NUMBER
*/

export default
[
    {
        input: {},
        expected: {}
    },
    {
        input: {
            weight: '10'
        },
        expected: {
            weight: '10'
        }
    },
    {
        input: {
            height: '15',
            weight: '10'
        },
        expected: {
            height: '15',
            weight: '10'
        }
    },
    {
        input: {
            name: 'Guyovich, Russian'
        },
        expected: {
            name: 'Russian Guyovich',
        }
    },
    {
        input: {
            name: 'Guyovich, Russian',
            weight: '10'
        },
        expected: {
            name: 'Russian Guyovich',
            weight: '10'
        }
    },
    {
        input: {
            name: 'Guyovich, Russian',
            height: '10'
        },
        expected: {
            name: 'Russian Guyovich',
            height: '10'
        }
    },
    {
        input: {
            name: 'Guyovich, Russian',
            height: '10',
            weight: '15'
        },
        expected: {
            name: 'Russian Guyovich',
            height: '10',
            weight: '15'
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
            name: 'Russian Guyovich',
            weight: '15'
        },
        expected: {
            name: 'Russian Guyovich',
            weight: '15'
        }
    },
    {
        input: {
            name: 'Russian Guyovich',
            height: '10'
        },
        expected: {
            name: 'Russian Guyovich',
            height: '10'
        }
    },
    {
        input: {
            name: 'Russian Guyovich',
            height: '10',
            weight: '15'
        },
        expected: {
            name: 'Russian Guyovich',
            height: '10',
            weight: '15'
        }
    },
]