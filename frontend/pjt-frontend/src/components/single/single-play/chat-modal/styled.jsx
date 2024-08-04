import styled from 'styled-components';


export const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -100%;
  left: -100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;

  h2 {
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  padding: 20px 0;
`;

export const ModalFooter = styled.div`
  display: flex;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const S = {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
}


export default S;