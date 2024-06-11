import { useCallback } from "react";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
};

export function Card({ id }: Props) {
  const navigate = useNavigate();
  const hendleSelectBook = useCallback(() => {
    navigate(`/${id}`);
  }, [id, navigate]);

  return (
    <div className="p-4 grid grid-cols-3 gap-3 shadow-lg rounded-lg border border-gray-100 max-w-lg w-full">
      <img
        src="https://livrariascuritiba.vteximg.com.br/arquivos/ids/1862596-1000-1000/lv252256_1.jpg?v=636928386314700000"
        alt=""
        className="col-span-1 w-full rounded-lg"
      />
      <div className="col-span-2">
        <p className="font-bold text-2xl text-evergreen">Codigo limpo</p>
        <p className="font-light text-lg text-gray-500 mb-2">Autor</p>
        <Tag title="Ação" className="mb-3" />
        <p>
          <strong>Sinopse:</strong> orem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida.
          In hac habitasse platea dictumst. Curabitur at massa vel nulla
          pulvinar dignissim
        </p>
        <Button
          title="Ver mais"
          variant="light"
          className="w-1/2"
          onClick={hendleSelectBook}
        />
      </div>
    </div>
  );
}
