import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";



export default function GameGrid() {


    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    const fetchedGamesCount =
        data?.pages.reduce((total, page) => total + page.results.length, 0) ||
        0;

    return (
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}
        >
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                spacing={6}
                padding={"10px"}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    );
}
