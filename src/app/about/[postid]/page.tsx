export default async function Page({
    params,
}: {
    params: Promise<{ postid: string }>;
}) {
    console.log(params);
    const postid = (await params).postid;
    return <h1>My Post: {postid}</h1>;
}
