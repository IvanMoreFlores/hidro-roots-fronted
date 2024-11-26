// components/Buttons/ButtonContainer.jsx
import styles from './ButtonContainer.module.css'
import Image from 'next/image'

// Componente Button1
const Button1 = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.button} ${styles.green}`}>
        <div className={styles.imageContainer}>
          <Image 
            src="/img/botton/botton-one.png" // Ruta ajustada
            alt="Insumos"
            width={40}
            height={40}
            layout="responsive"
          />
        </div>
        <span className={styles.buttonText01}>Insumos</span>
      </button>
    </div>
  )
}

// Componente Button2
const Button2 = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.button} ${styles.lightGreen}`}>
        <div className={styles.imageContainer}>
          <Image 
            src="/img/botton/botton-two.png" // Ruta ajustada
            alt="Sistema de costeo"
            width={40}
            height={40}
            layout="responsive"
          />
        </div>
        <span className={styles.buttonText}>Sistema de costeo</span>
      </button>
    </div>
  )
}

// Componente Button3
const Button3 = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.button} ${styles.lightGreen}`}>
        <div className={styles.imageContainer}>
          <Image 
            src="/img/botton/botton-three.png" // Ruta ajustada
            alt="Planillas"
            width={40}
            height={40}
            layout="responsive"
          />
        </div>
        <span className={styles.buttonText}>Planillas</span>
      </button>
    </div>
  )
}

// Componente Button4
const Button4 = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.button} ${styles.lightGreen}`}>
        <div className={styles.imageContainer}>
          <Image 
            src="/img/botton/botton-four.png" // Ruta ajustada
            alt="Cursos y talleres"
            width={40}
            height={40}
            layout="responsive"
          />
        </div>
        <span className={styles.buttonText}>Cursos y talleres</span>
      </button>
    </div>
  )
}

// Contenedor principal que agrupa todos los botones
const ButtonContainer = () => {
  return (
    <div className={styles.grid}>
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  )
}

export default ButtonContainer
