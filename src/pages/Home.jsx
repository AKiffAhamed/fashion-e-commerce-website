import React from "react";
import heroImage from "./../assets/Hero.jpeg";
import Card from "../components/card";

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh]">
        <img
          src={heroImage}
          alt="hero"
          className="w-full h-full object-cover object-top"
        />

        {/*text & btn */}
        <div className="absolute inset-0 flex flex-col items-left px-20 justify-center text-white bg-black/25">
          <h1 className="text-4xl md:text-6xl font-bold ">
            New Summer <br />
            Collection
          </h1>

          <p className="mt-4 text-lg">Discover premium fashion by Shariff</p>

          <button
            className="px-4 py-2
                        m-3
                        w-32
                         text-white
                         border border-white
                        font-medium
                        rounded-lg
                        shadow-md
                        hover:bg-white
                        hover:text-black
                        hover:-translate-y-1
                        active:scale-95
                        transition duration-300
"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/*New Arrivals*/}
      <section className="m-2">
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-center mb-6">New Arrivals</h1>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row justify-evenly gap-6 py-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default Home;
