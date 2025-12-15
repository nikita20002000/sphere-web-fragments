import React from 'react';
import PropTypes from 'prop-types';
import './Tables.scss';

export const Table = ({ columns = [], rows = [], size = 'md', variant = 'elevated' }) => {
    return (
        <div className={`sf-table sf-table--${size} sf-table--${variant}`}>
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>{col.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            {columns.map((col) => (
                                <td key={col.key}>{row[col.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
    rows: PropTypes.arrayOf(PropTypes.object),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['elevated', 'bordered', 'striped']),
};


