import React from 'react';

class MyTable extends React.Component {
  render() {
    // Sample data for the table
    const data = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Bob', age: 35 },
    ];

    // Mapping the data to table rows
    const tableRows = data.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
      </tr>
    ));

    return (
      <div>
        <h2>Sample Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTable;