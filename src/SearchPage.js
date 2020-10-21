import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Bed</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/e6ccadc3-bee7-4506-8ee5-d5c8914ba10a.jpg?im_w=1200"
                location="Mumbai, India"
                title="Newly renovated studio apartment"
                description="This very quaint studio is newly renovated. Everything is brand new! Subway tile back-splash, butcher-block counter-tops,ceramic tile flooring, carefully selected furnishings and a private entrance. Short walk to massive park with a track for exercise. NJ Transit bus and trains are both minutes away. Train and bus ride to the city are half hour long. $10 Uber ride to MET LIFE stadium and American Dream Mall."
                star="4"
                price="₹3,300/ night"
                total="2" 
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/e6ccadc3-bee7-4506-8ee5-d5c8914ba10a.jpg?im_w=1200"
                location="Mumbai, India"
                title="Newly renovated studio apartment"
                description="This very quaint studio is newly renovated. Everything is brand new! Subway tile back-splash, butcher-block counter-tops,ceramic tile flooring, carefully selected furnishings and a private entrance. Short walk to massive park with a track for exercise. NJ Transit bus and trains are both minutes away. Train and bus ride to the city are half hour long. $10 Uber ride to MET LIFE stadium and American Dream Mall."
                star="4"
                price="₹3,300/ night"
                total="2" 
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/e6ccadc3-bee7-4506-8ee5-d5c8914ba10a.jpg?im_w=1200"
                location="Mumbai, India"
                title="Newly renovated studio apartment"
                description="This very quaint studio is newly renovated. Everything is brand new! Subway tile back-splash, butcher-block counter-tops,ceramic tile flooring, carefully selected furnishings and a private entrance. Short walk to massive park with a track for exercise. NJ Transit bus and trains are both minutes away. Train and bus ride to the city are half hour long. $10 Uber ride to MET LIFE stadium and American Dream Mall."
                star="4"
                price="₹3,300/ night"
                total="2" 
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/e6ccadc3-bee7-4506-8ee5-d5c8914ba10a.jpg?im_w=1200"
                location="Mumbai, India"
                title="Newly renovated studio apartment"
                description="This very quaint studio is newly renovated. Everything is brand new! Subway tile back-splash, butcher-block counter-tops,ceramic tile flooring, carefully selected furnishings and a private entrance. Short walk to massive park with a track for exercise. NJ Transit bus and trains are both minutes away. Train and bus ride to the city are half hour long. $10 Uber ride to MET LIFE stadium and American Dream Mall."
                star="4"
                price="₹3,300/ night"
                total="2" 
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/e6ccadc3-bee7-4506-8ee5-d5c8914ba10a.jpg?im_w=1200"
                location="Mumbai, India"
                title="Newly renovated studio apartment"
                description="This very quaint studio is newly renovated. Everything is brand new! Subway tile back-splash, butcher-block counter-tops,ceramic tile flooring, carefully selected furnishings and a private entrance. Short walk to massive park with a track for exercise. NJ Transit bus and trains are both minutes away. Train and bus ride to the city are half hour long. $10 Uber ride to MET LIFE stadium and American Dream Mall."
                star="4"
                price="₹3,300/ night"
                total="2" 
            />
        </div>
    )
}

export default SearchPage
