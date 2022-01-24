import appConfig from "../config.json";

// function HomePage() {
//   return (
//     <div>
//     <GlobalStyles/>
//       <Titulo tag="h1">Boas vindas de volta!</Titulo>
//       <h2>Discord - Alura Matrix</h2>
//     </div>
//   );
// }

// export default HomePage;

export const GlobalStyle = () => {
  return (
    <style jsx global>
      {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: "Open Sans", sans-serif;
        }
        /* App fit Height */
        html,
        body,
        #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */
      `}
    </style>
  );
};

export const Titulo = (props) => {
  // console.log(props);
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals["000"]};
          }
        `}
      </style>
    </>
  );
};
