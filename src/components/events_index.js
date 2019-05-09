import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableHeaderColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableHeaderColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }


  render() {
    const style = {
        position: "fixed",
        right: 12,
        bottom: 12
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
            <ContentAdd />
        </FloatingActionButton>
       <Table>
         <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
        >
          <TableRow>
              <TableHeaderColumn>項番</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
          </TableRow>
         </TableHeader>
         <TableBody displayRowCheckbox={true}>
            {this.renderEvents()}
         </TableBody>
       </Table>
      </React.Fragment>
     )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

//connect は Component を再定義している。mapDispatchToProps で propsと繋げて再定義している。
//connect は subscribe コマンドの役割を果たしている。何故か。connectがあれば、action等、propsに変化があれば
//  Componentが再定義されて、再レンダリングされる。
