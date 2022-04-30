import Heading from '../UI/Heading/Heading'

export const Landing = () => {
  return (
    <div className="grid h-[calc(100vh-72px)]">
      <div className="self-center justify-self-center md:text-center">
        <Heading variant="h1" className="prose mb-3 text-6xl text-black">
          Digitalisierung, IOT, Frontend Entwicklung
        </Heading>

        <Heading
          variant="h3"
          className="prose mb-14 text-2xl leading-9 text-black md:mx-auto"
        >
          Ich bin Frontend-Entwickler mit einer Leidenschaft für
          Digitalisierung, User Interfaces und technischen Erlebnissen.
        </Heading>
      </div>
    </div>
  )
}

export default Landing
