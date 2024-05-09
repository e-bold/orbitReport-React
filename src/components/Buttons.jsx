

const Buttons = ({ filterByType, setSat, orbitTypes,satData }) => {

  return(
    <div>
      {orbitTypes.map((type, index) => {
      return (
          <button onClick = {()=>filterByType(type)} key={index}>
             {type} Orbit 
          </button>
      )
    })}
<button onClick={()=> setSat(satData)}>All Orbit</button>

    </div>
  )

};

export default Buttons;