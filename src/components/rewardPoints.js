import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/transactionService';
import '../App.css';

const calculatePoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += (amount - 100) * 2;
    amount = 100;
  }
  if (amount > 50) {
    points += (amount - 50) * 1;
  }
  return points;
};

const groupByMonth = (transactions) => {
  const pointsByCustomer = {};

  transactions.forEach(({ customerId, name, mobile, date, amount }) => {
    const transactionDate = new Date(date);
    const month = transactionDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const points = calculatePoints(amount);

    if (!pointsByCustomer[customerId]) {
      pointsByCustomer[customerId] = {
        name,
        mobile,
        monthlyPoints: {},
        totalPoints: 0,
      };
    }

    if (!pointsByCustomer[customerId].monthlyPoints[month]) {
      pointsByCustomer[customerId].monthlyPoints[month] = 0;
    }

    pointsByCustomer[customerId].monthlyPoints[month] += points;
    pointsByCustomer[customerId].totalPoints += points;
  });

  return pointsByCustomer;
};

const RewardPoints = () => {
  const [pointsData, setPointsData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTransactions().then((transactions) => {
      const groupedData = groupByMonth(transactions);
      setPointsData(groupedData);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = pointsData
    ? Object.keys(pointsData).filter(customerId => {
        const customer = pointsData[customerId];
        return (
          customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.mobile.includes(searchTerm)
        );
      })
    : [];

  return (
    <div>
      <h1>Reward Points</h1>
      <input
        type="text"
        placeholder="Search by name or mobile"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      {filteredData.length > 0 ? (
        filteredData.map(customerId => (
          <div className="customer" key={customerId}>
            <h2>{pointsData[customerId].name}</h2>
            <p>Mobile: {pointsData[customerId].mobile}</p>
            {Object.keys(pointsData[customerId].monthlyPoints).map(month => (
              <p key={month}>{month}: {pointsData[customerId].monthlyPoints[month]} points</p>
            ))}
            <h3>Total Points in Last 3 Months: {pointsData[customerId].totalPoints} points</h3>
          </div>
        ))
      ) : (
        <p className="loading">No results found.</p>
      )}
    </div>
  );
};

export default RewardPoints
