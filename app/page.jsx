import { getProjects  } from "@/sanity/lib/client"; 
import Image from "next/image";
import Link from "next/link";
import Nav from "./(components)/nav";
import { Top } from "./(components)/top";


export default  async function Home() {
  const projects = await getProjects();

  return (
  <div className="">
    <Nav/>
  <div className="max-w-5xl mx-auto py-10">

    <p className=" text-2xl font-semibold text-gray-700">You can check my projects here!</p>

        <div className="mt-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => 
              <Link 
                  href={`/projects/${project.slug}`} 
                  key={project._id} 
                  className=
                    "border-2 rounded-lg border-gray-500 p-1 hover:scale-105 hover:border-blue-500 transition" 
              >
                    
                    {project.image && (
                    
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={350}
                        height={350}
                        className="object-cover rounded-lg border border-gray-500"
                    />

                    )}
                    <div className="text-3xl font-extrabold">
                      <span className="bg-gradient-to-r
                          from-orange-400 via-purple-700 to-green-700 bg-clip-text text-transparent">
                        
                        {project.name }
                      </span>
                    </div>
              </Link>
    )}
    </div>
  </div>
  <div className="text-center text-gray-800 mt-2 text-xs md:text-sm lg:text-lg font-bold mix-blend-difference">
        © Pandario 2024
        
      </div>
      <Top/>
  </div>
  )
}
