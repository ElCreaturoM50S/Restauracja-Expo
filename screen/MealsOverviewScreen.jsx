import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem'; 

export default function MealsOverviewScreen(props){
    console.log("Test")
    const catId = props.route.params.categoryId;
    console.log(props)

    console.log(catId)
    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    console.log(displayMeals)
    function renderMealItem(itemData){
        console.log("Test")
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        }
        console.log(mealItemProps)
        return <MealItem {...mealItemProps} />
    }

    return (
        <View>
            <FlatList data={displayMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}
                    />
        </View>
    )
}