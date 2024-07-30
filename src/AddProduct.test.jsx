import { render, screen } from '@testing-library/react';
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

 
test('renders Add Product title ', () => {
    render(<AddProduct />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Add Product's Data");
});
 
test('renders Add Product Name ', () => {
    render(<AddProduct />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Product Name :");
});
 
test('renders Add Product Category text field ', () => {
    render(<AddProduct />);
    const linkElement = screen.getByRole("cate");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Category :");
});
 
test('renders Add Product description', () => {
    render(<AddProduct />);
    const linkElement = screen.getByRole("desc");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Description :");
});

test('renders Add Products price', () => {
    render(<AddProduct />);
    const linkElement = screen.getByRole("pri");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Price :");
});

// // it("renders input field empty", () => {
// //     render(<AddProduct />);
// //     const id = screen.getByTestId('id');
// //     expect(id).toBeEmptyDOMElement();
// //   });

// // test('renders Add orders price text field ', () => {
// //     render(<AddOrder />);
// //     const linkElement = screen.getByRole("itemprice");
// //     expect(linkElement).toBeInTheDocument();
// //     expect(linkElement).toHaveTextContent("");
// // });
 
test('renders Add Product submit button', () => {
    render(<AddProduct />);
    const linkElement = screen.getByRole("submitbutton");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});
