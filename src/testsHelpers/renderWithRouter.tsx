import React, {FC} from 'react';
import {render} from '@testing-library/react'
import {MemoryRouter} from "react-router-dom";
import AppRouter from "../router/AppRouter";

const RenderWithRouter = (component: React.ReactNode | null, initialRoute: string = '/') => {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <>
                <AppRouter/>
                {component}
            </>

        </MemoryRouter>
    );
};

interface PropsType {
    component: React.ReactNode | null,
    initialRoute?: string
}

export default RenderWithRouter;