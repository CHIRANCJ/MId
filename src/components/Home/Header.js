import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaEdit, FaListAlt, FaInfoCircle, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import {
  HeaderWrapper,
  Title,
  NavContainer,
  NavLink,
  LogoutButton,
  ProfileContainer,
  ProfileDropdown,
  ProfileItem,
} from './Header.styles';

function Header() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null); // Reference for the profile dropdown container

  const handleLogout = () => {
    console.log('Logged out');
  };

  const toggleProfileDropdown = () => {
    setShowProfile((prev) => !prev);
  };

  // Detect clicks outside the profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <HeaderWrapper>
      {/* Navigate to home when the title is clicked */}
      <Title onClick={() => navigate('/')}>Reporting Portal</Title>
      <NavContainer>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
        <NavLink to="/raise-complaint">
          <FaEdit />
          Raise a Complaint
        </NavLink>
        <NavLink to="/case-status">
          <FaListAlt />
          Case Status
        </NavLink>
        <NavLink to="/about">
          <FaInfoCircle />
          About
        </NavLink>

        {/* Profile button */}
        <ProfileContainer ref={profileRef}>
          <div
            onClick={toggleProfileDropdown}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#ffb400' }}
          >
            <FaUserCircle style={{ marginRight: '0.5rem' }} />
            Profile
          </div>
          <ProfileDropdown show={showProfile}>
            <ProfileItem>Name: John Doe</ProfileItem>
            <ProfileItem>DOB: 1990-01-01</ProfileItem>
            <ProfileItem>Email: john.doe@example.com</ProfileItem>
          </ProfileDropdown>
        </ProfileContainer>

        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt />
          Logout
        </LogoutButton>
      </NavContainer>
    </HeaderWrapper>
  );
}

export default Header;
