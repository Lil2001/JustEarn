import React, { Component } from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    Text,
    ScrollView,
    TextInput

} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import EyeIconComponent from "../../assets/images/EyeIcon";
import ArowPinkComponent from "../../assets/images/ArrowPink";
import ArrowPinkRightComponent from "../../assets/images/ArrowPinkRight";
import Svg, { Path } from "react-native-svg";
import ArrrowGreenIconComponent from "../../assets/images/ArrowGreenIcon";
import ArrowRedIconComponent from "../../assets/images/ArrowRedIcon";
import LineIconComponent from '../../assets/images/LineIcon'
import NavigationComponent from "../NanvigationComponent";


export default class EditingPageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
        }
    }

    goToOrdersClientFavPage = () => {
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
                            width: '90%',
                            alignItems: 'center',
                            flexDirection: 'row',
                            textAlign: 'center'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => { this.goToOrdersClientFavPage() }}
                        >
                            <ArrowPinkRightComponent />
                        </TouchableOpacity>

                        <Text style={styles.headerName}> Редактирование</Text>
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 15
                    }}>

                    <ScrollView style={{ marginTop: 12, marginBottom: 52 }}>

                        <View style={{ alignItems: "center", paddingTop: 40 }}>
                            <View style={styles.fieldset}>
                                <Text style={styles.legend}>Категория</Text>
                                <TextInput style={styles.input} />

                            </View>
                            <View style={styles.fieldset}>
                                <Text style={styles.legend}>Название</Text>
                                <TextInput style={styles.input} />
                            </View>



                            <View
                                style={{
                                    width: '100%',
                                    height: 152,
                                    borderColor: '#C40B83',
                                    borderWidth: 0.5,
                                    position: "relative",
                                    borderRadius: 10,
                                    marginBottom: 25,
                                    padding: 10
                                }}
                            >
                                <Text style={styles.legend}>Описание задачи</Text>
                                <Text style={{ color: 'white', fontSize: 12, lineHeight: 15, marginTop: 10 }}>
                                    Кстати,  сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы,
                                    разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.
                                    Приятно, граждане, наблюдать, как ключевые
                                </Text>
                            </View>



                            <View style={styles.fieldset}>
                                <Text style={styles.legend}>Сумма оплаты</Text>
                                <TextInput style={styles.input} password={true} secureTextEntry={true} au />
                            </View>



                            <View style={styles.fieldset}>
                                <Text style={styles.legend}>Количество</Text>
                                <TextInput style={styles.input} password={true} secureTextEntry={true} autoCorrect={false} />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                <Text style={{ fontSize: 16, lineHeight: 20, color: '#C40B83', fontWeight: '600' }}>Итоговая сумма</Text>
                                <Text style={{ fontSize: 16, lineHeight: 20, color: '#C40B83', fontWeight: '600' }}>150 руб.</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, lineHeight: 18, color: '#C40B83', fontWeight: '400' }}>
                                    Что нужно указать в отчёте о
                                    выполненном задании:
                                </Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    height: 152,
                                    borderColor: '#C40B83',
                                    borderWidth: 0.5,
                                    position: "relative",
                                    borderRadius: 10,
                                    marginBottom: 25,
                                    padding: 10
                                }}
                            >
                                <Text style={styles.legend}>Описание задачи</Text>
                                <Text style={{ color: 'white', fontSize: 12, lineHeight: 15, marginTop: 10 }}>
                                    Ваш ник, который вы указали при регистрации.
                                    и прикрепите скриншот просмотра.
                                </Text>
                            </View>

                            <TouchableOpacity style={{ marginTop: 20, }}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    colors={['#521280', '#C40B83']}
                                    style={styles.buttonGradient}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: 17,
                                    }}>Сохранить</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>


                </View>

                <View style={styles.footer}>
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
    headerName: {
        fontSize: 25,
        color: '#C40B83',
        lineHeight: 28,
        textAlign: 'center',
        marginLeft: 80
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
        width: '100%',
        height: 83,
        // backgroundColor:'#FFFFFF80',
        borderTopWidth: 1,
        borderTopColor: '#FFFFFF80',
        // shadowOffset: { width: 0, height: -4 },
        // shadowRadius: 2,
        // shadowColor: '#fff',
        // elevation: 2
    },

    input: {
        color: '#C40B83',
        width: '100%',
        height: '100%',
        padding: 10
    },
    fieldset: {
        width: '100%',
        height: 62,
        borderColor: '#C40B83',
        borderWidth: 0.5,
        position: "relative",
        borderRadius: 10,
        marginBottom: 25
    },
    legend: {
        position: "absolute",
        color: '#C40B83',
        top: -10,
        left: 10,
        backgroundColor: '#17171f'
    },

    buttonGradient: {
        borderRadius: 8,
        width: 265,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },

})