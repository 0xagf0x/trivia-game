import React from 'react';
import Style from './StartModal.module.css';
import { Button } from '@mui/material';

const StartModal = ({handleStartClick}: any) => {
  return (
    <div className={Style.modal}>
        <div className={Style.modal_inner}>
            <h3 className={Style.modal__inner__title}>Welcome!</h3>
            <span className={Style.modal__inner__subtitle}>
                Press "Start" to begin the game!
            </span>
            <div className={Style.modal__inner__buttonContainer}>
                 <Button
                    variant="outlined"
                    color="primary"
                    onClick={event => handleStartClick()}
                >
                    Start
                </Button>
            </div>
        </div>
    </div>
  )
}

export default StartModal