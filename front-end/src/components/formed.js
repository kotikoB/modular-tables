export const formStructure = (data) => {
    let prop = { columns: [], rows: [] };
    let columns = new Set();
    data.forEach((transaction, index) => {
        Object.keys(transaction).forEach((key) => {
            columns.add(key);
        });
        prop.rows[index] = [];
    });
    prop.columns = Array.from(columns);

    prop.columns.map((column) => {
        data.map((transaction, index) => {
            prop.rows[index].push(transaction[column]);
        });
    });
    return prop;
};
