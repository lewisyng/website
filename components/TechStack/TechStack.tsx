import { techStack } from '../constants'
import TechStackCategory from '../TechStackCategory/TechStackCategory'
import Heading from '../UI/Heading/Heading'

export const TechStack = () => {
  return (
    <div className="py-12">
      <div className="prose max-w-full border-[8px] border-[#0c0c0c] bg-[#0c0c0c] p-4 text-center">
        <Heading className="text-white" variant="h2">
          Mein Tech Stack
        </Heading>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
        {Object.values(techStack).map((item, idx: number) => (
          <TechStackCategory key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

export default TechStack
