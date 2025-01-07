export default async function Page({
    params,
}: {
    params: Promise<{ postid: string }>;
}) {
    const postid = (await params).postid;
    return <h1>My Post: {postid}</h1>;
}
