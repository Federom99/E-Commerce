import Card from "../../components/Card"
import { Section } from "./styles"

export default function CardContainer(){

    const breeds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13]

    return (
        <Section>
            {breeds.map(breed => (
                <Card 
                    key={breed}
                />)
            )}
        </Section>
    )
}