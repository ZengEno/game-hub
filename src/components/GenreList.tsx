import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export default function GenreList() {
    const { data, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {data.map((d) => (
                <ListItem key={d.id} padding={"5px"}>
                    <HStack>
                        <Image
                            boxSize={"32px"}
                            borderRadius={8}
                            src={getCroppedImageUrl(d.image_background)}
                        />
                        <Text fontSize={"lg"}>{d.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}
