import React, { useState } from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
///we will do export by default down///

const Project1 = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  //We have taken datacopy for search and filter ///
  const [copydata, setCopyData] = useState([]);
  ///for update//
  const [indexnum, setIndexNum] = useState(null);
  //for condition we have taken this state///
  const [edit, setEdit] = useState(false);

  const handleDelete = (index) => {
    const result = data.filter((elem, i) => i !== index);
    setData(result);
  };
  const handleSearch = () => {
    const result = copydata.filter((item) =>
      item.toUpperCase().includes(search.toUpperCase())
    );
    setData(result);
  };

  //wec create function for multipel function///
  // const handleAdd=()=>{
  // setData([...data,text]);
  // setCopyData([...copydata,text]);
  // setText("")
  // }
  ///for if else condition for updating ///
  const handleAdd = () => {
    if (edit === true) {
      data.splice(indexnum, 1, text);
      setIndexNum(null);
      setEdit(false);
      setText("");
    } else {
      setData([...data, text]);
      setCopyData([...copydata, text]);
      setText("");
    }
  };

  const handleupdate = (item, index) => {
    setText(item);
    setIndexNum(index);
    setEdit(true);
  };

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12}>
        <h1>ToDo List</h1>
      </Grid>
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          label="Search Here....."
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={handleSearch}
          variant="contained"
          style={{ height: 55 }}
          fullWidth
        >
          Search
        </Button>
      </Grid>
      <Grid item xs={8}>
        <TextField
          ///For clearing text use Value first value////
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          label="Type Text Here"
        ></TextField>
      </Grid>
      <Grid item xs={2}>
        <Button
          //  onClick={()=>setData([...data,text]) ||setCopyData([...copydata,text])} ///this we have taken up side in function for multipel function///
          //for updating we have taken this///
          onClick={handleAdd}
          sx={{ height: 55 }}
          variant="contained"
          color={edit?"primary":"warning"}
          fullWidth
        >
          {edit ? "update" : "Add"}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={() => setText("")}
          sx={{ height: 55 }}
          variant="contained"
          color="error"
          fullWidth
        >
          Clear
        </Button>
      </Grid>
      {data.map((item, index) => {
        return (
          <Grid item xs={3}>
            <Card>
              <CardContent>
                {/* ///index always start with zero by starting it from 1 use + 1 after index///// */}
                <h2>{index + 1}</h2>
                <h1>{item}</h1>
                <Button
                  onClick={() => handleDelete(index)}
                  variant="contained"
                  color="error"
                  fullWidth
                >
                  Delete
                </Button>
                <br />
                <br />
                <Button
                  onClick={() => handleupdate(item, index)}
                  variant="contained"
                  color="warning"
                  fullWidth
                >
                  update
                </Button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
///we r exporting default//
export default Project1;
