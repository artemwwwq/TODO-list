import React, {ChangeEvent} from 'react';


type PropsType = {
    isDone: boolean
    callBack: (checkedValue: boolean)=> void
}

export const SuperCheckbox = (props: PropsType) => {

    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>)=> {
        props.callBack(e.currentTarget.checked)
    }

    return (
        <div>
            <input type='checkbox' checked={props.isDone} onChange={onChangeHandler}/>
        </div>
    );
};

