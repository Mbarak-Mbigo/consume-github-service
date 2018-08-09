import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  background-color: #e3e7ea;
  display: flex;
  flex-direction: column
  align-items: center;
  padding: 2rem;
  width: 80vw;
`;

const Button = styled.button`
  outline: none;
  background-color: #42a7f3;
  height: 2rem;
  border: none;
  border-radius: 3px;
  margin: 0.5rem;
  transition: all 0.2s ease-in-out;

  &: hover {
    background-color: #4e42f3;
    color: #f5f7f9;
  }
`;

const Dashboard = ({ handleFetchRepos }) => (
  <DashboardContainer>
    Dashboard Component <Button onClick={handleFetchRepos}>Fetch Repos</Button>
  </DashboardContainer>
);

export default Dashboard;
