import "./ResultsSearch.css"
function ResultsSearch({ resaultSearch }: { resaultSearch?: any }) {
  return (
    <div className='resault-search'>
        
{resaultSearch.map((e : any ,i : any)=>{

    return <div key={i} className="res-serch"> {e.name}</div>
}
    
)
}   

        </div>
  )
}

export default ResultsSearch