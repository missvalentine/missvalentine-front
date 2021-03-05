import React, { Component } from "react";
import classNames from "classnames";

class ChatCategoryList extends Component {
  constructor() {
    super();
    this.state = {
      selected: null,
      categoryList: [
        "Topicals",
        "Pets",
        "Edibles",
        "Capsules",
        "Oils",
       // "Bundles",
      ]
    };
  }
  render() {
    const { selected, categoryList } = this.state;
    return (
      <div>
        {categoryList.map((el, index) => (
          <p
            className={classNames("chat-custom-option", {
              selected: selected === el
            })}
            onClick={() => {
              if (!selected) {
                this.setState(
                  {
                    categoryList: categoryList.filter(elx => elx === el),
                    selected: el
                  },
                  () => {
                    this.props.triggerNextStep({
                      value: el
                    });
                  }
                );
              }
            }}
            key={index}
          >
            {el}
          </p>
        ))}
      </div>
    );
  }
}

export default ChatCategoryList;
