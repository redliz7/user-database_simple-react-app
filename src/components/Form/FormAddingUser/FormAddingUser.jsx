import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import styles from './FormAddingUser.module.css';

const FormAddingUser = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const userDataSubmitHandler = (e) => {
    e.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: 'Некорректный ввод',
        message: 'Эти поля не могут быть пустыми',
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: 'Некорректный возраст',
        message: 'Возраст должен быть больше нуля',
      });
      return;
    }

    props.onSaveUserData(inputName, inputAge);

    setInputName('');
    setInputAge('');
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          errorTitle={error.title}
          errorMessage={error.message}
        />
      )}
      <Card>
        <form
          onSubmit={userDataSubmitHandler}
          className={styles['form__wrapp']}
        >
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Возраст</label>
          <input
            id="age"
            type="number"
            value={inputAge}
            onChange={ageChangeHandler}
          />
          <Button type={'submit'}>Добавить Пользователя</Button>
        </form>
      </Card>
    </div>
  );
};

export default FormAddingUser;
