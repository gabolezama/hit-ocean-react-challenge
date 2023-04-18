
function RoundLoader({message}:{message: string}): JSX.Element {
    
    return (
        <div className="flex justify-right items-center flex flex-col">
            <div className="w-40 h-40 border-4 border-green-500 rounded-full loader ease-linear mt-30 ml-100 loader ease-linear animate-spin">🟢</div>
            <div className="text-white text-bold mt-5">{message}</div>
        </div>
    )
  }
export default RoundLoader