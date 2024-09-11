import handler from "@/app/lib/callback";

const TelegramAuthWidget = () => {
  return (
    <div className="text-white">
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login="@zoorama_bot"
        data-size="large"
        data-auth-url="http://localhost:3000/animal-card/1"
        data-request-access="write"
      />
      Войти
    </div>
  );
};

export default TelegramAuthWidget;
