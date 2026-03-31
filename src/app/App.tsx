import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lazy, useMemo } from 'react';
import { useAuthStore } from '../core/store/auth.store';
import { useThemeStore } from '../core/store/theme.store';
import { getTheme } from '../core/theme/getTheme';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthorized = useAuthStore((state) => state.isAuthorized);
  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }
  return children;
};

const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthorized = useAuthStore((state) => state.isAuthorized);
  if (isAuthorized) {
    return <Navigate to="/library" replace />;
  }
  return children;
};

const Login = lazy(() => import('../pages/Login/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Library = lazy(() => import('../pages/Library/Library'));
const Practice = lazy(() => import('../pages/Practice/Practice'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

function App() {
  const mode = useThemeStore((state) => state.mode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <PublicOnlyRoute>
                <Login />
              </PublicOnlyRoute>
            }
          />

          <Route
            index
            element={
              <ProtectedRoute>
                <Navigate replace to="/library" />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="library"
            element={
              <ProtectedRoute>
                <Library />
              </ProtectedRoute>
            }
          />
          <Route
            path="practice/:id"
            element={
              <ProtectedRoute>
                <Practice />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
