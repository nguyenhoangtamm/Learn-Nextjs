export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    console.log(slug)
    return <h1>My Page {slug}</h1>
  }