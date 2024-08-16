export const filterCustomerData = (customerPointsData, searchTerm) => {
    if (!customerPointsData) return []
  
    return Object.keys(customerPointsData).filter(customerId => {
      const customer = customerPointsData[customerId];
      return (
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.mobile.includes(searchTerm)
      )
    })
  }
  