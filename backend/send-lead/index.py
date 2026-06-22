import os
import json
import urllib.request


def handler(event: dict, context) -> dict:
    """Отправляет заявку брокера или партнёра в Telegram-чат Broker House."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    email = body.get("email", "").strip()
    phone = body.get("phone", "").strip()
    role = body.get("role", "broker")

    if not name or not email or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Заполните все поля"}),
        }

    role_label = "🏢 Брокер" if role == "broker" else "🤝 Партнёр"

    text = (
        f"{role_label} — новая заявка Broker House\n\n"
        f"👤 Имя: {name}\n"
        f"📧 Email: {email}\n"
        f"📞 Телефон: {phone}"
    )

    token = os.environ["TELEGRAM_BOT_TOKEN"]
    chat_id = os.environ["TELEGRAM_CHAT_ID"]

    payload = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML",
    }).encode()

    req = urllib.request.Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    with urllib.request.urlopen(req) as resp:
        resp.read()

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }
