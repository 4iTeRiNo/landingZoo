import crypto from "crypto";

export default function handler(req, res) {
  const { hash, ...data } = req.query;
  const secret = crypto
    .createHash("sha256")
    .update(process.env.BOT_TOKEN)
    .digest();
  const checkString = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join("\n");
  const hmac = crypto
    .createHmac("sha256", secret)
    .update(checkString)
    .digest("hex");

  if (hmac === hash) {
    // Авторизация успешна
    res.status(200).json({ authorized: true, data });
  } else {
    // Ошибка авторизации
    res.status(403).json({ authorized: false });
  }
}
