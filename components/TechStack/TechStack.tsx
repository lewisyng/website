import { techStack } from '../constants'
import TechStackCategory from '../TechStackCategory/TechStackCategory'
import TechStackItem from '../TechStackItem/TechStackItem'
import Heading from '../UI/Heading/Heading'

export const TechStack = () => {
  return (
    <div className="min-h-screen">
      <div className="prose max-w-full border-[8px] border-[#0c0c0c] bg-[#0c0c0c] p-4 text-center">
        <Heading className="text-white" variant="h2">
          Mein Tech Stack
        </Heading>
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.values(techStack).map((item, idx: number) => (
          <TechStackCategory key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

export default TechStack
