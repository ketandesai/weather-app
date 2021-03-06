import React, { lazy, Suspense } from 'react'
import styled from 'styled-components/macro'
import { DEVICES, WEIGHTS } from '../styles/constants'
const FavoritesDrawer = lazy(() => import('../favorites/FavoritesDrawer'))
const ThemeToggle = lazy(() => import('../toggle/ThemeToggle'))
const GitHubLogo = lazy(() => import('../logo/GitHubLogo'))

const renderLoader = () => <p>Loading Drawer...</p>

export default function Header() {
  return (
    <Wrapper>
      <Suspense fallback={renderLoader()}>
        <GitHubLogo />
      </Suspense>
      <NavWrapper>
        <Suspense fallback={renderLoader()}>
          <FavoritesDrawer />
        </Suspense>
        <TitleWrapper>React Weather</TitleWrapper>
        <Suspense fallback={renderLoader()}>
          <ThemeToggle />
        </Suspense>
      </NavWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: var(--text-align, left);
  padding-bottom: 32px;

  /* For tablets and larger devices */
  @media (min-width: ${DEVICES.tablet}) {
    justify-content: space-between;
  }
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 56px;
  margin-left: 12px;
  margin-right: 12px;
`

const TitleWrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`
