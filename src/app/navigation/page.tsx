import Link from "next/link";

export default function NavigationPage (){
    return (
        <div>
            <Link href="/youtube">
                Youtube
            </Link>
            <br>
            </br>             
            <Link href="/facebook">
            Facebook
            </Link>
        </div>
    )
}
