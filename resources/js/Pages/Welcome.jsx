import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <body className="p-16 xl:px-96  min-h-screen dots text-white">
                <div className="w-full flex gap-8 justify-center">
                    {" "}
                    {/* HEADER */}
                    <div className="bg-gray-800/50 bg-gradient-to-bl from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 'shadow-2xl shadow-gray-500/20  motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 text-white basis-1/3 gap-1 flex flex-col justify-center items-center text-center p-8 rounded-2xl">
                        <div className="bg-black w-36 h-36 rounded-full"></div>
                        <p className="text-2xl font-bold">
                            Samuel Christiawan I
                        </p>
                        <p className="text-base">
                            Graphic Designer | Web Developer
                        </p>
                    </div>
                    <div className="bg-gray-800/50 bg-gradient-to-bl from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 'shadow-2xl shadow-gray-500/20 motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500  text-white basis-2/3 flex flex-col justify-center items-center text-center p-10 rounded-2xl">
                        <p className="text-2xl">
                            I'm a{" "}
                            <span className="font-bold">
                                {" "}
                                Graphic Designer{" "}
                            </span>{" "}
                            and{" "}
                            <span className="font-bold">
                                {" "}
                                Web Developer{" "}
                            </span>{" "}
                            based in Malang. Focused on brand identity, digital
                            marketing, and digital branding.
                        </p>
                        <p className="p-3 px-10 rounded-full underline text-2xl mt-5">
                            Let’s Work Together
                        </p>
                    </div>
                </div>

                <div className="w-full flex gap-8 justify-center mt-8">
                    {" "}
                    {/* HEADER */}
                    <div className="border-2 border-white motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 text-white basis-2/3 gap-1 flex flex-col justify-center items-center text-center p-8 rounded-2xl">
                        Foto
                    </div>
                    <div className=" text-white basis-1/3 flex flex-col justify-center items-left text-left p-3">
                        <p className="font-bold text-xl">
                            Ayasara
                        </p>
                        <p className="text-xl">
                            Branding Design - 2023
                        </p>
                        <p className="text-base mt-4">
                        Lorem ipsum dolor sit amet consectetur. Est mollis turpis ultrices enim tortor. Consectetur non urna arcu suspendisse morbi sagittis pellentesque. Fusce maecenas sodales aliquet nec. Etiam integer dictumst viverra sit dolor tincidunt at quis ultrices.
                        </p>
                    </div>
                </div>

            </body>

            <style>{`
                .dots {
                    background-color:black;
                    // background-image: radial-gradient(circle, white 1px, transparent 1px), radial-gradient(circle, white 1px, transparent 1px);
                    // background-position: 0 0, 25px 25px;
                    // background-size: 50px 50px;
                  }
            `}</style>
        </>
    );
}
