import React, { useState } from 'react';
import { Term, TermData } from 'modules/terms';
import { Role } from 'modules/roles';
import { useCollectionData } from 'modules/data';
import { EVENTS } from 'utils/collectionNames';

const AddTermForm = () => {
  const { addDoc } = useCollectionData<Term, TermData>(EVENTS);
  const [season, setSeason] = useState('');
  const [year, setYear] = useState(new Date().getFullYear());
  const roles: Role[] = [];

  const createTerm = () => {
    addDoc({
      season,
      year,
      roles,
      isNominationsOpen: false,
      isVotingOpen: false,
    });
  };

  return (
    <div style={{ margin: 16 }}>
      <h1>Add term</h1>
      <div>
        <h3>Season</h3>
        <input value={season} onChange={e => setSeason(e.target.value)}></input>
        <h3>Description</h3>
        <input
          value={year}
          type="number"
          onChange={e => setYear(parseInt(e.target.value))}
        ></input>
      </div>
      <div style={{ marginTop: 16 }}>
        <button onClick={createTerm}>Create Term</button>
      </div>
    </div>
  );
};

export default AddTermForm;
