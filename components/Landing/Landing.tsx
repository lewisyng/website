import Heading from '../UI/Heading/Heading'

export const Landing = () => {
  return (
    <div className="h-screen">
      <div className="flex h-[calc(100vh-200px)] items-center">
        <div className="text-center">
          <Heading variant="large" className="mb-3 text-black">
            <p>Digitalisierung, IOT, Frontend Entwicklung</p>
          </Heading>

          <Heading
            variant="h3"
            className="mx-auto w-[70%] leading-9 text-black"
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
