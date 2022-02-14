import styled from "styled-components";

const Wrapper = styled.div`
  .dd-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 532px;
    height: 40px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #b8b8b8;
    border-radius: 3px;
    opacity: 1;
    cursor: pointer;
    padding-left: 19px;
    padding-right: 19px;
  }

  .dd-list {
    list-style-type: none;
  }

  .dd-list-item {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 532px;
    height: 40px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #b8b8b8;
    border-radius: 3px;
    opacity: 1;
    cursor: pointer;
    padding-left: 19px;
  }
`;

export default Wrapper;
