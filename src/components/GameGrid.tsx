import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
    gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    return (
        <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            padding={"10px"}
            spacing={6}
        >
            {isLoading &&
                skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
            {data?.results.map((d) => (
                <GameCardContainer key={d.id}>
                    <GameCard game={d} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
}
