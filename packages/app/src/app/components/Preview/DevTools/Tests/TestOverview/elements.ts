import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const Item = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
`;

export const ItemTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
`;

export const TestStatus = styled.div`
  display: flex;

  div {
    flex: 1;
  }
`;

export const TestStatuses = styled.div`
  margin-top: 1.25rem;
  font-size: 0.875rem;
`;

export const Tests = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;

  /* Using absolute for correct scrolling, browsers have trouble handling
   * an inner scroll inside a container unless the child is absolute */
  position: absolute;
  top: 3.5rem;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const HappyMessage = styled.div`
  color: ${props => props.theme.green};
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
`;
