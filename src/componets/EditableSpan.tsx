import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    OldTitle: string
    callBack: (newTitle: string)=> void
}

export const EditableSpan = (props: PropsType) => {
    let [newTitle, setNewTitle] = useState(props.OldTitle)
    const [edit, setEdit]=useState(false)
    const editFoolHandler=()=> {
        setEdit(!edit)
        props.callBack(newTitle)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }


    return (
        edit ? <input onChange={onChangeHandler} value={newTitle} autoFocus onBlur={editFoolHandler}/> : <span onDoubleClick={editFoolHandler}>{props.OldTitle}</span>
    );
};

