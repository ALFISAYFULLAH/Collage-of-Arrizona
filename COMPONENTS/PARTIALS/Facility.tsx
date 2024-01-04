import { FacilityList } from "@/CONSTANTS";
import Image from "next/image";

export default function Facility() {
    return (
        <section id="facility" className="py-16 px-[5%]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between md:justify-end relative">
                <h2 className="text-2xl font-bold mb-4 md:uppercase md:absolute md:-rotate-90 md:top-56 md:-left-40 md:text-[4rem]">Our Facilities</h2>
                <div className="grid grid-cols-6 gap-4 h-[80vw] md:h-[50vw] lg:h-[40vw] md:w-9/12">
                    {FacilityList.map((image, index) => (
                        <div key={index} className={`overflow-hidden rounded-xl hover:shadow-2xl hover:shadow-green-400 group ${index === 0 || index === 1 ? "col-span-3" : "col-span-2"}`}>
                            <Image className="h-full w-full object-cover object-left-top transition-all duration-700 group-hover:scale-105" src={image} alt="mosque, stadium, studio, classroom, and library" width={600} height={600} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
