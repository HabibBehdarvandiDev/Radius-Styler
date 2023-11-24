"use client"
import { useState } from "react"


export default function Home() {
  const [topLeft,setTopLeft] = useState<String>();
  const [topRight,setTopRight] = useState<String>();
  const [bottomLeft,setBottomLeft] = useState<String>();
  const [bottomRight,setBottomRight] = useState<String>();

  return (
    <main className="relative w-screen h-screen bg-gray-800">
      <section
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent flex flex-col w-4/5 lg:w-6/12 xl:w-4/12"
      >
        <div className="flex justify-between align-middle">
          <div className="input-wrapper bg-gray-700 w-fit overflow-hidden rounded-lg my-2">
            <span className="px-2 text-white">px</span>
            <input type="number" name="top left" id="topLeft"
              className="w-10 h-10 text-center bg-gray-600 text-white"
            />
          </div>

          <div className="input-wrapper bg-gray-700 w-fit overflow-hidden rounded-lg my-2">
            <input type="number" name="top right" id="topRight"
              className="w-10 h-10 text-center bg-gray-600 text-white"
            />
            <span className="px-2 text-white">px</span>
          </div>
        </div>


        <div
          className="bg-white bg-opacity-25 border-white border-2 text-white self-center w-4/5 h-4/5 min-h-[80px] flex justify-center items-center"
        >
          shape
        </div>


        <div className="flex justify-between align-middle">
          <div className="input-wrapper bg-gray-700 w-fit overflow-hidden rounded-lg my-2">
            <span className="px-2 text-white">px</span>
            <input type="number" name="bottom left" id="bottomLeft"
              className="w-10 h-10 text-center bg-gray-600 text-white"
            />
          </div>

          <div className="input-wrapper bg-gray-700 w-fit overflow-hidden rounded-lg my-2">
            <input type="number" name="bottom right" id="bottomRight"
              className="w-10 h-10 text-center bg-gray-600 text-white"
            />
            <span className="px-2 text-white">px</span>
          </div>
        </div>
      </section>
    </main>
  )
}
