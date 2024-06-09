import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
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
    <>
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />
        <div className="gap-8 grid grid-cols-8 my-6">
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
            className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3"
          />
        </div>
      </Container>
    </>
  );
}
