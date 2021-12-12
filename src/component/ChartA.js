import React, { useState, useEffect } from "react"

const ChartA = () => {
    const [allData, setAllData] = useState([]) 

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setAllData(data)
        }, [])
    })

    return (
        <div>
            <h1>aaaaaaaa</h1>
        </div>
    )
}

export default ChartA