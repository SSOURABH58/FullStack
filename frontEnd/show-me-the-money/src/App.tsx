import { useQuery } from '@tanstack/react-query'
import './App.css'
import axios from 'axios'
import { useMemo } from 'react'
import { flattenRows } from './utlity'
import Table from './components/Table'

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

const fetchBalanceSheet = async() =>{
  return await apiInstance.get('/balance-sheet')
}

function App() {
  
  const {data,error,isLoading} = useQuery({ queryKey: ['todos'], queryFn:fetchBalanceSheet })

  console.log("data",data,"error",error,"isLoading",isLoading);
  

const allRows = useMemo(()=>flattenRows(data?.data?.Reports[0]?.Rows), [data]);

const header = useMemo(()=>allRows[0], [allRows]);
const rows = useMemo(()=>allRows.slice(1), [allRows]);

console.log("header",header,"rows",rows,"allRows",allRows);


  

  return (
    <div>
      {isLoading? <p>Loading...</p>: error?<p>Error</p>:<Table header={header} rows={rows}/>}
    </div>
  )
}

export default App
