import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Card from '../shared/card';

export default function ReviewDetails({navigation}){
    const title=navigation.getParam('title');
    const body=navigation.getParam('body');
return(
    <View style={styles.container}>
        <Card>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </Card>
    </View>
)
}
const styles=StyleSheet.create({
    container:{
        padding:24
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    body:{
        fontSize:14,
        lineHeight:24,
    }
});