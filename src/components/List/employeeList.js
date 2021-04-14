import React from 'react';

const EmployeeList = ({list=[]}) => {
  return (
    <>
      {
        list.map((v, k) => {
          let dob = new Date(v.dob.date).toLocaleDateString('en-GB');
          return <tr key={k}>
            <td>
              <img src={v.picture.thumbnail} alt='' />
            </td>
            <td>
              {v.name.first}
            </td>
            <td>
              {v.name.last}
            </td>
            <td>
              {v.phone}
            </td>
            <td>
              {v.email}
            </td>
            <td>
              {dob}
            </td>
          </tr>
        })
      }
    </>
  );
}

export default EmployeeList