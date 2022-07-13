import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto 0 auto;
  padding-top: 180px;
  min-height: 1080px;
  width: 100%;
  min-width: 375px;
  max-width: 1440px;
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  min-width: 325px;
`

export const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid gray;
  list-style: none;
`

export const LI = styled.li`
  &.Info{
    color: gray;
  }
`

export const Button = styled.button`
  align-self: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;
  color: ${props => props.theme.colorTextPri};
  font-weight: 600;
  background-color: ${props => props.theme.background};
  border-radius: 500px;
  cursor: pointer;
`

export const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const P = styled.p`
  font-weight: 600;
  cursor: pointer;
`

