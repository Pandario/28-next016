
import Nav from "@/app/(components)/nav";
import  {getProject}  from "@/sanity/lib/client";
import SanityBlockContent from "@sanity/block-content-to-react";
import Link from "next/link";


export default async function Project({ params }) {
    const slug = params.project;
    const project = await getProject(slug);


    return (
        <div className="flex flex-col min-h-svh">
            
                {/* Navbar */}
            <Nav/>

                {/* Main part */}

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 p-4 gap-4 items-center max-w-3xl mx-auto text-center ">
                <div className="col-span-1 md:col-span-3 text-center lg:mx-20    mt-7">
                    <h1 className="text-2xl font-semibold mb-4">{project.name}</h1>
                    <div className="mb-16 text-left">
                        <SanityBlockContent blocks={project.content} />
                    </div>
            
                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 my-4">
                        <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Home
                        </Link>
                        <Link href={`${project.url}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" target="_blank">
                            Click
                        </Link>
                    </div>
                </div>

            </div>
        
                {/* Footer */}

            <footer className="bg-gray-200 p-4 text-center relative">
                <p>© Pandario 2024</p>
            </footer>


        </div>
    )
}