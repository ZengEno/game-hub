import {
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

export default function GenreList({ onSelectGenre, selectedGenreId }: Props) {
    const { data, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize={"2xl"} marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} padding={"5px"}>
                        <HStack>
                            <Image
                                boxSize={"32px"}
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace={"normal"}
                                textAlign="left"
                                onClick={() => onSelectGenre(genre)}
                                fontSize={"lg"}
                                variant="link"
                                fontWeight={
                                    genre.id === selectedGenreId
                                        ? "bold"
                                        : "normal"
                                }
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
