import { User as UserInfo } from "@/shared/types";
import { tv, User } from "@nextui-org/react";

const userStyle = tv({
  slots: {
    base: "",
    name: "text-white text-lg",
    description: "text-greyText text-sm",
  },
});

type Props = {
  params: {
    userProps: UserInfo;
  };
};

async function UserInfoComponent({ params: { userProps } }: Readonly<Props>) {
  const { avatar, description, name } = userProps;

  const style = userStyle();

  return (
    <section className="w-full pt-2 text-2xl ">
      <User
        name={name}
        description="Заводчица котов"
        avatarProps={{
          src: avatar,
          name: `${name}`,
          size: "lg",
        }}
        classNames={{
          base: style.base(),
          name: style.name(),
          description: style.description(),
        }}
      />
      <p className="text-base text-white leading-6">{description}</p>
    </section>
  );
}
export default UserInfoComponent;
