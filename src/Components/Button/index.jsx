import styles from './button.module.css'

export default function Button({ text }) {
  // const redirect = () => {
  //   console.log('Redirect Home');
  // }

  return (
    <div className={styles.button}>

      <div className={styles.textButton}>
        {text}
      </div>

    </div>
  )
}
