import Header from '../shared/Header/Header'
import Heading from '../UI/Heading/Heading'

export const Landing = ({
  handleMenuClick,
}: {
  handleMenuClick: () => void
}) => {
  return (
    <div className="h-screen">
      <Header handleMenuClick={handleMenuClick} />
      <div className="grid h-full grid-cols-2">
        <div className="mb-40 self-center">
          <Heading variant="h1" className="mb-3">
            <p>Digitalisierung, IOT,</p>
            <p>Frontend Entwicklung</p>
          </Heading>
          <Heading variant="h4" className="leading-7">
            Ich bin Frontend-Entwickler mit einer Leidenschaft für
            Digitalisierung, User Interfaces und der Demokratisierung von
            Technologie.
          </Heading>
        </div>
        {/* TODO something interesting to look or even play with, maybe threejs */}
      </div>
    </div>
  )
}

export default Landing
