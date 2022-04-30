import Heading from '../UI/Heading/Heading'

export const TechStackItem = ({ item }: { item: string }) => {
  return (
    <div className="border-[8px] border-black p-5 hover:shadow-[10px_10px_0_0_rgb(255,0,255)] sm:p-4">
      <Heading variant="h2">{item}</Heading>
    </div>
  )
}

export default TechStackItem
