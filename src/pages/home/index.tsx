import { Profile } from '../../components/profile'
import { Search } from '../../components/search'
import { HomeMain } from './styles'

export function Home() {
  return (
    <HomeMain>
      <Profile />
      <Search />
    </HomeMain>
  )
}
