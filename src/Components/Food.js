import React from 'react';


const Food = () => {

    const foodStyles = {
        width:' 90vw',
        height: '80vh'

    }


    return (
        <div>
            <h1>Catering Options</h1>
            <a>
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