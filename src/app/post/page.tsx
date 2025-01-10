interface Post {
  id: number;
  title: string;
}

export default async function Page() {
  // const data = await fetch('https://api.vercel.app/blog');
  // const posts: Post[] = await data.json();
  const posts: Post[] = [
   
  ];
  return (
    <table >
      {posts.map((post) => (
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.title}</td>
        </tr>
      ))}
    </table>
  );
}