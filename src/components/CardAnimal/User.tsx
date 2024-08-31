import { User } from "@nextui-org/react";

function UserInfo() {
  return (
    <section className="w-full pt-2 ">
      <User
        name="Марина"
        description="Заводчица котов"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        }}
        className="text-xl text-white"
      />
      <p className="text-sm text-white leading-6">
        Мой кот Барсик — настоящая гордость моего питомника. Он обладатель
        нескольких титулов и чемпионатов, и я всегда стремлюсь обеспечить ему
        лучший уход. Благодаря приложению, я могу легко найти нужного ветеринара
        или грумера для Барсика. Удобный интерфейс и возможность быстро
        записаться на прием делают жизнь проще, а мой кот всегда получает самое
        лучшее!
      </p>
    </section>
  );
}

export default UserInfo;
