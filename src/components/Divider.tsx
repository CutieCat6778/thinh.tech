interface Iprops {
    props?: string
}

export default function Divider({ props }: Iprops) {
    if(props) {
        return (
            <div className={`h-px bg-gray-900 dark:bg-slate-500 ` + props }>
            
            </div>
        )
    } else {
        return (
            <div className={`h-px bg-gray-900 dark:bg-slate-500 my-10`}>
            
            </div>
        )
    }
}