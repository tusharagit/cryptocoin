import { connect } from "frontity"
import EntryPoint from './EntryPoint.js';

const Root = ({ state }) => {
    return (
        <div>
            <EntryPoint/>
        </div>
    )
}

export default connect(Root)