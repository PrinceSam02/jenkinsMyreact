import { render, screen } from '@testing-library/react';
import EditCustomer from './EditCustomer';
import "@testing-library/jest-dom"

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
 
 
// jest.mock('axios');
// jest.mock('react-router-dom');
jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: jest.fn(),
}));
const mock = new MockAdapter(axios);


 
test('renders Edit Customer title ', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update Customer's Data");
});

test('renders edit Customer Name ', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Name :");
});
 
test('renders edit Customer Name text field ', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("address");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Address :");
});
 
test('renders edit Customer email', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("email");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("email:");
});
 
// // test('renders Add orders price text field ', () => {
// //     render(<AddOrder />);
// //     const linkElement = screen.getByRole("itemprice");
// //     expect(linkElement).toBeInTheDocument();
// //     expect(linkElement).toHaveTextContent("");
// // });
 
test('renders Edit Customer submit button', () => {
    render(<EditCustomer />);
    const linkElement = screen.getByRole("submitbutton");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update");
});
