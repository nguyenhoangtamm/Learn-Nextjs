import Page from "@/components/blog/page"
import Link from "next/link"

export default function first() {
    return(
    <Page>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                back to home
            </Link>
        </h2>
    </Page>
    )
}