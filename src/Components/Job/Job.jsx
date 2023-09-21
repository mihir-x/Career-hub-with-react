import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary,  } = job

    return (
        <div className="card card-compact bg-base-100 shadow-xl space-y-6 border">
            <figure className="p-4"><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-6">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-5">
                    <h3 className="flex gap-1"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn> {location}</h3>
                    <h3 className=" flex gap-1"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar> {salary}</h3>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;