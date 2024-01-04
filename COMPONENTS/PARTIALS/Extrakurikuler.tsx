import Image from "next/image";
import Link from "next/link";
import { ExtraCuricularList } from "@/CONSTANTS";

export default function Extrakurikuler() {
    return (
        <div className="py-12">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Our Extra Curriculum</h2>
                    <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p>
                </div>

                <div className="mx-[5%] md:mx-[10%]">
                    {ExtraCuricularList.map((item, index) => (
                        <div key={index} className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                            <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                                <Image
                                    src={item.image}
                                    alt="art cover"
                                    loading="lazy"
                                    width="1000"
                                    height="667"
                                    className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                                <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">Jul 27 2022</span>
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{ item.title }</h3>
                                <p className="my-6 text-gray-600 dark:text-gray-300">{ item.description }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
