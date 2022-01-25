import appConfig from "../config.json";

//OLD
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
