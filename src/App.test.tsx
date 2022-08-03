import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";

// describe('React Testing', () => {
//   test('renders learn react text', () => {
//     render(<App />);
//
//     const input = screen.getByPlaceholderText(/value/i);
//     const btn = screen.getByRole('button')
//
//     expect(input).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();
//     expect(input).toMatchSnapshot()
//   });
//
//   test('Click test', () => {
//     render(<App />);
//     const btn = screen.getByTestId('toggle-btn')
//     const toggleDiv = () => screen.queryByTestId('toggle-elem')
//
//     expect(toggleDiv()).toBeNull()
//     fireEvent.click(btn)
//     expect(toggleDiv()).toBeInTheDocument()
//     fireEvent.click(btn)
//     expect(toggleDiv()).toBeNull()
//   })
//
//   test('Input Event', () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/value/i);
//     const valueElem = () => screen.queryByTestId('value-elem')
//
//     expect(valueElem()).toContainHTML('')
//     fireEvent.input(input, {
//       target: { value: 'YES'}
//     })
//     expect(valueElem()).toContainHTML('YES')
//   })
//
//   test('USER Event', () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/value/i);
//     const valueElem = () => screen.queryByTestId('value-elem')
//
//     expect(valueElem()).toContainHTML('')
//     userEvent.type(input, 'YES')
//     expect(valueElem()).toContainHTML('YES')
//   })
//
// })


describe('APP TEST', () => {
    test('ROUTER TEST', () => {
        render(<MemoryRouter><App/></MemoryRouter>)
        const mainLink = screen.getByTestId('link-main')
        const aboutLink = screen.getByTestId('link-about')

        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()

    })

    test('ERROR  ROUTER', () => {
        render(<MemoryRouter initialEntries={['/wefgwegwr']}>
            <App/>
        </MemoryRouter>)
        expect(screen.getByTestId('page-not-found')).toBeInTheDocument()

    })

    test('REDIRECT EXISTING  PAGE', () => {
        render(<MemoryRouter initialEntries={['/about']}>
            <App/>
        </MemoryRouter>)
        expect(screen.queryByTestId('page-not-found')).toBeNull()

    })


})
