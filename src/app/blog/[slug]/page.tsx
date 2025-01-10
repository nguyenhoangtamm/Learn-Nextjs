import { log } from "console"

 
export default  function Page({ params }: { params: { slug: string } }) {
    log(params.slug)
    return (
        <div>
            <h1>Blog Post</h1>
            <h2>{params.slug}</h2>
        </div>
    )
}