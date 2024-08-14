import { useState, useEffect } from 'react'
import { fetchTransactions } from '../services/transactionService'

const useCustomerPoints = () => {
  const [customerPointsData, setCustomerPointsData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const transactions = await fetchTransactions({ signal })
        const groupedData = groupTransactionsByMonth(transactions)
        setCustomerPointsData(groupedData)
      } catch (err) {
        if (err.name !== 'AbortError') {
      
          setError('Failed to fetch transactions. Please try again later.')
        }
      } finally {
        setLoading(false)
      }
    };

    fetchData();

    return () => controller.abort()
  }, []);

  return { customerPointsData, loading, error }
};

const groupTransactionsByMonth = (transactions) => {
  const customerPointsData = {}

  transactions.forEach(({ customerId, name, mobile, date, amount }) => {
    const transactionDate = new Date(date)
    const month = transactionDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })
    const points = calculatePoints(amount)

    if (!customerPointsData[customerId]) {
      customerPointsData[customerId] = {
        name,
        mobile,
        monthlyPoints: {},
        totalPoints: 0,
      };
    }

    if (!customerPointsData[customerId].monthlyPoints[month]) {
      customerPointsData[customerId].monthlyPoints[month] = 0
    }

    customerPointsData[customerId].monthlyPoints[month] += points
    customerPointsData[customerId].totalPoints += points
  });

  return customerPointsData;
};

const calculatePoints = (amount) => {
  let points = 0
  if (amount > 100) {
    points += (amount - 100) * 2
    amount = 100
  }
  if (amount > 50) {
    points += (amount - 50) * 1
  }
  return points
};

export default useCustomerPoints
