export const TechStackItem = ({item}: {
    item: string
}) => {
    return (
        <div className="border-[8px] border-black px-4 pb-4 hover:shadow-[10px_10px_0_0_rgb(255,0,255)] sm:p-4">
            <h2>{item}</h2>
        </div>
    )
}

export default TechStackItem