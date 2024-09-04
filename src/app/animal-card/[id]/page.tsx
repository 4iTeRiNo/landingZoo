import CardAnimal from "@/components/CardAnimal";
import ButtonAsLink from "@/components/CustomLink";
import SliderAnimal from "@/components/Slider/SliderPets";
import { InfoPet } from "@/shared/constant";
import UserInfo from "../../[...user]/page";

type Props = {
  params: {
    id: string;
  };
};

function AnimalInfo({ params: { id } }: Readonly<Props>) {
  const dataPet = InfoPet.find((item) => item.id === +id);
  return (
    <main className="flex flex-col gap-y-5 bg-bgColor px-[15px] overflow-x-hidden">
      <section>
        <SliderAnimal />
      </section>
      {dataPet && <UserInfo params={{ userProps: dataPet.user_info }} />}
      {dataPet && <CardAnimal dataPet={dataPet.pet_info} />}
      <ButtonAsLink href={`/animal-edit/${id}`} text="Редактировать" />
    </main>
  );
}

export default AnimalInfo;
