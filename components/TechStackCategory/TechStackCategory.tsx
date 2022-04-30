import TechStackItem from '../TechStackItem/TechStackItem'
import Heading from '../UI/Heading/Heading'

export const TechStackCategory = ({ item }: { item: any }) => {
  return (
    <div>
      <Heading variant="h3" className="mb-5">{item.title}</Heading>

      <div className={'grid gap-5'}>
        {item.technologies.map((technology: any, idx: number) => (
          <TechStackItem item={technology} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default TechStackCategory
