
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function Dashboard() {

    const [counts, setCounts] = useState({ male: 0, female: 0, total: 0 });

  useEffect(() => {
    fetch("http://localhost:8000/get")
      .then((response) => response.json())
      .then((data) => {
        const maleCount = data.find((d) => d._id === "Male")?.count ?? 0;
        const femaleCount = data.find((d) => d._id === "Female")?.count ?? 0;
        const totalCount = maleCount + femaleCount;
        setCounts({ male: maleCount, female: femaleCount, total: totalCount });
      });
  }, []);

  return (
    <div>
      <p>Male Count: {counts.male}</p>
      <p>Female Count: {counts.female}</p>
      <p>Total Count: {counts.total}</p>
    </div>
  );
  
}
export default Dashboard;