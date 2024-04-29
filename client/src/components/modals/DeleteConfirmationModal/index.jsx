import React from 'react';
import styles from './DeleteConfirmationModal.module.scss';
import {deleteUser} from '../../../api';

// модальне вікно зазвичай займає весь екран і знаходиться поверх всіх інших елементів
// фон можна зтемнювати
const DeleteConfirmationModal = (props) => {
  const { closeModal, userId } = props;

  const handleUserDelete = async () => {
    // тут буде відбуватися запит на видалення користувача
    // await deleteUser(userId);
    alert(`User with id ${userId} deleted`);
    closeModal();
  }
  return (
    <>
      <div className={styles.background} onClick={closeModal}></div>
      <section className={styles.modalWindow}>
        <h3>Are you sure you want delete your profile?</h3>
        <button onClick={handleUserDelete}>Yes</button>
        <button onClick={closeModal}>No</button>
      </section>
    </>
  );
};

export default DeleteConfirmationModal;
