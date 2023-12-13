import Swal from "sweetalert2";


const AddTea = () => {


    const handleAddTea = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newTea = {name, quantity, supplier, taste, category, details, photo  }

        console.log(newTea);


        
        fetch('https://tea-store-server-ten.vercel.app/tea', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTea)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
    
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tea Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
    
    
        })


    }

    return (
        <div className="bg-orange-200 pl-96 pt-10 pb-10">
        <div className="ml-28">
        <h2 className="text-3xl font-extrabold mb-5">Add a Tea</h2>
        <form onSubmit={handleAddTea}>
            {/* form name and quantity row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Tea Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="tea name" className="input input-bordered w-full" />
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

                        <input type="text" name="photo" placeholder="photo" className="input input-bordered w-1/2" />
                    </label>
                </div>
            </div>

            <input type="submit" value="Add Tea" className="btn btn-block mt-10 w-1/2" />
        </form>
        </div>
    </div>
    );
};

export default AddTea;