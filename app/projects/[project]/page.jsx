''
import  {getProject}  from "@/sanity/lib/client";
import SanityBlockContent from "@sanity/block-content-to-react";
import Link from "next/link";


export default async function Project({ params }) {
    const slug = params.project;
    const project = await getProject(slug);


    return (
        <div className="flex flex-col">
            
            {/* Navbar */}
            <nav className="bg-blue-500 p-2">
                <div className="flex flex-col sm:flex-row md:flex-row justify-between items-center">
                    <Link className="text-white p-2 hover:bg-indigo-700 rounded-lg" href="/">
                       Home
                    </Link>

                    <Link className="text-white ml-4 p-2 hover:bg-indigo-700 rounded-lg" href={`${project.url}`}>
                            Project Link
                     </Link>

                </div>
            </nav>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 p-4 gap-4 items-center">
                <div className="col-span-1 md:col-span-3 text-center h-screen max-h-[77vh] mt-7">
                    <h1 className="text-xl font-semibold mb-2">{project.name}</h1>
                    <div className="mb-16">
                        <SanityBlockContent blocks={project.content} />
                    </div>
                                {/* Buttons */}
            <div className="flex md:justify-center justify-between p-4 md:gap-28 mb-2">
                <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Home
                </Link>
                <Link href={`${project.url}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Click
                </Link>
            </div>
                </div>

        </div>
        {/* Footer */}
        <footer className="bg-gray-200 p-4 text-center">
                <p>© Pandario 2024</p>
            </footer>


        </div>
    )
}