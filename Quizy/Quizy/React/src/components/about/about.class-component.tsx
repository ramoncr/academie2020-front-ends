import React from 'react';

class About extends React.Component {
    componentDidMount() { console.log('Component has been inserted in the virtual DOM'); }
    componentWillUnmount() { console.log('Component will be removed from the DOM'); }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="twelve columns">
                        <div className="about">
                            <h1>This is an about page</h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}