export const getOldState = (props, defaultState) =>
  (props &&
    props.location &&
    props.location.query &&
    props.location.query.state) ||
  defaultState;
