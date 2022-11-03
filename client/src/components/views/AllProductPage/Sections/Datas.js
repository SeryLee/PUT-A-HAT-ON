const types = [
    {
        "_id": 1,
        "name": "Baseball"
    },
    {
        "_id": 2,
        "name": "Bucket hat"
    },
    {
        "_id": 3,
        "name": "Beret"
    },
    {
        "_id": 4,
        "name": "Beanie"
    },
    {
        "_id": 5,
        "name": "Fedora"
    },
    {
        "_id": 6,
        "name": "Trapper"
    },
    {
        "_id": 7,
        "name": "Other"
    }
]

const price = [
    {
        "_id": 0,
        "name": "any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $49",
        "array": [0, 49]
    },
    {
        "_id": 2,
        "name": "$50 to $99",
        "array": [50, 99]
    },
    {
        "_id": 3,
        "name": "$100 to $149",
        "array": [100, 149]
    },
    {
        "_id": 4,
        "name": "$150 to $199",
        "array": [150, 199]
    },
    {
        "_id": 5,
        "name": "More than $200",
        "array": [200, 99999999]
    }
]

export {
    types,
    price
}