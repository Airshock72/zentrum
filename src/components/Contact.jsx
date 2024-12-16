import Button from './Button.jsx'
import React from 'react'

const ImageClipBox = ({ src, clipClass, alt }) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
)

const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
      <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
        <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
          <ImageClipBox
            clipClass='contact-clip-path-1'
            src='img/contact-1.webp'
            alt='contact-clip-1'
          />
          <ImageClipBox
            clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60'
            src='img/contact-2.webp'
            alt='contact-clip-2'
          />
        </div>
        <div className='absolute -top-40  left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
          <ImageClipBox
            clipClass='absolute md:scale-125'
            src='img/swordman-partial.webp'
            alt='contact-clip-3'
          />
          <ImageClipBox
            clipClass='sword-man-clip-path md:scale-125'
            src='img/swordman.webp'
            alt='contact-clip-4'
          />
        </div>
        <div className='flex flex-col items-center text-center'>
          <p className='font-general text-[10px] uppercase'>Join Zentrum</p>
          <p className='special-font mt-10 w-full font-zentrum text-5xl leading-[0.9] md:text-[6rem]'>
            Let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether
          </p>
          <Button
            title='contact us'
            containerClass='mt-10 cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}
export default Contact
