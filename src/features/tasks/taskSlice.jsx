import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        title: 'task 1',
        description: 'task 1 description',
        completed: false
    },
    {
        id: 2,
        title: 'task 2',
        description: 'task 2 description',
        completed: true
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(state, action)
        },
        deleteTask: (state, action) => {
            const row = state.find(data => data.id === action.payload);
            if(row){
                state.splice(state.indexOf(row), 1)
            }
        },
        taskCompleted: (state, action) => {
            const row = state.find(row => row.id === action.payload)
            if(row){
                row.completed = !row.completed
            }
            
        }
    }
})

export const { addTask, deleteTask, taskCompleted } = taskSlice.actions

export default taskSlice.reducer