import React, { Component, ReactChild, ReactChildren } from "react";
import classes from "./Layout.module.css";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import Menu from "../../components/Navigation/Menu/Menu";

interface StateProps {
  isAuthenticated: boolean;
  userName: string;
}

interface OwnProps {
  children: ReactChild | ReactChildren;
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    isAuthenticated: !!state.auth.token,
    userName: state.auth.userName,
  };
}

class Layout extends Component<StateProps & OwnProps> {
  render() {
    return (
      <div className={classes.Layout}>
        <Menu
          isAuthenticated={this.props.isAuthenticated}
          userName={this.props.userName}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);
