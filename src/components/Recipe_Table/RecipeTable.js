// import axios from "axios";
import React from "react";
import Table from 'react-bootstrap/Table';

function RecipeTable(prop) {
  const{data}=prop
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Recipe Name</th>
          <th>Image</th>
          <th>Ingredients</th>
          <th>Instrutions</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((eachRecipe)=>{
          return (
            <>
             <tr>
              <td>{eachRecipe.id}</td>
              <td>{eachRecipe.name}</td>

              <td><img src={eachRecipe.image} width={100} height={100} alt={eachRecipe.name}/></td>
              <td>{
                eachRecipe.ingredients.map((eachIngredients,index)=>{
                  return(
                    <p>{`${index+1}.${eachIngredients}`}</p>
                  )
                })
                }</td>
              <td>{
                eachRecipe.instructions.map((eachInstructions,index)=>{
                  return(
                    <p>{`${index+1}.${eachInstructions}`}</p>
                  )
                })
                }</td>
              </tr>
            </>
          )
        })
       }
      </tbody>
    </Table>
  );
}

export default RecipeTable;