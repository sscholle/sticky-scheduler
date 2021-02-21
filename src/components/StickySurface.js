import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Sticky from './Sticky';

const getNewSticky = (posX, posY) => ({
  position: { x: posX, y: posY },
  color: null,
  priority: 'normal',
  complete: false,
  assignee: null,
  taskText: '',
});

/**
 * StickySurface
 * Requirements List:
 * this will listen for click events on the main background surface
 * each click generates a sticky data entry in state
 * each sticky can be edited live (or when user focus is captured)
 * also display a list of Team Member
 * add action button to add a new team member via modal/dialog
 */
class StickySurface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickies: [],
    };
  }

  // TODO: currently intercepts all events from children
  surfaceClickHandler(event) {
    const { clientX, clientY } = event;
    const newSticky = getNewSticky(clientX, clientY);
    console.log(newSticky);
    this.setState((prevState) => ({
      stickies: [...prevState.stickies, newSticky],
    }));
  }

  updateSticky(stickyChanges) {
    const { stickies } = this.state;
    const stickiesClone = [...stickies];
    stickiesClone.splice(stickyChanges.id, 1, stickyChanges);
    this.setState({ stickies: stickiesClone });
  }

  render() {
    const { stickies } = this.state;
    const renderedStickies = stickies.map((sticky, key) => (
      <Sticky
        // eslint-disable-next-line react/no-array-index-key
        key={key}
        id={key}
        data={sticky}
        onUpdate={(stickyData) => this.updateSticky(stickyData)}
      />
    ));
    return (
      <Box>
        <div
          id="sticky-surface"
          onClick={(e) => this.surfaceClickHandler(e)}
          onKeyPress={() => null}
          role="button"
          tabIndex="0"
        >
          {renderedStickies}
        </div>
      </Box>
    );
  }
}

export default StickySurface;
