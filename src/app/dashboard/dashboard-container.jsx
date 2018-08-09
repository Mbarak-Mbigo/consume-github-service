import { connect } from "react-redux";

import Dashboard from "./dashboard";
import { fetchRepos } from "./actions";

const mapStateToProps = state => ({
  repos: state.repos
});

const mapDispatchToProps = dispatch => ({
  handleFetchRepos() {
    dispatch(fetchRepos("Mbarak-Mbigo"));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
