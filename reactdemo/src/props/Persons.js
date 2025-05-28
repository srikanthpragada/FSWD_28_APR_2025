import React from 'react'

function Person({details}) {

  function getCategory(){
    let height_in_meters = ( details.height / 100 )
    var bmi = (details.weight) /  height_in_meters ** 2
    let category = "Obese";
    if(bmi < 18.5)
        category = "Underweight"
    else
      if(bmi <= 24.9)
          category = "Normalweight"
      else
        if (bmi <= 29.9) 
              category = "Overweight"

    return category 
  }

  return(
     <tr>
        <td>
            {details.name}
        </td>
        <td>
            {details.weight}
        </td>
        <td>
            {details.height}
        </td>
        <td>
            {getCategory()}
        </td>
     </tr>
  )
}
export default function Persons({people}) {
  return (
     <>
      <h1>Persons</h1>
      <table className="table table-bordered">
         <tbody>
          <tr>
            <th>Name</th>
            <th>Weight (KG)</th>
            <th>Height (CM)</th>
            <th>Category</th>
          </tr>
          {
            people.map( p => <Person  key={p.id}  details={p} />)
          }
          </tbody>
      </table>
     </>
  )
}
