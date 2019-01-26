import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import GameStateContext from '../GameStateContext';
import TaskBlock from './TaskBlock';

const trackLength = 6;
const ticksBefore = 2;

const Container = styled.div`
  flex: 1;
  padding: 0.5rem;
`;

const slide = keyframes`
  to {
    transform: translateX(-${100 / trackLength}%);
  }
`;

const Track = styled.div`
  overflow: hidden;
`;

const TaskBlockContainer = styled.div`
  display: flex;
  width: ${(trackLength / (trackLength - 1)) * 100}%;

  background-color: ${({ theme }) => theme.disabled};
  border-radius: 0.3rem;

  animation: ${slide} 0.5s;
  animation-fill-mode: forwards;
`;

const TaskTrack = () => {
  const { state } = useContext(GameStateContext);
  const { tasks, time } = state;

  // get only the tasks within the acceptable range
  const getVisibleTasks = () =>
    Array.from({ length: trackLength }).map((_, i) =>
      tasks[i + time - ticksBefore] !== undefined
        ? tasks[i + time - ticksBefore]
        : 'NULL'
    );

  return (
    <Container>
      <Track>
        <TaskBlockContainer key={time}>
          {getVisibleTasks().map((task, i) => (
            <TaskBlock key={i} type={task} />
          ))}
        </TaskBlockContainer>
      </Track>
    </Container>
  );
};

export default TaskTrack;
