import React from 'react';

const Home = () => {
    return (
        <section className="px-8 py-12 bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div>
                    <h1 className="text-4xl font-extrabold text-zinc-400 sm:text-6xl md:text-[45px] lg:text-6xl sm:text-blue-500 lg: mb-6">
                        Welcome, <br /> to Burj Khalifa
                    </h1>
                    <p className="text-gray-500 text-lg leading-relaxed text-justify">
                        The <strong>Burj Khalifa</strong>, soaring at an astonishing hei ght of 828 meters, is the tallest building in the world and a symbol of modern architectural excellence. Located in the heart of <strong>Downtown Dubai</strong>, this iconic skyscraper offers an exclusive selection of luxury flats and residences that combine elegance, comfort, and breathtaking views. The apartments range from spacious one-bedroom units to opulent multi-bedroom penthouses, all designed with high-end finishes, smart home technology, and access to world-class amenities such as swimming pools, fitness centers, concierge services, and direct connections to the Dubai Mall and metro. Living in the Burj Khalifa isn't just about luxury—it's a lifestyle statement, offering residents an unmatched experience at the pinnacle of global real estate.
                    </p>
                </div>

                {/* Image Section */}
                {/* Image Section */}
                <div className="flex justify-center md:justify-end z-10">
                    <img
                        src="/images/new.jpg"
                        alt="Burj Khalifa"
                        width={600}
                        height={750}
                        className="
                            rounded-3xl
                            object-cover
                            shadow-2xl
                            ring-4 ring-cyan-600/40
                            transition-transform duration-500 ease-in-out
                            hover:scale-105
                            max-w-full
                            h-auto
                        "
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
