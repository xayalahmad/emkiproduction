import Button from '@mui/material/Button';
// import styles from './LightButton.module.css'
import styles from './LightButton.module.css'
export default function LightButton({ variant, className, name }) {
    return (
        <>
        <a className={styles.button} variant={variant} href="#" id="style-2" data-replace={name}><span>{name}</span></a>
        </>
    )
}