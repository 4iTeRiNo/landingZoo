import { Card, Skeleton } from "@nextui-org/react";

const PetList = () => {
  return (
    <section className="items-center w-full gap-y-5 flex flex-col">
      <Card className="w-64 h-2/4 bg-bgStone750 space-y-5 p-4" radius="lg">
        <Skeleton isLoaded className="rounded-lg">
          <div className="h-60 rounded-lg bg-default-300" />
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300" />
          </Skeleton>
        </div>
      </Card>
      <p className="text-sm text-white text-balance text-center">
        Все добавленные животные будут отображаться на этой странице
      </p>
    </section>
  );
};

export default PetList;
