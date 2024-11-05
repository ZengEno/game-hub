import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
    const { games, error } = useGames();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ base:1, sm: 2, md: 3, lg: 4, xl: 5 }}
                padding={"10px"}
                spacing={10}
            >
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
}
