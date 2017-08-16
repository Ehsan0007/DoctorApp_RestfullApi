import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text, Footer, Thumbnail, FooterTab, Badge } from 'native-base';
import { Image, DrawerLayoutAndroid, View, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HeaderComp from '../common/header'


class Dashboard extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <HeaderComp header="Dashboard" name="menu" />
                <Image source={require('../../Assets/mobile.jpg')} style={styles.pic} />
                <View style={styles.view}>

                    <CardItem style={styles.card1}>
                        <View onTouchStart={() => Actions.patientadd()}>
                            <Image source={require('../../Assets/user_add.png')} style={styles.image} />
                        </View>
                    </CardItem>


                    <CardItem style={styles.card2}>
                        <View onTouchStart={() => Actions.patientlist()}>
                            <Image source={require('../../Assets/patientdetail.png')} style={styles.image} />
                        </View>
                    </CardItem>

                    <CardItem style={styles.card3}>
                        <View onTouchStart={() => Actions.patientsearch()}>
                            <Image source={require('../../Assets/search.png')} style={styles.image} />
                        </View>
                    </CardItem>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 40, marginLeft: 10 }}>
                    <CardItem style={styles.seccard}><Text style={styles.patientcaption} onPress={() => Actions.patientadd()}>Patient Add</Text></CardItem>
                    <CardItem style={styles.seccard}><Text style={styles.patientcaption} onPress={() => Actions.patientlist()}>Patient List</Text></CardItem>
                    <CardItem style={styles.seccard}><Text style={styles.patientcaption} onPress={() => Actions.patientsearch()}>Search Patients</Text></CardItem>
                </View>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="apps" />
                            <Text>Patient</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="list" />
                            <Text>patient</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#2C3286',
    },
    pic: {
        width: '100%',
        height: 260
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 30
    },
    card1: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // cursor : 'pointer'
    },
    card2: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20
    },
    card3: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20
        , borderColor: '#2C3286'
    },
    seccard: {
        width: 80,
        height: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20,
        borderColor: '#2C3286',
        backgroundColor: '#2C3286',
        alignItems: 'center',
        justifyContent: 'center'
    },
    patientcaption: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center'
    },
    // cardParent: {
    //     flex: 1,
    //     width: 80,
    //     height: 140,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // borderTop : 'none'
    //     borderTopRightRadius: 50,
    //     borderColor: '#4D585C',
    //      backgroundColor: '#A8C29B'
    // },
    // cardParent1: {
    //     flex: 1,
    //     width: 80,
    //     height: 140,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // borderTop : 'none',
    //     marginLeft: 10,
    //     borderTopRightRadius: 50,
    //     backgroundColor: '#A8C29B'
    // },
    // cardParent2: {
    //     flex: 1,
    //     width: 80,
    //     height: 140,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // borderTop : 'none'
    //     marginLeft: 10,
    //     borderTopRightRadius: 50,
    //      backgroundColor: '#A8C29B'
    // },
    image: {
        width: 50,
        height: 50,
        // display : 'block'
    }
})

export default Dashboard;