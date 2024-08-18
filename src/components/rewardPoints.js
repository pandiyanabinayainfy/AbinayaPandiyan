import React, { useState } from 'react'
import useCustomerPoints from './useCustomerPoints'
import { filterCustomerData } from '../utils/utils'
import Loader from '../utils/loader'
import '../App.css'

const RewardPoints = () => {
  const { customerPointsData, loading, error } = useCustomerPoints()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };

  const filteredData = filterCustomerData(customerPointsData, searchTerm)

  const renderContent = () => {
    if (loading) {
      return <Loader />
    }

    if (error) {
      return <p className="error">{error}</p>
    }

    if (filteredData.length > 0) {
      return filteredData.map(customerId => {
        const customer = customerPointsData[customerId]

        return (
          <div className="customer" key={customerId}>
            <h2>{customer.name}</h2>
            <p>Mobile: {customer.mobile}</p>
            {Object.keys(customer.monthlyPoints).map(month => (
              <p className='data-design' key={month}>{month}:<span className='unique-color>'> {customer.monthlyPoints[month]} </span> points</p>
            ))}
            <h3>Total Points in Last 3 Months: <span className='unique-color'> {customer.totalPoints} </span> points</h3>
          </div>
        )
      })
    }
    return <p>No results found.</p>
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
        aria-label="Search customers by name or mobile number"
      />
      <div role="list">
        {renderContent()}
      </div>
    </div>
  )
}

export default RewardPoints