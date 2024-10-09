import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8 bg-orange-100 flex flex-col lg:flex-row items-center justify-center min-h-screen"> {/* Ensure it takes the full height */}
      {/* Description Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center">
        <h1 className="font-extrabold text-yellow-600 text-4xl md:text-5xl">Furniture</h1>
        <p className="font-semibold text-yellow-600 text-2xl mt-2">Landing Page</p>
        <p className="font-light text-yellow-600 mt-4 text-base md:text-lg">
          Launching in the summer of 2003 in a small workshop with a team of 4,
          <br /> House of Zunn has evolved continuously and come very far from its humble beginnings.
        </p>
        <p className="font-light text-yellow-600 mt-4 text-base md:text-lg">
          Today the company is a brand synonymous with luxury, class, and quality.
          From creating large-scale turnkey solutions for corporate clients to providing 
          the perfect armchair for a living room, the company has worked on projects of all sizes.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center overflow-hidden">
        <div className="relative transition-transform duration-500 hover:scale-105">
          <Image
            src="/theme.avif" 
            alt="Furniture"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="lg:w-1 overflow-hidden mt-4"> {/* Add margin for spacing */}
            <section className="relative">
              <Image 
                src="/dinign.avif"
                alt="Discover"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
