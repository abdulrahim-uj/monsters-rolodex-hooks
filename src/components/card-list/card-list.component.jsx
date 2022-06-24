import Card from "../card/card.component";
import "./card-list.styles.css";

// const CardList = (props) => {
//     const { monsters } = props;
//     return (
//         <div className="card-list">
//             {monsters.map((monster) => {
//                 return <Card monster={monster} key={monster.id} />;
//             })}
//         </div>
//     );
// };

const CardList = ({monsters}) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return <Card monster={monster} key={monster.id} />;
            })}
        </div>
    );
};
// Both are same;
export default CardList;
