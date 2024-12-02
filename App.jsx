import { useState, useRef, useEffect } from "react";

import React, { useState, useEffect } from "react";
import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from './pages';
import { Progress } from './components'
import "./App.css";
import "./styles/main.css";


export const App = () => {
  // const firstNameInput = useRef(null)
  // const lastNameInput = useRef(null)

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // const [counter, setCounter] = useState(0)

  // let counter2 = 0

  // useState - сообщает Реакту за какими переменными следить, чтобы делать изменения в UI

  // useRef - используется для объектов, в том числе и DOM-элементов
  // useEffect - используется для побочек

  // useMemo
  // useCallback

  // useContext
  // useReducer

  // useLayoutEffect
  // useInsertionEffect
  // useOptimistic


  // const onButtonClickHandler = () => {
  //   setFirstName(firstNameInput.current.value)
  //   setLastName(lastNameInput.current.value)
  // }

  // const onIncrement = () => {
  //   setCounter(counter + 1)
  // }

  // const onIncrementWithoutState = () => {
  //   counter2++

  // }

  // console.log(date.getDate());
  // console.log(date.getMonth());
  // console.log(date.getFullYear());

  // вызывается при каждом рендере
  // useEffect(() => {
  //   console.log('I am from useEffect')
  // })

  // вызывается при первом рендере (инициализации компонента)
  // useEffect(() => {
  //   console.log('I am from useEffect')
  // }, [])


  // вызывается при первом рендере и каждом изменении counter
  // useEffect(() => {
  //   console.log('I am from useEffect')
  // }, [counter])

  // useEffect(() => {
  //   console.log('I am from useEffect')
  // }, [counter2])

 

function Clock() {
        const [time, setTime] = useState("");

        useEffect(() => {
            const updateClock = () => {
                const date = new Date();
                const hours = date.getHours().toString().padStart(2, "0");
                const minutes = date.getMinutes().toString().padStart(2, "0");
                const seconds = date.getSeconds().toString().padStart(2, "0");
                const currentTime = `${hours}:${minutes}:${seconds}`;
                setTime(currentTime);
                console.log(currentTime); // Логируем актуальное время
            };

            updateClock(); // Немедленно обновляем время
            const intervalId = setInterval(updateClock, 500);

            return () => {
                <Clock />
                clearInterval(intervalId);
            };
        }, []);

        return <div>{time}</div>;
    }
  

  return (
    <div className="App">
      <div className="time">
        {time}
      </div>
      {/* <Progress steps={5} activeStep{2}/> */}
      {/* <Welcome />
      <input
        type="text"
        id="firstname"
        style={{ border: '2px solid black' }}
        placeholder="First name"
        ref={firstNameInput} />

      <input
        type="text"
        id="lastname"
        style={{ border: '2px solid black' }}
        placeholder="Last name"
        ref={lastNameInput} />

      <button onClick={onButtonClickHandler}>Click me</button>
      <h1>{firstName + ' ' + lastName}</h1>
      <h2>{firstName}</h2>
      <h3>{lastName}</h3> */}

      {/* <input
        type="text"
        id="firstname"
        style={{ border: '2px solid black' }}
        placeholder="First name"
        ref={firstNameInput} />

      <input
        type="text"
        id="lastname"
        style={{ border: '2px solid black' }}
        placeholder="Last name"
        ref={lastNameInput} />

      <button onClick={onButtonClickHandler}>Click me</button>
      <button onClick={onIncrement}>+</button>
      <button onClick={onIncrementWithoutState}>+++++++</button>
      <h1>{firstName + ' ' + lastName}</h1>
      <h2>{firstName}</h2>
      <h3>{lastName}</h3> */}
    </div>
  );
};
