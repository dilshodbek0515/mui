import { FC } from 'react'
import img from '../../assets/images/logo.jpg'

const Hero: FC = () => {
  return (
    <>
      <main className='w-full h-auto my-10'>
        <div className='container mx-auto flex gap-5 overflow-auto hero rounded-2xl'>
          <img
            className='min-w-full h-[700px] rounded-2xl'
            src={img}
            alt='img'
          />
          <img
            className='min-w-full h-[700px] rounded-2xl'
            src={img}
            alt='img'
          />
          <img
            className='min-w-full h-[700px] rounded-2xl'
            src={img}
            alt='img'
          />
          <img
            className='min-w-full h-[700px] rounded-2xl'
            src={img}
            alt='img'
          />
          <img
            className='min-w-full h-[700px] rounded-2xl'
            src={img}
            alt='img'
          />
        </div>
      </main>
    </>
  )
}

export default Hero
