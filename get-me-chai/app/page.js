import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center font-white text-white h-[44vh] flex-col">
        <div className="font-bold text-5xl mt-5 flex gap-3 items-center justify-center">
          Buy Me a Chai{" "}
          <span>
            <img src="/tea.png" alt="" width={80} />
          </span>
        </div>
        <p className="mt-2">
          Welcome to the Buy Me a Chai app! This is a simple platform where you
          can support the developer by buying them a chai.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mt-5 rounded cursor-pointer"
          >
            Start Now!
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-5"></div>
      <div className="text-white p-10">
        <h1 className="text-3xl font-bold text-center mt-10">
          Your Fans can help you!
        </h1>
        <div className="flex justify-center items-center mt-10 gap-30 container mx-auto ">
          <div>
            <img src="/Tech.gif" alt="" width={250} />
            <p className="text-center font-bold mt-10">Your Fans want to help</p>
            <p className="mb-5">You fans are available to help you</p>
          </div>
          <div>
            <img src="/Money.gif" alt="" width={200} />
            <p className="text-center font-bold">Your Fans want to help</p>
            <p className="mb-5">Your fans are available to help you</p>
          </div>
          <div>
            <img src="/social%20media.gif" alt="" width={180} />
            <p className="text-center font-bold mt-10">Your Fans want to help</p>
            <p className="mb-5">Your fans are available to help you</p>
          </div>
        </div>
      </div>
        <div className="bg-white h-1 opacity-5"></div>
         <div className="text-white p-10">
        <h1 className="text-3xl font-bold text-center mt-10">
          Learn more about us!
        </h1>
        <div className="flex justify-center items-center mt-10 gap-30 container mx-auto ">
          <div>
            <img src="/Tech.gif" alt="" width={250} />
            <p className="text-center font-bold mt-10">Your Fans want to help</p>
            <p className="mb-5">You fans are available to help you</p>
          </div>
          <div>
            <img src="/Money.gif" alt="" width={200} />
            <p className="text-center font-bold">Your Fans want to help</p>
            <p className="mb-5">Your fans are available to help you</p>
          </div>
          <div>
            <img src="/social%20media.gif" alt="" width={180} />
            <p className="text-center font-bold mt-10">Your Fans want to help</p>
            <p className="mb-5">Your fans are available to help you</p>
          </div>
        </div>
      </div>
        
        
    </>
  );
}

