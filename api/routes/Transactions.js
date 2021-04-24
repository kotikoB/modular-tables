const router = require('express').Router();

const transactions = [
    {
        id: 1,
        name: 'buy',
        amount: '30.00',
        date: 'Jan 22 1993'
    },
    {
        id: 2,
        name: 'sell',
        amount: '50.00',
        date: 'Mar 27 1981'
    },
    {
        id: 3,
        name: 'trade',
        amount: '40.00',
        date: 'Feb 18 1945',
        addedField: 2
    }
];

// get chama
router.get('/', (req, res) => {
    res.status(200).send({ msg: 'request success', transactions });
});

module.exports = router;
