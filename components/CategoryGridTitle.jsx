import {View, Text, Pressable} from 'react-native';

const CategryGridTitle = (props) => {
    return(
        <View>
            <Pressable>
                <View>
                    <Text>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategryGridTitle;