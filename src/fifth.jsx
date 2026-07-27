import { useState } from "react"

function Fifth() {

  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(true)
  }

  return (
    <div id="page" className="flex justify-center items-center pt-10">
      <div id="rift" className="flex flex-col items-center gap-4 h-10px">
        <h1 id="beginning" className="text-center text-5xl font-serif">L</h1>
        <button onClick={handleClick} id="pre-answers" className="border text-center text-wrap px-3 hover:bg-white hover:text-black cursor-pointer font-serif">?</button>
        {isClicked && 
             <div className="flex flex-col items-center pt-5 gap-2">
                <p className="text-center text-5xl mt-30 max-w-200 font-serif">Fim da linha.</p>
                <img className="w-100 h-100" src="https://i.ibb.co/v4nZ2NW8/Grave.png"></img>
             </div>}
      </div>
    </div>
  )
}

export default Fifth