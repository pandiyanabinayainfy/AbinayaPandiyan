import { renderHook } from '@testing-library/react-hooks';
import useCustomerPoints from './useCustomerPoints';
import { fetchTransactions } from '../services/transactionService';

jest.mock('../services/transactionService');

describe('useCustomerPoints', () => {
  it('should fetch and process customer points data', async () => {
    const mockTransactions = [
      { customerId: 1, name: 'John Doe', mobile: '123-456-7890', date: '2024-05-14', amount: 120 },
      { customerId: 1, name: 'John Doe', mobile: '123-456-7890', date: '2024-06-14', amount: 75 },
      { customerId: 1, name: 'John Doe', mobile: '123-456-7890', date: '2024-07-14', amount: 200 },
    ];

    fetchTransactions.mockResolvedValue(mockTransactions);

    const { result, waitForNextUpdate } = renderHook(() => useCustomerPoints());

    await waitForNextUpdate();

    expect(result.current.customerPointsData).toBeDefined();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle errors during data fetching', async () => {
    fetchTransactions.mockRejectedValue(new Error('Fetch failed'));

    const { result, waitForNextUpdate } = renderHook(() => useCustomerPoints());

    await waitForNextUpdate();

    expect(result.current.customerPointsData).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('Failed to fetch transactions. Please try again later.');
  });
});
