import React from 'react';
import './NavTable.css';

function NavTable() {
  const distances = Array.from({ length: 11 }, (_, i) => 10 - i); // [10, 9, 8, ... , 0]
  const marks = ["Mark1", "Mark2", "Mark3", "Mark4"];
  const initialData = distances.map(distance => ({
    distance,
    marks: marks.reduce((acc, mark) => ({ ...acc, [mark]: '000' }), {})
  }));

  return (
    <table>
      <thead>
        <tr>
          <th>Distance</th>
          {marks.map(mark => (
            <th key={mark}>{mark}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {initialData.map(row => (
          <tr key={row.distance}>
            <td>{row.distance}</td>
            {marks.map(mark => (
              <td key={mark}>{row.marks[mark]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NavTable;
