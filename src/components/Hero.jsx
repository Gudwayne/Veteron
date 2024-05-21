import React from 'react'

const Hero = () => {
  const headText = "<Become a Senior Dev/>";

  return (
    <section className="bg-black py-20 mb-4">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <div className="text-center">
            <h1
              className="text-4xl font-aldrich text-white sm:text-5xl md:text-6xl"
            >
              {headText}
            </h1>
            <p className="my-4 text-xl font-aldrich text-white">
              Find the Job that fits your skills and needs
            </p>
          </div>
        </div>
      </section>
  )
}

export default Hero