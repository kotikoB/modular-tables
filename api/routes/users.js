const router = require('express').Router();

const users = [
    {
        id: 1,
        firstName: 'steve',
        lastName: 'ouma',
        DOB: 'Jan 22 1993'
    },
    {
        id: 2,
        firstName: 'Kotiko',
        lastName: 'Bill',
        DOB: 'Mar 27 1981'
    },
    {
        id: 3,
        firstName: 'Bonny',
        lastName: 'Lass',
        DOB: 'Feb 18 1945'
    }
];

// get chama
router.get('/', (req, res) => {
    res.status(200).send({ msg: 'request success', users });
});

module.exports = router;
