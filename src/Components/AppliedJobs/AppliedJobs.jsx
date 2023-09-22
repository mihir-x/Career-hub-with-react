import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilities/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {

    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])

    const handleJobFilter = (filter) =>{
        if(filter === 'All'){
            setFilteredJobs(appliedJobs)
        }
        else if(filter === 'Remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setFilteredJobs(remoteJobs)
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setFilteredJobs(onsiteJobs)
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
            setFilteredJobs(jobsApplied)
        }

    }, [jobs])

    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center">Applied Jobs</h1>
            </div>

            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobFilter('All')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('Remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobFilter('Onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <div>
                {
                    filteredJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;