import React from "react";
import Button from "./Button";
import Hero_Banner from "../Assets/hero-banner.png";

export const Home = () => {
  return (
    <section className="flex gap-10  bg-hero bg-cover h-[60rem] home">
      <div className="pt-[20rem] w-[50%] ml-40 home-container">
        <h2 className="text-royal_blue text-3xl font-extrabold  uppercase">
          Welcome to Wheatleyhill Dental
        </h2>
        <h1 className=" text-oxford_blue_2 font-bold text-[5.3rem]  leading-[85px] pt-3">
          We Are Best In Dental Service
        </h1>
        <p className="text-xl sm:text-md pt-8 text-oxford_blue opacity-[0.8]">
          Donec vitae libero non enim placerat eleifend aliquam erat volutpat.
          Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique,
          commodo gravida lectus non.
        </p>
        <form action="" className="inline-flex pt-12">
          <input
            type="text"
            className="px-20 bg-hero"
            placeholder="Enter your email..."
          />
          <Button text="GET CALL BACK" />
        </form>
      </div>
      <figure className="pt-[10rem] h-[35rem] w-[35rem]">
        <img src={Hero_Banner} alt="hero-banner" />
      </figure>
    </section>
  );
};

export default Home;
