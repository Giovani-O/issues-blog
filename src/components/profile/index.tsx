import { ArrowUpRightFromSquare, Building, Github, Users } from 'lucide-react'
import {
  ProfileBio,
  ProfileContainer,
  ProfileInfo,
  ProfileTitle,
  ProfileWrapper,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { Api } from '../../axios'
import { useEffect, useState } from 'react'
import { GithubUser } from '../../@types/github-user'

export function Profile() {
  const [user, setUser] = useState({} as GithubUser)

  function getUserProfile(username: string) {
    Api.get(`/users/${username}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getUserProfile('Giovani-O')
  }, [])

  return (
    <ProfileWrapper>
      <ProfileContainer>
        <img src={user.avatar_url} alt="" />

        <article>
          <ProfileTitle>
            <h1>{user.name}</h1>

            <a href={user.html_url} target="_blank">
              GITHUB <ArrowUpRightFromSquare size={18} />
            </a>
          </ProfileTitle>

          <ProfileBio>{user.bio ? user.bio : 'N/A'}</ProfileBio>

          <ProfileInfo>
            <span>
              <Github size={18} color={defaultTheme['base-label']} />{' '}
              {user.login}
            </span>
            <span>
              <Building size={18} color={defaultTheme['base-label']} />
              {user.company ? user.company : 'N/A'}
            </span>
            <span>
              <Users size={18} color={defaultTheme['base-label']} />
              {user.followers} seguidores
            </span>
          </ProfileInfo>
        </article>
      </ProfileContainer>
    </ProfileWrapper>
  )
}
