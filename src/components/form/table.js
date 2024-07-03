import Table from 'react-bootstrap/Table';
import ButtonComponent from '../button/button_bootstrap';

function TableExample({tableRows=[
  {
    username:"abc",
    password:123
  },
  {
    username:"abcd",
    password:1234
  }
],handleDelete,handleUpdate,update}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>User Name</th>
          <th>password</th>
        </tr>
      </thead>
      <tbody>
        {
            tableRows.map((each,index)=>{
                return(
                    <>
                      <tr>
                        <td>{index+1}</td>
                        <td>{each.username}</td>
                        <td>{each.password}</td>
                        <td>
                            <ButtonComponent
                    text={"Delete"}
                    onPress={() => handleDelete(index)}
                  ></ButtonComponent>
                          <ButtonComponent text={"Update"}  onPress={() => handleUpdate(index)}/>
                        </td>
                        </tr>
                    </>
                )
            })
        }
      
      </tbody>
    </Table>
  );
}

export default TableExample;