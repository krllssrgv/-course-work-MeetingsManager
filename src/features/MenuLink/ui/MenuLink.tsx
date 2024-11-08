import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './MenuLink.module.scss';


type Props = {
    to: string;
    text: string;
    active: boolean;
};


export const MenuLink = ({ to, text, active }: Props) => {
    return <Link to={to} className={classNames(styles.link, (active ? styles.link_active : null))}>{text}</Link>
}