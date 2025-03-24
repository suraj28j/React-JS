import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 bg-white rounded sticky-top">
            <div className="container-fluid">
                <h2 className="navbar-brand">React</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Basics
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/basics/apply-css">How Apply CSS</Link></li>
                                <li><Link className="dropdown-item" to="/basics/props">Props</Link></li>
                                <li><Link className="dropdown-item" to="/basics/list-and-key">List and Key</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Class Component
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/class-component/example">CC Example</Link></li>
                                <li><Link className="dropdown-item" to="/class-component/state">State</Link></li>
                                <li><Link className="dropdown-item" to="/class-component/mounting">Mounting</Link></li>
                                <li><Link className="dropdown-item" to="/class-component/updating">Updating</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hooks
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/hooks/usestate">useState</Link></li>
                                <li><Link className="dropdown-item" to="/hooks/useeffect">useEffect</Link></li>
                                <li><Link className="dropdown-item" to="/hooks/usereducer">useReducer</Link></li>
                                <li><Link className="dropdown-item" to="/hooks/useref">useRef</Link></li>
                                <li><Link className="dropdown-item" to="/hooks/usecontext">UseContext</Link></li>
                                <li><Link className="dropdown-item" to="/hooks/usememo">useMemo</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/form-validation">Form Validation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pagination">Pagination</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ReactTask
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/react-task/task1">Task 1</Link></li>
                                <li><Link className="dropdown-item" to="/react-task/task2">Task 2</Link></li>
                                <li><Link className="dropdown-item" to="/react-task/traficlight">TraficLight</Link></li>
                                <li><Link className="dropdown-item" to="/react-task/lazy">Lazy</Link></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header
