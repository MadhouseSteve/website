import { withRouter } from "react-router-dom";
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import moment from "moment";
import "../styles/table.scss";
import { RouteComponentProps } from "react-router";

const FETCH_WHITELISTS = gql`
  query {
    whitelists {
      id
      displayName
      status
      submitted
    }
  }
`;

const reviewList = (props: RouteComponentProps) => {
  const { data, loading, error } = useQuery(FETCH_WHITELISTS);
  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>Error loading applications</div>;
  }

  function goToApp(
    e: React.MouseEvent<HTMLTableRowElement | HTMLButtonElement>
  ) {
    e.stopPropagation();
    const appId = e.currentTarget.dataset.id;
    props.history.push(`/whitelist/review/${appId}`);
  }

  const whitelistBody = data.whitelists.map((whitelist: any) => {
    return (
      <tr
        key={whitelist.id}
        data-id={whitelist.id}
        className="clickable"
        onClick={goToApp}
      >
        <td>{whitelist.displayName}</td>
        <td className="capitalCase">{whitelist.status.toLowerCase()}</td>
        <td>{moment(whitelist.submitted).fromNow()}</td>
        <td className="show-large">
          <button data-id={whitelist.id} onClick={goToApp}>
            Open Application
          </button>
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Minecraft Name</th>
            <th>Application Status</th>
            <th>Submitted</th>
            <th className="show-large">&nbsp;</th>
          </tr>
        </thead>
        <tbody>{whitelistBody}</tbody>
      </table>
    </React.Fragment>
  );
};

export default withRouter(reviewList);
