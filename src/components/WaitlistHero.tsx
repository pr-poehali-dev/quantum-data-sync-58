import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from 'lucide-react'

export function WaitlistHero() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-3 text-balance font-serif text-5xl font-normal leading-none tracking-tight text-black md:text-6xl lg:text-7xl">
            Облачная платформа нового поколения для современных команд
          </h1>

          <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#8B6F47] md:text-xl">
            Разворачивайте, масштабируйте и управляйте приложениями без настройки.
            Создано для разработчиков, которые быстро релизят и легко растут.
          </p>

          {/* Waitlist Form */}
          <div className="w-full max-w-md">
            {isSubmitted ? (
              <div className="rounded-md border-2 border-green-600 bg-green-50 p-4">
                <p className="font-medium text-green-900">Спасибо за заявку! Проверьте почту.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Введите ваш email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 rounded-md border-2 border-gray-300 bg-white pl-12 text-base transition-colors focus:border-black focus:ring-0"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 rounded-md border-2 border-black bg-black text-base font-semibold text-white transition-all hover:bg-white hover:text-black disabled:opacity-50"
                >
                  {isSubmitting ? "Отправка..." : "Записаться в лист ожидания"}
                </Button>
              </form>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <img
                  src="/professional-woman-smiling.png"
                  alt="Аватар пользователя"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <img
                  src="/professional-man-glasses.png"
                  alt="Аватар пользователя"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <img
                  src="/professional-person-in-office.jpg"
                  alt="Аватар пользователя"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                <img
                  src="/professional-developer-working.png"
                  alt="Аватар пользователя"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600">
              Присоединяйтесь к <span className="font-bold text-black">3 500+</span> разработчикам, которые уже записались.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
