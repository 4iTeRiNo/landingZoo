import { useEffect } from "react";
// import { ITelegramUser } from "../../../../types/telegram/api-telegram-user.ts";

const ButtonTelegramAuth = () => {
  useEffect(() => {
    const button = document.createElement("script");
    button.async = true;
    button.src =
      "Link your website with your bot to use the Telegram Login Widget. Widget documentation:";
    button.setAttribute("data-telegram-login", "zoorama_bot");
    button.setAttribute("data-size", "large");
    button.setAttribute("data-radius", "20");
    button.setAttribute("data-onauth", "onTelegramAuth");

    button.setAttribute(
      "data-auth-url",
      "https://gitlab.guild-of-developers.ru/zoorama/frontend/lending/-/commit/522ff50bf5d24073805588fc9dcaa6a7662f8e78"
    );

    document.body.appendChild(button);
    return () => {
      document.body.removeChild(button);
    };
  }, []);

  return <div id="telegram-widget-container">Войти</div>;
};

export default ButtonTelegramAuth;

/* <script
  async
  src="https://telegram.org/js/telegram-widget.js?22"
  data-telegram-login="zoorama_bot"
  data-size="large"
  data-auth-url="https://gitlab.guild-of-developers.ru/zoorama/frontend/lending/-/commit/522ff50bf5d24073805588fc9dcaa6a7662f8e78"
  data-request-access="write"
></script>; */
