import React from "react";
import { Collapse } from "reactstrap";
import { DownOutlined, UpOutlined } from '@ant-design/icons'

const LearnCollapse = (props) => {
  const { isOpen, onClick, title, children } = props;
  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid transparent",
      }}
      className=""
    >
      <div
        style={{
          borderBottom: "1px solid transparent",
          background: "transparent",
          // paddingLeft: "15px",
          // paddingRight: "15px"
        }}
        className="pb-2 cursor-pointer"
        onClick={onClick}
      >
        <h4 className="mb-0" style={{ fontWeight: 400, marginBlock: 0 }}>
          <span className="d-flex align-items-center justify-content-between">
            <div style={{ fontSize: "19px", fontFamily: "futuraBT-medium" }}>
              {title}
            </div>
            {isOpen ? <UpOutlined /> : <DownOutlined />}
            {/* {isOpen ? (
              <Icon size={24} icon={ic_keyboard_arrow_up} />
            ) : (
              <Icon size={24} icon={ic_keyboard_arrow_down} />
            )} */}
          </span>
        </h4>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="learn-collapse-list">{children}</div>
      </Collapse>
    </div>
  );
};
export default LearnCollapse;
