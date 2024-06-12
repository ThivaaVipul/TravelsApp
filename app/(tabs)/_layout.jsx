import {View,Text} from 'react-native'
import {Tabs , Redirect} from 'expo-router';

import {icons} from '../../constants';

const TabIcon = ({icon,color,name,focused}) => {
    return(
        <View className = "items-center justify-center gap-2">
            <Image
                source = {icon}
                resizeMode = "contain"
                tintcolor = {color}
                className = "w-6 h-6"
            />
            <Text className = {`${focused ? 'font-semibold' : 'font-pregular'} text-xs`} style = {{color : color}}></Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel : false,
                    tabBarActiveTintColor : '#FFA001', /*have to change*/
                    tabBarInactiveTintColor : 'CDCDE0',
                    tabBarStyle : {
                        backgroundColor : '#161622',
                        borderTopWidth : 1,
                        borderTopColor : '#232533',
                        height : 84,
                    }
                }}
            >
                <Tabs.Screen
                    name = 'home'
                    options = {{
                        title : 'Home',
                        headerShown : false,
                        tabBarIcon : ({color,focused}) => (
                            <TabIcon
                                icon = {icons.home}
                                color = {color}
                                name = "Home"
                                focused = {focused}
                            />

                        )
                    }}
                />

                <Tabs.Screen
                    name = 'booking'
                    options = {{
                        title : 'Booking',
                        headerShown : false,
                        tabBarIcon : ({color,focused}) => (
                            <TabIcon
                                icon = {icons.booking}
                                color = {color}
                                name = "Booking"
                                focused = {focused}
                            />

                        )
                    }}
                />

                <Tabs.Screen /*tb have to change*/
                    name = 'tb'
                    options = {{
                        title : 'tb',
                        headerShown : false,
                        tabBarIcon : ({color,focused}) => (
                            <TabIcon
                                icon = {icons.home} /*have to change*/
                                color = {color}
                                name = "tb"
                                focused = {focused}
                            />

                        )
                    }}
                />

                <Tabs.Screen
                    name = 'profile'
                    options = {{
                        title : 'Profile',
                        headerShown : false,
                        tabBarIcon : ({color,focused}) => (
                            <TabIcon
                                icon = {icons.profile}
                                color = {color}
                                name = "Profile"
                                focused = {focused}
                            />

                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout