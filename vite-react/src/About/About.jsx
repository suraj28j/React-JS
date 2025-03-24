import React from 'react'
import "./about.css"

const About = () => {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <h3>🖊️ About React</h3>
                <p>React is an open-source front-end JavaScript library that is used for building composable user interfaces,
                    especially for single-page applications.
                    It is used for handling view layer for web and mobile apps based on components in a declarative approach.</p>
                <p>React was created by Jordan Walke, a software engineer working for Facebook.
                    React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.</p>
            </div>

            <div className='row mt-4'>
                <h4>📌  What are the major features of React?</h4>
                <ul className='ms-4'>
                    <li>
                        <p>Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.</p>
                    </li>
                    <li>
                        <p>It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive.</p>
                    </li>
                    <li>
                        <p>Supports server-side rendering which is useful for Search Engine Optimizations(SEO).</p>
                    </li>
                    <li>
                        <p>Follows Unidirectional or one-way data flow or data binding.</p>
                    </li>
                    <li>
                        <p>Uses reusable/composable UI components to develop the view.</p>
                    </li>
                </ul>
            </div>

            <div className='row'>
                <h4>📌 What is JSX?</h4>
                <p>JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript.
                    Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function,
                    giving us expressiveness of JavaScript along with HTML like template syntax.</p>
            </div>

            <div className='row mt-4'>
                <h4>📌 What is Virtual DOM?</h4>
                <p>The Virtual DOM (VDOM) is an in-memory representation of Real DOM.
                    The representation of a UI is kept in memory and synced with the "real" DOM.
                    It's a step that happens between the render function being called and the displaying of elements on the screen.
                    This entire process is called reconciliation.</p>
            </div>

            <div className='row mt-4'>
                <h4>📌 What is state in React?</h4>
                <p>State of a component is an object that holds some information that may change over the lifetime of the component.
                    Whenever the state object change, the component re-renders.</p>
            </div>

            <div className='row mt-4'>
                <h4>📌 What are props in React?</h4>
                <p>Props is a special keyword in React that stands for properties and It is used for passing data from one component to another.
                    Data with props are passed in a unidirectional flow from parent to child.</p>
            </div>

            <div className='row mt-4'>
                <h4>📌 What is the difference between Element and Component?</h4>
                <p>An Element is a plain object describing what we want to appear on the screen in terms of the DOM nodes,
                    while a component is a reusable block of code that contains logic, states, and also returns the Element.</p>
            </div>

            <div className='row mt-4'>
                <h4>📌 What is "key" prop and what is the benefit of using it in arrays of elements?</h4>
                <p>A key is a special string attribute we should include when creating arrays of elements. 
                    Key prop helps React identify which items have changed, are added, or are removed.</p>
            </div>
        </div>
    )
}

export default About
