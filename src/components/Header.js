import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justfyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 0,
        position: 'relative',
        elevation: 2,
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
