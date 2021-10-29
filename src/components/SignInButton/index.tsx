import { FaGithub } from 'react-icons/fa';
import {FiX} from 'react-icons/fi'

import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button className={styles.signInButtonStyle} type="button">
            <FaGithub color="#04d361" />
            Eduardo E A Pereira
            <FiX className={styles.closseIcon} />
        </button>
    ) : (
        <button className={styles.signInButtonStyle} type="button">
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    );
}