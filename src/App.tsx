import { Routes, Route, Navigate } from "react-router-dom"
import { LinkedInProvider } from "./contexts/linkedin-context"
import { Layout } from "./components/layout/Layout"
import { FeedPage } from "./pages/FeedPage"
import { MyNetworkPage } from "./pages/MyNetworkPage"
import { JobsPage } from "./pages/JobsPage"
import { MessagingPage } from "./pages/MessagingPage"
import { NotificationsPage } from "./pages/NotificationsPage"
import { ProfilePage } from "./pages/ProfilePage"
import { EditProfilePage } from "./pages/EditProfilePage"

function App() {
  return (
    <LinkedInProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route
          path="/feed"
          element={
            <Layout>
              <FeedPage />
            </Layout>
          }
        />
        <Route
          path="/mynetwork"
          element={
            <Layout>
              <MyNetworkPage />
            </Layout>
          }
        />
        <Route
          path="/jobs"
          element={
            <Layout>
              <JobsPage />
            </Layout>
          }
        />
        <Route
          path="/messaging"
          element={
            <Layout>
              <MessagingPage />
            </Layout>
          }
        />
        <Route
          path="/notifications"
          element={
            <Layout>
              <NotificationsPage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <ProfilePage />
            </Layout>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <Layout>
              <EditProfilePage />
            </Layout>
          }
        />
      </Routes>
    </LinkedInProvider>
  )
}

export default App
