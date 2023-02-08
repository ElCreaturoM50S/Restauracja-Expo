import {
    View,
    Text,
    FlatList
} from 'react-native';
import {CATEGORIES} from "../data/dummy-data"
import { render } from 'react-dom';
import CategryGridTitle from '../components/CategoryGridTitle';

const renderCategories = (itemData) => {
    return <CategryGridTitle title={itemData.item.title}/>
}

export default function CategoriesScreen(){
    return (
        <View>
           <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategories}
           />
        </View>
    );
}