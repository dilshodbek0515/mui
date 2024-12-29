import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import img from '../../assets/images/logo.jpg'

const Hero = () => {
  return (
    <>
      <main className='w-full h-auto my-10'>
        <div className='container mx-auto'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className='w-full h-[700px] rounded-xl max-2xl:h-auto'
          >
            <SwiperSlide className='w-full h-full'>
              <img className='w-full h-auto object-cover' src={img} alt='' />
            </SwiperSlide>
            <SwiperSlide className='w-full h-full'>
              <img className='w-full h-auto object-cover' src={img} alt='' />
            </SwiperSlide>
            <SwiperSlide className='w-full h-full'>
              <img className='w-full h-auto object-cover' src={img} alt='' />
            </SwiperSlide>
            <SwiperSlide className='w-full h-full'>
              <img className='w-full h-auto object-cover' src={img} alt='' />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  )
}

export default Hero
