import reactLogo from "../assets/react.svg";

export const coreConceptsData = [
  {
    id: 1,
    src: reactLogo,
    title: "Eficiencia sin compromisos",
    description:
      "Aprovecha el rendimiento optimizado de nuestras herramientas para proyectos modernos.",
  },
  {
    id: 2,
    src: reactLogo,
    title: "Desarrollo acelerado",
    description:
      "Reduce tiempos de espera y desarrolla con rapidez y confianza.",
  },
  {
    id: 3,
    src: reactLogo,
    title: "Resultados excepcionales",
    description:
      "Obtén soluciones que destacan tanto en funcionalidad como en diseño.",
  },
];
export const topicsData = [
  {
    id: 0,
    title: "Componentes en React",
    content: `
        Los componentes son la base de las interfaces en React. Permiten dividir la interfaz de usuario 
        en piezas independientes y reutilizables que encapsulan su lógica y presentación.
        
        **Ejemplo básico de un componente funcional:**
        \`\`\`jsx
        const Saludo = () => {
          return <h1>¡Hola, mundo!</h1>;
        };
        \`\`\`
        
        **Características principales:**
        - Los componentes funcionales son funciones de JavaScript que devuelven JSX.
        - Son reutilizables y pueden recibir datos mediante props.
      `,
  },
  {
    id: 1,
    title: "JSX",
    content: `
        JSX es una extensión de JavaScript que permite escribir HTML directamente en el código React. 
        Aunque no es obligatorio, facilita la creación de interfaces declarativas y hace el código más intuitivo.
        
        **Ejemplo de JSX:**
        \`\`\`jsx
        const nombre = "React";
        const Titulo = () => {
          return <h1>¡Hola, {nombre}!</h1>;
        };
        \`\`\`
        
        **Características principales:**
        - Permite usar expresiones de JavaScript dentro de llaves \`{}\`.
        - Debe tener un único contenedor raíz (como un \`<div>\` o \`<React.Fragment>\`).
      `,
  },
  {
    id: 2,
    title: "Props",
    content: `
        Las props son la manera en que los datos son transferidos de un componente padre a un componente hijo. 
        Ayudan a personalizar los componentes y permiten que trabajen con información diferente.
        
        **Ejemplo de uso de props:**
        \`\`\`jsx
        const Saludo = ({ nombre }) => {
          return <h1>¡Hola, {nombre}!</h1>;
        };
  
        const App = () => {
          return <Saludo nombre="Mundo" />;
        };
        \`\`\`
        
        **Características principales:**
        - Son inmutables y no deben modificarse dentro del componente hijo.
        - Permiten hacer componentes reutilizables y flexibles al aceptar diferentes valores.
      `,
  },
  {
    id: 3,
    title: "Estados",
    content: `
        El estado es un mecanismo para manejar datos dinámicos en un componente de React. 
        Permite que la interfaz de usuario cambie en respuesta a interacciones del usuario o eventos externos.
        
        **Ejemplo básico del estado:**
        \`\`\`jsx
        import { useState } from "react";
  
        const Contador = () => {
          const [contador, setContador] = useState(0);
  
          return (
            <div>
              <p>Valor actual: {contador}</p>
            </div>
          );
        };
        \`\`\`
  
        **Características principales:**
        - Es mutable, lo que significa que puede cambiar durante la vida útil de un componente.
        - Cada cambio en el estado provoca una actualización automática de la interfaz de usuario.
      `,
  },
];
