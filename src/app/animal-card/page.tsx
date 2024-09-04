import AnimalInfo from "./[id]/page";

interface Props {
  params: {
    id: string;
  };
}
export default function AnimalPageCard({ params: { id } }: Readonly<Props>) {
  return <AnimalInfo params={{ id }} />;
}
