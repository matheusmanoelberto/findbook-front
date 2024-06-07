type Props = {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <button className="bg-evergreen-light px-6 py-3 rounded-lg shadow text-white font-medium mt-3">
      {title}
    </button>
  );
}
