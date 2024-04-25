import classnames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classnames.bind(styles);

const Heading = ({ children, level }) => {
  const Tag = `h${level}`;

  const headingClasses = cx({
    heading: true,
    [`heading--${level}`]: level,
  });

  return <Tag className={headingClasses}>{children}</Tag>;
};
export default Heading;
