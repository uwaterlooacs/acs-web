import React from 'react';
import Page from 'pages/page';
import Box from 'components/Box';
import AddEventForm from 'components/forms/AddEventForm';
import EventsList from 'components/lists/EventsList';

const Events = () => {
  return (
    <Page>
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <AddEventForm></AddEventForm>
        <EventsList></EventsList>
      </Box>
    </Page>
  );
};

export default Events;
