import { getProjects  } from "@/sanity/lib/client"; 
import Image from "next/image";
import Link from "next/link";


export default  async function Home() {
  const projects = await getProjects();

  return (
  <div className="max-w-5xl mx-auto py-20">
    <h1 className="text-7xl font-extrabold">My new <span className="bg-gradient-to-r
    from-orange-400 via-rose-700 to-purple-700 bg-clip-text text-transparent">page</span></h1>

    <p className="my-20 text-xl text-gray-700">My projects here!</p>

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
  )
}
