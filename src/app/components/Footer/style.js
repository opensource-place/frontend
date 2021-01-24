import styled from 'styled-components';

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
}

@media screen and (min-width: 768px) {
  width: 100vw;
}

@media screen and (min-width: 320px) {
  width: 100vw;
}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), rgba(178, 255, 241, 0.3);
`;

const Logo = styled.img`
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif !important;
  color: "#21403A";
  width: 1rem;
`;

const Link = styled.button`
  text-decoration: none;
  margin-left: 2%;
  font-size: 1.5rem;
  font-weight: 500;
  font-style: normal;
  color: rgb(75,125,116);
  padding: 1rem;
  &:hover {
    color: rgb(33, 64, 58);
  }
`;
const Menus = styled.div`
  display: flex;
`;

export { Container, Logo, Wrapper, Link, Menus }

