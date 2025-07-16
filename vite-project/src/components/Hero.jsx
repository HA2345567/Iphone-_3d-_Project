
import { useGSAP } from '@gsap/react'
import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { heroVideo, smallHeroVideo, fallbackVideo } from '../utils'
export const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const [videoError, setVideoError] = useState(false);

    const handlerVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handlerVideoSrcSet);

        return () => {
            window.removeEventListener('resize', handlerVideoSrcSet)
        }
    }, [])




    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.5 })
        gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })

    }, [])
    return <div>
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id='hero' className="hero-title">iPhone 15 Pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video className=" pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} onError={() => setVideoError(true)}>
                        <source src={videoError ? fallbackVideo : videoSrc} type="video/mp4" />
                    </video>
                    {videoError && <div style={{color:'red',textAlign:'center'}}>Video failed to load. Showing fallback.</div>}
                </div>

            </div>

            <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href="#highlights" className="btn">Buy</a>
                <p className='font-normal text-xl'>From $199/month or $999</p>
            </div>

        </section>
    </div>
}