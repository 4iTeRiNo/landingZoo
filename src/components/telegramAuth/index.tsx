import handler from "@/app/lib/callback";

const TelegramAuthWidget = () => {
  return (
    <div>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?7"
        data-telegram-login={process.env.BOT_USERNAME}
        data-size="large"
        data-auth-url={`${process.env.BASE_URL}/animal-card/1`}
        data-request-access="write"
        data-on-auth={`${handler}`}
      />
    </div>
  );
};

export default TelegramAuthWidget;
