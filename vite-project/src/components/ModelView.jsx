import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import {Lights} from './Lights';
import {Loader} from './Loader';
import {IPhone} from './IPhone';
import { Suspense } from "react";

 // eslint-disable-next-line react/prop-types
 export const ModelView = ({ index, groupRef, gsapType, controlRef,  size, item }) => {

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight  />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
     <Html/>
      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
       
        
      /> 

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} >
        <Suspense fallback={<Loader />}>
          <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}

