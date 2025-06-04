import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Menu,
  X,
  Calculator,
  DollarSign,
  Gauge,
  Award,
  Clock,
  Smartphone,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Building,
  Heart,
  Rocket,
  MessageCircle,
  Phone,
  LineChart,
  PieChart,
  Activity,
  Percent,
  Plus
} from 'lucide-react'
import './App.css'

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/scala-uai-logo.png" 
              alt="Scala Uai" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('solucoes')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('calculadora')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Calculadora
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            
            <Button 
              className="btn-accent"
              onClick={() => scrollToSection('precos')}
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-yellow-500" />
              ) : (
                <Moon className="h-4 w-4 text-gray-600" />
              )}
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('calculadora')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Calculadora
              </button>
              <button 
                onClick={() => scrollToSection('precos')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Preços
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <Button 
                className="btn-accent w-full"
                onClick={() => scrollToSection('precos')}
              >
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Componente Hero Section
const HeroSection = () => {
  return (
    <section className="gradient-hero text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              ✨ Para PMEs que faturam R$ 20k - R$ 5M/mês
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Escale Seu Negócio com{' '}
              <span className="text-accent">Tráfego Pago</span>{' '}
              Inteligente
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Automação de 95%, transparência total e resultados garantidos em 30 dias. 
              Especialistas em PMEs brasileiras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-accent text-lg px-8 py-4"
                onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Meu ROI
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Soluções
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Resultados Reais</h3>
                <p className="text-blue-100">Últimos 30 dias</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">+340%</div>
                  <div className="text-sm text-blue-100">ROAS Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">R$ 2.8M</div>
                  <div className="text-sm text-blue-100">Faturamento Gerado</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-blue-100">PMEs Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-sm text-blue-100">Automação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Modal de Contratação com Yampi
const ContractModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    // Upsells Básicos
    upsell1: false, // Campanha de vendas +R$ 97
    upsell2: false, // Campanha de reconhecimento +R$ 77
    // Upsells Premium
    advancedReports: false, // Relatórios Avançados +R$ 147
    unlimitedCreatives: false, // Criativos Ilimitados +R$ 197
    multiPlatform: false, // Gestão Multi-Plataforma +R$ 127
    // Upsells de Aceleração
    expressSetup: false, // Setup Express +R$ 297 (único)
    strategicMentoring: false, // Mentoria Estratégica +R$ 497
    prioritySupport: false, // Suporte Prioritário +R$ 127
    // Upsells de Performance
    aiOptimization: false, // Otimização IA +R$ 177
    advancedTargeting: false, // Segmentação Avançada +R$ 97
    competitorAnalysis: false, // Análise Competitiva +R$ 147
    // Upsells de Expansão
    internationalAds: false, // Anúncios Internacionais +R$ 247
    ecommerceIntegration: false, // Integração E-commerce +R$ 197
    customDashboard: false, // Dashboard Personalizado +R$ 127
    // Upsells Exclusivos
    whiteLabel: false, // White Label +R$ 397
    dedicatedManager: false // Gerente Dedicado +R$ 597
  })
  
  const [isProcessing, setIsProcessing] = useState(false)

  if (!isOpen || !selectedPlan) return null

  const basePrice = selectedPlan.price
  
  // Preços dos upsells organizados por categoria
  const upsellPrices = {
    // Básicos
    upsell1: 97,
    upsell2: 77,
    // Premium
    advancedReports: 147,
    unlimitedCreatives: 197,
    multiPlatform: 127,
    // Aceleração
    expressSetup: 297, // Taxa única
    strategicMentoring: 497,
    prioritySupport: 127,
    // Performance
    aiOptimization: 177,
    advancedTargeting: 97,
    competitorAnalysis: 147,
    // Expansão
    internationalAds: 247,
    ecommerceIntegration: 197,
    customDashboard: 127,
    // Exclusivos
    whiteLabel: 397,
    dedicatedManager: 597
  }
  
  const monthlyTotal = basePrice + 
    (formData.upsell1 ? upsellPrices.upsell1 : 0) + 
    (formData.upsell2 ? upsellPrices.upsell2 : 0) +
    (formData.advancedReports ? upsellPrices.advancedReports : 0) +
    (formData.unlimitedCreatives ? upsellPrices.unlimitedCreatives : 0) +
    (formData.multiPlatform ? upsellPrices.multiPlatform : 0) +
    (formData.strategicMentoring ? upsellPrices.strategicMentoring : 0) +
    (formData.prioritySupport ? upsellPrices.prioritySupport : 0) +
    (formData.aiOptimization ? upsellPrices.aiOptimization : 0) +
    (formData.advancedTargeting ? upsellPrices.advancedTargeting : 0) +
    (formData.competitorAnalysis ? upsellPrices.competitorAnalysis : 0) +
    (formData.internationalAds ? upsellPrices.internationalAds : 0) +
    (formData.ecommerceIntegration ? upsellPrices.ecommerceIntegration : 0) +
    (formData.customDashboard ? upsellPrices.customDashboard : 0) +
    (formData.whiteLabel ? upsellPrices.whiteLabel : 0) +
    (formData.dedicatedManager ? upsellPrices.dedicatedManager : 0)
    
  const oneTimeTotal = formData.expressSetup ? upsellPrices.expressSetup : 0
  const totalPrice = monthlyTotal + oneTimeTotal

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    try {
      // Aqui será implementada a integração com Yampi
      // Por enquanto, simular processamento
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Redirecionar para checkout Yampi
      const yampiCheckoutUrl = `https://checkout.yampi.com.br/stores/scalauai/checkout?` +
        `product_id=${selectedPlan.id}&` +
        `customer_name=${encodeURIComponent(formData.name)}&` +
        `customer_email=${encodeURIComponent(formData.email)}&` +
        `customer_phone=${encodeURIComponent(formData.phone)}&` +
        `total_price=${totalPrice}`
      
      window.open(yampiCheckoutUrl, '_blank')
      
    } catch (error) {
      console.error('Erro ao processar:', error)
      alert('Erro ao processar. Tente novamente.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Contratar {selectedPlan.name}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dados Pessoais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Nome da sua empresa"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Upsells Organizados por Categoria */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2">
                🚀 Acelere Seus Resultados (Opcionais)
              </h4>

              {/* Categoria: Serviços Básicos */}
              <div className="space-y-3">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  📊 Serviços Básicos
                  <Badge className="ml-2 bg-gray-100 text-gray-800">Entrada</Badge>
                </h5>
                
                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="upsell1"
                    name="upsell1"
                    checked={formData.upsell1}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="upsell1" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Campanha de Vendas Avançada
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Funis otimizados + Landing pages de alta conversão
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 97/mês</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="upsell2"
                    name="upsell2"
                    checked={formData.upsell2}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="upsell2" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Campanha de Reconhecimento
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Branding + Awareness para fortalecer sua marca
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 77/mês</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="advancedTargeting"
                    name="advancedTargeting"
                    checked={formData.advancedTargeting}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="advancedTargeting" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Segmentação Avançada
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Lookalike audiences + Segmentação comportamental + Retargeting avançado
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 97/mês</span>
                  </div>
                </div>
              </div>

              {/* Categoria: Serviços Premium */}
              <div className="space-y-3">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  ⭐ Serviços Premium
                  <Badge className="ml-2 bg-blue-100 text-blue-800">Popular</Badge>
                </h5>
                
                <div className="flex items-start space-x-3 p-3 border-2 border-blue-200 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  <input
                    type="checkbox"
                    id="advancedReports"
                    name="advancedReports"
                    checked={formData.advancedReports}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="advancedReports" className="font-medium text-gray-900 dark:text-white cursor-pointer flex items-center">
                      Relatórios Avançados
                      <Badge className="ml-2 bg-blue-100 text-blue-800">Mais Escolhido</Badge>
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Dashboards personalizados + Análises preditivas + Relatórios semanais
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 147/mês</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="unlimitedCreatives"
                    name="unlimitedCreatives"
                    checked={formData.unlimitedCreatives}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="unlimitedCreatives" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Criativos Ilimitados
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Design profissional + Testes A/B + Banco de imagens premium
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 197/mês</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="multiPlatform"
                    name="multiPlatform"
                    checked={formData.multiPlatform}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="multiPlatform" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Gestão Multi-Plataforma
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      TikTok Ads + LinkedIn Ads + Otimização cross-platform
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 127/mês</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="competitorAnalysis"
                    name="competitorAnalysis"
                    checked={formData.competitorAnalysis}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="competitorAnalysis" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Análise Competitiva
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Monitoramento de concorrentes + Análise de estratégias + Insights semanais
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 147/mês</span>
                  </div>
                </div>
              </div>

              {/* Categoria: Aceleração */}
              <div className="space-y-3">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  🔥 Aceleração
                  <Badge className="ml-2 bg-red-100 text-red-800">Limitado</Badge>
                </h5>
                
                <div className="flex items-start space-x-3 p-3 border-2 border-orange-200 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                  <input
                    type="checkbox"
                    id="expressSetup"
                    name="expressSetup"
                    checked={formData.expressSetup}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="expressSetup" className="font-medium text-gray-900 dark:text-white cursor-pointer flex items-center">
                      Setup Express 24h
                      <Badge className="ml-2 bg-red-100 text-red-800">Limitado</Badge>
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Implementação completa em 24h + Primeira campanha grátis
                    </p>
                    <span className="text-orange-600 font-semibold">+R$ 297 (taxa única)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="strategicMentoring"
                    name="strategicMentoring"
                    checked={formData.strategicMentoring}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="strategicMentoring" className="font-medium text-gray-900 dark:text-white cursor-pointer flex items-center">
                      Mentoria Estratégica
                      <Badge className="ml-2 bg-purple-100 text-purple-800">VIP</Badge>
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      2 calls mensais + Estratégia personalizada + Acesso direto ao especialista
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 497/mês</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="prioritySupport"
                    name="prioritySupport"
                    checked={formData.prioritySupport}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="prioritySupport" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Suporte Prioritário
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Atendimento em até 2h + WhatsApp direto + Suporte 24/7
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 127/mês</span>
                  </div>
                </div>
              </div>

              {/* Categoria: Performance */}
              <div className="space-y-3">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  🚀 Performance
                  <Badge className="ml-2 bg-green-100 text-green-800">Novo</Badge>
                </h5>
                
                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="aiOptimization"
                    name="aiOptimization"
                    checked={formData.aiOptimization}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="aiOptimization" className="font-medium text-gray-900 dark:text-white cursor-pointer flex items-center">
                      Otimização com IA
                      <Badge className="ml-2 bg-green-100 text-green-800">Novo</Badge>
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Machine Learning + Bid automático + ROI garantido +30%
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 177/mês</span>
                  </div>
                </div>
              </div>

              {/* Categoria: Expansão */}
              <div className="space-y-3">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  🌍 Expansão
                  <Badge className="ml-2 bg-indigo-100 text-indigo-800">Avançado</Badge>
                </h5>
                
                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="internationalAds"
                    name="internationalAds"
                    checked={formData.internationalAds}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="internationalAds" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Anúncios Internacionais
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Campanhas globais + Localização + Múltiplas moedas
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 247/mês</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="ecommerceIntegration"
                    name="ecommerceIntegration"
                    checked={formData.ecommerceIntegration}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="ecommerceIntegration" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Integração E-commerce
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Shopify + WooCommerce + Tracking de vendas + Catálogo dinâmico
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 197/mês</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    id="customDashboard"
                    name="customDashboard"
                    checked={formData.customDashboard}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="customDashboard" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                      Dashboard Personalizado
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Interface customizada + KPIs específicos + White label
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 127/mês</span>
                  </div>
                </div>
              </div>

              {/* Categoria: Exclusivos */}
              <div className="space-y-3">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  👑 Exclusivos
                  <Badge className="ml-2 bg-yellow-100 text-yellow-800">Premium</Badge>
                </h5>
                
                <div className="flex items-start space-x-3 p-3 border-2 border-yellow-200 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors">
                  <input
                    type="checkbox"
                    id="whiteLabel"
                    name="whiteLabel"
                    checked={formData.whiteLabel}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="whiteLabel" className="font-medium text-gray-900 dark:text-white cursor-pointer flex items-center">
                      White Label
                      <Badge className="ml-2 bg-yellow-100 text-yellow-800">Exclusivo</Badge>
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sua marca nos relatórios + Dashboard personalizado + Revenda autorizada
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 397/mês</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border-2 border-purple-200 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                  <input
                    type="checkbox"
                    id="dedicatedManager"
                    name="dedicatedManager"
                    checked={formData.dedicatedManager}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="dedicatedManager" className="font-medium text-gray-900 dark:text-white cursor-pointer flex items-center">
                      Gerente Dedicado
                      <Badge className="ml-2 bg-purple-100 text-purple-800">Elite</Badge>
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Gerente exclusivo + Calls semanais + Estratégia 1:1 + Prioridade máxima
                    </p>
                    <span className="text-green-600 font-semibold">+R$ 597/mês</span>
                  </div>
                </div>
              </div>

              {/* Economia Total */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white">💰 Economia Total</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Vs contratar serviços separadamente
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-green-600">R$ 2.847</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">economizados/mês</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumo do Pedido */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">💰 Resumo do Pedido</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Plano {selectedPlan.name}:</span>
                  <span>12x de R$ {basePrice}</span>
                </div>
                
                {/* Upsells Básicos */}
                {formData.upsell1 && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Campanha de Vendas:</span>
                    <span>12x de R$ {upsellPrices.upsell1}</span>
                  </div>
                )}
                {formData.upsell2 && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Campanha de Reconhecimento:</span>
                    <span>12x de R$ {upsellPrices.upsell2}</span>
                  </div>
                )}
                {formData.advancedTargeting && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Segmentação Avançada:</span>
                    <span>12x de R$ {upsellPrices.advancedTargeting}</span>
                  </div>
                )}
                
                {/* Upsells Premium */}
                {formData.advancedReports && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Relatórios Avançados:</span>
                    <span>12x de R$ {upsellPrices.advancedReports}</span>
                  </div>
                )}
                {formData.unlimitedCreatives && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Criativos Ilimitados:</span>
                    <span>12x de R$ {upsellPrices.unlimitedCreatives}</span>
                  </div>
                )}
                {formData.multiPlatform && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Multi-Plataforma:</span>
                    <span>12x de R$ {upsellPrices.multiPlatform}</span>
                  </div>
                )}
                {formData.competitorAnalysis && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Análise Competitiva:</span>
                    <span>12x de R$ {upsellPrices.competitorAnalysis}</span>
                  </div>
                )}
                
                {/* Upsells de Aceleração */}
                {formData.strategicMentoring && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Mentoria Estratégica:</span>
                    <span>12x de R$ {upsellPrices.strategicMentoring}</span>
                  </div>
                )}
                {formData.prioritySupport && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Suporte Prioritário:</span>
                    <span>12x de R$ {upsellPrices.prioritySupport}</span>
                  </div>
                )}
                
                {/* Upsells de Performance */}
                {formData.aiOptimization && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Otimização IA:</span>
                    <span>12x de R$ {upsellPrices.aiOptimization}</span>
                  </div>
                )}
                
                {/* Upsells de Expansão */}
                {formData.internationalAds && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Anúncios Internacionais:</span>
                    <span>12x de R$ {upsellPrices.internationalAds}</span>
                  </div>
                )}
                {formData.ecommerceIntegration && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Integração E-commerce:</span>
                    <span>12x de R$ {upsellPrices.ecommerceIntegration}</span>
                  </div>
                )}
                {formData.customDashboard && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Dashboard Personalizado:</span>
                    <span>12x de R$ {upsellPrices.customDashboard}</span>
                  </div>
                )}
                
                {/* Upsells Exclusivos */}
                {formData.whiteLabel && (
                  <div className="flex justify-between text-green-600">
                    <span>+ White Label:</span>
                    <span>12x de R$ {upsellPrices.whiteLabel}</span>
                  </div>
                )}
                {formData.dedicatedManager && (
                  <div className="flex justify-between text-green-600">
                    <span>+ Gerente Dedicado:</span>
                    <span>12x de R$ {upsellPrices.dedicatedManager}</span>
                  </div>
                )}
                
                {/* Taxa Única */}
                {formData.expressSetup && (
                  <div className="flex justify-between text-orange-600">
                    <span>+ Setup Express:</span>
                    <span>R$ {upsellPrices.expressSetup} (única vez)</span>
                  </div>
                )}
                
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Mensal:</span>
                  <span>12x de R$ {monthlyTotal}</span>
                </div>
                {oneTimeTotal > 0 && (
                  <div className="flex justify-between font-bold text-orange-600">
                    <span>Taxa Única:</span>
                    <span>R$ {oneTimeTotal}</span>
                  </div>
                )}
                
                {/* Economia Destacada */}
                {monthlyTotal > basePrice && (
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 dark:text-green-300 font-medium">💰 Economia vs Mercado:</span>
                      <span className="text-green-700 dark:text-green-300 font-bold">R$ {Math.round((monthlyTotal - basePrice) * 2.5)}/mês</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Vs contratar serviços separadamente
                    </p>
                  </div>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 text-lg"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processando...
                </div>
              ) : (
                `🚀 Finalizar Contratação - 12x de R$ ${monthlyTotal}`
              )}
            </Button>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              ✅ Garantia de 30 dias • 🔒 Pagamento seguro via Yampi • 📞 Suporte 24/7
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

// Componente Sobre/Missão
const AboutSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">🎯 Nossa Missão</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Transformamos PMEs em{' '}
            <span className="text-primary">Potências Digitais</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-primary">Nossa missão é clara:</strong> acelerar o crescimento de empresas que faturam a partir de R$ 20 mil/mês, 
            transformando-as em referências digitais em seus mercados. Combinamos tecnologia de ponta, automação inteligente 
            e estratégias comprovadas para entregar resultados que realmente importam: <strong className="text-accent">mais clientes, mais vendas, mais lucro.</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 group">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="dark:text-white">Atrair Clientes Qualificados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Utilizamos algoritmos avançados e segmentação precisa para atrair apenas clientes com alto potencial de conversão, 
                reduzindo seu custo de aquisição em até <strong className="text-primary">60%</strong>.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 group">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="dark:text-white">Construir Autoridade Digital</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Posicionamos sua marca como referência no mercado através de conteúdo estratégico e presença consistente, 
                aumentando o valor percebido e permitindo <strong className="text-accent">preços premium</strong>.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 group">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <Rocket className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="dark:text-white">Escalar Vendas Exponencialmente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Implementamos funis de vendas automatizados e otimizados que trabalham 24/7, 
                permitindo crescimento sustentável de <strong className="text-destructive">200% a 500%</strong> no faturamento.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">
            Do Pequeno Restaurante à Grande Corporação
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Nossa metodologia escalável já transformou mais de <strong>500 empresas</strong> em todo o Brasil. 
            Desde restaurantes locais que triplicaram o movimento até e-commerces que se tornaram líderes nacionais. 
            <strong className="text-primary"> Sua empresa pode ser a próxima.</strong>
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Empresas Transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">R$ 127M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Faturamento Adicional Gerado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive">347%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">ROI Médio dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Comparativo Competitivo
const CompetitiveSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 transition-colors duration-300" id="comparativo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">🏆 Por Que Escolher a Scala Uai?</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Enquanto Agências Tradicionais Cobram{' '}
            <span className="text-destructive">R$ 1.500+/mês</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nós oferecemos o mesmo resultado profissional a partir de{' '}
            <span className="text-accent font-bold">12x de R$ 197</span> com muito mais automação e transparência
          </p>
        </div>

        {/* Comparativo Visual */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Agências Tradicionais */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 border-2 border-red-200">
            <CardHeader className="text-center bg-red-50 dark:bg-red-900/20">
              <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-red-700 dark:text-red-400">Agências Tradicionais</CardTitle>
              <div className="text-3xl font-bold text-red-600 mt-2">R$ 1.500 - R$ 5.000/mês</div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Gestão manual (20% automação)</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Relatórios mensais básicos</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Sem transparência em tempo real</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Foco em grandes empresas</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Resultados em 60-90 dias</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Contratos de 12 meses</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Scala Uai */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 border-2 border-green-200">
            <CardHeader className="text-center bg-green-50 dark:bg-green-900/20">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-green-700 dark:text-green-400">Scala Uai</CardTitle>
              <div className="text-3xl font-bold text-green-600 mt-2">12x de R$ 197 - R$ 397</div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Automação de 95% dos processos</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Dashboard em tempo real 24/7</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Transparência total nos dados</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Especialistas em PMEs</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Resultados em 7-30 dias</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Sem fidelidade + garantia 30 dias</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos de Performance */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mb-4">
                <LineChart className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="dark:text-white">Crescimento de ROAS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Mês 1</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm font-bold">2.4x</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Mês 2</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-sm font-bold">3.2x</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Mês 3+</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-green-600">4.2x</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="dark:text-white">Redução de CPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Início</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-sm font-bold">R$ 120</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">30 dias</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="text-sm font-bold">R$ 85</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">60+ dias</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-green-600">R$ 55</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mb-4">
                <Percent className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="dark:text-white">Taxa de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Antes</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                    <span className="text-sm font-bold">1.2%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">30 dias</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm font-bold">2.8%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">60+ dias</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-purple-600">4.1%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Economia Anual */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            💰 Economia de até R$ 42.000/ano
          </h3>
          <p className="text-xl mb-6">
            Comparado com agências tradicionais que cobram R$ 3.500/mês
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold">Agência Tradicional</div>
              <div className="text-lg opacity-90">R$ 3.500 x 12 = R$ 42.000/ano</div>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8" />
            </div>
            <div>
              <div className="text-2xl font-bold">Scala Uai</div>
              <div className="text-lg opacity-90">R$ 297 x 12 = R$ 3.564/ano</div>
            </div>
          </div>
          <div className="mt-6 text-2xl font-bold bg-white/20 rounded-lg p-4">
            Você economiza: R$ 38.436/ano! 🎉
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente ROI Calculator
const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState('')
  const [adSpend, setAdSpend] = useState('')
  const [results, setResults] = useState(null)

  const calculateROI = () => {
    const revenue = parseFloat(monthlyRevenue) || 0
    const spend = parseFloat(adSpend) || 0

    if (revenue > 0 && spend > 0) {
      const currentROAS = 2.5 // ROAS médio atual do mercado
      const improvedROAS = 4.2 // ROAS com Scala Uai
      
      const currentRevenue = spend * currentROAS
      const projectedRevenue = spend * improvedROAS
      const additionalRevenue = projectedRevenue - currentRevenue
      const yearlyGain = additionalRevenue * 12

      setResults({
        currentRevenue,
        projectedRevenue,
        additionalRevenue,
        yearlyGain,
        roasImprovement: ((improvedROAS - currentROAS) / currentROAS * 100).toFixed(0)
      })
    }
  }

  const resetCalculator = () => {
    setMonthlyRevenue('')
    setAdSpend('')
    setResults(null)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="calculadora">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Calcule o Potencial do Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Descubra quanto você pode faturar a mais com nossa metodologia
          </p>
        </div>

        <Card className="shadow-card-hover dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <Calculator className="mr-3 h-6 w-6 text-primary" />
              Calculadora de ROI
            </CardTitle>
            <CardDescription className="dark:text-gray-300">
              Insira seus dados atuais e veja a projeção de crescimento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="revenue" className="dark:text-white">Faturamento Mensal Atual (R$)</Label>
                <Input
                  id="revenue"
                  type="number"
                  placeholder="Ex: 50000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(e.target.value)}
                  className="text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="adspend" className="dark:text-white">Investimento Mensal em Ads (R$)</Label>
                <Input
                  id="adspend"
                  type="number"
                  placeholder="Ex: 10000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(e.target.value)}
                  className="text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={calculateROI} 
                className="btn-accent flex-1 text-lg py-3"
                disabled={!monthlyRevenue || !adSpend}
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Calcular Potencial de Crescimento
              </Button>
              
              {results && (
                <Button 
                  onClick={resetCalculator}
                  variant="outline"
                  className="px-6 py-3 dark:border-gray-600 dark:text-gray-300"
                >
                  Limpar
                </Button>
              )}
            </div>

            {results && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg border dark:border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-center dark:text-white">
                  🚀 Seu Potencial de Crescimento
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      R$ {results.additionalRevenue.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Receita adicional/mês</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-accent">
                      R$ {results.yearlyGain.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Ganho anual projetado</div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    +{results.roasImprovement}% de melhoria no ROAS
                  </Badge>
                </div>
                <div className="text-center mt-4">
                  <Button 
                    className="btn-accent"
                    onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Quero Esses Resultados!
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Componente Solutions
const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Gestão de Tráfego",
      description: "Google Ads, Facebook Ads, Instagram e TikTok com automação inteligente",
      features: ["Otimização automática", "Relatórios em tempo real", "Segmentação avançada"],
      color: "border-primary"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automação de Vendas",
      description: "CRM integrado com funis de conversão otimizados para PMEs",
      features: ["Lead scoring automático", "Nutrição personalizada", "Follow-up inteligente"],
      color: "border-accent"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Avançado",
      description: "Dashboard completo com métricas que realmente importam",
      features: ["ROI em tempo real", "Análise de concorrentes", "Previsões de crescimento"],
      color: "border-destructive"
    }
  ]

  return (
    <section className="py-20 dark:bg-gray-800 transition-colors duration-300" id="solucoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">🎯 Nossas Soluções</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Transforme Seu Marketing em{' '}
            <span className="text-primary">Apenas 3 Passos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nossa metodologia comprovada para escalar PMEs através de tráfego pago inteligente
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className={`shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 ${solution.color} dark:bg-gray-700 dark:border-gray-600`}>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-600 text-primary mr-4">
                    {solution.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-300 dark:text-gray-500">
                    0{index + 1}
                  </div>
                </div>
                <CardTitle className="text-xl dark:text-white">{solution.title}</CardTitle>
                <CardDescription className="text-base dark:text-gray-300">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Pricing
const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  const plans = [
    {
      name: "Starter",
      price: "197",
      description: "Ideal para empresas que faturam até R$ 100k/mês",
      features: [
        "1 plataforma de anúncios",
        "Dashboard básico",
        "Relatórios semanais",
        "Suporte via chat",
        "Taxa de gestão: 8%"
      ],
      popular: false,
      badge: "Básico",
      badgeColor: "bg-green-100 text-green-800",
      cta: "Garantir Resultados"
    },
    {
      name: "Aceleração",
      price: "297",
      description: "Ideal para empresas que faturam até R$ 500k/mês",
      features: [
        "2 plataformas de anúncios",
        "Dashboard avançado",
        "Relatórios personalizados",
        "Reunião mensal",
        "Taxa de gestão: 8%"
      ],
      popular: true,
      badge: "Recomendado",
      badgeColor: "bg-blue-100 text-blue-800",
      cta: "Acelerar Crescimento"
    },
    {
      name: "Crescimento Exponencial",
      price: "397",
      description: "Ideal para empresas que faturam acima de R$ 500k/mês",
      features: [
        "3+ plataformas de anúncios",
        "Dashboard executivo",
        "Consultoria estratégica",
        "Reunião quinzenal",
        "Taxa de gestão: 8%"
      ],
      popular: false,
      badge: "Premium",
      badgeColor: "bg-purple-100 text-purple-800",
      cta: "Escalar Negócio"
    }
  ]

  const handlePlanSelect = (planIndex) => {
    setSelectedPlan(planIndex)
    // Simular redirecionamento para checkout
    setTimeout(() => {
      alert(`Redirecionando para checkout do plano ${plans[planIndex].name}...`)
      setSelectedPlan(null)
    }, 1000)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="precos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">💰 Planos e Preços</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Escolha o Plano Ideal para Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transparência total, sem surpresas. Cancele quando quiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`shadow-card hover:shadow-card-hover transition-all duration-300 relative dark:bg-gray-800 dark:border-gray-700 ${plan.popular ? 'border-primary border-2 scale-105' : ''}`}>
              
              <CardHeader className="text-center">
                {/* Badge fluído no topo */}
                <div className="mb-4">
                  <Badge className={`${plan.badgeColor} px-4 py-2 rounded-full font-medium`}>
                    {plan.badge}
                  </Badge>
                  {plan.popular && (
                    <Badge className="ml-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-medium">
                      Mais Popular
                    </Badge>
                  )}
                </div>
                
                {/* PREÇO E HEADLINE EM DESTAQUE */}
                <div className="mb-6">
                  <div className="text-5xl font-bold text-primary dark:text-primary mb-2">
                    12x de R$ {plan.price}
                  </div>
                  <CardTitle className="text-3xl font-bold dark:text-white mb-3">{plan.name}</CardTitle>
                  <CardDescription className="text-lg dark:text-gray-300">
                    {plan.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-3" />
                      <span className="text-sm dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'btn-accent' : 'btn-primary'}`}
                  size="lg"
                  onClick={() => openModal(plan)}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            💡 Todos os planos incluem garantia de 30 dias ou seu dinheiro de volta
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="dark:border-gray-600 dark:text-gray-300"
            onClick={() => alert('Entre em contato via WhatsApp: (11) 99999-9999')}
          >
            Precisa de algo personalizado? Fale conosco
          </Button>
        </div>
        
        {/* Modal de Contratação */}
        <ContractModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          plan={selectedPlan}
        />
      </div>
    </section>
  )
}

// Componente FAQ
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "O que é ROAS?",
      answer: "ROAS (Return on Advertising Spend) é o retorno sobre o investimento em publicidade. É calculado dividindo a receita gerada pelos anúncios pelo valor investido. Por exemplo, um ROAS de 4:1 significa que para cada R$ 1 investido, você obtém R$ 4 de retorno."
    },
    {
      question: "O que é taxa de gestão?",
      answer: "A taxa de gestão é um percentual fixo de 8% sobre o valor investido em anúncios. Esta taxa cobre toda a gestão estratégica, otimização, criação de campanhas, relatórios e suporte especializado da nossa equipe."
    },
    {
      question: "O que é uma plataforma de anúncios?",
      answer: "Plataformas de anúncios são canais digitais onde você pode veicular suas campanhas publicitárias. As principais são: Google Ads (busca e display), Facebook Ads, Instagram Ads, TikTok Ads, LinkedIn Ads e YouTube Ads. Cada plataforma tem características específicas para diferentes objetivos."
    },
    {
      question: "Qual o investimento mínimo em anúncios?",
      answer: "Recomendamos um investimento mínimo de R$ 3.000/mês em anúncios para obter resultados consistentes. Este valor permite testes adequados, otimizações e alcance suficiente para gerar dados confiáveis."
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Os primeiros resultados aparecem entre 7-15 dias. Resultados consistentes e otimizados geralmente são alcançados entre 30-60 dias, quando temos dados suficientes para otimizações avançadas."
    },
    {
      question: "Vocês criam os anúncios e landing pages?",
      answer: "Sim! Criamos todos os materiais necessários: textos dos anúncios, imagens, vídeos, landing pages otimizadas para conversão e configuramos todo o tracking e análise de resultados."
    },
    {
      question: "Como funciona o relatório de resultados?",
      answer: "Você recebe relatórios detalhados com frequência definida pelo seu plano (semanal, quinzenal ou mensal). Os relatórios incluem métricas de performance, ROAS, conversões, insights e recomendações estratégicas."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, não há fidelidade. Você pode cancelar a qualquer momento com 30 dias de antecedência. Oferecemos também garantia de 30 dias - se não ficar satisfeito, devolvemos seu investimento."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">❓ Perguntas Frequentes</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Tire Suas Dúvidas Sobre{' '}
            <span className="text-primary">Tráfego Pago</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Respostas para as principais dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-700 dark:border-gray-600">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg dark:text-white">{faq.question}</CardTitle>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary" />
                  )}
                </div>
              </CardHeader>
              {openFAQ === index && (
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ainda tem dúvidas? Fale conosco!
          </p>
          <Button 
            className="btn-accent"
            onClick={() => {
              const whatsappNumber = "5511999999999"
              const message = "Olá! Tenho algumas dúvidas sobre os serviços da Scala Uai"
              const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
              window.open(url, '_blank')
            }}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              Scala <span className="text-accent">Uai</span>
            </div>
            <p className="text-gray-400 mb-4">
              A agência de tráfego pago que escala PMEs brasileiras com automação inteligente.
            </p>
            <div className="flex space-x-4">
              <Badge variant="outline" className="text-white border-white">
                CNPJ: 00.000.000/0001-00
              </Badge>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors text-left">Google Ads</button></li>
              <li><button className="hover:text-white transition-colors text-left">Facebook Ads</button></li>
              <li><button className="hover:text-white transition-colors text-left">Instagram Ads</button></li>
              <li><button className="hover:text-white transition-colors text-left">TikTok Ads</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors text-left">Sobre Nós</button></li>
              <li><button className="hover:text-white transition-colors text-left">Cases de Sucesso</button></li>
              <li><button className="hover:text-white transition-colors text-left">Carreiras</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 contato@scalauai.com.br</li>
              <li>📱 (11) 99999-9999</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Scala Uai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal
function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <HeroSection />
      <AboutSection />
      <CompetitiveSection />
      <ROICalculator />
      <PricingSection />
      <SolutionsSection />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App

