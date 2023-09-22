import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";


const AppliedJob = ({ appliedJob }) => {
    console.log(appliedJob)
    const { logo, company_name, location, remote_or_onsite, job_type, salary, job_title } = appliedJob
    return (
        <div className="border mb-6 bg-base-200 p-4">
            <div className="flex gap-4 lg:flex-row">
                <figure className="w-[20%]">
                    <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
                </figure>
                <div className="w-[78%] flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">{job_title}</h1>
                        <p className="py-6">{company_name}</p>
                        <div className="flex gap-6">
                            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                        </div>
                        <div className="flex gap-5">
                            <h3 className="flex gap-1"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn> {location}</h3>
                            <h3 className=" flex gap-1"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar> {salary}</h3>
                        </div>
                    </div>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;