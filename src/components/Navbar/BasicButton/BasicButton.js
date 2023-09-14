import Button from '@mui/material/Button';
import styles from './BasicButton.module.css'
export default function BasicButton({ variant, className, name, mode }) {
    return (
        <>
            {mode ?
                <button variant={variant} className={`${styles.darkButton}`} href="#" id="style-2" data-replace={name}><span>{name}</span></button>
                :
                <button variant={variant} className={`${styles.lightButton}`} href="#" id="style-2" data-replace={name}><span>{name}</span></button>
            }
        </>
    )
}