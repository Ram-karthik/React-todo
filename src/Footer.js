import React from "react";

const Footer = ({ length }) => {
    const year = new Date();
    const footerStyle = {
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        fontSize: '22px'
    }
    return (
        <footer style={footerStyle}>
            <p>
                {/* Copyright &copy;  {year.getFullYear()}; */}
                {length} {length <= 1 ? "Total item" : "Total items"}
            </p>
        </footer>
    )
}

export default Footer;