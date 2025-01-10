'use client'

import { useRouter } from "next/navigation";

export default function YouTubePage() {
    const router = useRouter();
    return (
        <div>
            <h1>Welcome to the YouTube Page</h1>
            <p>This is a sample page for YouTube content.</p>
            <button onClick={()=>router.push('/facebook')}>go to facebook</button>
        </div>
    );
};

