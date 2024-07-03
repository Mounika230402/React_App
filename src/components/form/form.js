import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TableExample from './table';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormExample() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const[update,setUpdate]=useState(false)
  const [tableData, setTableData] = useState([]);
  const[INDEX, SetIndex]=useState(0)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.username, formData.password);

    const userform = {
      username: formData.username,
      password: formData.password,
    };

    const isUserExists = tableData.find(
      (eachRow) =>
        eachRow.username === formData.username &&
        eachRow.password === formData.password
    );

    if (isUserExists) {
      notifyError("already exists");
      // alert("user exists")
    } else {
      setTableData([...tableData, userform]);
      setFormData({ username: "", password: "" });
      notifySuccess("User added successfully");
    }
  };

  const handleDelete = (index) => {
    
    console.log(index);
    const filteredData = tableData.filter((value, ind) => ind !== index);
    setTimeout(() => {
      notifySuccess("User deleted successfully");
    }, 0);
    setTableData(filteredData);
    setFormData({ username: "", password: "" });
  };

  const handleUpdate = (index) => {
    SetIndex(index)
    setUpdate(true)
    setFormData({username:tableData[index].username,password:tableData[index].password})
  };
  const handleUpdated=(event)=>{
    event.preventDefault()
    tableData.map((each,ind1)=>{
      if(ind1===INDEX){
        each.username=formData.username
        each.password=formData.password
      }
    } )
      setUpdate(tableData)
      
    setFormData({ username: "", password: "" });
    
    setUpdate(false)
  }

  const notifyError = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-center",
    });
  };

  const notifySuccess = (succesMessage) => {
    toast.success(succesMessage, {
      position: "top-center",
    });
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={formData.username} name={"username"} onChange={handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={formData.password} name={"password"} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {
          !update ? <Button variant="primary" type="submit" onClick={handleSubmit}>Submit
        </Button> : <Button variant="primary" type="submit" onClick={handleUpdated}>Update
        </Button>
        }
      </Form>
      <TableExample tableRows={tableData} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      <ToastContainer />
    </>
     
  );
}

export default FormExample;