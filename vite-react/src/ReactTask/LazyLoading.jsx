import React, { lazy } from 'react'
import './loader.css'
import Task1 from './Task1'
import { Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))
const LazyLoading = () => {
    return (
        <div className='container'>
                <h2>Task 1</h2>
                <Task1 />
                <Suspense fallback={<div className='loader'></div>}>
                    <HeavyComponent />
                </Suspense>
        </div>
    )
}

export default LazyLoading
