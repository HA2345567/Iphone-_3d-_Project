import { Html, useProgress } from "@react-three/drei"

export const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center>
            <div style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>
                Loading... {progress.toFixed(0)}%
            </div>
        </Html>
    );
}