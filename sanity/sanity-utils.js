/*import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: '2024-01-04',
        useCdn: ''
      })
    return await client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`
    )
}
*/
