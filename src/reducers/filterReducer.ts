import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: changeFilterACType) => {
    switch (action.type) {
        case 'CHANGE-FILTER': {
            return action.payload.valueFilter
        }
        default: return state
    }
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC=(valueFilter: FilterValuesType)=> {
    return{
        type: 'CHANGE-FILTER',
        payload: {
            valueFilter
        }
    } as const
}