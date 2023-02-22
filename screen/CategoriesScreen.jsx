import {
    View,
    Text,
    FlatList
} from 'react-native';
import {CATEGORIES} from "../data/dummy-data"
import { render } from 'react-dom';
import CategryGridTitle from '../components/CategoryGridTitle';


export default function CategoriesScreen(props){
    const renderCategories = (itemData) => {
        return <CategryGridTitle title={itemData.item.title}
                                 color={itemData.item.color}
                                 whenPressExecute={() => 
                                    props.navigation.navigate("MealsOverview",
                                    {categoryId: itemData.item.id } )
                                    }   />
    }
    return (
           <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategories}
            numColumns={2}
           />
    );
}