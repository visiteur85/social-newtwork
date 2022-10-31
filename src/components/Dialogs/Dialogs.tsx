import React from 'react';
import s from '../Dialogs/Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Pavel</div>
                <div className={s.dialog}>Andrew</div>
                <div className={s.dialog}>Dima</div>
                <div className={s.dialog}>Vlad</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}> How are you</div>
                <div className={s.message}>Yo</div>
            </div>

        </div>
    );
};

