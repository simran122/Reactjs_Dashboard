import { createTheme } from "@mui/material/styles";

const Theme = createTheme(
    {
        palette: {


            primary: {
                main: "#000",

                light: "#858585"

            },
            secondary: {
                main: "#F5F5F5"
            },

            info: {
                main: "#346BD4"
            },
        },
        text: {
            primary: 'rgba(0,0,0,1)',
        },
        typography: {
            fontFamily: 'Montserrat,Lato',
            h1: {
                fontSize: '4.5rem',
                fontWeight: 700,



            },
            h2: {
                fontSize: '2.25rem',
                fontWeight: 700,

            },
            h3: {
                fontSize: '1.5rem',
                fontWeight: 700,

            },
            h4: {
                fontSize: '1.125rem',
                fontWeight: 700,

            },
            h5: {
                fontSize: '1rem',

            },
            h6: {

                fontSize: '0.75rem',
                fontWeight: 400,
            },
            body1: {
                fontSize: '0.875rem',
                fontWeight: 700,


            },
            body2: {
                fontSize: '0.875rem',
                fontWeight: 400,


            }
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 700,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        }

    }
)


export default Theme