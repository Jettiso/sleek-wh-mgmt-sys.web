import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChartPie,
	faReceipt,
	faBox,
	faBoxesStacked,
	faBug,
	faWarehouse,
	faTruck,
} from "@fortawesome/free-solid-svg-icons";
import WarehouseStructure from "./pages/WarehouseStructure";

function App() {
	return (
		<>
			<div className='app__container'>
				<aside>
					<h1>SleekWMS</h1>
					<div className='button__container'>
						<button className='app__sidebar-btn'>
							<FontAwesomeIcon icon={faChartPie} className='app__sidebar-icons' />
							Dashboard
						</button>
						<button className='app__sidebar-btn'>
							<FontAwesomeIcon icon={faWarehouse} className='app__sidebar-icons' />
							Warehouse Structure
						</button>
						<button className='app__sidebar-btn'>
							<FontAwesomeIcon icon={faReceipt} className='app__sidebar-icons' />
							Receipts
						</button>
						<button className='app__sidebar-btn'>
							<FontAwesomeIcon icon={faBox} className='app__sidebar-icons' />
							Seller Packages
						</button>
						<button className='app__sidebar-btn'>
							<FontAwesomeIcon icon={faTruck} className='app__sidebar-icons' />
							Shipments
						</button>
						<button className='app__sidebar-btn'>
							<FontAwesomeIcon icon={faBoxesStacked} className='app__sidebar-icons' />
							Warehouse Stocks
						</button>
						<button className='app__sidebar-btn'>
							<FontAwesomeIcon icon={faBug} className='app__sidebar-icons' />
							Bug Report
						</button>
					</div>
				</aside>
				<main>
					<WarehouseStructure />
				</main>
			</div>
		</>
	);
}

export default App;
