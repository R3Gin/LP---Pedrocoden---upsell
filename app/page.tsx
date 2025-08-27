"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, BarChart3, Target, Shield, Clock, Users, Award } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function SMCLandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 44,
    seconds: 48,
  })

  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))

            // Enhanced stagger animation for child elements
            const children = entry.target.querySelectorAll("[data-stagger]")
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-smooth-fade-up")
                child.classList.add("animate-optimized")
              }, index * 150) // Increased delay for smoother stagger
            })

            // Add enhanced reveal classes
            entry.target.classList.add("revealed")

            // Add stagger container reveal
            if (entry.target.classList.contains("stagger-container")) {
              entry.target.classList.add("revealed")
            }
          }
        })
      },
      {
        threshold: 0.15, // Slightly higher threshold for better timing
        rootMargin: "100px", // Increased margin for earlier trigger
      },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => {
      observer.observe(el)
      // Add initial scroll reveal class
      el.classList.add("scroll-reveal-enhanced")
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://i.imgur.com/gPUcjXo.mp4" type="video/mp4" />
            <source src="/financial-graphs-video.mp4" type="video/mp4" />
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-16%20%C3%A0%28s%29%2022.12.03_6e3e74d9-j2lbcAvSuc6uFcZuWFTMPzhlpCkqPl.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-smooth-fade-up delay-700 px-4 sm:px-0 tracking-normal"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-4 sm:mb-6 bg-cyan-500/30 text-cyan-300 border-cyan-400/50 text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 animate-smooth-fade-up animate-smooth-glow backdrop-blur-sm">
            Método Exclusivo SMC
          </Badge>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-smooth-fade-up delay-200">
            Transforme R$ 1.000 em uma{" "}
            <span className="gold-accent animate-text-shimmer bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              renda extra
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-smooth-fade-up delay-500 backdrop-blur-sm px-4 w-auto sm:px-0 mt-0 flex-row tracking-tighter">
            Descubra o método EXATO que Pedro Coden usa para gerar R$ 9.300+ por mês operando apenas 2 horas por dia com
            Smart Money Concepts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-smooth-fade-up delay-700 px-4 sm:px-0 tracking-normal">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-black font-semibold px-6 py-4 sm:py-5 text-base sm:text-lg btn-ripple hover-lift-3d animate-smooth-glow shadow-2xl w-full sm:w-auto tracking-[-0.07em] flex-row sm:px-2.5"
              onClick={() => window.open("https://pay.kiwify.com.br/VR7lNrB", "_blank")}
            >
              🚀 QUERO COMEÇAR A LUCRAR - R$ 47,00
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-6 py-4 sm:py-5 text-base sm:text-lg btn-ripple hover-lift-3d shadow-2xl w-full animate-bounce hover:animate-pulse hover:scale-110 transition-all duration-300 shadow-yellow-500/60 hover:shadow-yellow-400/80 border-2 border-yellow-400/50 hover:border-yellow-300/70 tracking-[-0.07em] sm:w-auto sm:px-2.5"
              onClick={() => window.open("https://pay.kiwify.com.br/Lh5hPF5", "_blank")}
            >
              👑 ACESSO PREMIUM + GRUPO EXCLUSIVO - R$ 97,00
            </Button>
          </div>

          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full animate-parallax-float blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500/10 rounded-full animate-parallax-float delay-1000 blur-xl"></div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] relative" id="videos" data-animate>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 ${isVisible.videos ? "animate-smooth-fade-up" : "opacity-0"}`}
          >
            Veja Como Pedro Lucrou{" "}
            <span className="gold-accent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              R$ 9.300 em UMA Semana
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-gray-300 text-center mb-8 sm:mb-12 px-4 sm:px-0 ${isVisible.videos ? "animate-smooth-fade-up animate-delay-200" : "opacity-0"}`}
          >
            Assista aos bastidores REAIS de como o método SMC gera resultados consistentes (mesmo para iniciantes)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-container">
            <div
              className={`bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg overflow-hidden hover-lift-3d group stagger-item ${isVisible.videos ? "animate-smooth-scale delay-100" : "opacity-0"}`}
            >
              <div className="relative overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-16%20%C3%A0%28s%29%2022.12.34_fab11119-9BwTCz2lwXYNYZM7FbqectWo4bJxTg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-cyan-400">🎯 O Segredo dos R$ 9.300</h3>
                <p className="text-gray-400 text-sm">
                  Como Pedro identifica setups que geram até 300% de lucro em uma única operação
                </p>
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg overflow-hidden hover-lift-3d group stagger-item ${isVisible.videos ? "animate-smooth-scale delay-200" : "opacity-0"}`}
            >
              <div className="relative overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-16%20%C3%A0%28s%29%2022.12.14_e7aa55fc-Y2EIPP5Lwtdjeb0GLwmxzAkqbm4HaX.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-yellow-400">📊 Método Passo a Passo</h3>
                <p className="text-gray-400 text-sm">
                  O processo EXATO que Pedro usa para transformar R$ 1.000 em R$ 21.661 (revelado pela primeira vez)
                </p>
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg overflow-hidden hover-lift-3d group stagger-item md:col-span-2 lg:col-span-1 ${isVisible.videos ? "animate-smooth-scale delay-300" : "opacity-0"}`}
            >
              <div className="relative overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-16%20%C3%A0%28s%29%2022.12.34_e07e654b-BdoyXUVT5OrVi308HpHIg2QGhbLzy5.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-green-400">💡 Estratégia dos Milionários</h3>
                <p className="text-gray-400 text-sm">
                  Como as instituições movimentam BILHÕES e como você pode "surfar" nesses movimentos
                </p>
              </div>
            </div>
          </div>

          <div
            className={`text-center mt-8 sm:mt-12 ${isVisible.videos ? "animate-smooth-fade-up animate-delay-500" : "opacity-0"}`}
          >
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-4 sm:px-0">
              Pronto para replicar esses resultados na sua conta?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 hover-lift-3d neon-glow w-full sm:w-auto"
                onClick={() => window.open("https://pay.kiwify.com.br/VR7lNrB", "_blank")}
              >
                🚀 SIM, QUERO LUCRAR
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 hover-lift-3d w-full sm:w-auto animate-pulse hover:animate-bounce hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/60 hover:shadow-yellow-400/80 border-2 border-yellow-400/40 hover:border-yellow-300/60"
                onClick={() => window.open("https://pay.kiwify.com.br/Lh5hPF5", "_blank")}
              >
                <span className="block sm:hidden text-sm">👑 ACESSO PREMIUM AGORA</span>
                <span className="hidden sm:block">👑 QUERO O ACESSO PREMIUM COMPLETO AGORA</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] relative" id="about" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
            <div className={`order-2 lg:order-1 ${isVisible.about ? "animate-smooth-slide-left" : "opacity-0"}`}>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" data-stagger>
                O Homem que Decodificou{" "}
                <span className="gold-accent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Wall Street
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed" data-stagger>
                Pedro Coden descobriu como as grandes instituições manipulam o mercado e criou um método para "surfar"
                nesses movimentos bilionários. Em apenas 3 anos, transformou uma conta de R$ 5.000 em mais de R$ 500.000
                usando exclusivamente Smart Money Concepts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center hover-scale group" data-stagger>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 icon-bounce group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="font-semibold text-cyan-400">R$ 500K+</div>
                  <div className="text-sm text-gray-400">Patrimônio Atual</div>
                </div>

                <div className="text-center hover-scale group" data-stagger>
                  <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 icon-bounce group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="font-semibold text-yellow-400">Método Único</div>
                  <div className="text-sm text-gray-400">Nunca Ensinado</div>
                </div>

                <div className="text-center hover-scale group" data-stagger>
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 icon-bounce group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="font-semibold text-green-400">76%</div>
                  <div className="text-sm text-gray-400">Taxa de Acerto</div>
                </div>
              </div>
            </div>

            <div
              className={`order-1 lg:order-2 flex justify-center ${isVisible.about ? "animate-smooth-slide-right animate-parallax-float" : "opacity-0"}`}
            >
              <div className="relative hover-lift-3d group w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/pedro-coden-real.jpg"
                    alt="Pedro Coden - Especialista em SMC"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/50 backdrop-blur-sm">
                      🎯 Especialista em SMC
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] relative" id="results" data-animate>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 ${isVisible.results ? "animate-smooth-fade-up" : "opacity-0"}`}
          >
            Comprovantes REAIS:{" "}
            <span className="gold-accent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              R$ 50.000 em Lucros
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-gray-300 text-center mb-8 sm:mb-12 px-4 sm:px-0 ${isVisible.results ? "animate-smooth-fade-up animate-delay-200" : "opacity-0"}`}
          >
            Prints REAIS da conta, extratos bancários e comprovantes que NINGUÉM pode contestar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-container">
            <div
              className={`bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg overflow-hidden hover-lift-3d group stagger-item ${isVisible.results ? "animate-smooth-scale delay-100" : "opacity-0"}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-23%20%C3%A0%28s%29%2000.17.24_5304dbfd.jpg-I5NcseM1hJtcT8pOQ8uOYJSnTOGxBy.jpeg"
                  alt="Ticket de Trading - Lucro de $2,032.00"
                  className="w-full h-48 object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 h-24 flex flex-col justify-center text-center">
                <h3 className="font-semibold text-lg mb-2 text-cyan-400">🎯 Operação Certeira</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Lucro real: $2,032.00 de lucro em apenas 20 segundos usando SMC
                </p>
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg overflow-hidden hover-lift-3d group stagger-item ${isVisible.results ? "animate-smooth-scale delay-200" : "opacity-0"}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carteira-crypto.jpg-P5g6qIRCLrrl20JmgQmicOUFtzWjS7.jpeg"
                  alt="Saldo em Criptomoedas R$ 21.661,26"
                  className="w-full h-48 object-contain bg-black group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6 h-24 flex flex-col justify-center text-center">
                <h3 className="font-semibold text-lg mb-2 text-yellow-400">💰 Saldo em Criptomoedas </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Portfólio ATUAL com +R$ 1.192,91 HOJE - Ethereum: R$ 16.812,55
                </p>
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg overflow-hidden hover-lift-3d group stagger-item ${isVisible.results ? "animate-smooth-scale delay-400" : "opacity-0"}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250223-115729_Inter%26Co~2.jpg-XkDRJOllbTRYofDW4hCWxFojFZ4VtW.jpeg"
                  alt="Saldo na conta Inter - R$ 12.144,05"
                  className="w-full h-48 object-contain bg-black group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 h-24 flex flex-col justify-center text-center">
                <h3 className="font-semibold text-lg mb-2 text-green-400">💰 Saldo na Conta</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  R$ 12.144,05 disponível na conta do Inter - dinheiro real pronto para saque
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 max-w-2xl mx-auto">
            <div
              className={`bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg overflow-hidden hover-lift-3d group ${isVisible.results ? "animate-smooth-scale delay-500" : "opacity-0"}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pix-resultado.jpg-sLpwxyvbQzxvBLLQ1Jz3d8F9FOgFRw.jpeg"
                  alt="Pix recebido - R$ 9.300,00 do Mercado Bitcoin"
                  className="w-full h-64 object-contain bg-black group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="font-semibold text-3xl mb-2 text-yellow-400 animate-count-up">💰 Pix Recebido</h3>
                <div className="text-4xl font-bold text-green-400 mb-3 animate-pulse-slow">R$ 9.300,00</div>
                <p className="text-gray-300 mb-4 text-lg">
                  <span className="text-yellow-400 font-semibold">Mercado Bitcoin Ip Ltda</span> te enviou um Pix às
                  12:06
                </p>
                <p className="text-cyan-300 mb-4 font-medium text-base">
                  Comprovante REAL de transferência recebida na conta bancária!
                </p>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-glow">
                  ✅ COMPROVANTE VERIFICADO
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]" id="learn" data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isVisible.learn ? "animate-smooth-fade-up" : "opacity-0"}`}
          >
            Os Segredos de Wall Street que Vão{" "}
            <span className="gold-accent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Multiplicar Sua Conta
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-4 sm:px-0 ${isVisible.learn ? "animate-smooth-fade-up animate-delay-200" : "opacity-0"}`}
          >
            Descubra como as instituições movimentam TRILHÕES e como você pode lucrar com isso (mesmo com pouco capital)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div
              className={`flex items-start gap-4 text-left hover-glow-enhanced stagger-item ${isVisible.learn ? "animate-smooth-slide-left delay-100" : "opacity-0"}`}
            >
              <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0 icon-bounce" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Como Ganhar R$ 5.000+ Por Mês</h3>
                <p className="text-gray-400">O método EXATO para identificar movimentos de BILHÕES e lucrar com isso</p>
              </div>
            </div>

            <div
              className={`flex items-start gap-4 text-left hover-glow-enhanced stagger-item ${isVisible.learn ? "animate-smooth-slide-left delay-200" : "opacity-0"}`}
            >
              <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0 icon-bounce" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Mentalidade dos Milionários</h3>
                <p className="text-gray-400">Pensar como um trader profissional que opera com frieza cirúrgica</p>
              </div>
            </div>

            <div
              className={`flex items-start gap-4 text-left hover-glow-enhanced stagger-item ${isVisible.learn ? "animate-smooth-slide-left delay-300" : "opacity-0"}`}
            >
              <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0 icon-bounce" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Setups de R$ 10.000+</h3>
                <p className="text-gray-400">Como montar operações que podem lucrar 5 dígitos em uma única entrada</p>
              </div>
            </div>

            <div
              className={`flex items-start gap-4 text-left hover-glow-enhanced stagger-item ${isVisible.learn ? "animate-smooth-slide-left delay-500" : "opacity-0"}`}
            >
              <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0 icon-bounce" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Gestão de Risco Inteligente</h3>
                <p className="text-gray-400">
                  Estratégia projetada para minimizar perdas e preservar seu capital, mesmo em cenários de alta
                  volatilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]" id="pricing" data-animate>
        <div className="max-w-5xl mx-auto">
          <h2
            className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 ${isVisible.pricing ? "animate-smooth-fade-up" : "opacity-0"}`}
          >
            Invista R$ 47,00 Hoje e{" "}
            <span className="gold-accent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              conquiste uma renda extra mensal!
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-gray-300 text-center mb-8 sm:mb-12 px-4 sm:px-0 ${isVisible.pricing ? "animate-smooth-fade-up animate-delay-200" : "opacity-0"}`}
          >
            Não é mágica, é estratégia: R$ 47,00 que podem render muito mais.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card
              className={`bg-gradient-to-br from-[#2a2a2a] via-[#1f2937] to-[#2a2a2a] border-2 border-cyan-500/50 relative hover-lift-3d shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-500 ${isVisible.pricing ? "animate-smooth-scale delay-300" : "opacity-0"} border-4 border-cyan-500/80 glow-effect h-full`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20 rounded-lg blur-sm animate-pulse"></div>
              <div className="relative z-10 h-full flex flex-col">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <BarChart3 className="w-6 h-6 text-cyan-400 icon-bounce" />
                    <CardTitle className="text-2xl font-serif">Plano Essencial</CardTitle>
                  </div>
                  <div className="text-5xl font-bold text-cyan-400 mb-2 animate-pulse-slow drop-shadow-2xl filter drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
                    R$ 47,00
                  </div>
                  <p className="text-gray-300 font-medium">Método completo que já gerou R$ 500K+</p>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="text-sm text-cyan-400 font-bold mb-3 bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/30">
                    Método COMPLETO + Acesso VITALÍCIO
                  </div>

                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3 hover-scale">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Método COMPLETO que me gerou R$ 500.000</span>
                    </div>
                    <div className="flex items-center gap-3 hover-scale">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Setups que Pedro usa para ganhar R$ 9.300/mês</span>
                    </div>
                    <div className="flex items-center gap-3 hover-scale">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Acesso VITALÍCIO (valor real: R$ 1.997)</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-400 mt-4 bg-gray-800/50 rounded-lg p-3">
                    Pagamento único - Sem mensalidades
                  </div>

                  <Button
                    className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-black font-bold py-4 text-lg btn-ripple hover-lift-3d animate-smooth-glow shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/60 border-2 border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300"
                    onClick={() => window.open("https://pay.kiwify.com.br/VR7lNrB", "_blank")}
                  >
                    <span className="block sm:hidden text-sm leading-tight">QUERO COMEÇAR A LUCRAR</span>
                    <span className="hidden sm:block">QUERO COMEÇAR A LUCRAR</span>
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card
              className={`bg-gradient-to-br from-[#3a2a1a] via-[#2a2a1a] to-[#3a2a1a] border-3 border-yellow-500/70 relative hover-lift-3d shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-105 ${isVisible.pricing ? "animate-smooth-scale delay-500" : "opacity-0"} border-6 border-yellow-500/90 glow-effect h-full`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse-slow z-20">
                <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-6 py-2 text-sm shadow-2xl shadow-yellow-500/50 border-2 border-yellow-300/50">
                  🔥 MAIS POPULAR
                </Badge>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-orange-500/20 to-yellow-500/30 rounded-lg blur-sm animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/10 rounded-lg"></div>

              <div className="relative z-10 h-full flex flex-col">
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="w-6 h-6 text-yellow-400 icon-bounce" />
                    <CardTitle className="text-2xl font-serif">Plano Premium</CardTitle>
                  </div>
                  <div className="text-5xl font-bold text-yellow-400 mb-2 animate-pulse-slow drop-shadow-2xl filter drop-shadow-[0_0_25px_rgba(251,191,36,0.9)]">
                    R$ 97,00
                  </div>
                  <p className="text-gray-300 font-medium">Tudo + Grupo Premium + Setup Pessoal do Pedro</p>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="text-sm text-yellow-400 font-bold mb-3 bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/30">
                    Tudo do Essencial + Acesso aos BASTIDORES +
                  </div>

                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3 hover-scale">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Setup PESSOAL do Pedro (nunca revelado - Sem valor estimado)</span>
                    </div>
                    <div className="flex items-center gap-3 hover-scale">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Grupo Premium: receba os setups do Pedro EM TEMPO REAL</span>
                    </div>
                    <div className="flex items-center gap-3 hover-scale">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-medium">
                        Alertas dos movimentos que me geram R$10.000+ antes que aconteçam
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-400 mt-4 bg-gray-800/50 rounded-lg p-3">
                    Grupo Premium: apenas R$ 49,90/mês (cancelável a qualquer momento)
                  </div>

                  <Button
                    className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold py-4 text-lg btn-ripple hover-lift-3d shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-400/60 border-2 border-yellow-400/30 hover:border-yellow-300/50 transition-all duration-300 hover:scale-102 relative overflow-hidden"
                    onClick={() => window.open("https://pay.kiwify.com.br/Lh5hPF5", "_blank")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    <span className="relative z-10">ACESSAR O PREMIUM AGORA</span>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]" id="guarantee" data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`bg-[#1a1a1a] rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 hover-lift-3d ${isVisible.guarantee ? "animate-smooth-scale" : "opacity-0"}`}
          >
            <Shield className="w-12 sm:w-16 h-12 sm:h-16 text-green-400 mx-auto mb-4 animate-float icon-bounce" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Garantia BLINDADA de 7 Dias</h3>
            <p className="text-base sm:text-lg text-gray-300">
              Se você não conseguir identificar pelo menos 3 setups lucrativos nos primeiros 7 dias, devolvemos 100% do
              seu dinheiro. SEM perguntas, SEM burocracia.
            </p>
          </div>

          <div
            className={`bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-6 sm:p-8 hover-lift-3d ${isVisible.guarantee ? "animate-smooth-slide-left delay-300" : "opacity-0"}`}
          >
            <Clock className="w-10 sm:w-12 h-10 sm:h-12 text-red-400 mx-auto mb-4 animate-pulse-slow" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-400">⚠️ ÚLTIMAS 24 HORAS - Oferta Expira HOJE</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              Depois de amanhã, este método custará R$ 197,00. Esta é sua ÚNICA chance de pegar por R$ 47:
            </p>

            <div className="flex justify-center gap-2 sm:gap-4 text-center">
              <div className="bg-black/50 rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] hover-scale">
                <div className="text-2xl sm:text-3xl font-bold countdown-timer animate-count-up">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Horas</div>
              </div>
              <div className="bg-black/50 rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] hover-scale">
                <div className="text-2xl sm:text-3xl font-bold countdown-timer animate-count-up">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Minutos</div>
              </div>
              <div className="bg-black/50 rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] hover-scale">
                <div className="text-2xl sm:text-3xl font-bold countdown-timer animate-count-up">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Segundos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/footer-bg.jpg" alt="Footer Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]/70"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-smooth-fade-up">
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xl sm:text-2xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
              Pedro Coden
            </h4>
            <p className="text-gray-300 text-base sm:text-lg">
              Especialista em Smart Money Concepts. Transformando traders em profissionais desde 2022.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-4 sm:pt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
            <p className="backdrop-blur-sm bg-black/20 rounded-lg p-3 sm:p-4">
              <strong className="text-yellow-400">⚠️ Aviso legal:</strong> Este curso é para fins educacionais.
              Resultados passados não garantem ganhos futuros. Trading envolve riscos.
            </p>
            <p className="text-gray-500">© 2025 Pedro Coden – Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
