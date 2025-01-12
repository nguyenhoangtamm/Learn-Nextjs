'use client';
import useSWR from 'swr';

import AppTable from '@/components/app.table';


export default function home() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'http://localhost:8000/blogs',
    fetcher
  );
  if (isLoading) return <div>Loading...</div>;

  console.log(isLoading);
  return <AppTable blog={data.sort((a: any, b: any) => b.id - a.id)} />;
}
