import Button from '../../UI/Button';
import ErrorWindow from '../../UI/ErrorWindow/ErrorWindow';
import styles from './UserForm.module.css';
import React, { useState } from 'react';

const UserForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputError, setInputError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputName.length) {
      return setInputError(!inputError);
    }
    if (!inputAge.length) {
      return setInputError(!inputError);
    }
    if (inputAge < 18) {
      return setAgeError(true);
    }
    console.log(inputError);

    const userData = {
      name: inputName,
      age: inputAge,
    };

    props.onSaveUserData(userData);
    setInputName('');
    setInputAge('');
  };

  return (
    <form onSubmit={submitHandler} className={styles['form__wrapp']}>
      {inputError && (
        <ErrorWindow
          onErrorTitle={'Некорректный ввод'}
          onErrorText={'Эти поля не могут быть пустыми'}
          onHideWindowHandler={setInputError}
        />
      )}
      {ageError && (
        <ErrorWindow
          onErrorTitle={'Некорректный возраст'}
          onErrorText={'Вы должны быть страше 18 лет!'}
          onHideWindowHandler={setAgeError}
        />
      )}
      <label>Имя</label>
      <input type="text" value={inputName} onChange={nameChangeHandler}></input>
      <label>Возраст</label>
      <input type="number" value={inputAge} onChange={ageChangeHandler}></input>
      <Button nameButton={'Добавить Пользователя'} />
    </form>
  );
};

export default UserForm;
