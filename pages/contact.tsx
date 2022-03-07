import Heading from '../components/UI/Heading/Heading'

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading variant="h1">Kontakt</Heading>

      <div className="mt-[140px] text-center">
        <Heading variant="h3">Lewis Young</Heading>

        <Heading variant="h4">Salzburg | Österreich</Heading>

        <Heading variant="h4">
          <a href="mailto:lewisyoung1306@yahoo.de" className="underline">
            lewisyoung1306@yahoo.de
          </a>
        </Heading>
      </div>
    </div>
  )
}

export default Contact
