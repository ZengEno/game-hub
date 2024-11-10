import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
    const genre = useGenre(gameQuery.genreId);
    const platform = usePlatform(gameQuery.platformId);

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return (
        <Heading as="h1" marginY={3} fontSize={"5xl"}>
            {heading}
        </Heading>
    );
}
