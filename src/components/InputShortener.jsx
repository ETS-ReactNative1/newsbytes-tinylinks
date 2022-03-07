import { useState } from "react"


const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <>

      <div name="linkshort" className="text-center w-screen h-full">
        <div className="">
          <h1 className="text-4xl font-bold mb-2 text-indigo-700 drop-shadow-lg">Make <span>Your URL Tiny :)</span></h1>
          <div>
            <input className="my-2 px-5 py-2 rounded-lg text-center font-bold text-2xl drop-shadow-xl"
              type="text"
              placeholder="Paste Your URL..."
              // value={value}
              onChange={e => setValue(e.target.value)}
            />
            <button className="py-3 px-10 sm:w-[20%] m-4 text-xl font-bold mb-7 drop-shadow-2xl" onClick={handleClick}>MAKE ME TINY</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default InputShortener;