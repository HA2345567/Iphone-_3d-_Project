import { Environment, Lightformer } from "@react-three/drei";

export const Lights = () => {
    return (
        <group name="lights">
            <spotLight
                position={[-2, 10, 5]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI * 0.2}
                color={"#f8f9fa"}
            />
            <spotLight
                position={[0, -25, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI * 0.2}
                color={"#f8f9fa"}
            />
            <spotLight
                position={[0, 15, 5]}
                angle={0.15}
                penumbra={1}
                decay={0.1}
                intensity={Math.PI * 3}
            />
        </group>
    );
};

