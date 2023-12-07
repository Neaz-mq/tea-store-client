// import { Link } from "react-router-dom";


const TeaCard = ({ tea, teas, setTeas }) => {


    const { _id, name, quantity, supplier, taste, category, details, photo } = tea;




    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-12">
                <div>
                    <h2 className="card-title ml-6 mb-3">Name: {name}</h2>
                    <p className="ml-6 text-lg font-medium mb-3 text-red-500">{quantity}</p>
                    <p className="ml-6 text-base font-medium mb-3">{supplier}</p>
                    <p className="ml-6 text-base font-medium">{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4 ml-10">
                        <button className="btn ml-6 mb-3">View</button>
                       {/* <Link to={`updateCoffee/${_id}`}> */}
                       
                       <button className="btn ml-6 ">Edit</button>
                       {/* </Link> */}
                        <button
                            // onClick={() => handleDelete(_id)}
                            className="btn bg-red-400 ml-6 ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeaCard;