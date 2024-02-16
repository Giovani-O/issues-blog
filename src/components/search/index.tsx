import { SearchForm } from './styles'

export function Search() {
  return (
    <SearchForm>
      <div>
        <h5>Publicações</h5>
        <span>6 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchForm>
  )
}
