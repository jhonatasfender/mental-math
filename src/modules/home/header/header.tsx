import React, { Component } from "react";
import { Image, Text, View } from 'react-native';
import BackgroundTimer, { IntervalId } from 'react-native-background-timer';
import { ProgressCircle } from 'react-native-svg-charts';
import { HeaderHomePropsInterface, HeaderHomeStateInterface } from "../interfaces/InterfacesHeaderHome";
import { styles } from "../style-home";

export default class HeaderHome extends Component<HeaderHomePropsInterface, HeaderHomeStateInterface> {
    constructor(props: HeaderHomePropsInterface) {
        super(props);

        this.state = {
            totalPointsProgress: 200,
            totalPointsProgressUser: 60,
            progressTotal: 0,
            pointsTotal: 1200,
            pointsCount: 0
        }
    }

    private time(func: (id: IntervalId) => void) {
        const intervalProcessId = BackgroundTimer.setInterval(() => {
            func(intervalProcessId)
        }, 1);
    }

    componentDidMount() {
        this.time((intervalProcessId: IntervalId) => {
            const { progressTotal, totalPointsProgressUser } = this.state
            if (progressTotal >= totalPointsProgressUser) {
                BackgroundTimer.clearInterval(intervalProcessId);
                return
            }
            this.setState({ progressTotal: progressTotal + 2 })
        });

        this.time((intervalPointsId: IntervalId) => {
            const { pointsCount, pointsTotal } = this.state
            if (pointsCount >= pointsTotal) {
                BackgroundTimer.clearInterval(intervalPointsId);
                return
            }
            this.setState({ pointsCount: pointsCount + 20 })
        });
    }

    render() {
        return (
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={require('../../../assets/img/persona.jpg')}
                />
                <View style={styles.boxInfo}>
                    <View style={styles.boxProgress}>
                        <ProgressCircle
                            style={styles.barProgress}
                            progress={this.state.progressTotal * 100 / this.state.totalPointsProgress / 100}
                            strokeWidth={15}
                            progressColor={'rgb(69, 221, 253)'}
                        />
                        <Text style={styles.textProgress}>{this.state.progressTotal}/{this.state.totalPointsProgress}</Text>
                    </View>
                    <View style={styles.boxPontos}>
                        <Text style={styles.pontos}>{this.state.pointsCount}</Text>
                        <Image
                            style={styles.diamante}
                            source={require('../../../assets/img/diamante.png')}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
