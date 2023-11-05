import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    id: 1,
    title: 'task 1',
    desscription: 'task 1 description',
    completed: false
}]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, payload) => {
            console.log(state, payload)
        }
    }
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer