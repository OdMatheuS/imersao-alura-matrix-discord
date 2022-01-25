function GlobalStyle()  {
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

export default function GlobalApp({ Component, pageProps }){
  console.log("Roda de maneira global em todas as paginas da aplicacao");
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
};

