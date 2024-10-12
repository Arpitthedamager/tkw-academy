import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({
  href,
  onClick,
  children,
  className,
  variant = "solid",
  ...props
}) => {
  const baseStyle = "px-8 py-4 rounded-md  transition-all duration-300";

  const variantStyles = {
    solid:
      " bg-tertiary text-primary hover:bg-secondary hover:text-tertiary border border-tertiary hover:border-tertiary shadow-lg", // Use your primary color
    transparent:
      "bg-transparent text-secondary border border-secondary hover:bg-tertiary hover:text-primary hover:border-tertiary transition-colors", // Match transparent style with primary color
  };

  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "transparent"]),
};

export default Button;
