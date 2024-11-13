import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Something";
import { user } from "../data/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
      
      <Tab.Screen
        name="Algo"
        component={Profile}
        initialParams={{ data: user }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="help-circle"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Algo",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
      

      </Tab.Navigator>
  );
};

export default TabRoutes;
