import { useState } from "react"

function Second() {

  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(true)
  }

  return (
    <div id="page" className="flex justify-center items-center pt-10">
      <div id="rift" className="flex flex-col items-center gap-4 h-10px">
        <h1 id="beginning" className="text-center text-5xl font-serif">I</h1>
        <button onClick={handleClick} id="pre-answers" className="border text-center text-wrap px-3 hover:bg-white hover:text-black cursor-pointer font-serif">?</button>
        {isClicked && <p className="text-center text-5xl mt-30 max-w-200">Algumas coisas <span className="text-black">se escondem de seus /olhos</span> </p>}
      </div>
    </div>
  )
}

export default Second
