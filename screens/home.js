import React,{useState}from 'react';
import {View,Text,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import Card from '../shared/card';
import jobData from '../screens/jobs.json';

 export default function Home({navigation}){
    const [jobs,setjobs]=useState(jobData.jobs);
 
        return(
            <View>
                
                {jobs.map((item)=>(
                     
                        <TouchableOpacity key={item.key} onPress={()=>navigation.navigate('ReviewDetails',item)}>
                            <Card>
                                <View>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.description}>{item.description}</Text>
                                    <Text style={styles.location}>{item.location}</Text>
                                    <Text style={styles.experience}>{item.experience}</Text>
                                    <Text style={styles.salary}>{item.Salary}</Text>
                                    <Text style={styles.type}>{item.type}</Text>
                                    <Text style={styles.days}>{item.days}</Text>
                                    <Text style={styles.click}>{item.click}</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                
                ))}
                   
            </View>
        );
 }

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    textAlign:'center',
    fontWeight:'bold',
    color:'#FF0000'
  },
  type:{
    fontWeight:'bold',
    letterSpacing:2,
  },
  days:{
    fontWeight:'bold',
    marginBottom:50,
  },
  click:{
    textAlign:'center',
    fontSize:12,
    fontWeight:'bold'
  }
});
