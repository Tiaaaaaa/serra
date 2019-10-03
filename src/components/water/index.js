import React, { Component } from "react";
import { render } from "react-dom";
import { Window, WindowTitle, Button, Body, Image } from "../../common/style";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ADD_WATER } from "./actions";
import { mapStateToProps } from "../../redux/state_to_props";

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ADD_WATER
    },
    dispatch
  )
});

export const Water = props => {
  return (
    <Window>
      <WindowTitle>Acqua</WindowTitle>
      <Body>
        <Image>💧</Image>
        <div>10%</div>
      </Body>
      <Button onClick={props.ADD_WATER}>+</Button>
    </Window>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Water);
