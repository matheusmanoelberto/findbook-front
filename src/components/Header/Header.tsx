import backgroundImage from "../../assets/img/background-header.png";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { HeaderTitle } from "./HeaderTitle";

export function Header() {
  return (
    <header
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-auto bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <HeaderTitle />
        <div>
          <p className="text-7xl font-bold text-evergreen">
            Encontre livros <br />
            que seja a sua cara!
          </p>
          <p className="text-gray-500 my-5 text-xl">
            Lorem Ipsum dolor sit amet
          </p>
          <Button title="Pesquisar livros" />
        </div>
      </Container>
    </header>
  );
}
