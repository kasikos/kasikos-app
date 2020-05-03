import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Navigation } from 'react-native-navigation';

export class Register {

    static route(name, App) {
        Navigation.registerComponent(name, () => gestureHandlerRootHOC(App));
    }

}

export class Route {

    static set(name) {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [{
                        component: { name }
                    }]
                }
            }
        });
    }

    static open(parent, name, data = null) {
        Navigation.push(parent, {
            component: {
                name,
                passProps: {
                    data
                },
                options: {
                    animations: {
                        push: {
                            content: {
                                enabled: "true",
                                waitForRender: true,
                                alpha: {
                                    from: 0,
                                    to: 1,
                                    duration: 300,
                                    startDelay: 0
                                },
                            },
                        },
                        pop: {
                            content: {
                                enabled: "true",
                                waitForRender: true,
                                alpha: {
                                    from: 1,
                                    to: 0,
                                    duration: 300,
                                    startDelay: 0
                                },
                            },
                        }
                    }
                },
            }
        });
    }

    static slide(parent, name, data = null) {
        Navigation.push(parent, {
            component: {
                name,
                passProps: {
                    data
                },
                options: {
                    animations: {
                        push: {
                            content: {
                                enabled: "true",
                                waitForRender: true,
                                x: {
                                    from: 0,
                                    to: 1000,
                                    duration: 300,
                                    startDelay: 0
                                },
                            },
                        },
                        pop: {
                            content: {
                                enabled: "true",
                                waitForRender: true,
                                x: {
                                    from: 1000,
                                    to: 0,
                                    duration: 300,
                                    startDelay: 0
                                },
                            },
                        }
                    }
                },
            }
        });
    }

    static back() {
        Navigation.pop();
    }

}