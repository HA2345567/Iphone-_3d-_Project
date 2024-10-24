import { Html } from "@react-three/drei"

export const Loader=()=>{
    return <div>
        <Html>
            <div className="absolute top-0 left-0 w-full flex justify-center items-center  ">
                <div className="w-[10vw] rounded-full">
                    Loading...

                </div>

            </div>
        </Html>
    </div>
}