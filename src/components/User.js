import React, { useEffect } from "react";
import { useStateValue } from "../state";
import { fetchUserDetails } from "../actions/User";

const User = () => {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    fetchUserDetails(dispatch);
  }, []);

  if (user.loading) {
    return <h3>Loding...</h3>;
  }

  if (user.details) {
    return (
      <div className="user-details">
        <h4> Name: {user.details.name}</h4>
        <h4> Github: {user.details.githubId}</h4>
        <h4> Twitter: {user.details.twitterId}</h4>
        <h4> Email: {user.details.email}</h4>
      </div>
    );
  }

  return <div> There are no user details found </div>;
};

export default User;
