import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase'; 
import { useRouter } from 'expo-router'; 
import { doc, getDoc } from 'firebase/firestore';

const Home = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const router = useRouter(); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    });

    return unsubscribe; 
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.replace('/auth/Sign-in'); 
    } catch (error) {
      console.error('Error signing out:', error);
      Alert.alert('Error', 'Failed to sign out. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome To HomeScreen 🤓</Text>
      {userData && (
        <View style={styles.userInfo}>
          <Text style={styles.infoText}>Username: {userData.username}</Text>
          <Text style={styles.infoText}>Email: {userData.email}</Text>
          <Text style={styles.infoText}>Contact Number: {userData.contactnumber}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', 
    textAlign: 'center',
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#555', 
    textAlign: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#010048',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
