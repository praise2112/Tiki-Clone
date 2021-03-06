import {fade, makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    title3: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            minWidth:"2em",
        }
    },
    // toolbar: {
    //   width: "100%"
    // },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },  
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '45%',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: "50%",
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionDesktop2: {
        display: 'none',

        [theme.breakpoints.up('md')]: {
            display: 'flex',
            fontSize: 15
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    tikiLogo: {
        width: 120,
        height: 50,
        marginLeft: "0.5em"
    },
    navText: {
        fontSize: "0.7em",
    },
    navTypo: {
        lineHeight: 0.4
    },
    iconNav: {
        marginLeft: "1%",
        marginRight: "0.2em"
    } ,
    iconNav2: {
        marginRight: "1em"
    },
    navText2:{
        marginLeft: "2em",
        // marginTop: "4em",
        // marginBottom: "4em",
        paddingLeft: "4.5em",
        paddingRight: "4.5em",
        paddingTop: "3%",
        paddingBottom: "0.3%",
        fontSize: "0.7em",
        border: "2px solid white",
        textAlign: "center",
        alignItems: "center"
    },
    title2:{
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        fontSize: "0.9em",
        // marginRight: "3em"
    },
    removeDefaultLink:{
        textDecoration: "none",
        color: "inherit !important" ,
    },
    productModal:{
        display: "block !important"
    },
    loginToolTip:{
        display: "flex !important",
        flexDirection: 'column',
        justifyContent: "space-between",
        position: "absolute",
        zIndex: 10,
        top: "4.4em",
        right: 0,
        bottom: 0,
        left: "70%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "0.5em"

    },
    customModal:{
        margin: 0,
        padding: 0,
        position: "absolute",
        top: "4.4em",
        right: 0,
        left: 0,
        bottom: 0,
        width: "98.5vw",
        height: "70vh",
        backgroundColor: "rgba(0, 0, 0, 0.15)"
    },
    customSubModal:{
        margin: 0,
        marginRight: "20vw",
        marginLeft: "20vw",
        padding: 0,
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: "60vw",
        height: "20vh",
        color: "gray",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "0.5em",
    }
}));

export default useStyles;
