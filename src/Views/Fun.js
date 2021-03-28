import React from "react";
import {Line} from "react-chartjs-2";

const LineChart = () =>{
    return(
        <div>
            <Line

                data={{

                    datasets: [
                        {
                            label: "Funmeter",
                            backgroundColor: '#004d4d',
                            labels: ['Will' ],
                            data: []
                        }]
                }}
                height={400}
                width={900}
                options={{
                    // disable for all datasets
                    maintainAspectRatio: false,
                    animation: {
                        duration: 0 // general animation time
                    },
                    hover: {
                        animationDuration: 0 // duration of animations when hovering an item
                    },
                    responsiveAnimationDuration: 0,// animation duration after a resize
                    elements: {
                        line: {
                            tension: 0 // disables bezier curves
                        }
                    }
                }
                }


            />
        </div>
    )
}

export default LineChart