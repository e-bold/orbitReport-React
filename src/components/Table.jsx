const Table = ({ sat }) => {

  function active (value) {
    if(value === true) {
      value = 'Active'
    } else { value = 'Inactive'}
    return value
  };

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Teype of Satellite</th>
       <th>Launch date</th>
       <th>Status</th>
     </tr>
     </thead>
      {sat.map((data, id ) => (
     <tbody>
     <tr key ={id}>
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{active(data.operational)}</td>
     </tr>
     </tbody>
    ))}
   </table>
  );
};

export default Table;