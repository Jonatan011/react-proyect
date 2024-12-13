function TabsMenu({
  children = <p>Contenido por defecto</p>,
  buttons = (
    <li>
      <button>Boton por defecto</button>
    </li>
  ),
  ButtonContainer = "div",
}: {
  children?: React.ReactNode;
  buttons?: React.ReactNode;
  ButtonContainer?: React.ElementType;
}) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

export default TabsMenu;
