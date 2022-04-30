import Heading from '../UI/Heading/Heading'

export const Landing = () => {
  return (
    <div className="grid h-[calc(100vh-72px)]">
      <div className="self-center justify-self-center md:text-center">
        <Heading
          variant="h1"
          className="prose mb-3 text-2xl text-black md:text-6xl"
        >
          Hi! Ich heiße Lewis.
        </Heading>

        <Heading
          variant="h3"
          className="prose md:mt-10 mb-14 text-base text-black md:mx-auto md:text-2xl md:leading-9"
        >
          Ich bin Frontend-Entwickler mit einer Leidenschaft für
          Digitalisierung, User Interfaces und technischen Erlebnissen.
        </Heading>
      </div>
    </div>
  )
}

export default Landing
