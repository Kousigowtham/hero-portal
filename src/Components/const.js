import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import { useHistory } from 'react-router-dom';

export var LOGINDETAILS=[{ "username" : "Admin",
"password" : "Admin@2021", 
"heroname" : "Admin-man"  }];


function PAGES(){
    const history=useHistory();
    return(
        [
            {
            'pagename' : 'Home',
            'icon': <HomeIcon/>,
             url : ()=>{history.push('/home')}
        },
        {
            'pagename' : 'Details',
            'icon': <ListIcon/>,
             url : ()=>{history.push('/Details')}
        },
        ]
    );
}

export  default PAGES;