import Button from '@mui/material/Button';
import styles from './BasicButton.module.css'
import { Box } from '@mui/material';
export default function BasicButton({ variant, className, name, mode }) {
    return (
        <>
            {mode ?
                <Box variant={variant} className={`${styles.darkButton}`} href="#" id="style-2" data-replace={name}><span>{name}</span></Box>
                :
                <Box variant={variant} className={`${styles.lightButton}`} href="#" id="style-2" data-replace={name}><span>{name}</span></Box>
            }
        </>
    )
}