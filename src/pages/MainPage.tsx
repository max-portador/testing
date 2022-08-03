import React from 'react';
import Counter from "../components/Counter/Counter";

const MainPage = () => {
    return (
        <div data-testid='main-page' style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
        }}>
            MAIN PAGE
            <Counter/>
        </div>
    );
};

export default MainPage;