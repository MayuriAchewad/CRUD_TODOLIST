import { Card, CardContent } from "@mui/material";
import Project1 from "./components/Project1";

function App() {
  return (
   <Card sx={{bgcolor:"#b3ecff",height:"100%"}}>
    <CardContent>
      <Project1/>
    </CardContent>
   </Card>
  );
}

export default App;
