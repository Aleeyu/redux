import React, { Component } from 'react';
class PageNotFound extends Component{
  render() {
    return (
      <div className="text-center"
           style={{paddingTop: 100}}>
        <h1 style={{
          fontSize: 125,
          fontWeight: 700,
          textShadow: "5px 5px 10px"
        }}>404</h1>
        <h1>Page not found</h1>
      </div>
    );
  }
}

export default PageNotFound;