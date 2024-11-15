import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './HeaderLink.module.scss';

type Props = {
    to: string;
    text: string;
    active: boolean;
};

export const HeaderLink = ({ to, text, active }: Props) => {
    return (
        <Link
            to={to}
            className={cn(
                styles.link,
                active ? styles.link_active : null
            )}
        >
            {text}
        </Link>
    );
};
