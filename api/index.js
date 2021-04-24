const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = 3003;

//middleware
app.use(express.json());

// route middleware
app.use('/users', require('./routes/users'));
app.use('/transactions', require('./routes/transactions'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
