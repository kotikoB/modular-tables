import React from 'react';

const Component = ({ structure }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    {structure.columns.map((column, index) => (
                        <React.Fragment>
                            <th scope='col' key={column}>
                                {column}
                            </th>
                        </React.Fragment>
                    ))}
                </tr>
            </thead>
            <tbody>
                {structure.rows.map((row) => {
                    return (
                        <tr>
                            {row.map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Component;
