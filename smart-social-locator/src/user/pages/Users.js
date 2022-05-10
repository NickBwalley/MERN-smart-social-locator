import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Nick Bwalley",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fprogramming-skills-concept-banner-workflow-group-programmers-coding-process-d-vector-isometric-illustration-image156829857&psig=AOvVaw0ojW19tdV3Caoi8_c43M_P&ust=1652308044846000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNiS26r91fcCFQAAAAAdAAAAABAD",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
