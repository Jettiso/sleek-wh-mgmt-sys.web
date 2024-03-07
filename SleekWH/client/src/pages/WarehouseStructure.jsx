import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";

const WarehouseStructure = () => {
	return (
		<>
			<main className='warehouses'>
				<header className='warehouses__header'>
					<FontAwesomeIcon icon={faWarehouse} className='warehouses__logo' />
					<h1>warehouses</h1>
					<button>+ New</button>
				</header>
				<div className='warehouses__container'>
					<div className='warehouses__name'>
						<h2>Sleek WH1</h2>
					</div>
					<div className='warehouses__details'>
						<p>U.S Los Angeles, CA. 90005</p>
						<button>Edit</button>
						<select>
							<option value='primary'>Mark as primary</option>
							<option value='active'>Active</option>
							<option value='inactive'>Inactive</option>
							<option value='delete'>Delete</option>
						</select>
					</div>
				</div>
				<div className='warehouses__container'>
					<div className='warehouses__name'>
						<h2>Sleek WH2</h2>
					</div>
					<div className='warehouses__details'>
						<p>PH Taguig, Manila. 1218</p>
						<button>Edit</button>
						<select>
							<option value='primary'>Mark as primary</option>
							<option value='active'>Active</option>
							<option value='inactive'>Inactive</option>
							<option value='delete'>Delete</option>
						</select>
					</div>
				</div>
			</main>
		</>
	);
};

export default WarehouseStructure;
