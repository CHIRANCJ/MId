import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #003366;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #ffb400;
  margin: 0;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  color: #ffb400;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ffffff;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const LogoutButton = styled.button`
  margin-left: 1rem;
  background-color: #ffb400;
  color: #003366;
  border: none;
  padding: 0.4rem 0.8rem; /* Reduced size */
  font-size: 0.9rem; /* Adjusted font size */
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #ffd966;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  margin: 0 1rem;
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background-color: #003366;
  color: #ffb400; /* Matches the header text color */
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    top: -0.5rem;
    right: 1rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent transparent #003366 transparent;
  }
`;

export const ProfileItem = styled.div`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #ffb400; /* Matches dropdown text */
`;
