import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
  <div className=''>
    <Image src="/uberbanner.jpeg" alt="image" width={900}  height={1000} className='w-full h-full object-contain' />
    <div className='absolute top-20 right-20 '>


        <SignIn />
    </div>
  </div>
  )
}