import Image from 'next/image'
import Heading from '../components/UI/Heading/Heading'

export const About = () => {
  return (
    <>
      <div className="grid h-[calc(100vh-72px)] grid-cols-2">
        <div className="self-center">
          <Heading variant="h1" className="text-base leading-10">
            Hi! Ich heiße Lewis.
          </Heading>

          <Heading variant="h3" className="text-3xl">
            Mich fasziniert alles Fassbare an einer Website und das Unfassbare,
            das dahinter steckt.
          </Heading>
        </div>

        <div className="relative h-[70%] max-h-[500px] justify-end self-end">
          <Image
            src="/img/portraitTransparent.png"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      </div>

      <div className="grid items-center justify-center px-5 text-center">
        <div className="grid justify-center h-screen">
          <Heading variant="h1" className="max-w-[60ch] self-center text-6xl">
            Die Welt liegt im digitalen Umbruch
          </Heading>
        </div>

        <div className="grid justify-center h-screen">
          <Heading variant="h3" className="max-w-[60ch] self-center text-2xl">
            Diese Entwicklung birgt Chancen, die das Potenzial haben unser Leben
            maßgeblich zu gestalten. Im Mittelpunkt stehen für mich
            Webtechnologien, da sie die Vernetzung aller Menschen und
            Lebensbereiche ermöglichen, sowie unzählige neue Geschäftsfelder
            erzeugen und alte revolutionieren.
          </Heading>
        </div>

        <div className="grid justify-center h-screen">
          <Heading variant="h3" className="max-w-[60ch] self-center text-2xl">
            Ich liebe es neue Technologien zu lernen und damit selber auf die
            Digitalisierung Einfluss zu nehmen.
          </Heading>
        </div>
      </div>
    </>
  )
}

export default About
