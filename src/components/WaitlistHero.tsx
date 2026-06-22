import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

type Role = "broker" | "partner"

const benefits = [
  {
    icon: "ShieldCheck",
    title: "Без комиссии для покупателя",
    text: "Помогаем выбрать лучшую недвижимость Москвы без скрытых наценок и переплат.",
  },
  {
    icon: "Building2",
    title: "Все сегменты рынка",
    text: "От комфорт-класса до Deluxe стоимостью в миллиарды рублей — работаем с любым бюджетом.",
  },
  {
    icon: "Users",
    title: "Сообщество, а не агентство",
    text: "Broker House — объединение независимых брокеров новостроек Москвы, а не классическое агентство.",
  },
  {
    icon: "TrendingUp",
    title: "Партнёрский трафик",
    text: "Партнёры приводят клиентов конкретным брокерам и зарабатывают на каждой сделке.",
  },
]

export function WaitlistHero() {
  const [role, setRole] = useState<Role>("broker")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setName("")
    setEmail("")
    setPhone("")

    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <Icon name="Home" size={22} className="text-[#C9A227]" />
          <span className="font-serif text-2xl font-semibold tracking-tight">
            Broker House
          </span>
        </div>
        <span className="hidden text-sm uppercase tracking-[0.2em] text-[#C9A227] sm:block">
          Москва · Новостройки
        </span>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Left: Pitch */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#C9A227]">
              <Icon name="Sparkles" size={14} />
              Скоро открытие
            </div>

            <h1 className="mb-5 text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Сообщество независимых брокеров
              <span className="text-[#C9A227]"> новостроек Москвы</span>
            </h1>

            <p className="mb-10 max-w-xl text-pretty text-lg leading-relaxed text-white/60">
              Broker House помогает покупателям без комиссии выбрать лучшую
              недвижимость столицы всех сегментов — от комфорта до Deluxe.
              Регистрируйтесь в лист ожидания как брокер или партнёр.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C9A227]/15">
                    <Icon name={b.icon} size={18} className="text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">{b.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50">
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Forms */}
          <div className="rounded-2xl border border-white/10 bg-[#161619] p-7 shadow-2xl">
            <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-[#0E0E10] p-1.5">
              <button
                type="button"
                onClick={() => setRole("broker")}
                className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-all ${
                  role === "broker"
                    ? "bg-[#C9A227] text-[#0E0E10]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Icon name="Briefcase" size={16} />
                Я брокер
              </button>
              <button
                type="button"
                onClick={() => setRole("partner")}
                className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-all ${
                  role === "partner"
                    ? "bg-[#C9A227] text-[#0E0E10]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Icon name="Handshake" size={16} />
                Я партнёр
              </button>
            </div>

            <div className="mb-6">
              <h2 className="mb-1 font-serif text-2xl font-medium">
                {role === "broker"
                  ? "Регистрация брокера"
                  : "Регистрация партнёра"}
              </h2>
              <p className="text-sm text-white/50">
                {role === "broker"
                  ? "Продавайте новостройки Москвы в составе независимого сообщества."
                  : "Приводите трафик конкретным брокерам и зарабатывайте на сделках."}
              </p>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center gap-3 rounded-xl border border-[#C9A227]/40 bg-[#C9A227]/10 px-6 py-10 text-center">
                <Icon name="CircleCheck" size={40} className="text-[#C9A227]" />
                <p className="font-serif text-xl">Спасибо за заявку!</p>
                <p className="text-sm text-white/50">
                  Мы свяжемся с вами перед запуском Broker House.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <Icon
                    name="User"
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-13 rounded-lg border-white/10 bg-[#0E0E10] py-3.5 pl-11 text-base text-white placeholder:text-white/40 focus-visible:ring-[#C9A227]"
                  />
                </div>
                <div className="relative">
                  <Icon
                    name="Mail"
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-13 rounded-lg border-white/10 bg-[#0E0E10] py-3.5 pl-11 text-base text-white placeholder:text-white/40 focus-visible:ring-[#C9A227]"
                  />
                </div>
                <div className="relative">
                  <Icon
                    name="Phone"
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="h-13 rounded-lg border-white/10 bg-[#0E0E10] py-3.5 pl-11 text-base text-white placeholder:text-white/40 focus-visible:ring-[#C9A227]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-13 rounded-lg bg-[#C9A227] py-3.5 text-base font-semibold text-[#0E0E10] transition-all hover:bg-[#d8b53a] disabled:opacity-50"
                >
                  {isSubmitting
                    ? "Отправка..."
                    : role === "broker"
                      ? "Стать брокером Broker House"
                      : "Стать партнёром Broker House"}
                </Button>
                <p className="text-center text-xs text-white/40">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных
                  данных.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-12">
          <div className="flex -space-x-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#0E0E10]">
              <img
                src="/professional-man-glasses.png"
                alt="Брокер"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#0E0E10]">
              <img
                src="/professional-woman-smiling.png"
                alt="Брокер"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#0E0E10]">
              <img
                src="/professional-person-in-office.jpg"
                alt="Партнёр"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#0E0E10]">
              <img
                src="/professional-developer-working.png"
                alt="Партнёр"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="text-sm text-white/50">
            Уже{" "}
            <span className="font-semibold text-[#C9A227]">300+</span> брокеров и
            партнёров в листе ожидания Broker House.
          </p>
        </div>
      </main>
    </div>
  )
}
