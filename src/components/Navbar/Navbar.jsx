import styled from "styled-components";
import BurguerB from "../BuguerButton/BurguerB";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { CartNum } from "../Cartnum/Cartnum";

export default function Navbar() {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    //CAMBIA DE TRE A FALSE DEPENDIENDO COMO ESTE
    setclicked(!clicked);
  };

  return (
    <>
      <Stilo>
        <h2>Computadoras Robadas</h2>

        <div className={`enlaces ${clicked ? `active` : ` `}`}>
          <NavLink to="/">INICIO</NavLink>
          <NavLink to="/Categoria/robado">ROBADOS</NavLink>
          <NavLink to="/Categoria/perdido">PERDIDOS</NavLink>
          <NavLink to="/Contactos">CONTACTOS</NavLink>
          <CartNum />
        </div>

        <div className="botonBurguer">
          <BurguerB clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`papas ${clicked ? `fritas` : ` `}`}></BgDiv>
      </Stilo>
      <Outlet />
    </>
  );
}

const Stilo = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    background-color: #333;
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    a {
      color: white;
      text-decoration: none;
      margin-right: 1rem;
    }
  }
  .alineadoNavbar {
    display: flex;
  }

  .enlaces {
    display: flex;

    position: absolute;
    top: -700px;
    left: -10000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    background-color: #333;
    a {
      background-color: #333;
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .enlaces.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      marrgin-top: 1rem;
      color: white;
    }
  }

  .botonBurguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -700px;
  left: -10000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  &.fritas {
    border-radius: 0 0 80% 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
