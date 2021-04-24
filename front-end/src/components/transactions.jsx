import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Component from './Component';
import { formStructure } from './formed';

const Transactions = () => {
    const [transactions, setTransactions] = useState({ columns: [], rows: [] });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:3003/transactions');
            const formed = formStructure(data.transactions);
            setTransactions(formed);
        };
        fetchData();
    }, []);

    return <Component structure={transactions} />;
};

export default Transactions;
