import Image from 'next/image'
import profilePic from '@/public/images/blue.jpg' 
export default function Page() {
  return (
    <Image
      src={profilePic} 
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}


// import Image from 'next/image'
 
// export default function Page() {
// return (
//     <Image
//         src="https://via.placeholder.com/500"
//         alt="Placeholder image"
//         width={500}
//         height={500}
//     />
// )
// }