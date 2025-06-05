import { Input } from './components/ui/input'

const days = [
  {
    name: 'Segunda-feira',
    icon: '/sun-clouds.svg',
    temperature_max: '20°',
    temperature_min: '10°',
  },
  {
    name: 'Terça-feira',
    icon: '/sun-clouds.svg',
    temperature_max: '20°',
    temperature_min: '10°',
  },
  {
    name: 'Quarta-feira',
    icon: '/sun-clouds.svg',
    temperature_max: '20°',
    temperature_min: '10°',
  },
  {
    name: 'Quinta-feira',
    icon: '/sun-clouds.svg',
    temperature_max: '20°',
    temperature_min: '10°',
  },
  {
    name: 'Sexta-feira',
    icon: '/sun-clouds.svg',
    temperature_max: '20°',
    temperature_min: '10°',
  },
  {
    name: 'Sábado',
    icon: '/sun-clouds.svg',
    temperature_max: '20°',
    temperature_min: '10°',
  },
  {
    name: 'Domingo',
    icon: '/sun-clouds.svg',
    temperature_max: '20°',
    temperature_min: '10°',
  },
]

const times = [
  {
    time: '6:00 AM',
    icon: '/sun-cloud.svg',
    temperature: '24°',
  },
  {
    time: '09:00 AM',
    icon: '/sun-clouds.svg',
    temperature: '28°',
  },
  {
    time: '12:00 PM',
    icon: '/sun.svg',
    temperature: '30°',
  },
  {
    time: '3:00 PM',
    icon: '/sun.svg',
    temperature: '30°',
  },
  {
    time: '6:00 PM',
    icon: '/clouds.svg',
    temperature: '26°',
  },
  {
    time: '9:00 PM',
    icon: '/moon-clouds.svg',
    temperature: '23°',
  },
]

const details = [
  {
    title: 'Sensação Térmica',
    icon: '/temperature.svg',
    value: '30°',
  },
  {
    title: 'Chance de Chuva',
    icon: '/rain.svg',
    value: '0%',
  },
  {
    title: 'Vento',
    icon: '/wind.svg',
    value: '2',
    unit: 'km/h',
  },
  {
    title: 'Índice UV',
    icon: '/sun-2.svg',
    value: '2',
  },
]

function App() {
  return (
    <div className="grid grid-cols-3 max-w-6xl h-screen mx-auto my-10">
      {/* Coluna da Esquerda */}
      <div className="flex flex-col col-span-2 gap-4 px-8 space-y-4">
        <nav className="flex flex-row items-center gap-4">
          <img src="/ios-weather.svg" alt="Logo" className="w-12 h-12" />
          <h1 className="text-2xl text-blue-500 font-medium flex-shrink-0 whitespace-nowrap">
            Clima Hoje
          </h1>
          <div className="relative w-full">
            <Input
              placeholder="Procure por cidades"
              className="w-full rounded-xl border-none bg-white py-2 px-4"
            />
          </div>
        </nav>

        {/* ShowCase */}
        <div className="flex flex-row items-center justify-between px-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">São Paulo</h2>
            <p className="text-sm text-gray-500">Chance de chuva 0%</p>
            <h2 className="text-5xl font-bold pt-2">28°</h2>
          </div>

          <img src="/sun-clouds.svg" className="w-52 h-52" />
        </div>

        {/* Horários */}
        <div className="flex flex-row space-x-12 bg-gradient-to-r from-blue-500 to-blue-300 rounded-4xl p-10 px-10">
          {times.map((time) => {
            return (
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium text-sm whitespace-nowrap">
                  {time.time}
                </span>
                <img src={time.icon} alt="Clima" className="w-16 h-16" />
                <span className="text-white font-bold text-2xl">
                  {time.temperature}
                </span>
              </div>
            )
          })}
        </div>

        {/* Detalhes */}
        <div className="grid grid-cols-4 gap-4">
          {details.map((detail) => {
            return (
              <div className="flex flex-col bg-white rounded-4xl p-8 border border-gray-100 shadow-sm justify-center items-center text-center">
                <h2 className="text-sm text-gray-500">{detail.title}</h2>
                <p className="flex text-2xl font-bold items-center justify-center space-x-2">
                  <img src={detail.icon} alt="Clima" className="w-6 h-6" />
                  <span>{detail.value}</span>
                  {detail.unit && (
                    <span className="text-sm font-normal">{detail.unit}</span>
                  )}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Coluna da Direita */}
      <div className="flex flex-col px-8 h-full justify-end">
        <div className="flex flex-col bg-white rounded-4xl p-12 border border-gray-100 shadow-sm">
          <div className="flex flex-col gap-4 w-full space-y-4">
            {days.map((day) => {
              return (
                <div className="flex flex-row items-center justify-between w-full">
                  <h2 className="text-sm text-gray-500 w-24">{day.name}</h2>
                  <img src={day.icon} className="w-12 h-12" />
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">{day.temperature_max}</p>
                    <p className="text-sm text-gray-500">
                      {day.temperature_min}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
