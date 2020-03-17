import React from 'react';
import Box from 'components/Box';
import { Link } from 'react-router-dom';

const Page: React.FC = ({ children }) => {
  return (
    <Box>
      <Box>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/vote">Vote</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Page;
