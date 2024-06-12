import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase'; 
import { useRouter } from 'expo-router'; 

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter(); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });

    return unsubscribe; 
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.replace('auth/Sign-in'); 
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome To HomeScreen 🤓</Text>
      {user && <Text style={styles.emailText}>Your email: {user.email}</Text>}
      <Button title="Logout" onPress={handleLogout} color="#FFA001" /> 
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
  emailText: {
    fontSize: 18,
    color: '#555', 
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Home;
