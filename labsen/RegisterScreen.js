import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RegisterScreen({ navigation, route }) {
    // const [name, setName] = useState('') // เวลาจะเพิ่มช่องกรอกอะไร ต้องเพิ่มตรงนี้
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [form, setForm] = useState({ // useState แบบรวม ตอนเรียกต้อง form.
        fullname: '',
        email: '',
        role: 'Programmer',
        username: '',
        password: '',
        confirmPassword: '',
        // phone: ''
    })

    const handleChange = (name, value) => { // ไว้อัพแดดค่า
        setForm(prev => ({
            ...prev, // ของเก่า
            [name]: value // object อะไร valueใหม่คืออะไร
        }))
    }

    const handleSubmit = () => { // เรียกแสดง Alert
        const { fullname, email, role, username, password, confirmPassword } = form
        if (!fullname || !email || !role || !username || !password || !confirmPassword) {
            Alert.alert("ERRoR", "กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("ERROR", "รหัสผ่านไม่ตรงกัน")
            return;
        }
        Alert.alert("Success", "ลงทะเบียนสำเร็จ", [{ 
            text: 'ตกลง', 
            onPress: () => navigation.navigate('List', { newUser: form }) }])
        // Alert.alert("ยืนยันข้อมูล", `ชื่อของคุณคือ ${form.fullname} \nอีเมลของคุณคือ ${form.email}`)
        // navigation.navigate('List', {
        //     users: form,
        // })
        // setForm({
        //     fullname: '',
        //     email: '',
        //     role: 'Programmer',
        //     username: '',
        //     password: '',
        //     confirmPassword: '',
        // })
    }
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>ลงทะเบียน</Text>

            <Text style={styles.label}>ชื่อ - นามสกุล:</Text>
            <TextInput
                style={styles.input}
                placeholder='กรุณากรอกชื่อ - นามสกุล...'
                value={form.fullname}
                onChangeText={(text) => handleChange('fullname', text)} // text คือ ข้อความใน textbox
            />
            {/* <TextInputStyle text="ชื่อ - นามสกุล:" placeholderText="กรุณากรอกชื่อ - นามสกุล..." fieldName="fullname" value={form.fullname} onChangeText={handleChange}/> */}
            
            <Text style={styles.label}>อีเมล:</Text>
            <TextInput
                style={styles.input}
                placeholder='กรุณากรอกอีเมล...'
                keyboardType='email-address'
                value={form.email}
                onChangeText={(text) => handleChange('email', text)}
            />
            {/* <TextInputStyle text="อีเมล:" placeholderText="กรุณากรอกอีเมล..." fieldName="email" value={form.email} onChangeText={handleChange}/> */}
            <Text style={styles.label}>ตำแหน่ง :</Text>
            <View style={styles.roleContainer}>

                <Picker
                    selectedValue={form.role}
                    onValueChange={(ItemValue) => handleChange('role', ItemValue)}
                    mode='dropdown' // Android only
                    style={{ height: 50, width: 200, color: '#333' }}
                >
                    <Picker.Item label='Programmer' value="Programmer" />
                    <Picker.Item label='Tester' value="Tester" />
                </Picker>

            </View>
            <Text style={styles.label}>ชื่อผู้ใช้:</Text>
            <TextInput
                style={styles.input}
                placeholder='กรุณากรอกอีเมล...'
                keyboardType='email-address'
                value={form.username}
                onChangeText={(text) => handleChange('username', text)}
            />
            {/* <TextInputStyle text="ชื่อผู้ใช้:" placeholderText="กรุณากรอกชื่อผู้ใช้..." fieldName="username" value={form.username} onChangeText={handleChange}/> */}

            <Text style={styles.label}>รหัสผ่าน:</Text>
            <TextInput
                style={styles.input}
                placeholder='กรุณากรอกรหัสผ่าน...'
                secureTextEntry={true} // ทำให้ตอนใส่รหัสผ่านเป็นจุด ไม่แสดงตัวอักษร
                value={form.password}
                onChangeText={(text) => handleChange('password', text)}
            />
            {/* <TextInputStyle
            text ="รหัสผ่าน:" 
            placeholderText= "กรุณากรอกรหัสผ่าน..." 
            fieldName= "password" 
            value={form.password} 
            onChangeText={handleChange}
            secureTextEntry={true}
            /> */}

            {/* แบบเก่า */}
            <Text style={styles.label}>ยืนยันรหัสผ่าน:</Text>
            <TextInput
                style={styles.input}
                placeholder='กรุณากรอกยืนยันรหัสผ่าน...'
                value={form.confirmPassword}
                secureTextEntry={true}
                onChangeText={(text) => handleChange('confirmPassword', text)} // text คือ ข้อความใน textbox
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            {/* <Text style={styles.results}>{JSON.stringify(form)}</Text> */}
        </View>
    );
}
const TextInputStyle = ({text, placeholderText, fieldName, value, onChangeText, secureTextEntry}) => {
    return (
        <View>
            <Text style={styles.label}>{text}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholderText}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={(text) => onChangeText(fieldName, text)} // text คือ ข้อความใน textbox
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'left',
        justifyContent: 'left',
        padding: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 28,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#2c2c2c',
        backgroundColor: '#fcffec',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        justifyContent: 'flex-start',
        width: 300,
        height: 45,
    },
    button: {
        backgroundColor: 'lightsalmon',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    results: {
        marginTop: 40,
        color: '#aaa',
        fontSize: 14,

        borderWidth: 2,
        borderColor: '#7a6bafff',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    roleContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#4a90e2'
    },
});
