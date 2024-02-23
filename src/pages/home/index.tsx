import { ChangeEvent, useEffect, useState } from 'react'
import { Profile } from '../../components/profile'
import { HomeMain, IssueCard, IssuesGrid, SearchForm } from './styles'
import { Api } from '../../axios'
import { GithubIssue, Item } from '../../@types/github.issue'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import useDebounce from '../../hooks/use-debouncer'

export function Home() {
  const [issues, setIssues] = useState({
    items: [] as Item[],
  } as GithubIssue)
  const [searchQuery, setSearchQuery] = useState('')

  const debouncedSearchQuery = useDebounce(searchQuery, 1000)

  useEffect(() => {
    async function getIssues(
      query: string = '',
      username: string,
      repo: string,
    ) {
      await Api.get(`/search/issues?q=${query}%20repo:${username}/${repo}`)
        .then((response) => {
          setIssues(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    getIssues(debouncedSearchQuery, 'Giovani-O', 'issues-blog')
    console.log('here')
  }, [debouncedSearchQuery])

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setSearchQuery(event.target.value)
  }

  function handleOpenIssue(issueId: number) {
    console.log(issueId)
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
          <IssueCard key={issue.id} onClick={() => handleOpenIssue(issue.id)}>
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
