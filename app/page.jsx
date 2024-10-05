import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/bg.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h2 className="text-lg bg-white text-black px-4 py-1 rounded-full">Welcome to Consultancy Agency</h2>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-4">We Promote & Grow Your Business</h1>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Discover More
          </button>
        </div>
      </section>

      {/* Card Section */}
      <div className='w-full min-h-screen flex justify-center items-center flex-col
      md:flex-row'>
        <section className="my-12 px-4 flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">

              <img src="/image.png" alt="Capital Markets" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Capital Markets</h3>
            <p className="text-gray-600 mt-2">Neque porro quisquam est, qui dolorem ipsum quia dolor.</p>
          </div>
        </section>
        <section className="my-12 px-4 flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <img src="/image.png" alt="Capital Markets" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Business Advantage</h3>
            <p className="text-gray-600 mt-2">Neque porro quisquam est, qui dolorem ipsum quia dolor.</p>
          </div>
        </section>
        <section className="my-12 px-4 flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">

              <img src="/image.png" alt="Capital Markets" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Audit Transaction</h3>
            <p className="text-gray-600 mt-2">Neque porro quisquam est, qui dolorem ipsum quia dolor.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;