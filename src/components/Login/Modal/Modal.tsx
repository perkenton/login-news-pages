import React from 'react';
import styles from './Modal.module.scss';


function Modal(props: {
  isModalOpened: boolean,
  setIsModalOpened: (value: boolean) => void,
  modalText: string,
}) {

  return (
    <div className={ styles.modal } style={{ display: props.isModalOpened ? 'block' : 'none' }} >
      <div className={ styles.textWrapper }>
        <span className={ styles.closeCross } onClick={ () => props.setIsModalOpened(false) } title='Закрыть'>×</span>
        <p className={ styles.text }>{ props.modalText }</p>
      </div>
    </div>
  )
}

export default Modal;