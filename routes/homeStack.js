import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";


const screens={
    Home:{
        screen:Home,
        navigationOptions:{
            title:'LINKEDIN',
            
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Job Details',
           // headerStyle:{backgroundColor:'#D3D3D3'}

           }
        }
    }


        //default styles for the no of pages in an app
const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{     
     headerTintColor:'#0077B5', 
            headerTitleStyle:{
                textAlign:"center",
                fontWeight:'bold',
            },
        headerStyle:{backgroundColor:'#D3D3D3',height:60}
    }
});                          //func to create newstacknav(all config=stack navigator)

export default createAppContainer(HomeStack);