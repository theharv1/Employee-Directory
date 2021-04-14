import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EmployeeList from './employeeList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [employeeListDefault, setEmployeeListDefault] = useState();
  const [employeeList, setEmployeeList] = useState();

  const fetchData = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=200&nat=us');
    const d = response.data.results;
    if (d) {
      setEmployeeList(d);
      setEmployeeListDefault(d);
      return d;
    }
    return null;
  }

  const updateInput = async (input) => {
      const filtered = employeeListDefault.filter(emp => {
        return emp.name.first.toLowerCase().includes(input.target.value.toLowerCase()) || emp.name.last.toLowerCase().includes(input.target.value.toLowerCase())
     })
     setInput(input);
     setEmployeeList(filtered);
  }

  useEffect( () => {fetchData()},[]);

  return (
    <>
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-6'>Employee Directory</h1>
        <p className='lead'>Use the search bar to find an employee.</p>
        <form className='search'>
      <div className='form-group'>
        <input type='text' input={input} placeholder='Search'onChange={updateInput} />
      </div>
    </form> 
      </div>
    </div>
        <div className='container'>
            <table className='table table-stripped table-dark'>
          <thead>
          <tr>
            <th scope='col'>
              Picture
            </th>
            <th scope='col'>
              First Name
            </th>
            <th scope='col'>
              Last Name
            </th>
            <th scope='col'>
              Phone Number
            </th>
            <th scope='col'>
              Email
            </th>
            <th scope='col'>
              Birthday
            </th>
          </tr>
          </thead>
          <tbody>
          <EmployeeList list={employeeList} />
          </tbody>
        </table>
        </div>
    </>
   );
}

export default SearchPage