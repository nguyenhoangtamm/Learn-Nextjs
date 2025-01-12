export default async function Page({
    params,
  }: {
    params: Promise<{ blogid: string }>
  }) {
    const blogid = (await params).blogid
    console.log(blogid)
    return <div>My Post: {blogid}</div>
  }