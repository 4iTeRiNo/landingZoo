const TelegramAuthWidget = () => {
  return (
    <div className="text-black">
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login="zooramabot"
        data-size="large"
        data-auth-url="http://localhost:3000/animal-card/1"
        data-request-access="write"
      />
    </div>
  );
};

export default TelegramAuthWidget;
