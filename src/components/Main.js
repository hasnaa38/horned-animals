import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import BeastsData from './data.json';

class Main extends Component {

    render() { 
        return (
            <>
           {
                BeastsData.map( beast => {
                    //Rendering beasts from the hornedBeastsArray array
                    return (
                    <div>
                    <HornedBeasts title={beast.title} image_url={beast.image_url} description={beast.description} 
                            keyword={beast.keyword} horns={beast.horns}/>
                    </div>
                    )
                })
            }

            </>
        )
    }
}

export default Main
