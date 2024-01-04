import Image from "next/image";
import Link from "next/link";
import { people } from "@/CONSTANTS";

export default function Example() {
    return (
        <div id="teacher" className="bg-white py-24 sm:py-32 px-[5%] flex flex-col">
            <div className="py-12">
                <div className="">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Dedicated Teachers</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16">
                    {people.map((person, i) => (
                        <li key={i}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
                                <Image className="h-16 w-16 rounded-full object-cover object-top" src={person.imageUrl} alt="" width={256} height={256} />
                                <div className="md:col-span-2">
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
