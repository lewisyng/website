import Text from "../Text/Text"

export const CardContent = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <Text>{children}</Text>
    )
}

export default CardContent