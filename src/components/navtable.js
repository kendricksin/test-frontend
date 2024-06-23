import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NavTable.css';

function NavTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/bearings');
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Distance</th>
          <th>Mark1</th>
          <th>Mark2</th>
          <th>Mark3</th>
          <th>Mark4</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.Distance}</td>
            <td>{row.Mark1}</td>
            <td>{row.Mark2}</td>
            <td>{row.Mark3}</td>
            <td>{row.Mark4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NavTable;
