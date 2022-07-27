import ListContainer from "../../containers/ListContainer";


export default function Favoritos ({theme}){
    document.title = "Pro Ropa - Favoritos";
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    return (
        <div>            
            <ListContainer theme={theme}/>
        </div>
    )
}