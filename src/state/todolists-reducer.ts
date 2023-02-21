import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const TodolistsReducer = (state: TodolistType[], action: tsarType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':{
            return state.filter(el=>el.id !== action.payload.todolistId1)
        }
        case 'ADD-TODOLIST': {
            let newTodoListID = v1()
            let newTodolist: TodolistType = {id: newTodoListID, title: action.payload.newTodolistTitle, filter: 'all'};
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(el=>el.id === action.payload.todolistId2? {...el, title: action.payload.newTodolistTitle} : el)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(el=>el.id === action.payload.todolistId2 ? {...el, filter: action.payload.newFilter} : el)
        }

    }
}




type tsarType = removeTodoListACType | addTodoListACType | changeTodolistTitleACType | changeFilterACACType

type removeTodoListACType = ReturnType<typeof removeTodoListAC>
type addTodoListACType = ReturnType<typeof addTodoListAC>
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
type changeFilterACACType = ReturnType<typeof changeFilterAC>

export const removeTodoListAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId1
        }
    } as const
}


export const addTodoListAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
          newTodolistTitle
        }
    } as const
}

export const changeTodolistTitleAC = (todolistId2: string,newTodolistTitle: string ) => {
    return{
        type:'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistId2,
            newTodolistTitle
        }
    }as const
}

export const changeFilterAC = (todolistId2: string, newFilter: FilterValuesType) => {
    return{
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistId2,
            newFilter
        }
    }as const
}
