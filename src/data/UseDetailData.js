import { useState,useEffect } from "react";
import detailData from "./detailData1.json";

const UseDetailData = () =>{
    const [dataviaHook,setDataviahook] = useState([]);

    useEffect(()=>{
        fetch(detailData)
        .then(setDataviahook(detailData))
    },[]);

    return [
        dataviaHook,setDataviahook,
    ]


}

export default UseDetailData;