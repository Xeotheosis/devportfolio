import React from "react";

const SendMessage = ({ notify, loading }) => {
  return (
    <section className=" order-4 md:contact lg:col-span-2 lg:row-span-1  rounded-3xl">
      <div className="h-full w-full flex justify-end items-center p-4">
        <button
          onClick={notify}
          className="rounded-full uppercase p-4  bg-white hover:shadow-md hover:shadow-blue-400 w-fit cursor-pointer contact-button transition-all delay-150"
          type="submit">
          {loading ? (
            <svg
              className="h-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
          ) : (
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default SendMessage;
