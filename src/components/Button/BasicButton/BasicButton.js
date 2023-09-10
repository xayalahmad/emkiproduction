import Button from '@mui/material/Button';
import styles from './BasicButton.module.css'
export default function BasicButton({ variant, className, name }) {
    return (
        <>
        <butt variant={variant} className={`${className} ${styles.button}`} href="#" id="style-2" data-replace={name}><span>{name}</span></butt>
        </>
    )
}