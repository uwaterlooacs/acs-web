import React from 'react';
import Page from 'pages/page';
import AddEventsForm from 'components/forms/AddEventsForm';
import EventsList from 'components/EventsList';

const Events = () => {
  return (
    <Page>
      <EventsList></EventsList>
      <AddEventsForm></AddEventsForm>
    </Page>
  );
};

export default Events;
