
import { createContext ,useState,useEffect} from "react";
import {getCatagoriesAndDocuments} from '../utils/firebase/firebase.util'
export const CatagoriesContext=createContext({
    catagoriesMap:{},
    
});
export const CatagoriesProvider=({children})=>{ 
    const [catagoriesMap ,setCatagoriesMap] =useState([])
    useEffect(()=>{
        const getCatagoriesMap = async()=>{
           const catagoryMap = await getCatagoriesAndDocuments()
           console.log(catagoryMap)
           setCatagoriesMap(catagoryMap)
        }
        getCatagoriesMap()
    },[])
    const value = {catagoriesMap};
    return(
        <>
        <CatagoriesContext.Provider value={value}>{children}</CatagoriesContext.Provider>
        </>
    )
}