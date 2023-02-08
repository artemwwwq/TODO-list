import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    callBack: (newValue: string)=> void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] =useState('')



    const activateEditMode = () => {
        setEdit(!edit)
        setTitle(props.title)
        props.callBack(title)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    return (
        edit ? <input value={title} onChange={onChangeHandler} onBlur={activateEditMode} autoFocus/> :  <span onDoubleClick={activateEditMode}>{props.title}</span>
    )
}