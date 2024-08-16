import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import RewardPoints from './rewardPoints';
import useCustomerPoints from '../hooks/useCustomerPoints';

// Mock the useCustomerPoints hook
jest.mock('../hooks/useCustomerPoints');

describe('RewardPoints Component', () => {
  test('displays loading spinner while fetching data', () => {
    useCustomerPoints.mockReturnValue({ loading: true });

    render(<RewardPoints />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('displays error message if there is an error fetching data', () => {
    useCustomerPoints.mockReturnValue({ error: 'Error fetching data' });

    render(<RewardPoints />);

    expect(screen.getByText('Error fetching data')).toBeInTheDocument();
  });

  test('displays customer data when loaded', () => {
    useCustomerPoints.mockReturnValue({
      customerPointsData: {
        '1': {
          name: 'Aarav',
          mobile: '123-456-7890',
          monthlyPoints: {
            'June': 90,
            'July': 25,
            'August': 250,
          },
          totalPoints: 365,
        },
      },
      loading: false,
      error: null,
    });

    render(<RewardPoints />);

    expect(screen.getByText('Aarav')).toBeInTheDocument();
    expect(screen.getByText('Mobile: 123-456-7890')).toBeInTheDocument();
    expect(screen.getByText('June: 90 points')).toBeInTheDocument();
    expect(screen.getByText('July: 25 points')).toBeInTheDocument();
    expect(screen.getByText('August: 250 points')).toBeInTheDocument();
    expect(screen.getByText('Total Points in Last 3 Months: 365 points')).toBeInTheDocument();
  });

  test('filters customer data based on search term', () => {
    useCustomerPoints.mockReturnValue({
      customerPointsData: {
        '1': {
          name: 'Aarav',
          mobile: '123-456-7890',
          monthlyPoints: {
            'May': 90,
            'June': 25,
            'July': 250,
          },
          totalPoints: 365,
        },
        '2': {
          name: 'Vish',
          mobile: '978-977-9997',
          monthlyPoints: {
            'May': 3210,
            'July': 1650,
          },
          totalPoints: 4860,
        },
      },
      loading: false,
      error: null,
    });

    render(<RewardPoints />);

    const searchInput = screen.getByPlaceholderText('Search by name or mobile');
    
    // Search by name
    fireEvent.change(searchInput, { target: { value: 'Vic' } });
    expect(screen.getByText('Vick')).toBeInTheDocument();
    expect(screen.queryByText('Vish')).not.toBeInTheDocument();

    // Search by mobile
    fireEvent.change(searchInput, { target: { value: '999-657-3299' } });
    expect(screen.getByText('Daksh')).toBeInTheDocument();
    expect(screen.queryByText('Vick')).not.toBeInTheDocument();

    // No results found
    fireEvent.change(searchInput, { target: { value: 'Nonexistent' } });
    expect(screen.getByText('No results found.')).toBeInTheDocument();
  });
});
