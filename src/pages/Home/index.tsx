import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/card/Card";
const genderBooks = [
  "ação",
  "Aventura",
  "Biografia",
  "Comédia",
  "Drama",
  "Ficção",
];

export function Home() {
  const [selectedGerder, setSelectedGender] = useState<string[]>([]);

  const handleSelect = useCallback(
    (title: string) => {
      if (selectedGerder.includes(title)) {
        const removeGender = selectedGerder.filter((item) => item !== title);
        setSelectedGender(removeGender);
      } else {
        setSelectedGender([...selectedGerder, title]);
      }
    },
    [selectedGerder]
  );

  return (
    <div className="mb-6">
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />
        <div className="gap-8 grid md:grid-cols-8 my-6 grid-cols-4">
          {genderBooks.map((book) => (
            <Button
              title={book}
              variant={selectedGerder.includes(book) ? "dark" : "light"}
              onClick={() => handleSelect(book)}
            />
          ))}
        </div>
        <div className="pt-7">
          <p className="text-evergreen font-semibold text-2xl">
            Sobre o que você gostaria de receber uma recomendação de livro?
          </p>
          <input
            type="text"
            placeholder="Eu gostaria de ler..."
            className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3"
          />
          <Title title="Livros  recomendados" className="my-5" />
        </div>
        <Card />
      </Container>
    </div>
  );
}
