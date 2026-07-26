import { useState } from "react"

function Fourth() {

  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(true)
  }

  return (
    <div id="page" className="flex justify-center items-center pt-10">
      <div id="rift" className="flex flex-col items-center gap-4 h-10px">
        <h1 id="beginning" className="text-center text-5xl font-serif">A</h1>
        <button onClick={handleClick} id="pre-answers" className="border text-center text-wrap px-3 hover:bg-white hover:text-black cursor-pointer font-serif">?</button>
        {isClicked && 
             <div className="flex flex-col items-center pb-5 gap-10">
                <p className="text-center text-black text-5xl mt-30 max-w-200">/mêsdia</p>
                <img className="w-80 h-80" src="src\assets\xadrez.png"></img>
             </div>}
      </div>
    </div>
  )
}

export default Fourth
