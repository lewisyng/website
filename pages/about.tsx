import Image from 'next/image'
import Heading from '../components/UI/Heading/Heading'

export const About = () => {
  return (
    <>
      <div className="grid h-[calc(100vh-74px-30px)] grid-cols-2">
        <div className="self-center">
          <Heading variant="h1">Hi! Ich heiße Lewis.</Heading>

          <Heading variant="h3">
            Ich bin Frontend-Entwickler mit einer Leidenschaft für
            Digitalisierung, User Interfaces und der Demokratisierung von
            Technologie.
          </Heading>
        </div>

        <div className="relative mt-auto max-h-[500px] h-[70%] justify-end">
          <Image
            src="/img/portraitTransparent.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="flex h-screen items-center justify-center">
        <div className="w-[70%] text-center">
          <Heading variant="h1">Die Welt liegt im digitalen Umbruch</Heading>

          <Heading variant="h3">
            Mich faszinieren die Chancen, die sich aus dieser Entwicklung
            ergeben. Im Mittelpunkt stehen für mich Webtechnologien, da sie die
            Vernetzung aller Menschen und Lebensbereiche ermöglichen, sowie
            unzählige neue Geschäftsfelder erzeugen und alte revolutionieren.
          </Heading>

          <Heading variant="h3">
            Ich liebe es neue Technologien zu lernen und damit selber auf die
            Digitalisierung Einfluss zu nehmen.
          </Heading>
        </div>
      </div>
    </>
  )
}

export default About
