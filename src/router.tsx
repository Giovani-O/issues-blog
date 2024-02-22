import { Home } from './pages/home'
import { Issue } from './pages/issue'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/issue" element={<Issue />}></Route>
      </Route>
    </Routes>
  )
}
