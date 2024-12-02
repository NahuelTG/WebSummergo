export const InteractivePoint = ({ position }) => {
  return (
    <mesh
      position={position} // Posición del punto en la esfera
      onClick={() => console.log('¡Hola, sí funciona!')} // Acción al hacer clic
    >
      {/* Geometría del punto */}
      <sphereGeometry args={[2, 16, 16]} />
      {/* Material básico para diferenciarlo */}
      <meshBasicMaterial color="red" />
    </mesh>
  )
}
