import React from 'react';
import Page from 'pages/page';
import AddEventForm from 'components/forms/AddEventForm';
import EventsList from 'components/EventsList';

const Events = () => {
  return (
    <Page>
      <EventsList></EventsList>
      <AddEventForm></AddEventForm>
    </Page>
  );
};

export default Events;
