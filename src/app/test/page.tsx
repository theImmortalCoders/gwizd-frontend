export default function test() {

    const names = ["name1","name2","name3","name3"]
    const noDuplicates = [...new Set(names)];

    return(
        <>
            {noDuplicates.map((name) => {
                return(
                    <div>{name}</div>
                )
            })}
        </>
    );
}