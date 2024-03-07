const Inventory = () => {
	return (
		<>
			<header className='inventory__info'>
				<h1>Inventory</h1>

				<h3>All Stock: 13</h3>
				<h3>Nintendo: 13</h3>
				<h3>SEGA: 13</h3>
				<h3>PlayStation: 13</h3>
				<h3>Xbox: 13</h3>
				<select name='vendor'>
					<option value='nintendo'>Nintendo</option>
					<option value='sega'>SEGA</option>
					<option value='playstation'>Playstation</option>
					<option value='xbox'>Xbox</option>
				</select>
			</header>
			<main>
				<div className='inventory__product'>
					<img src='./public/ps4.jpg' alt='product img' />
					<h3>Playstation 4</h3>
					<h3>Stock: 40</h3>
				</div>
				<div className='inventory__product'>
					<img src='./public/ps4.jpg' alt='product img' />
					<h3>Playstation 4</h3>
					<h3>Stock: 40</h3>
				</div>
				<div className='inventory__product'>
					<img src='./public/ps4.jpg' alt='product img' />
					<h3>Playstation 4</h3>
					<h3>Stock: 40</h3>
				</div>
			</main>
		</>
	);
};

export default Inventory;
