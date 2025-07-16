import { footerLinks } from '../constants'
export const Footer=() =>{
    return <div>
        <footer className="py-5 sm:px-10 px-5 ">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray text-xs ">
                        more ways to shop: {""}
                        <span className="underline text-blue">
                            Find an Apple Store{""}
                           or{""} <span className="underline text-blue ">other retailer</span>
                        </span>{""}
                          near you.
                    </p>
                    <p>
                        or call 000000-030-0369
                    </p>
                </div>
                <div className="bg-neutral-700 my-5 h-[1x] w-full"/>
                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <div className="font-semibold text-gray text-xs">
                        Copyright @ 2024 Apple Inc. All rights reserved
                        <div className="flex ">
                            {footerLinks.map((link,i)=>(
                                <span key={link} className='font-semibold text-gray text-xs' >
                                    {link}{''}
                                    {i !== footerLinks.length -1 && (
                                        <span className='mx-2'>|</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
}