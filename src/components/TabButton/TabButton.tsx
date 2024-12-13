function TabButton({
  children, ...events
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <li>
      <button {...events}>{children}</button>
    </li>
  );
  //otra sintaxis que se puede usar
  /* return React.createElement(
    "li",
    null,
    React.createElement(
      "button",
      { className: "tab-button", onClick },
      children
    )
  );*/
}

export default TabButton;
