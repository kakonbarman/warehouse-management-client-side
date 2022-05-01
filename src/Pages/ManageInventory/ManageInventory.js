import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import "./manageInventory.css";
import ProductDataTable from "./ProductDataTable/ProductDataTable";

const ManageInventory = () => {
	const [products] = useProducts();

	const navigate = useNavigate();

	return (
		<section className="py-20">
			<div className="container mx-auto">
				<h2 className="text-3xl text-center">Manage Inventory</h2>
				<div className="text-center mt-4">
					<button
						onClick={() => navigate("/add-item")}
						className="bg-green-500 py-3 px-6 rounded text-white text-lg"
					>
						Add New Item{" "}
					</button>
				</div>
				<div className="mt-8">
					<table className="manage-table">
						<thead>
							<tr>
								<th>##</th>
								<th>Image</th>
								<th>Product Name</th>
								<th>Price</th>
								<th>Short Description</th>
								<th>Stock</th>
								<th>Sipplier Name</th>
								<th>Action</th>
							</tr>
						</thead>
						{products.map((product, index) => (
							<ProductDataTable
								index={index}
								product={product}
								key={product._id}
							></ProductDataTable>
						))}
					</table>
				</div>
			</div>
		</section>
	);
};

export default ManageInventory;
