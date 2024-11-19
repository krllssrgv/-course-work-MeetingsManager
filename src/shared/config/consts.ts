export const API_URL = 'http://127.0.0.1:5000/api/';
// export const API_URL = 'https://krllssrgv-cm-server-08a8.twc1.net/api/';

export const APP_ROUTES = {
    login: '/auth/login',
    register: '/auth/register',

    main: '/main',

    organizations: '/organizations',
    found: '/organizations/found',

    organization: (id?: number) =>
        id !== undefined ? `/organization/${id}` : '/organization',
    create: (id: number) => `/organization/${id}/create`,
    members: (id: number) => `/organization/${id}/members`,

    profile: '/profile',
    invitations: '/profile/invitations',
};
