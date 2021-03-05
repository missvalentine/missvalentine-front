import classNames from "classnames";
import { Input as AntInput } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
class Input extends React.Component {
  render() {
    const {
      value,
      onChange,
      parentClass,
      inputId,
      label,
      type,
      suffix,
      prefix,
      versions,
      name,
      wrapperClass,
      ...props
    } = this.props;
    const componentClass = "c-input";
    const versionClass = versions
      .map((el) => `${componentClass}--${el}`)
      .join(" ");
    const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
    const className = classNames(componentClass, {
      [versionClass]: versions,
      [parent]: parentClass,
      [wrapperClass]: wrapperClass,
    });
    if(type=="password"){
      return (
        <div className={className}>
          <AntInput.Password
            onChange={onChange}
            // id={inputId}
            {...props}
            name={name}
            type={type}
            value={value}
            placeholder={label} 
          
            prefix={prefix}
            suffix={suffix}
            allowClear={
              versions.filter((version) => version === "discount")[0] ===
              "discount"
                ? true
                : false
            }
            className={versions[0] === "discount" ? "c-input" : "c-input__input"}
          />
        </div>
      );
    }else{
    return (
      <div className={className} style={{width: '100%'}}>
        <AntInput
          onChange={onChange}
          // id={inputId}
          {...props}
          name={name}
          type={type}
          value={value}
          placeholder={label} 
          prefix={prefix}
          suffix={suffix}
          allowClear={
            versions.filter((version) => version === "discount")[0] ===
            "discount"
              ? true
              : false
          }
          className={versions[0] === "discount" ? "c-input" : "c-input__input"}
        />
      </div>
    );
  }
  }
}
Input.defaultProps = {
  inputId: `${parseInt(Math.random() * new Date().getTime())}`,
  type: "text",
  versions: ["default"],
};
export default Input;
