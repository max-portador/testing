import Navbar from "./Navbar";
import renderWithRouter from "../../testsHelpers/renderWithRouter";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('NAVBAR TEST', () => {


    test('RENDER ABOUT LINK',  async() => {
        renderWithRouter(<Navbar/>)
        const aboutLink = screen.getByTestId('link-about')

        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })


    test('RENDER MAIN LINK', async () => {
        renderWithRouter(<Navbar/>)
        const mainLink = screen.getByTestId('link-main')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })


    test('RENDER USERS LINK', async () => {
        renderWithRouter(<Navbar/>)
        const usersLink = screen.getByTestId('link-users')
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })

})