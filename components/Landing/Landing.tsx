import Heading from '../UI/Heading/Heading'

export const Landing = () => {
  return (
    <div className="h-screen">
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="md:prose-md prose md:text-center lg:prose-lg">
          <Heading variant="h1" className="mb-3 text-black">
            Digitalisierung, IOT, Frontend Entwicklung
          </Heading>

          <Heading
            variant="h3"
            className="leading-9 text-black md:mx-auto md:w-[70%]"
          >
            Ich bin Frontend-Entwickler mit einer Leidenschaft für
            Digitalisierung, User Interfaces und der Demokratisierung von
            Technologie.
          </Heading>
        </div>
      </div>
    </div>
  )
}

export default Landing
