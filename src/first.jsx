import { useState } from "react"

function First() {

  const [question, setQuestion] = useState("")

  function handleClick() {
    setQuestion("/O que chega ao cisne logo após sua canção?")
  }

  return (
    <div id="page" className="flex justify-center items-center pt-10">
      <div id="rift" className="flex flex-col items-center gap-4 h-10px">
        <h1 id="beginning" className="text-center text-5xl font-serif">F</h1>
        <button onClick={handleClick} id="pre-answers" className="border text-center text-wrap px-3 hover:bg-white hover:text-black cursor-pointer font-serif">?</button>
        <p className="text-center text-5xl mt-30 max-w-200 font-serif">{question}</p>
      </div>
    </div>
  )
}

export default First
