import React from 'react';
import { Route, Link } from 'react-router-dom';
import Page from 'pages/page';
import AddTermForm from 'components/forms/AddTermForm';
import AddRoleForm from 'components/forms/AddRoleForm';

const Admin = () => {
  return (
    <Page>
      <nav>
        <ul>
          <li>
            <Link to="/admin/add-term">Add Term</Link>
          </li>
          <li>
            <Link to="/admin/add-role">Add Role</Link>
          </li>
        </ul>
      </nav>
      <Route path="/admin/add-term">
        <AddTermForm />
      </Route>
      <Route path="/admin/add-role">
        <AddRoleForm />
      </Route>
    </Page>
  );
};

export default Admin;
