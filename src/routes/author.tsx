import { Link, useMatch, useParams } from "react-router-dom";

export default function Author(){
    const {name, book} = useParams();
    const matchChapter = useMatch('/author/:name/:book/chapters');
    const matchCharacter = useMatch('/author/:name/:book/characters');

    return (
        <>
        <h2>{name}</h2>
        { name === "J.K.Rowling" ?
        <div>
            <ul>
                <li><Link to={`/author/${name}/HarryPotter01`}>HarryPotter01</Link></li>
                <li><Link to={`/author/${name}/HarryPotter02`}>HarryPotter02</Link></li>
            </ul>
        </div>
        :
        <div>
            <ul>
                <li><Link to={`/author/${name}/Lord of The Rings 01`}>Lord of The Rings1</Link></li>
                <li><Link to={`/author/${name}/Lord of The Rings 02`}>Lord of The Rings2</Link></li>
            </ul>
        </div>
        }
        {book !== undefined ? <div>
            <h2>{book}</h2>
            <Link to={`/author/${name}/${book}/chapters`}>Chapters</Link><br/>
            <Link to={`/author/${name}/${book}/characters`}>Characters</Link>
        </div> : null}
        {matchChapter ? <div>
            <h2>Chapters</h2>
            <ul>
                <li>Chapter01</li>
                <li>Chapter02</li>
                <li>Chapter03</li>
                <li>Chapter04</li>
                <li>Chapter05</li>
            </ul>
        </div> : null}
        {matchCharacter ? <div>
            <h2>Characters</h2>
            <ul>
                <li>good guy 01</li>
                <li>good guy 01</li>
                <li>bad guy 01</li>
                <li>bad guy 01</li>
                <li>시체 01</li>
            </ul>
        </div> : null}
        </>
    );
}