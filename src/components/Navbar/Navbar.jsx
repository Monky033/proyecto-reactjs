import styled from "styled-components";
import BurguerB from "../BuguerButton/BurguerB";

export default function Navbar() {
  return (
    <Stilo>
      <h2>Computadoras Robadas</h2>
      <div className="enlaces active">
        <a href="">INICIO</a>
        <a href="">ROBADOS</a>
        <a href="">PERDIDOS</a>
        <a href="">CONTACTTOS</a>
      </div>
      <div className="botonBurguer">
        <BurguerB />
      </div>
    </Stilo>
  );
}

const Stilo = styled.nav`
  h2 {
    color: white;
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
  .enlaces {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    magin-right: auto;
    text-align: center;
    a {
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      psition: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .enlaces.active {
    width: block;
    position: absolute;
    margin-left: auto;
    magin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: #333;
    }
  }

  .botonBurguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
