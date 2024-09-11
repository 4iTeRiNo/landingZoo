import handler from "@/app/lib/callback";

const TelegramAuthWidget = () => {
  return (
    <div>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?7"
        data-telegram-login="zoorama_bot"
        data-size="large"
        data-auth-url="https://landing-zoo-mu.vercel.app/auth/login"
        data-request-access="write"
        data-on-auth={`${handler}`}
      />
    </div>
  );
};

export default TelegramAuthWidget;
