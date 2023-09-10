import Button from '@mui/material/Button';
import styles from './DarkButton.module.css'
export default function DarkButton({ variant, className, name }) {
    return (
        <>
        <a variant={variant} className={`${className} ${styles.darkButton}`} href="#" id="style-2" data-replace={name}><span>{name}</span></a>
        </>
    )
}