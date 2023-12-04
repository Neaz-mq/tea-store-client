

const AddTea = () => {
    return (
        <div className="bg-orange-200 p-24">
        <h2 className="text-3xl font-extrabold mb-5">Add a Coffee</h2>
        <form>
            {/* form name and quantity row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="coffee name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="quantity" placeholder="quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="supplier" placeholder="supplier name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="taste" placeholder="taste" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form- category and detailsrow */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="details" name="details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form- photo url row */}
            <div className="">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo" placeholder="photo" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>

            <input type="submit" value="Add Coffee" className="btn btn-block mt-10" />
        </form>
    </div>
    );
};

export default AddTea;