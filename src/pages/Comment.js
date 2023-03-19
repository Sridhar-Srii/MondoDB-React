import React, { useState, useEffect } from 'react';

function Comment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/count')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h2>User Count</h2>
      <table>
        <tbody>
          <tr>
            <td>Male</td>
            <td>{data.find(d => d._id === 'male').count}</td>
          </tr>
          <tr>
            <td>Female</td>
            <td>{data.find(d => d._id === 'female').count}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{data.reduce((acc, d) => acc + d.count, 0)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Comment;
