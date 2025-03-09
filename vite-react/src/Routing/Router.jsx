import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ApplyCSS from '../Basics/ApplyCSS'
import ExampleProps from '../Basics/ExampleProps'
import ExampleListAndKey from '../Basics/ExampleListAndKey'
import FormValidation from '../FormValidation'
import ClassComponentExample from '../classComponents/ClassComponentExample'
import StateExample from '../classComponents/StateExample'
import UseReducerHook from '../hooks/UseReducerHook'
import Pagination from '../Pagination/Pagination'
import Task1 from '../ReactTask/Task1'
import Task2 from '../ReactTask/Task2'

const Router = () => {
    // [ Props ]
    const userInfo = {
        name: "Suraj",
        age: 35,
        city: "Bangalore"
    }
    return (
        <div>
        <Routes>
            {/* Basics */}
            <Route path="/basics/apply-css" element={<ApplyCSS />} />
            <Route path="/basics/props" element={<ExampleProps msg="This is Example of Props" userInfo={userInfo} />} />
            <Route path="/basics/list-and-key" element={<ExampleListAndKey />} />

            {/* Class Components */}
            <Route path="/class-component/example" element={<ClassComponentExample course="React js"/>} />
            <Route path="/class-component/state" element={<StateExample />} />
            <Route path="/class-component/mounting" element={<ClassComponentExample />} />
            <Route path="/class-component/unmounting" element={<ClassComponentExample />} />

            {/* Hooks */}
            <Route path="/hooks/usestate" element={<UseReducerHook />} />
            <Route path="/hooks/useeffect" element={<UseReducerHook />} />
            <Route path="/hooks/usereducer" element={<UseReducerHook />} />
            <Route path="/hooks/useref" element={<UseReducerHook />} />

            {/* Form Validation */}
            <Route path="/form-validation" element={<FormValidation />} />

            {/* Pagination */}
            <Route path="/pagination" element={<Pagination/>} />
            
            {/* React Task */}
            <Route path="/react-task/task1" element={<Task1/>} />
            <Route path="/react-task/task2" element={<Task2/>} />
        </Routes>
        </div>
    )
}

export default Router
