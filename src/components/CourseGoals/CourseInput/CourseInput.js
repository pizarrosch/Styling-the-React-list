import React, { useState } from 'react';
import s from './CourseInput.module.css';
import Button from '../../UI/Button/Button';
// import './CourseInput.module.css';
import styled from "styled-components";

// const FormControl = styled.div`
//     margin: 0.5rem 0;
//
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${({notValid}) => (notValid ? 'red' : 'black')};
//   }
//
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${({notValid}) => (notValid ? 'red' : 'blue')};
//     background-color: ${({notValid}) => (notValid ? 'lightpink' : null)};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
//
//   & input:focus {
//     outline: none;
//     background: aliceblue;
//     border-color: cornflowerblue;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${s.formControl} ${!isValid ? s.invalid : s.formControl}`}>
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
