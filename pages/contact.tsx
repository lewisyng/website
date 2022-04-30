import Heading from '../components/UI/Heading/Heading'

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Heading variant="h1">Kontakt</Heading> */}

      <div className="mt-[14%] text-center">
        <Heading variant="h3">Lewis Young</Heading>
        <Heading variant="h4">Salzburg | Österreich</Heading>
        <Heading variant="h4">
          <a href="mailto:lewisyoung1306@yahoo.de" className="underline">
            lewisyoung1306@yahoo.de
          </a>
        </Heading>
        <Heading variant="h4">
          <a
            href="https://www.linkedin.com/in/lewis-young-276603164/"
            className="underline"
            target="blank"
            rel="noopener noreferer"
          >
            LinkedIn
          </a>
        </Heading>
      </div>
    </div>
  )
}

export default Contact
