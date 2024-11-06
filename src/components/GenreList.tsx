import useGenres from "../hooks/useGenres";

export default function GenreList() {
    const { data } = useGenres();

    return (
        <ul>
            {data.map((d) => (
                <li key={d.id}>{d.name}</li>
            ))}
        </ul>
    );
}
