import React, { useState, useEffect } from "react"

const ChartA = () => {
    const [allData, setAllData] = useState([]) 
    const [twentyone, setTwentyone] = useState([])
    const [twentysix, setTwentysix] = useState([])
    const [thirtyone, setThirtyone] = useState([])
    const [thirtysix, setThirtysix] = useState([])
    const [fortyone, setFortyone] = useState([])
    const [fortysix, setFortysix] = useState([])

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        return fetch('https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            
            let twentyone = data.filter(item => item.age === '21~25 歲');
            let twentysix = data.filter(item => item.age === '26~30 歲');
            let thirtyone = data.filter(item => item.age === '31~35 歲');
            let thirtysix = data.filter(item => item.age === '36~40 歲');
            let fortyone = data.filter(item => item.age === '41~45 歲');
            let fortysix = data.filter(item => item.age === '46~50 歲');
            
            setAllData(data)
            setTwentyone(twentyone)
            setTwentysix(twentysix)
            setThirtyone(thirtyone)
            setThirtysix(thirtysix)
            setFortyone(fortyone)
            setFortysix(fortysix)
        })
    }


    return (
        <div>
            <h1>chart A</h1>
            {twentyone.map((item, index) =>
                <p key={index}>age is {item.age} / gender is {item.gender}</p>
            )}
        </div>
    )
}

export default ChartA