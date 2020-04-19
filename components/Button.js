export function Button(props) {
  const { children, type, id, className = "", name, value, ...rest } = props;

  return (
    <button
      type={type ? type : "button"}
      id={id}
      name={name}
      className={`button ava-button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function LinkButton(props) {
  const { children, href, id, className, ...rest } = props;

  return (
    <a
      href={href}
      id={id}
      className={`button ava-button ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Button;
