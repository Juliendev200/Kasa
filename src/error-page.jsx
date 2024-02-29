import { NavLink, useRouteError } from "react-router-dom";
import Navigation from './components/Navigation'
import Footer from './components/Footer'


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      < Navigation />
      <div className="error-page">
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <NavLink to={`/Home`} className="comebackhome">
          Retourner sur la page d’accueil
        </NavLink>
      </div >
      < Footer />
    </>
  );
}