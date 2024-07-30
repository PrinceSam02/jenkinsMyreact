import { render, screen } from '@testing-library/react';
import AddCustomer from './AddCustomer';
import "@testing-library/jest-dom";
import AddProduct from './AddProduct';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
 
 
// jest.mock('axios');
// jest.mock('react-router-dom');
jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: jest.fn(),
}));
const mock = new MockAdapter(axios);

 
test('renders Add Customer title ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ADD CUSTOMER DATA");
});
 
test('renders Add Customer Name ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Customer Name");
});


test('renders Add Customer Name text field ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("address");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Address :");
});
 
test('renders Add Customer email', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("email");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Mail ID :");
});
test('renders Add Customer select', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("select");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Select One");
});
// it("renders input field empty", () => {
//     render(<AddProduct />);
//     const id = screen.getByTestId('id');
//     expect(id).toBeEmptyDOMElement();
//   });

// test('renders Add orders price text field ', () => {
//     render(<AddOrder />);
//     const linkElement = screen.getByRole("itemprice");
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent("");
// });
 
test('renders Add Customer submit button', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("submitbutton");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});
