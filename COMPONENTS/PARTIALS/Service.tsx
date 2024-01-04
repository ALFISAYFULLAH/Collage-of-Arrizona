import { ServiceList } from "@/CONSTANTS";
import { LuCheckCircle } from "react-icons/lu";

export default function Service() {
    return (
        <section className="bg-slate-100 pb-6">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="container mx-auto px-6 p-6">
                    <div className="mb-16 text-center">
                        <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h4>
                        <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">How we change the game</p>
                    </div>

                    <div className="flex flex-wrap my-12">
                        {ServiceList.map((item, index) => (
                            <div key={index} className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                                <div className="flex items-center mb-6">
                                    <LuCheckCircle className="w-6 h-6 text-indigo-600" />
                                    <div className="ml-4 text-xl">{ item.title }</div>
                                </div>
                                <p className="leading-loose text-gray-500">{ item.description }</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
