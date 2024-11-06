import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
    const { data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                padding={"10px"}
                spacing={3}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer>
                            <GameCardSkeleton key={skeleton} />
                        </GameCardContainer>
                    ))}
                {data.map((d) => (
                    <GameCardContainer>
                        <GameCard key={d.id} game={d} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
}
