import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LYtrSpVsTfA8rihqqzZfU5p2dbIpAkatbg&s' alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className='res-card'>
            <div className='res-img'>
                <img className='res-logo' src='https://eatbook.sg/wp-content/uploads/2022/12/cauliflower-gourmetz-catering.jpg' alt='res-img' />
            </div>
            <div className='res-info'>
                <h3>Meghana Foods</h3>
                <h4>North Indian, South Indian, Chinese</h4>
                <h5><span>4.4 stars</span><span>38 mins</span></h5>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                <RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard />
                <RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard />
                <RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard />
            </div>
        </div>
    );

}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);