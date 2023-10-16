import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="flex gap-[10%] p-4 bg-white rounded-xl shadow-lg w-[70vw] h-[40vw]">
        <div className="flex w-[30%] h-[100%] bg-red-50 rounded-md">
            <img src="./bg-sidebar-desktop.svg" alt="image for steps" className="flex-1 object-cover rounded-lg" />
        </div>
        <div className="flex flex-1 bg-red-50">
            <p className="text-marineBlue text-[2vw] font-black">Personal Info</p>
        </div>
    </div>
  </div>
  )
}
