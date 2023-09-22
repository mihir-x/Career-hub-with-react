

const Category = ({category}) => {
    const {logo, category_name, availability} = category
    return (
        <div className="border p-4 rounded-lg space-y-2">
            <img src={logo} alt="" />
            <h3 className="font-bold">{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default Category;