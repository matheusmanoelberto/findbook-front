import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/card/Card";

export function BookDetails() {
  const { id } = useParams();
  return (
    <Container>
      <HeaderTitle />
      <div className="gap-4 grid md:grid-cols-2 mt-16 grid-cols-1">
        <div>
          <h2 className="text-5xl font-bold text-evergreen">O Código Limpo</h2>
          <p className="text-xl text-gray-500 font-light py-4">
            Robert C. Martin
          </p>
          <p className="text-gray-500 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            magna mollis, volutpat metus ut, convallis nisi. Sed vel neque
            scelerisque, pretium magna vel, tempus massa. Phasellus vel erat a
            orci egestas ultricies non in erat. Curabitur sodales et enim in
            rutrum. Nunc tortor nunc, posuere eget convallis non, posuere vel
            libero. Quisque tempus feugiat auctor. Pellentesque in libero leo.
            Cras dui libero, posuere eu maximus et, sollicitudin eu quam. Fusce
            dapibus arcu nec justo accumsan lobortis. Cras velit mauris, varius
            ac tellus eget, tincidunt sagittis orci. Integer ullamcorper
            consectetur eros ac gravida. Cras blandit eros venenatis massa
            sodales, id pretium leo suscipit. Vivamus id lectus id lorem ornare
            aliquet eget nec eros. Maecenas et fermentum risus, ac interdum
            arcu. In odio erat, blandit vitae metus nec, fermentum porta lectus.
          </p>
        </div>
        <div>
          <img
            src="https://livrariascuritiba.vteximg.com.br/arquivos/ids/1862596-1000-1000/lv252256_1.jpg?v=636928386314700000"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div>
        <Title title="Recomendações com base nesse livro" className="my-6" />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <Card id="123" />
          <Card id="123" />
          <Card id="123" />
          <Card id="123" />
          <Card id="123" />
        </div>
      </div>
    </Container>
  );
}
