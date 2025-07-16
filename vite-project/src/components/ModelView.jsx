import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import React from "react";

import * as THREE from 'three'
import {Lights} from './Lights';
import {Loader} from './Loader';
import {IPhone} from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Html/>
      <Lights />
      <OrbitControls 
        makeDefault
        ref={controlRef}
        target={new THREE.Vector3(0, 0 ,0)}
      />
      <group ref={groupRef} name={index === 1 ? 'small' : 'large'} >
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

export { ModelView };

