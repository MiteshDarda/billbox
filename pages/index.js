export default function Home() {
  return (
    <>
      {/* <div className=" bg-gray-700 p-4">
        <h1 className=" text-white text-3xl">Bill Box</h1>
      </div> */}
      <div
        className="flex-wrap h-screen flex flex-row justify-center align-middle"
        style={{
          background:
            "linear-gradient(20deg, rgba(144,49,8,1) 0%, rgba(162,96,96,1) 49%, rgba(13,129,138,1) 100%)",
        }}
      >
        <div className="flex-wrap h-screen flex flex-col justify-center align-middle">
          <div className=" m-2 text-5xl heading font-bold">
            Welcome To BILL BOX
          </div>
          <div
            style={{
              background: "-webkit-linear-gradient(#03383c, #333)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className=" m-2 font-semibold"
          >
            Tired of organising and managing bills ?<br />
            {"We'll do that for You"}
          </div>
        </div>
      </div>
    </>
  );
}
