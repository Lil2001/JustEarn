import React, { Component } from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    Text,
    ScrollView

} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import EyeIconComponent from "../../assets/images/EyeIcon";
import ArowPinkComponent from "../../assets/images/ArrowPink";
import NavigationComponent from "../NanvigationComponent";
import Svg, { Path, Defs, Stop, Line } from "react-native-svg"
import ArrowPinkRightComponent from "../../assets/images/ArrowPinkRight";

export default class OrdersClientComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                {
                    name: 'STECH',
                    price: 15,
                    text: 'Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут...',
                    views: 210,
                    time: 10,
                },
                {
                    name: 'Refectio',
                    price: 20,
                    text: 'Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут...',
                    views: 180,
                    time: 12,
                },
                {
                    name: 'Мой Гид',
                    price: 30,
                    text: 'Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут...',
                    views: 210,
                    time: 12,
                }
            ],
            slider: [
                { name: 'Приложения' },
                { name: 'Игры' },
                { name: 'Заведения' },
                { name: 'Приложения' },
                { name: 'Игры' },
                { name: 'Заведения' }
            ]
        }
    }

    works() {
        for (let i = 0; i < 10; i++) {
            document.write(``)
        }
    }

    goToCustomerPage = () => {
        this.props.navigation.navigate('OrdersClientFav')
    }


    render() {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#17171f'
                }}>
                <StatusBar animated={true} backgroundColor={'#17171F'} />
                <View style={styles.header}>
                    <View
                        style={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row'

                        }}
                    >
                        <TouchableOpacity>
                            <ArrowPinkRightComponent />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 25,
                            color: '#C40B83',
                            lineHeight: 28

                        }}>
                            Мои заказы
                        </Text>

                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}
                        >
                            <Svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Line x1="17.5" y1="6.5" x2="17.5" y2="28.5" stroke="#C40B83" stroke-width="3" stroke-linecap="round" />
                                <Line x1="28.5" y1="17.5" x2="6.5" y2="17.5" stroke="#C40B83" stroke-width="3" stroke-linecap="round" />
                            </Svg>
                        </TouchableOpacity>
                    </View>


                </View>
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 15
                    }}>

                    <View style={styles.buttonParent}>
                        <ScrollView horizontal={true} style={{ width: '100%', height: 50 }}>
                            {
                                this.state.slider.map((res, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={styles.button}>
                                            <Text style={{ color: 'black' }}>{res.name}</Text>
                                        </TouchableOpacity>
                                    )

                                })
                            }
                        </ScrollView>
                    </View>
                    <ScrollView style={{ marginTop: 12, }}>
                        <View style={{
                            width: '98%'
                        }}>
                            {
                                this.state.orders.map((item, index) => {
                                    return (
                                        <LinearGradient
                                            key={index}
                                            colors={['#C40B8366', '#52128066']}
                                            style={styles.workes}
                                            start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                                            <View
                                                style={{
                                                    width: '100%',
                                                    flex: 1,
                                                    justifyContent: 'space-between',
                                                    flexDirection: 'row',
                                                    alignItems: 'center'
                                                }}
                                            >

                                                <View
                                                    style={{
                                                        width: '100%',
                                                        flex: 1,
                                                        flexDirection: 'row',
                                                        alignItems: 'center'

                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            fontSize: 18,
                                                            color: '#FFFFFF',
                                                            fontWeight: 'bold',
                                                            lineHeight: 22
                                                        }}
                                                    >{item.name}</Text>
                                                    <View
                                                        style={{
                                                            width: '100%',
                                                            flex: 1,
                                                            flexDirection: 'row',
                                                            alignItems: 'center'

                                                        }}>
                                                        <EyeIconComponent
                                                            style={{
                                                                marginLeft: 15
                                                            }}
                                                        />
                                                        <Text
                                                            style={{
                                                                fontSize: 16,
                                                                color: '#FFFFFF',
                                                                lineHeight: 20,
                                                                marginLeft: 5
                                                            }}
                                                        >{item.views}</Text>
                                                    </View>


                                                </View>
                                                <View>
                                                    <Text
                                                        style={{
                                                            fontSize: 14,
                                                            color: '#FFFFFF',
                                                            lineHeight: 17,
                                                        }}
                                                    >{item.time} мин</Text>
                                                </View>

                                            </View>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        color: '#FFFFFF',
                                                        lineHeight: 17,
                                                        padding: 5,
                                                        textAlign: 'left'
                                                    }}
                                                >{item.text}</Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: '100%',
                                                    flex: 1,
                                                    justifyContent: 'space-between',
                                                    flexDirection: 'row',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        color: '#FFFFFF',
                                                        lineHeight: 17,
                                                        padding: 5,
                                                        fontWeight: 'bold',
                                                    }}
                                                >{item.price} руб.</Text>

                                                <TouchableOpacity
                                                    style={{
                                                        width: 122,
                                                        height: 38,
                                                        textAlign: 'center',

                                                    }}

                                                    onPress={() =>
                                                        this.goToCustomerPage()
                                                    }
                                                >
                                                    <LinearGradient
                                                        style={{
                                                            width: 122,
                                                            height: 38,
                                                            textAlign: 'center',
                                                            borderRadius: 10
                                                        }}

                                                        colors={['#C40B83', '#521280']}

                                                    >
                                                        <Text
                                                            style={{
                                                                fontSize: 15,
                                                                color: '#FFFFFF',
                                                                lineHeight: 17,
                                                                padding: 5,
                                                                textAlign: 'center',
                                                                top: 7
                                                            }}
                                                        >Подробнее</Text>
                                                    </LinearGradient>

                                                </TouchableOpacity>
                                            </View>
                                        </LinearGradient>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>


                </View>

                <View style={styles.footer} >
                    <NavigationComponent navigation={this.props.navigation} />
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#17171F',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        shadowColor: '#fff',
        elevation: 5,
        padding: 20
    },
    button: {
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#E5C2E0B2',
        height: 38,
        marginHorizontal: 6,
        borderRadius: 5
    },
    buttonParent: {
        height: 38,
        marginTop: 15,
        width: '100%',
        flexDirection: "row",
        backgroundColor: 'transparent'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '600',
    },
    workes: {
        width: '100%',
        height: 183,
        borderRadius: 10,
        marginBottom: 15,
        padding: 10

    },
    footer: {
        height: 83
    }
})