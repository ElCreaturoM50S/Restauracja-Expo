import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';

export default function MealsOverviewScreen(props){

    const catId = props.route.params.categoryId;

    return (
        <View>
            <Text> {catId} </Text>
        </View>
    )
}