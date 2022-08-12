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
import ArrowPinkRightComponent from "../../assets/images/ArrowPinkRight";
import Svg, { Path } from "react-native-svg";
import ArrrowGreenIconComponent from "../../assets/images/ArrowGreenIcon";
import ArrowRedIconComponent from "../../assets/images/ArrowRedIcon";
import LineIconComponent from '../../assets/images/LineIcon'
import NavigationComponent from "../NanvigationComponent";

export default class CustomerPageComponent extends Component {
    constructor(props) {
        super(props)
    }

    goToListDarkPage = () => {
        this.props.navigation.navigate('ListDarkPage')
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
                            onPress={() => { this.goToListDarkPage() }}
                        >
                            <ArrowPinkRightComponent />
                        </TouchableOpacity>

                        <Text style={styles.headerName}> STECH </Text>
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 15
                    }}>

                    <ScrollView style={{ marginTop: 12, }}>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                padding: 15
                            }}
                        >
                            <View>
                                <Image
                                    source={require('../../assets/images/userimage.png')}
                                    style={{ width: 80, height: 80 }}
                                />
                            </View>
                            <View>
                                <Text style={styles.userName}>Клава Смирнова</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',

                                    }}
                                >
                                    <Text style={styles.reviewsText} >Отзывы фрилансеров</Text>
                                    <View style={styles.reviewsBox}>
                                        <Text
                                            style={{
                                                color: '#2FB600',
                                                fontSize: 14,
                                                fontWeight: '500'
                                            }}
                                        >+4</Text>
                                        <ArrrowGreenIconComponent />
                                    </View>
                                    <View style={styles.reviewsBox}>
                                        <Text
                                            style={{
                                                color: '#EC0A0A',
                                                fontSize: 14,
                                                fontWeight: '500'
                                            }}
                                        >-2</Text>
                                        <ArrowRedIconComponent />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.box}>
                            <View>
                                <Text style={styles.boxHeaderText}>Стоимость задачи</Text>
                                <View style={styles.boxDiv}>
                                    <Svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M5 5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3C7.53043 3 8.03914 3.21071 8.41421 3.58579C8.78929 3.96086 9 4.46957 9 5C9 5.53043 8.78929 6.03914 8.41421 6.41421C8.03914 6.78929 7.53043 7 7 7C6.46957 7 5.96086 6.78929 5.58579 6.41421C5.21071 6.03914 5 5.53043 5 5ZM7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5C6 5.26522 6.10536 5.51957 6.29289 5.70711C6.48043 5.89464 6.73478 6 7 6C7.26522 6 7.51957 5.89464 7.70711 5.70711C7.89464 5.51957 8 5.26522 8 5C8 4.73478 7.89464 4.48043 7.70711 4.29289C7.51957 4.10536 7.26522 4 7 4ZM1.5 0C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V8.5C0 8.89782 0.158035 9.27936 0.43934 9.56066C0.720644 9.84196 1.10218 10 1.5 10H12.5C12.8978 10 13.2794 9.84196 13.5607 9.56066C13.842 9.27936 14 8.89782 14 8.5V1.5C14 1.10218 13.842 0.720644 13.5607 0.43934C13.2794 0.158035 12.8978 0 12.5 0H1.5ZM1 1.5C1 1.36739 1.05268 1.24021 1.14645 1.14645C1.24021 1.05268 1.36739 1 1.5 1H3V2C3 2.26522 2.89464 2.51957 2.70711 2.70711C2.51957 2.89464 2.26522 3 2 3H1V1.5ZM1 4H2C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2V1H10V2C10 2.53043 10.2107 3.03914 10.5858 3.41421C10.9609 3.78929 11.4696 4 12 4H13V6H12C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8V9H4V8C4 7.46957 3.78929 6.96086 3.41421 6.58579C3.03914 6.21071 2.53043 6 2 6H1V4ZM11 1H12.5C12.6326 1 12.7598 1.05268 12.8536 1.14645C12.9473 1.24021 13 1.36739 13 1.5V3H12C11.7348 3 11.4804 2.89464 11.2929 2.70711C11.1054 2.51957 11 2.26522 11 2V1ZM13 7V8.5C13 8.63261 12.9473 8.75979 12.8536 8.85355C12.7598 8.94732 12.6326 9 12.5 9H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7H13ZM3 9H1.5C1.36739 9 1.24021 8.94732 1.14645 8.85355C1.05268 8.75979 1 8.63261 1 8.5V7H2C2.26522 7 2.51957 7.10536 2.70711 7.29289C2.89464 7.48043 3 7.73478 3 8V9ZM15 8.5C15 9.16304 14.7366 9.79893 14.2678 10.2678C13.7989 10.7366 13.163 11 12.5 11H2.085C2.18844 11.2926 2.38008 11.5459 2.63351 11.725C2.88694 11.9041 3.18967 12.0002 3.5 12H12.5C13.4283 12 14.3185 11.6313 14.9749 10.9749C15.6313 10.3185 16 9.42826 16 8.5V3.5C16.0002 3.18967 15.9041 2.88694 15.725 2.63351C15.5459 2.38008 15.2926 2.18844 15 2.085V8.5Z" fill="#C40B83" />
                                    </Svg>
                                    <Text style={styles.boxText}>
                                        15 руб.
                                    </Text>
                                </View>
                            </View>
                            <LineIconComponent />
                            <View>
                                <Text style={styles.boxHeaderText}>Просмотры</Text>
                                <View style={styles.boxDiv}>
                                    <Svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M8.99998 2.5C8.66877 2.50518 8.34002 2.5578 8.02373 2.65625C8.17003 2.91354 8.24793 3.20403 8.24998 3.5C8.24998 3.72981 8.20472 3.95738 8.11677 4.1697C8.02883 4.38202 7.89992 4.57493 7.73742 4.73744C7.57492 4.89994 7.382 5.02884 7.16968 5.11679C6.95736 5.20474 6.7298 5.25 6.49998 5.25C6.20402 5.24795 5.91352 5.17005 5.65623 5.02375C5.45324 5.72775 5.4769 6.47777 5.72386 7.16757C5.97081 7.85738 6.42855 8.452 7.03222 8.8672C7.6359 9.28241 8.35491 9.49715 9.08741 9.48101C9.81991 9.46487 10.5288 9.21867 11.1136 8.77728C11.6984 8.33589 12.1295 7.72169 12.3458 7.02168C12.5621 6.32167 12.5528 5.57133 12.319 4.87696C12.0852 4.18258 11.6388 3.57937 11.0431 3.15277C10.4475 2.72616 9.73266 2.49779 8.99998 2.5ZM17.8912 5.54375C16.1965 2.23719 12.8415 0 8.99998 0C5.15842 0 1.80248 2.23875 0.108733 5.54406C0.037246 5.68547 0 5.8417 0 6.00016C0 6.15861 0.037246 6.31484 0.108733 6.45625C1.80342 9.76281 5.15842 12 8.99998 12C12.8415 12 16.1975 9.76125 17.8912 6.45594C17.9627 6.31453 18 6.1583 18 5.99984C18 5.84139 17.9627 5.68516 17.8912 5.54375ZM8.99998 10.5C5.91717 10.5 3.09092 8.78125 1.56467 6C3.09092 3.21875 5.91686 1.5 8.99998 1.5C12.0831 1.5 14.909 3.21875 16.4353 6C14.9094 8.78125 12.0831 10.5 8.99998 10.5Z" fill="#C40B83" />
                                    </Svg>
                                    <Text style={styles.boxText}>210</Text>
                                </View>
                            </View>
                            <LineIconComponent />
                            <View>
                                <Text style={styles.boxHeaderText}>Опубликовано</Text>
                                <View style={styles.boxDiv}>
                                    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 8.9925 1.5ZM9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15Z" fill="#C40B83" />
                                        <Path d="M9.375 5.25H8.25V9.75L12.1875 12.1125L12.75 11.19L9.375 9.1875V5.25Z" fill="#C40B83" />
                                    </Svg>
                                    <Text style={styles.boxText}>15 мин.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.commentDiv}>
                            <Text style={styles.commentText}>Кстати,  сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Приятно, граждане, наблюдать, как ключевые особенности структуры проекта могут быть ассоциативно распределены по отраслям. Вот вам яркий пример современных тенденций — выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании распределения внутренних резервов и ресурсов. Имеется спорная точка зрения, гласящая примерно.</Text>
                        </View>
                        <View style={styles.commentDiv}>
                            <Text style={styles.category}>Категория:</Text>
                            <TouchableOpacity
                                style={styles.app}
                            >
                                <Text style={styles.appText}>Приложения</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            martginTop: 20
                        }}>
                            <TouchableOpacity>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    colors={['#521280', '#C40B83']}
                                    style={{
                                        borderRadius: 8,
                                        width: 265,
                                        height: 50,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        martginTop: 20
                                    }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: 17,
                                    }}>Откликнутся</Text>
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
        marginLeft: 130
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
    userName: {
        color: '#C40B83',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '600',
        marginLeft: 10
    },
    reviewsText: {
        color: '#FFFFFF',
        fontSize: 12,
        lineHeight: 20,
        fontWeight: '500',
        marginLeft: 10
    },
    reviewsBox: {
        width: 40,
        height: 20,
        backgroundColor: '#252525',
        borderRadius: 5,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    box: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    boxHeaderText: {
        color: '#C40B83',
        fontSize: 11,
        lineHeight: 12,
        textAlign: 'center',
        fontWeight: '500'
    },
    boxDiv: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxText: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '700',
        marginLeft: 5
    },
    commentDiv: {
        padding: 10,
        marginTop: 15
    },
    commentText: {
        color: '#FFFFFF',
        fontSize: 13,
        lineHeight: 16
    },
    category: {
        color: '#C40B83AB',
        fontSize: 13,
        lineHeight: 16,
        fontWeight: '500',
    },
    app: {
        width: 114,
        height: 29,
        backgroundColor: "#C40B83",
        borderRadius: 3,
        marginTop: 10,
        padding: 5
    },
    appText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '600',
    }
})