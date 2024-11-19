import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@shared';
import styles from './OrganizationLink.module.scss';

type Props = {
    id: number;
    name: string;
};

export const OrganizationLink = ({ id, name }: Props) => {
    return (
        <Link to={APP_ROUTES.organization(id)} className={styles.organization}>
            {name}
        </Link>
    );
};
