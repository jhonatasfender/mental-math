import React from 'react';
import { GestureResponderEvent, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import MathView from 'react-native-math-view';
import CalculationsScreen from './calculations-screen/calculations-screen';
import { operations } from './configs/operations';
import HeaderHome from './header/header';
import { HomePropsInterface, HomeStateInterface } from './interfaces/InterfacesHome';
import { styles } from "./style-home";

export default class Home extends React.Component<HomePropsInterface, HomeStateInterface> {

    public state: HomeStateInterface = {
        view: this.initPage()
    }

    public constructor(props: HomePropsInterface) {
        super(props)
    }

    private clickOperation() {
        const view = <CalculationsScreen />
        this.setState({ view })
    }

    private listOperations(e: GestureResponderEvent) {
        const view: JSX.Element[] = []
        for (const operation of operations) {
            const { key, math, config, style } = operation
            view.push(
                <TouchableOpacity key={key} style={{ ...styles.box, ...style }} onPress={e => this.clickOperation()}>
                    {/* <MathView math={math} /> */}
                </TouchableOpacity>
            )
        }
        this.setState({ view: <View style={styles.container}>{view}</View> })
    }

    private initPage() {
        return <>
            <HeaderHome />

            <ScrollView style={styles.scrollView}>
                <Text>teste</Text>
                <Text>teste</Text>
                <Text>teste</Text>
                <Text>teste</Text>
                <Text>teste</Text>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        style={styles.imgFooter}
                        source={require('../../assets/img/trofeu.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={e => this.listOperations(e)}>
                    <Image
                        style={[styles.imgFooter, styles.imgFooterPlay]}
                        source={require('../../assets/img/play.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={styles.imgFooter}
                        source={require('../../assets/img/config.png')}
                    />
                </TouchableOpacity>
            </View>
        </>
    }

    render() {
        return <>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <SafeAreaView style={styles.SafeAreaView}>
                    {this.state.view}
                </SafeAreaView>
            </LinearGradient>
        </>
    }
}
