import Heading from "../Heading/Heading"

export const CardContent = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <Heading variant="h4">{children}</Heading>
    )
}

export default CardContent