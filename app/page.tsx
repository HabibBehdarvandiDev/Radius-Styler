"use client"
import { useState } from "react"

interface shapeStyle {
  borderTopLeftRadius: String;
  borderTopRightRadius: String;
  borderBottomLeftRadius: String;
  borderBottomRightRadius: String;
}

export default function Home() {
  const [topLeft, setTopLeft] = useState<String>();
  const [topRight, setTopRight] = useState<String>();
  const [bottomLeft, setBottomLeft] = useState<String>();
  const [bottomRight, setBottomRight] = useState<String>();

  const handleTopLeft = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTopLeft(e.target.value)
  }
  const handleTopRight = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTopRight(e.target.value)
  }
  const handleBottomLeft = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setBottomLeft(e.target.value);
  }
  const handleBottomRight = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setBottomRight(e.target.value)
  }


  const shapeStyle: shapeStyle = {
    borderTopLeftRadius: topLeft ? `${topLeft}px` : '0',
    borderTopRightRadius: topRight ? `${topRight}px` : '0',
    borderBottomLeftRadius: bottomLeft ? `${bottomLeft}px` : '0',
    borderBottomRightRadius: bottomRight ? `${bottomRight}px` : '0',
  };


  return (
    <main className="relative w-screen h-screen bg-gray-800">
      <section
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent flex flex-col w-4/5 lg:w-6/12 xl:w-4/12"
      >

        <h1 className="self-center text-2xl text-white font-bold -mt-6">Radius Styler</h1>

        <div className="flex justify-between align-middle">
          <div className="input-wrapper bg-gray-700 w-fit overflow-hidden rounded-lg my-2">
            <span className="px-2 text-white">px</span>
            <input type="number" name="top left" id="topLeft"
              className="w-10 h-10 text-center bg-gray-600 text-white"
              onChange={(e) => handleTopLeft(e)}
            />
          </div>

          <div className="input-wrapper bg-gray-700 w-fit overflow-hidden rounded-lg my-2">
            <input type="number" name="top right" id="topRight"
              className="w-10 h-10 text-center bg-gray-600 text-white"
              onChange={(e) => handleTopRight(e)}
            />
            <span className="px-2 text-white">px</span>
          </div>
        </div>


        <div
          className={`bg-white bg-opacity-25 border-white border-2 text-white self-center w-full min-h-[80px] flex justify-center items-center duration-500`}
          style={shapeStyle}
        >
          shape
        </div>


        <div className="flex justify-between align-middle">
          <div className="input-wrapper bg-gray-700 w-fit overflow-hidden rounded-lg my-2">
            <span className="px-2 text-white">px</span>
            <input type="number" name="bottom left" id="bottomLeft"
              className="w-10 h-10 text-center bg-gray-600 text-white"
              onChange={(e) => handleBottomLeft(e)}
            />
          </div>



          <div className="input-wrapper bg-gray-700 w-fit overflow-hidden rounded-lg my-2">
            <input type="number" name="bottom right" id="bottomRight"
              className="w-10 h-10 text-center bg-gray-600 text-white"
              onChange={(e) => handleBottomRight(e)}
            />
            <span className="px-2 text-white">px</span>
          </div>
        </div>


        <div className="bg-gray-700 w-full rounded-md flex flex-col my-6 p-4 text-white">
          {
            (
              <div>
                <code>
                  {'{'}<br />
                  <span>border : 1rem solid white</span>
                  <br />
                  <span>border-radius : {shapeStyle.borderTopLeftRadius} {shapeStyle.borderTopRightRadius} {shapeStyle.borderBottomLeftRadius} {shapeStyle.borderBottomRightRadius}</span>
                  <br />{'}'}
                </code>
              </div>
            )
          }
        </div>


      </section>
    </main>
  )
}
