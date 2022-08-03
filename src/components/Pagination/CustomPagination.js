import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { Pagination, ThemeProvider } from '@mui/material'
import React from 'react'

const theme = unstable_createMuiStrictModeTheme();
// const theme = createTheme({
//         palette: {
//           type: "dark",
//         }
//       });


const CustomPagination = ({setPage,numOfPages=10}) => {
    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    };
  return (
    <div 
    style={{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        marginTop: 10,
    }}>
        <ThemeProvider theme={theme}>
        <Pagination
        count={numOfPages}
        onChange={(e)=>handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        color='primary'/>
        </ThemeProvider>
    </div>
  )
}

export default CustomPagination