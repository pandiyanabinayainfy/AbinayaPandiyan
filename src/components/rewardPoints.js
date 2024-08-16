import React, { useState } from 'react'
import useCustomerPoints from './useCustomerPoints'
import { filterCustomerData } from './utils'
import '../App.css'

const RewardPoints = () => {
  const { customerPointsData, loading, error } = useCustomerPoints();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredData = filterCustomerData(customerPointsData, searchTerm);

  const renderContent = () => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    )
  }

  if (error) {
    return <p className="error">{error}</p>;
  }
  if(filteredData.length > 0) { 
    return filteredData.map(customerId => (
      <div className='customer' key={customerId}>
        <h2>{customerPointsData[customerId].name}</h2>
        <p className='data-design'>Mobile: <span className='unique-color'> {customerPointsData[customerId].mobile}</span></p>
        {Object.keys(customerPointsData[customerId].monthlyPoints).map(month => (
          <p className='data-design' key={month}>{month}: <span className='unique-color'> {customerPointsData[customerId].monthlyPoints[month]} </span> points</p>
        ))}
        <h3>Total Points in Last 3 Months: <span className='unique-color'>{customerPointsData[customerId].totalPoints}</span> points</h3>
      </div>
    ))
  }
    return <p className='loading'>No results found.</p>
  }

  return (
    <div className="reward-points-container">
      <h1>Reward Points</h1>
      <input
        type="text"
        placeholder="Search by name or mobile"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      {renderContent()}
    </div>
  )
}

export default RewardPoints
