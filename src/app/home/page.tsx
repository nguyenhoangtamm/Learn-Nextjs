'use client';
import useSWR from 'swr';

import AppTable from '@/components/app.table';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function home() {
    const { data, error, isLoading } = useSWR(
        'http://localhost:8000/blogs',
        fetcher
    );
    if (isLoading) return <div>Loading...</div>;

    return (
       
        <AppTable blog={data} />
    )
}
