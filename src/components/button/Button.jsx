const Button = ({onClick, children}) => {
    return (
        <button onClick={onClick} className={`rounded w-40 h-10 bg-neutral-800 text-red-400`}>{children}</button>
    )
}
export default Button