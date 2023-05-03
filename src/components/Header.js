import React from 'react';
import { Container, Flex, useMediaQuery, Box } from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import EventIcon from './Icons/EventIcon';
import CalendarIcon from './Icons/CalendarIcon';

function Header() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Container
      p="20px"
      gap="30px"
      fontFamily="heading"
    >
      <Flex
        p="20px"
        gap="30px"
        align-items="center"
        justifyContent={isSmallerThan800 ? 'center' : 'flex-end'}
      >
        <Box>
          <NavLink
          style={({ isActive }) => ({
            display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: '#1890ff',
              fontSize: '15px',
              gap: '5px',
              borderBottom: isActive ? '1.5px solid #1890ff' : 'none',
          })}
            // onMouseOver={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            // onMouseOut={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            onClick={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            onFocus={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            activeStyle={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            to="/events"
          >
            <EventIcon />
            События
          </NavLink>
        </Box>
        <Box>
          <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                border: 'none',
                color: '#1890ff',
                fontSize: '15px',
                gap: '5px',
                borderBottom: isActive ? '1.5px solid #1890ff' : 'none',
            })}
            // onMouseOver={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            // onMouseOut={(e) => e.target.style.borderBottom= '1.5px solid #1890ff'}
            onClick={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            onFocus={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            activeStyle={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            to="/calendar"
          >
            <CalendarIcon />
            Календарь
          </NavLink>
        </Box>
      </Flex>
    </Container>
  );
}
export default Header;


