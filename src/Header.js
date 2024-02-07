import React from "react";

const Header = ({ title }) => {
  const headerStyle = {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    fontSize: '22px'
  }
  return (
    <header className="header" style={headerStyle}>
      <p>
        {title}
      </p>
    </header>
  )
}

// Header.defaultProps = {
//   title: "I'm a Front End Developer"
// }

export default Header;

//3.20.05