
function RoundLoader(): JSX.Element {
    
    return (
        <div className="flex justify-center items-center flex flex-col">
            <div className="w-40 h-40 border-4 border-green-500 rounded-full loader ease-linear mt-30 loader ease-linear animate-spin">🟢</div>
            <div className="text-white text-bold mt-5">Aguarde un momento...</div>
        </div>
    )
  }
export default RoundLoader