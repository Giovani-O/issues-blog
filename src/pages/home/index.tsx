import { ChangeEvent } from 'react'
import { Profile } from '../../components/profile'
import { HomeMain, IssueCard, IssuesGrid, SearchForm } from './styles'

export function Home() {
  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    console.log(event.target.value)
  }

  return (
    <HomeMain>
      <Profile />

      <SearchForm>
        <div>
          <h5>Publicações</h5>
          <span>6 publicações</span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearch}
        />
      </SearchForm>

      <IssuesGrid>
        {Array.from([1, 2, 3, 4, 5, 6]).map((_value, index) => (
          <IssueCard key={index}>
            <div>
              <h1>Titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
              <h5>3 days ago</h5>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </span>
          </IssueCard>
        ))}
      </IssuesGrid>
    </HomeMain>
  )
}
