import React from 'react';

function PersonRow(props) {
    const { id, firstName, lastName, age, cars } = props.person;

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{cars.length}</td>
            <td><a href={`/addcar/${id}`}><button className="btn btn-primary">Add Car</button></a></td>
            <td><a href={`/getcars/${id}`}><button className="btn btn-danger">Delete Cars</button></a></td>
        </tr>
    );
}

export default PersonRow;