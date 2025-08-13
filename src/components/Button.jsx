import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, onClick, disabled = false, className = "" }) => {
  const baseStyles =
    "bg-gradient-to-r from-cyan-900 to-cyan-500 text-white font-semibold rounded-xl px-5 py-2.5 transition duration-200 hover:shadow-lg hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-300 cursor-pointer";

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const buttonClasses = classNames(
    baseStyles,
    disabled && disabledStyles,
    className
  );

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

// Prop types
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;