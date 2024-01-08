import { getProject } from "@/sanity/lib/client";
import Link from "next/link";

export default async function Project({ params }) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div>
            <div className="">{project.name}</div>
            <Link href={`${project.url}`} target="_blank">click</Link>
            <Link href="http://localhost:3000">Home</Link>
        </div>
    )
}