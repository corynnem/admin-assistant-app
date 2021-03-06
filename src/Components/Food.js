import React from 'react';


const Food = (props) => {

    const foodStyles = {
        width:' 70vw',
        height: '60vh'

    }

    const h5Styles = {
        width: '50%',
        marginLeft: '25%',
        padding: '1%',
        backgroundColor: 'rgba(28, 67, 84, 0.5)',
        borderRadius:'10px',
        marginBottom: '2%',
    }

    return (
        <div>
            <h1>Catering Options</h1>
            <h5 style={h5Styles}>Here you will find an array of options for ordering catering sized lunches. As a general 
            rule, stick to $8 per student per day for lunches. We try to stick with 'Taco Tuesdays' and 'Pizza Fridays' because those options
            tend to be cheaper, allowing more leeway for the rest of the week. </h5>
            <a href='https://docs.google.com/spreadsheets/d/1LCc3rluiX9EN5XxCZGM6J851aGSg9EZ8115zdalezK4/edit#gid=0'>
                <embed
                src='https://docs.google.com/spreadsheets/d/1LCc3rluiX9EN5XxCZGM6J851aGSg9EZ8115zdalezK4/edit#gid=0'
                type="application/pdf"
                style={foodStyles}
                >
                </embed>
            </a>
            
        </div>
    )
}

export default Food;