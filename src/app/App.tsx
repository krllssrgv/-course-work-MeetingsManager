import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store';
import * as Pages from '@pages';
import './App.scss';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth" element={<Pages.AuthLayout />}>
                        <Route
                            index
                            element={<Navigate to="login" replace />}
                        />
                        <Route path="login" element={<Pages.LoginPage />} />
                        <Route
                            path="register"
                            element={<Pages.RegisterPage />}
                        />
                    </Route>
                    <Route path="/user" element={<Pages.UserLayout />}>
                        <Route index element={<Pages.MainUserPage />} />
                        <Route
                            path="organizations"
                            element={<Pages.OrganizationsPage />}
                        />
                        <Route path="events" element={<Pages.EventsPage />} />
                        <Route
                            path="events/:id"
                            element={<Pages.EventPage />}
                        />
                        <Route path="profile" element={<Pages.ProfilePage />} />
                    </Route>
                    <Route path="/own" element={<Pages.OwnLayout />}>
                        <Route index element={<Pages.MainOwnPage />} />
                        <Route
                            path="infrastructure"
                            element={<Pages.InfrastructurePage />}
                        />
                        <Route path="members" element={<Pages.MembersPage />} />
                    </Route>
                    <Route
                        path="*"
                        element={<Navigate to="/auth/login" replace />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
