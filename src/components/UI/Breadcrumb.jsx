import "./Breadcrumb.css";
import {HiChevronRight} from "react-icons/hi2"

const Breadcrumb = (props) => {
    const breadcrumb = props.data;
    return (
        <ul className="breadcrumb flex flex-wrap list-none items-center mb-10">
            {breadcrumb.map((lee, index)=>{
                return (
                    <li key={index} className={lee.current ? "inline-flex flex-wrap current" : "inline-flex flex-wrap"}><img src={lee.img} alt={lee.title} /> {lee.title} {!lee.current && <HiChevronRight />}</li>
                )
            })}
        </ul>
    )
}

export default Breadcrumb;