import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Image, Text, Touchable, TouchableOpacity } from "react-native";
export default class GhostNavComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navBar: [
                { images: require('../assets/images/support.png'), change: 'OrdersClient', id: 1 },
                { images: require('../assets/images/Man.png'), change: 'Login', id: 2 },
                { images: require('../assets/images/homes1.png'), change: 'ListDarkPage', id: 3 },
                { images: require('../assets/images/push.png'), change: 'Login', id: 4 },
                { images: require('../assets/images/Profile.png'), change: 'Login', id: 5 }
            ],
            active: 2
        }
    }


    goToPages = (e) => {
        this.props.navigation.navigate(e)


    }



    render() {
        return (
            <View style={styles.navBar}>
                {
                    this.state.navBar.map((item, index) => {
                        return (
                            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.goToPages(item.change, this.setState({ active: index }))} key={index}>

                                <Image
                                    source={item.images}
                                    style={[item.change !== 'ListDarkPage' && this.state.active == index ? styles.navIconsActive : styles.navIcons, {
                                        width: 25,
                                        height: 25,
                                    }]

                                    }
                                />

                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        height: 90,
        shadowColor: "#00000",
        shadowOffset: {
            width: 0,
            height: -20,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 24,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    navIcons: {
        tintColor: 'white',
    },
    navIconsActive: {
        tintColor: '#C40B83',
    },

})