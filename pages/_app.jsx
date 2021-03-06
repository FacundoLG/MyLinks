import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";

import "../styles/Header.css";
import "../styles/Navbar.css";

import "../styles/Link.css";
import "../styles/LinksManager.css";

import "../styles/Home.css";
import "../styles/AuthForm.css";
import "../styles/Editors.css";

import "../styles/App.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ProtectedRoutes router={router}>
      <Component {...pageProps} />;
    </ProtectedRoutes>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
