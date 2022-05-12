import { Children, FC, useMemo } from "react";
import Contact from "./Contact";

type ContactGroupProps = {
  compact?: boolean
  children?: React.ReactNode;
};

const ContactGroup: FC<ContactGroupProps> = (props) => {
  const childrenArr = Children.toArray(props.children);

  const className = useMemo(() => {
    if (props.compact) {
      return 'col-span-12 mb-2 md:mb-0'
    }

    return 'col-span-12 md:col-span-4 lg:col-span-3 md:justify-self-center mb-2 md:mb-0 print:col-span-4 print:justify-self-center print:mb-0'
  }, [props.compact])

  return (
    <div className="grid grid-cols-12 grid-gap-8 text-xs">
      {childrenArr.map((child, index) => (
        <div
          key={index}
          className={className}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ContactGroup;
