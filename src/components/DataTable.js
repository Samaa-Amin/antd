import React, { useState } from 'react';
import { Table } from 'antd';
import AddForm from './AddForm'


const DataTable = () => {



  function editPatien() {
    console.log("edite")
  }

  const [data, setdata] = useState([
    {
      key: 1,
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      delete: <button onClick={deletePatian}>delete</button>,
      edit: <button onClick={editPatien}>edit</button>,
    },
    {
      key: 2,
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      delete: <button onClick={deletePatian}>delete</button>,
      edit: <button onClick={editPatien}>edit</button>,
    },
  ])
  


  function addPerson(obj) {
    console.log(data)

    const addpat=[...data, obj]
    setdata([...addpat])


    // const { count, dataSource } = this.state;
    // const newData = {
    //   key: count,
    //   name: `Edward King ${count}`,
    //   age: 32,
    //   address: `London, Park Lane no. ${count}`,
    // };
    // this.setState({
    //   dataSource: [...dataSource, newData],
    //   count: count + 1,
    // });
    
  }

  function deletePatian(key) {
  //   setdata(()=>{
  //     let newData=[...data]
  //     console.log(newData)
  //     newData.map((item) => {
  //       console.log(key )
  //       if (item.key === key) {      
  //         if(newData.indexOf(item)>-1){
  //           newData.splice(newData.indexOf(item), 1)
  //           console.log(newData.indexOf(item))
  //           console.log("ifffffffff")
  //         }
  //       }
  //       return item
  //     })
  //     return newData
  //   })
  let updatedData =[...data]
  console.log(updatedData)
    updatedData.map((item) => {
      console.log('samaa')
      console.log(item.key)
      console.log(key)

        if (key == item.key) { 
          updatedData.splice(updatedData.indexOf(item), 1)
        }     

    })
    setdata([...updatedData])
    console.log(data)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'delete',
      dataIndex: 'delete',
      key: 'delete',
    },
    {
      title: 'edit',
      dataIndex: 'edit',
      key: 'edit',
    },

  ];

  return (
    <div>
      <Table dataSource={data} columns={columns} />
      <AddForm addPerson={addPerson} deletePatian={deletePatian} editPatien={editPatien} data={data} />
    </div>
  );
}
export default DataTable;