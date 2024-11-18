import { useOrganizations } from '@features';
import { OrganizationLink } from '@shared';
import styles from './OrganizationsList.module.scss';

export const OrganizationsList = () => {
    const { organizations } = useOrganizations();
    const organizationsList = Object.values(organizations).map(
        (organization) => (
            <OrganizationLink
                key={organization.id}
                id={organization.id}
                name={organization.name}
            />
        )
    );

    return <div className={styles.container}>{organizationsList}</div>;
};
