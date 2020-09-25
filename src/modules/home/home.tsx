import React from 'react';
import { GestureResponderEvent, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalculationsScreen from './calculations-screen/calculations-screen';
import HeaderHome from './header/header';
import { HomePropsInterface, HomeStateInterface } from './interfaces/InterfacesHome';
import { styles } from "./style-home";

export default class Home extends React.Component<HomePropsInterface, HomeStateInterface> {

    public constructor(props: HomePropsInterface) {
        super(props)

        this.state = {
            view: this.initPage()
        }
    }

    private clickOperation() {
        const view = <CalculationsScreen />
        this.setState({ view })
    }

    private listOperations(e: GestureResponderEvent) {
        const view = <>
            <TouchableOpacity onPress={e => this.clickOperation()}>
                <Image
                    style={styles.imgFooter}
                    source={require('../../assets/img/trofeu.png')}
                />
            </TouchableOpacity>
        </>
        this.setState({ view })
    }

    private initPage() {
        return (
            <>
                <HeaderHome />

                <ScrollView style={styles.scrollView}>
                    <Text>teste</Text>
                    <Text>teste</Text>
                    <Text>teste</Text>
                    <Text>teste</Text>
                    <Text>teste</Text>
                </ScrollView>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={e => console.log(e)}>
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

                    <TouchableOpacity onPress={e => console.log(e)}>
                        <Image
                            style={styles.imgFooter}
                            source={require('../../assets/img/config.png')}
                        />
                    </TouchableOpacity>
                </View>
            </>
        );
    }

    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <SafeAreaView style={styles.SafeAreaView}>
                    {this.state.view}
                </SafeAreaView>
            </LinearGradient>
        )
    }
}
