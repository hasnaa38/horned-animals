import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import StretchGoal from './StretchGoal';

class Main extends Component {
    render() {
        //This array holds the data for each horned beast
        let hornedBeastsArray = [
            { title:'Unicorn', imageUrl:'https://pm1.narvii.com/6234/2bc966c623d82084964041e8144aa5e2d6b1a118_hq.jpg', description:'Horned Animal #1: a unicorn is a horned horse' },
            { title:'Xiezhi', imageUrl:'https://i.pinimg.com/564x/7f/50/04/7f5004c1ebcc25fd7568ecd51b00006e.jpg', description:'Horned Animal #2: a xiezhi is a horned lion' }
        ];

        let stretchGoalBeasts = [
            {
            "imageUrl": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
            "title": "UniWhal",
            "description": "A unicorn and a narwhal nuzzling their horns",
            "keyword": "narwhal",
            "horns": 1
          },
        
          {
            "imageUrl": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
            "title": "Rhino Family",
            "description": "Mother (or father) rhino with two babies",
            "keyword": "rhino",
            "horns": 2
          },
          
          {
            "imageUrl": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
            "title": "Unicorn Head",
            "description": "Someone wearing a creepy unicorn head mask",
            "keyword": "unicorn", 
            "horns": 1
        }];

        return (
            <>
           {
                hornedBeastsArray.map( beast => {
                    //Rendering beasts from the hornedBeastsArray array
                    return <HornedBeasts title={beast.title} imageUrl={beast.imageUrl} description={beast.description}/>
                })
            }

            {
                stretchGoalBeasts.map( beast => {
                    //Rendering beasts from the stretchGoalBeasts array
                    return <StretchGoal title={beast.title} imageUrl={beast.imageUrl} description={beast.description} 
                                        keyword={beast.keyword} horns={beast.horns}/>
                })
            }

            </>
        )
    }
}

export default Main
