export const getStaticPaths = async () => {
    const res = await fetch('https://my-json-server.typicode.com/WhitestRabbit/aueb-ergasies/projects');
    const ergasies = await res.json();

    const paths = ergasies.map(ergasia => ({
        params: {id: ergasia.id.toString()}
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://my-json-server.typicode.com/WhitestRabbit/aueb-ergasies/projects/${context.params.id}`);
    const ergasia = await res.json();

    return {
        props: { ergasia }
    }
}

const Details = ({ergasia}) => {
    return (  
        <div>
            <h1>{ergasia.name}</h1>
            <h3>For the lesson {ergasia.lesson}</h3>
            <p>Due on {new Date(ergasia.deadline).toString()}</p>
            <p>It is a {ergasia.is_group_project ? ('group') : ('personal')} ergasia.</p>
        </div>
    );
}
 
export default Details;