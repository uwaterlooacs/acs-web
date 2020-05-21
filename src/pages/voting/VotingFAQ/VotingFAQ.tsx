import React from 'react';
import Box from 'components/Box';

const SubmissionHome = () => {
  return (
    <Box mt={4}>
      <Box p={3} m="0 auto" maxWidth={600}>
        <Box fontSize="XL">FAQ</Box>
        <Box mt="L" fontSize="L">
          When is this elections for?
        </Box>
        <p>
          Elections are for the year. If elected, you will hold your position
          for Spring, Fall and Winter term.
        </p>
        <Box mt="L" fontSize="L">
          What if I have co-op or won&apos;t be here for one of the terms?
        </Box>
        <p>
          Whatever terms you wouldn&apos;t be here for, an election will be held
          that term to temporarily fill the position. This holds for all
          positions.
        </p>
        <Box mt="L" fontSize="L">
          How many positions can I go up for?
        </Box>
        <p>As many as you would like, there&apos;s no limit.</p>
        <Box mt="L" fontSize="L">
          How long does my video submission need to be?
        </Box>
        <p>
          Around 1-2 minutes. Videos can be up to 2 minutes long (they can
          actually be longer but it isn&apos;t recommended). If you have
          difficulty uploading your video please contact us.
        </p>
        <Box mt="L" fontSize="L">
          How do I know if I can go up for elections?
        </Box>
        <p>
          Anyone who has active interest in the club and is a student of the
          University of Waterloo can go up.
        </p>
        <Box mt="L" fontSize="L">
          What would exec be doing this term?
        </Box>
        <p>
          Exec would be responsible for planning creative online
          events/activities to keep our ACS family connected.
        </p>
        <Box mt="L" fontSize="L">
          Will there be executive meetings?
        </Box>
        <p>Meetings will be online via Zoom.</p>
        <Box mt="L" fontSize="L">
          How often will meetings be?
        </Box>
        <p>
          Meetings will be weekly, it may be less frequent depending on what
          planning has to be done.
        </p>
        <Box mt="L" fontSize="L">
          When will meetings be?
        </Box>
        <p>
          Meeting time will be determined based on the availability of the exec
          team elected.
        </p>
      </Box>
    </Box>
  );
};

export default SubmissionHome;
