import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/345deb7a-0ca8-4dd4-bc71-afa37f7a4479.jpg?im_w=720"
                    title="Beautiful Master Bedroom w/ Private Bath Near Sea"
                    description="Very spacious private master bedroom for rent in a trendy area of Arverne near the sea. Room is located 2 very short blocks away from the 67th St. A/C train at Rockaway Beach and 4 blocks away from the Atlantic Ocean boardwalk."
                    price="₹2,271/ night" 
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/517e5302-018f-465f-94e6-0cd99f17e070.jpg?im_w=1200"
                    title="Gold Room in Old American Style House, Near Subway"
                    description="Private room in a beautiful house in Queens. located 5min walk from the metro J, Z Subway (24/7), around 40-45min to Downtown Manhattan (9/11 Memorial, Wall Street). 50min to times square and central park. Easy to get anywhere with public transport.15 min from JFK with direct J train"
                    price="₹2,944/ night" 
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/345deb7a-0ca8-4dd4-bc71-afa37f7a4479.jpg?im_w=720"
                    title="Friendly, unpretentious, close to the subway"
                    description="Private room in a 2 bedroom apartment in Park Slope.
                    One block from the R train, six short blocks from the F/G trains.
                    Lots of grocery stores, coffee shops, bars and restaurants nearby."
                    price="₹2,860/ night" 
                />
            </div>
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/9fbc772e-128c-4d69-9246-633e343f9a63.jpg?im_w=1200"
                    title="Quiet stylish room near Express Train to Midtown"
                    description="You'll have privacy and space in your own huge room, in the fridge and cupboards, and in my inviting apartment. This is 1 bedroom in a 4 bedroom. If you have any questions I'm always a text or AirBnB message away. I've lived here for 9 years, and love the neighborhood, the restaurants, the space, and the express train to sites."
                    price="₹3,491/ night" 
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/b36a176a-a925-4367-a1ba-1d145d58b649.jpg?im_w=1200"
                    title="Spacious Studio SHARED"
                    description="Studio apartment. Use of anything. Clean, I live alone, perfect for the traveler who will be out most of the day. I have a bed, sheets & towels if needed. Ninja coffe system and juicer. Desk with free WiFi for work or play. No cable but Netflix and use of Hulu acct. Alexa will play whatever song you want and wake you up in the morning😂 If you see days that are blocked just send a message, I may be able to unblock them for you. Sometimes I’m just being lazy and don’t want to clean."
                    price="₹1,770/ night" 
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/e6ccadc3-bee7-4506-8ee5-d5c8914ba10a.jpg?im_w=1200"
                    title="Newly renovated studio apartment"
                    description="This very quaint studio is newly renovated. Everything is brand new! Subway tile back-splash, butcher-block counter-tops,ceramic tile flooring, carefully selected furnishings and a private entrance. Short walk to massive park with a track for exercise. NJ Transit bus and trains are both minutes away. Train and bus ride to the city are half hour long. $10 Uber ride to MET LIFE stadium and American Dream Mall."
                    price="₹3,300/ night" 
                />
            </div>
        </div>
    )
}

export default Home
