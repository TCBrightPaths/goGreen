import React from "react";
import './rewards.css';
import { useState } from "react";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import RewardCard from "../RewardCard/RewardCard";
import NavHeader from '../NavHeader/NavHeader';
import NavSide from '../NavSide/NavSide';


const Rewards = (props) => {

    const [rewardOptions, setRewardOptions] = useState([
        { id: 1, itemName: "Hot/Cold Tumbler", itemCost: "1500 pts" },
        { id: 2, itemName: "Reusable Straw", itemCost: "500 pts" },
        { id: 3, itemName: "Journal", itemCost: "1000 pts" },
        { id: 4, itemName: "goGreen T-Shirt", itemCost: "2500 pts" },
    ])

    return ( 
        <div className="rewards">
            <NavHeader />
            <NavSide isLoggedIn={props.isLoggedIn} menuClick={props.menuClick} setActive={props.setActive} isActive={props.isActive}/>
            <Logo menuClick={props.menuClick}/>
            <div className="rewards-container">
                <RewardCard rewardOptions={rewardOptions}/>
            </div>
            <Footer />
        </div>
     );
}
 
export default Rewards;