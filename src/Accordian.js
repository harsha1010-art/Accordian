import { useState } from "react";
import styled from "styled-components";
//import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordianItem = styled.div`
  color: #ffffff;
  background-color: #191414;
`;

const ExpandIcon = styled.div`
  color: #1db954;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const Accordian = ({ name, content }) => {
  const [show, setShow] = useState(false);
  const toggleAccordian = () => {
    setShow(!show);
  };
  return (
    <AccordianItem>
      <div class="prt1" active={show ? show : false}>
        <div>{name}</div>
        <ExpandIcon onClick={toggleAccordian}>
          <button>+</button>
        </ExpandIcon>
      </div>
      {show && (
        <div>
          <div>{content}</div>
        </div>
      )}
    </AccordianItem>
  );
};

export default Accordian;
