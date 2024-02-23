import { ChangeEvent, useEffect, useState } from 'react'
import { Profile } from '../../components/profile'
import { HomeMain, IssueCard, IssuesGrid, SearchForm } from './styles'
import { Api } from '../../axios'
import { GithubIssue, Item } from '../../@types/github.issue'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Home() {
  const [issues, setIssues] = useState({
    items: [] as Item[],
  } as GithubIssue)

  async function getIssues(query: string = '', username: string, repo: string) {
    await Api.get(`/search/issues?q=${query}%20repo:${username}/${repo}`)
      .then((response) => {
        setIssues(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getIssues('', 'Giovani-O', 'issues-blog')
  }, [])

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
          <span>{issues.total_count} publicações</span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearch}
        />
      </SearchForm>

      <IssuesGrid>
        {issues?.items.map((issue) => (
          <IssueCard key={issue.id}>
            <div>
              <h1>{issue.title}</h1>
              <h5>
                {formatDistanceToNow(issue.updated_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </h5>
            </div>
            <span>{issue.body}</span>
          </IssueCard>
        ))}
      </IssuesGrid>
    </HomeMain>
  )
}
