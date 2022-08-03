import {findAllByTestId, render, screen} from '@testing-library/react'
import axios, { AxiosResponse } from "axios";
import Users from "./Users";
import {IUser} from "../models/IUser";
import mocked = jest.mocked;
import {MemoryRouter, Route, Routes} from "react-router-dom";
import UserDetailsPage from "../pages/UserDetailsPage";
import React from "react";
import AppRouter from "../router/AppRouter";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "../testsHelpers/renderWithRouter";

jest.mock('axios')


describe('USERS TEST', () => {
    let response: {data: IUser[]} = { data : []};

    beforeEach(()=> {
        response = {
            data: [
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                },
            ]
        };

        (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(response)
    })

   afterEach(() => {
       jest.clearAllMocks()
   })

    test('USER TEST 1', async () => {
        // await mocked(axios).mockResolvedValue(axiosResponse)

        render(<MemoryRouter><Users/></MemoryRouter>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        expect(axios.get).toBeCalledTimes(1)
        // screen.debug()
    })

    test('REDIRECT TO DETAILS PAGE', async () => {
        renderWithRouter(<Users/>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        expect(screen.queryByTestId('page-not-found')).toBeNull()
        userEvent.click

    })
})