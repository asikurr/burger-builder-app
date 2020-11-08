import React from 'react';
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    // let transformedIngredients = Object.keys(props.ingredients)
    // .map(igKey => {
    //         return [...Array(props.ingredients[igKey])].map(( _ , i) => {
    //             return <BurgerIngredient key={igKey + i} type={igKey} />;
    //         });
    //     })
    //     .reduce((arr, el) =>  arr.concat(el) , []);
    // console.log(transformedIngredients)
    let tranformedingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if(tranformedingredients.length < 1){
        tranformedingredients = <h6>Please add some ingredients.</h6>
    }
    console.log(tranformedingredients)
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
           {tranformedingredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
};

export default Burger;