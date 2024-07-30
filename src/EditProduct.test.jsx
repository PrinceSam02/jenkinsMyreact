import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import EditProduct from './EditProduct';
 
 
// jest.mock('axios');
// jest.mock('react-router-dom');
jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: jest.fn(),
}));
const mock = new MockAdapter(axios);


 
test('renders Edit Product title ', () => {
    render(<EditProduct />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update Product's Data");
});

test('renders edit Product Name ', () => {
    render(<EditProduct />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Product name :");
});
 
test('renders edit Product Category text field ', () => {
    render(<EditProduct />);
    const linkElement = screen.getByRole("cate");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Category :");
});
 
test('renders edit Product description', () => {
    render(<EditProduct />);
    const linkElement = screen.getByRole("desc");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Description :");
});
test('renders edit Product price', () => {
    render(<EditProduct />);
    const linkElement = screen.getByRole("pri");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Price :");
});
 
// // // test('renders Add orders price text field ', () => {
// // //     render(<AddOrder />);
// // //     const linkElement = screen.getByRole("itemprice");
// // //     expect(linkElement).toBeInTheDocument();
// // //     expect(linkElement).toHaveTextContent("");
// // // });
 
test('renders Edit Product submit button', () => {
    render(<EditProduct />);
    const linkElement = screen.getByRole("submitbutton");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update");
});
