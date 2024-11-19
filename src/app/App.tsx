import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
} from 'react-router-dom';
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
                    <Route path="/" element={<Pages.GeneralLayout />}>
                        <Route
                            index
                            element={<Navigate to="/auth/login" replace />}
                        />

                        <Route
                            path="organizations"
                            index
                            element={<Pages.OrganizationsPage />}
                        />

                        <Route
                            path="found"
                            element={<Pages.CreateOrganizationPage />}
                        />

                        <Route
                            path="organization/:id"
                            element={<Pages.OrganizationLayout />}
                        >
                            <Route index element={<Pages.MeetingsPage />} />
                            <Route
                                path="create"
                                element={<Pages.CreateMeetingPage />}
                            />
                            <Route
                                path="members"
                                element={<Pages.MembersPage />}
                            />
                        </Route>

                        <Route path="profile" element={<Outlet />}>
                            <Route index element={<Pages.ProfilePage />} />
                            <Route
                                path="invitations"
                                element={<Pages.InvitationsPage />}
                            />
                        </Route>
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
