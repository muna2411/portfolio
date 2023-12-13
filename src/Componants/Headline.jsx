
import { forwardRef } from "react" ;
const Headline = ({text} , ref) => {
    return (
        <h2 className="text-[55px] text-[#FFBF00] font-a"  ref={ref}>{text}</h2>
    ); 
};

export default forwardRef(Headline);