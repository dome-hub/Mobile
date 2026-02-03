import React, { useState ,useEffect} from "react";
import { View, StyleSheet, FlatList, Text , TouchableOpacity } from "react-native";

const ListScreen = ({navigation, route }) => {
    const [users, setUser] = useState([])

    useEffect(() =>{
        if (route.params?.newUser){
            const userExists = users.some(u => u.username === route.params.newUser.username)
            if (!userExists){
                setUser(prev => [route.params.newUser, ...prev]) //prev = ค่าก่อนหน้า ,เรียงจากใหม่ไปเก่า
            }
        }
    }, [route.params?.newUser])
    // useEffect(() => {
    //     if (route.params?.users) {
    //         setUser(prev => [...prev, route.params.users]);
    //     }
    // }, [route.params?.users]);
    
    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>ชื่อ: {item.fullname}</Text>
                        <Text style={styles.text}>อีเมล: {item.email}</Text>
                        <Text style={styles.text}>ตำแหน่ง: {item.role}</Text>
                    </View>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding : 10,
        alignItems: 'left',
        // justifyContent: 'center',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#dedcdc',
        padding: 10,
        marginBottom: 5,
        borderRadius: 5
    },
    text : {
        fontSize : 15 ,
        fontWeight : "bold"
    },
    

})
export default ListScreen
