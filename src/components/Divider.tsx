interface Iprops {
    margin?: string
}

export default function Divider({ margin }: Iprops) {

    return (
        <div className={`h-px bg-gray-900 dark:bg-slate-500 my-${margin ? margin : "10"}`}>
        
        </div>
    )

}