const transactions = [
    { customerId: 1, name: 'Aarav', mobile: '123-456-7890', date: '2024-05-14', amount: 120 },
    { customerId: 1, name: 'Aarav', mobile: '123-456-7890', date: '2024-06-14', amount: 75 },
    { customerId: 1, name: 'Aarav', mobile: '123-456-7890', date: '2024-07-14', amount: 200 },
    { customerId: 2, name: 'Aeira', mobile: '987-654-3210', date: '2024-05-14', amount: 50 },
    { customerId: 2, name: 'Aeira', mobile: '987-654-3210', date: '2024-06-14', amount: 120 },
    { customerId: 2, name: 'Aeira', mobile: '987-654-3210', date: '2024-07-14', amount: 60 },
    { customerId: 3, name: 'Dhee', mobile: '987-654-3220', date: '2024-07-14', amount: 160 },
    { customerId: 3, name: 'Dhee', mobile: '987-654-3220', date: '2024-07-14', amount: 600 },
    { customerId: 3, name: 'Dhee', mobile: '987-654-3220', date: '2024-07-14', amount: 455 },
    { customerId: 4, name: 'Thuri', mobile: '987-654-3230', date: '2024-07-14', amount: 233 },
    { customerId: 4, name: 'Thuri', mobile: '987-654-3230', date: '2024-07-14', amount: 234 },
    { customerId: 4, name: 'Thuri', mobile: '987-654-3230', date: '2024-07-14', amount: 1000 },
    { customerId: 5, name: 'Nihari', mobile: '233-654-3210', date: '2024-07-14', amount: 75 },
    { customerId: 5, name: 'Nihari', mobile: '233-654-3210', date: '2024-07-14', amount: 567 },
    { customerId: 5, name: 'Nihari', mobile: '233-654-3210', date: '2024-07-14', amount: 347 },
    { customerId: 6, name: 'Adwait', mobile: '345-654-3210', date: '2024-07-14', amount: 256 },
    { customerId: 6, name: 'Adwait', mobile: '345-654-3210', date: '2024-07-14', amount: 978 },
    { customerId: 6, name: 'Adwait', mobile: '345-654-3210', date: '2024-07-14', amount: 66 },
    { customerId: 7, name: 'Mithul', mobile: '987-654-3210', date: '2024-07-14', amount: 53 },
    { customerId: 7, name: 'Mithul', mobile: '987-654-3210', date: '2024-07-14', amount: 745 },
    { customerId: 7, name: 'Mithul', mobile: '987-654-3210', date: '2024-07-14', amount: 6000 },
    { customerId: 8, name: 'Yuga', mobile: '987-654-3210', date: '2024-07-14', amount: 3456 },
    { customerId: 8, name: 'Yuga', mobile: '987-654-3210', date: '2024-07-14', amount: 453 },
    { customerId: 8, name: 'Yuga', mobile: '987-654-3210', date: '2024-07-14', amount: 345 },
    { customerId: 9, name: 'Jovi', mobile: '987-654-3210', date: '2024-07-14', amount: 766 },
    { customerId: 9, name: 'Jovi', mobile: '987-654-3210', date: '2024-07-14', amount: 846 },
    { customerId: 9, name: 'Jovi', mobile: '987-654-3210', date: '2024-07-14', amount: 1230 },
    { customerId: 9, name: 'Jovi', mobile: '987-654-3210', date: '2024-07-14', amount: 532 },
    { customerId: 9, name: 'Jovi', mobile: '987-654-3210', date: '2024-07-14', amount: 657 },
    { customerId: 9, name: 'Jovi', mobile: '987-654-3210', date: '2024-07-14', amount: 450 },
    { customerId: 10, name: 'Vish', mobile: '978-977-9997', date: '2024-07-14', amount: 725 },
    { customerId: 10, name: 'Vish', mobile: '978-977-9997', date: '2024-07-14', amount: 500 },
    { customerId: 10, name: 'Vish', mobile: '978-977-9997', date: '2024-07-14', amount: 605 },
    { customerId: 10, name: 'Vish', mobile: '978-977-9997', date: '2024-07-14', amount: 900 },
    { customerId: 11, name: 'Vick', mobile: '975-767-9192', date: '2024-07-14', amount: 550 },
    { customerId: 11, name: 'Vick', mobile: '975-767-9192', date: '2024-07-14', amount: 890 },
    { customerId: 11, name: 'Vick', mobile: '975-767-9192', date: '2024-07-14', amount: 250 },
    { customerId: 11, name: 'Vick', mobile: '975-767-9192', date: '2024-07-14', amount: 348 },
    { customerId: 11, name: 'Vick', mobile: '975-767-9192', date: '2024-07-14', amount: 1450 },
    { customerId: 11, name: 'Vick', mobile: '975-767-9192', date: '2024-07-14', amount: 2490 },
    { customerId: 12, name: 'Dhaks', mobile: '999-657-3299', date: '2024-07-14', amount: 534 },
    { customerId: 12, name: 'Dhaks', mobile: '999-657-3299', date: '2024-07-14', amount: 345 },
    { customerId: 12, name: 'Dhaks', mobile: '999-657-3299', date: '2024-07-14', amount: 356 },
    { customerId: 12, name: 'Dhaks', mobile: '999-657-3299', date: '2024-07-14', amount: 1250 },
    { customerId: 12, name: 'Dhaks', mobile: '999-657-3299', date: '2024-07-14', amount: 350 },
    { customerId: 12, name: 'Dhaks', mobile: '999-657-3299', date: '2024-07-14', amount: 560 },
    { customerId: 13, name: 'Shaan', mobile: '999-654-3000', date: '2024-07-14', amount: 600 },


   
  ];
  
  export default transactions
  