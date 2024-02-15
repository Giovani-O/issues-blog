import { ArrowUpRightFromSquare, Building, Github, Users } from 'lucide-react'
import {
  ProfileBio,
  ProfileContainer,
  ProfileInfo,
  ProfileTitle,
  ProfileWrapper,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'

export function Profile() {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <img src="https://source.unsplash.com/random" alt="" />

        <article>
          <ProfileTitle>
            <h1>Giovani de Oliveira</h1>

            <a href="#">
              GITHUB <ArrowUpRightFromSquare size={18} />
            </a>
          </ProfileTitle>

          <ProfileBio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis modi
            est eos veniam! Placeat fugit, alias id ad, optio repellendus
            accusamus!
          </ProfileBio>

          <ProfileInfo>
            <span>
              <Github size={18} color={defaultTheme['base-label']} /> Giovani-O
            </span>
            <span>
              <Building size={18} color={defaultTheme['base-label']} />
              N/A
            </span>
            <span>
              <Users size={18} color={defaultTheme['base-label']} />
              20 seguidores
            </span>
          </ProfileInfo>
        </article>
      </ProfileContainer>
    </ProfileWrapper>
  )
}
