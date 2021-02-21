import React, { useContext } from 'react';
import {
  // eslint-disable-next-line
  Box, Card, FormControl, Input, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import SurfaceContext from './SurfaceContext';

/**
 * Sticky
 * properties that affect style: position[x,y], Assignee.color
 * properties that affect classes:  priority, complete
 * other props: Assignee.name, taskText
 */
const Sticky = (props) => {
  const surfaceContext = useContext(SurfaceContext);
  const { people } = surfaceContext;
  const { data, onUpdate } = props;
  const {
    // eslint-disable-next-line
    position, priority, complete, assignee, taskText,
  } = data;

  const changeProp = (propName, value) => {
    const newData = { ...data };
    newData[propName] = value;
    onUpdate(data);
  };

  const peopleOptions = people.map((person, key) => (
    <MenuItem value={key}>
      {person.name}
    </MenuItem>
  ));

  // TODO: need to target best way to set the x/y position of the element (style)
  // TODO: need pre-select default values, like priority and complete
  const cardColor = assignee ? people[assignee].color : 'white';
  return (
    <Card className="sticky" style={{ top: position.y, left: position.x, backgroundColor: cardColor }}>
      <FormControl>
        <InputLabel htmlFor="person">Person</InputLabel>
        <Select value={assignee} onChange={(e) => changeProp('assignee', e.target.value)}>
          {peopleOptions}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="priority">priority</InputLabel>
        <Select value={priority} onChange={(e) => changeProp('priority', e.target.value)}>
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="complete">Complete</InputLabel>
        <Input type="checkbox" name="complete" checked={complete} onChange={(e) => changeProp('complete', e.target.checked)} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="complete">Task Text</InputLabel>
        <Input type="text" name="task-text" onChange={(e) => changeProp('taskText', e.target.value)} />
      </FormControl>
      {taskText}
    </Card>
  );
};

Sticky.defaultProps = {
  position: {
    x: 100,
    y: 100,
  },
  priority: 'normal',
  complete: false,
  assignee: null,
  taskText: '',
};

Sticky.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Sticky;
