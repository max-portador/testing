import React from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getCounterValue} from "../../store/reducers/selectors/getCounterValue";
import {decrement, increment} from "../../store/reducers/counterReducer";

const Counter = () => {
    const dispatch = useAppDispatch()
    const value = useTypedSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }




    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{value}</h1>
            <button onClick={onDecrement} style={{width: 40}}>-</button>
            <button onClick={onIncrement} style={{width: 40}}>+</button>
        </div>
    );
};

export default Counter;