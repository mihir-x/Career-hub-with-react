import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('./categories.json').then(res => res.json()).then(data => setCategories(data))
    }, [])
    console.log(categories)

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold text-center">Job Category List</h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 p-5 gap-4">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default CategoryList;