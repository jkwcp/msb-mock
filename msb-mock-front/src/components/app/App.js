import React from 'react'
import "./App.css"

const App = () => {
    return (
        <div id="app">
            <div className="app-background">
                <div className="container">
                    <div>
                        <div id="app-content">
                            <header id="app-content-header">
                                <div className="container">
                                    <div id="app-mobile-menu"></div>
                                    <section id="app-menu-container">
                                        <div className="menu-arrow is-left"></div>
                                        <div id="app-menu">
                                            <div class="navigation-bar">
                                                <nav>
                                                    <ul id="menu-list">
                                                        <li>
                                                            <a href="#">
                                                                <span>
                                                                    New Client
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span>
                                                                    New Client
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span>
                                                                    New Client
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span>
                                                                    New Client
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="menu-arrow is-right"></div>
                                    </section>
                                </div>

                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;