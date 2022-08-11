import { connect } from "frontity"
import EntryPoint from './EntryPoint.js';

const Root = ({ state }) => {
  return (
      <>
          <EntryPoint/>
      </>
  )
}

const FrontityApp = {
  name: "FrontityApp",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {},
  },
}

export default FrontityApp