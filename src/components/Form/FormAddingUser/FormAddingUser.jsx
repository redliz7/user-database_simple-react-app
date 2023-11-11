import React, { useState, useRef } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import styles from './FormAddingUser.module.css';

const FormAddingUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const userDataSubmitHandler = (e) => {
    e.preventDefault();
    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: 'Некорректный ввод',
        message: 'Эти поля не могут быть пустыми!',
      });
      return;
    }
    if (+inputUserAge < 1) {
      setError({
        title: 'Некорректный возраст',
        message: 'Возраст должен быть больше нуля!',
      });
      return;
    }

    props.onSaveUserData(inputUserName, inputUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <React.Fragment>
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
          <input id="name" type="text" ref={nameInputRef} />
          <label htmlFor="age">Возраст</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type={'submit'}>Добавить Пользователя</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default FormAddingUser;
